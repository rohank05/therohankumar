'use client'

import { useEffect, useMemo, useRef, useState, type MutableRefObject, type ReactNode } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree, type ThreeEvent } from '@react-three/fiber'
import { Edges, Html } from '@react-three/drei'
import {
  CORRIDOR_HALF,
  DEPTS,
  INK,
  ROOM,
  deptById,
  onInk,
  routeTo,
  standAt,
  type Dept,
  type DeptId,
} from '@/lib/office'
import { riso, setRisoDpr } from './riso'

export type Insets = { l: number; r: number; t: number; b: number }

type Props = {
  active: DeptId
  open: DeptId | null
  reduced: boolean
  tall: boolean
  insets: MutableRefObject<Insets>
  onArrive: (id: DeptId) => void
  onPick: (id: DeptId) => void
}

export default function Scene(props: Props) {
  return (
    <Canvas
      className="office-canvas"
      shadows
      dpr={[1, 2]}
      flat
      gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
      camera={{ fov: 30, near: 0.5, far: 200, position: [0, 20, 20] }}
      onCreated={({ gl }) => setRisoDpr(gl.getPixelRatio())}
    >
      {/* physical lights divide by π; scale so a lit face prints as flat ink */}
      <ambientLight intensity={0.62 * Math.PI} />
      <directionalLight
        position={[-7, 14, 9]}
        intensity={0.95 * Math.PI}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-left={-14}
        shadow-camera-right={14}
        shadow-camera-top={12}
        shadow-camera-bottom={-12}
        shadow-bias={-0.0004}
      />
      <Floor />
      <Route />
      {DEPTS.map((d) => (
        <Room key={d.id} d={d} lit={props.active === d.id} tall={props.tall} onPick={props.onPick} />
      ))}
      <Rohan {...props} />
      <CameraRig {...props} />
    </Canvas>
  )
}

/* ── Primitives ─────────────────────────────────────────────────────────── */

type BlockProps = {
  size: [number, number, number]
  at: [number, number, number]
  color: string
  over?: string
  edges?: boolean
  rot?: number
}

// A box that sits on y = at[1] (its base), inked and keylined slightly out of register
function Block({ size, at, color, over, edges, rot = 0 }: BlockProps) {
  return (
    <mesh
      position={[at[0], at[1] + size[1] / 2, at[2]]}
      rotation={[0, rot, 0]}
      material={riso(color, over)}
      castShadow
      receiveShadow
    >
      <boxGeometry args={size} />
      {edges && <Edges color={INK.ink} threshold={20} position={[0.07, 0.03, 0.06]} />}
    </mesh>
  )
}

function Cyl({
  r,
  h,
  at,
  color,
  seg = 20,
}: {
  r: number
  h: number
  at: [number, number, number]
  color: string
  seg?: number
}) {
  return (
    <mesh position={[at[0], at[1] + h / 2, at[2]]} material={riso(color)} castShadow receiveShadow>
      <cylinderGeometry args={[r, r, h, seg]} />
    </mesh>
  )
}

/* ── The floor plate and the printed route ─────────────────────────────── */

const PLATE = { w: 19.8, d: 14.4 }

function Floor() {
  return (
    <group>
      <Block size={[PLATE.w, 0.5, PLATE.d]} at={[0, -0.5, 0]} color={INK.paper} edges />
      {/* corridor: bare stock */}
      <Block size={[PLATE.w - 0.6, 0.02, CORRIDOR_HALF * 2]} at={[0, 0, 0]} color={INK.paper} />
    </group>
  )
}

function Route() {
  // One continuous route: out along the far rooms, back along the near ones
  const dashes = useMemo(() => {
    const out: { x: number; z: number; w: number }[] = []
    for (const z of [-0.38, 0.38]) {
      for (let x = -6.2; x < 6.2; x += 0.62) out.push({ x: x + 0.18, z, w: 0.36 })
    }
    return out
  }, [])
  return (
    <group>
      {dashes.map((d, i) => (
        <Block key={i} size={[d.w, 0.025, 0.09]} at={[d.x, 0.02, d.z]} color={INK.ink} />
      ))}
      {/* the turn at the far end of the corridor */}
      <Block size={[0.09, 0.025, 0.85]} at={[6.32, 0.02, 0]} color={INK.ink} />
      {DEPTS.map((d) => (
        <Cyl key={d.id} r={0.2} h={0.04} at={[d.at[0], 0.02, d.side * 0.38]} color={d.ink} />
      ))}
    </group>
  )
}

/* ── A room: inked floor, walls, a door to the corridor, its props ─────── */

function Room({ d, lit, tall, onPick }: { d: Dept; lit: boolean; tall: boolean; onPick: (id: DeptId) => void }) {
  const [hover, setHover] = useState(false)
  const [x, z] = d.at
  const s = d.side
  const outer = z + s * (ROOM.d / 2) // wall away from the corridor
  const inner = z - s * (ROOM.d / 2) // corridor wall
  const door = 1.5

  const pick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    onPick(d.id)
  }

  useEffect(() => {
    if (!hover) return
    document.body.style.cursor = 'pointer'
    return () => {
      document.body.style.cursor = ''
    }
  }, [hover])

  return (
    <group>
      <mesh
        position={[x, 0.04, z]}
        material={riso(d.ink)}
        receiveShadow
        onClick={pick}
        onPointerOver={(e) => {
          e.stopPropagation()
          setHover(true)
        }}
        onPointerOut={() => setHover(false)}
      >
        <boxGeometry args={[ROOM.w - 0.12, 0.06, ROOM.d - 0.12]} />
      </mesh>

      {/* selected: a fluorescent pink frame overprinted on the room */}
      {lit && (
        <group>
          <Block size={[ROOM.w - 0.3, 0.03, 0.16]} at={[x, 0.07, z - ROOM.d / 2 + 0.25]} color={INK.pink} />
          <Block size={[ROOM.w - 0.3, 0.03, 0.16]} at={[x, 0.07, z + ROOM.d / 2 - 0.25]} color={INK.pink} />
          <Block size={[0.16, 0.03, ROOM.d - 0.66]} at={[x - ROOM.w / 2 + 0.25, 0.07, z]} color={INK.pink} />
          <Block size={[0.16, 0.03, ROOM.d - 0.66]} at={[x + ROOM.w / 2 - 0.25, 0.07, z]} color={INK.pink} />
        </group>
      )}

      {/* far rooms get a tall back wall; near rooms are cut away so the camera sees in */}
      {s < 0 ? (
        <Block size={[ROOM.w + 0.2, 1.9, 0.2]} at={[x, 0, outer]} color={INK.paper} edges />
      ) : (
        <Block size={[ROOM.w + 0.2, 0.18, 0.2]} at={[x, 0, outer]} color={INK.paper} edges />
      )}
      {/* side walls step down toward the camera */}
      {[-1, 1].map((k) => (
        <Block
          key={k}
          size={[0.2, s < 0 ? 1.1 : 0.55, ROOM.d]}
          at={[x + k * (ROOM.w / 2 + 0.1), 0, z]}
          color={INK.paper}
          edges
        />
      ))}
      {/* corridor wall with a door gap */}
      {[-1, 1].map((k) => (
        <Block
          key={k}
          size={[(ROOM.w - door) / 2 + 0.1, 0.42, 0.18]}
          at={[x + k * ((ROOM.w - door) / 4 + door / 2), 0, inner]}
          color={d.ink}
          edges
        />
      ))}

      <Props d={d} />

      <Html
        // the tag reads rightward, so on the turned (tall) camera far rooms hang theirs off the corridor side
        position={
          tall
            ? // the tag hangs above its anchor, so start it far enough in to stay inside its own room
              [x - ROOM.w / 2 + 2.1, 0.6, s < 0 ? inner + s * 0.3 : outer - s * 0.3]
            : [x - ROOM.w / 2 + 0.5, s < 0 ? 2.1 : 0.9, outer - s * 0.1]
        }
        zIndexRange={[20, 0]}
        className="room-tag-anchor"
      >
        <button
          type="button"
          tabIndex={-1}
          aria-hidden="true"
          className={`room-tag${lit ? ' is-lit' : ''}${hover ? ' is-hover' : ''}`}
          style={{ ['--tag' as string]: d.ink, ['--tag-on' as string]: onInk(d.ink) }}
          onClick={() => onPick(d.id)}
          onPointerEnter={() => setHover(true)}
          onPointerLeave={() => setHover(false)}
        >
          <span className="room-tag-name">{d.name}</span>
          <span className="room-tag-datum">{d.datum}</span>
        </button>
      </Html>
    </group>
  )
}

/* ── Furniture, one kit per department ─────────────────────────────────── */

function Props({ d }: { d: Dept }) {
  const [x, z] = d.at
  const s = d.side
  const back = z + s * (ROOM.d / 2 - 0.9) // a row against the outer wall
  switch (d.id) {
    case 'reception':
      return (
        <group>
          {/* the counter */}
          <Block size={[2.8, 0.85, 0.7]} at={[x + 0.4, 0.07, back + 0.7]} color={INK.paper} edges />
          <Block size={[2.9, 0.08, 0.8]} at={[x + 0.4, 0.92, back + 0.7]} color={INK.ink} />
          <Block size={[0.5, 0.34, 0.05]} at={[x + 1.1, 1.0, back + 0.55]} color={INK.ink} rot={-0.2} />
          {/* RK sign on the back wall */}
          <Cyl r={0.55} h={0.08} at={[x + 0.4, 1.1, z + s * (ROOM.d / 2) + 0.15]} color={INK.blue} />
          {/* sofa */}
          <Block size={[1.6, 0.4, 0.7]} at={[x - 1.6, 0.07, z + 0.9]} color={INK.aqua} edges />
          <Block size={[1.6, 0.4, 0.2]} at={[x - 1.6, 0.47, z + 1.15]} color={INK.aqua} />
          <Plant at={[x - 2.3, back + 0.3]} />
        </group>
      )
    case 'product':
      return (
        <group>
          {[-1.7, 0, 1.7].flatMap((dx) =>
            [-0.2, 1.3].map((dz) => (
              <group key={`${dx}${dz}`}>
                <Block size={[1.3, 0.06, 0.7]} at={[x + dx, 0.62, back + dz]} color={INK.paper} edges />
                <Block size={[0.08, 0.55, 0.6]} at={[x + dx - 0.58, 0.07, back + dz]} color={INK.ink} />
                <Block size={[0.08, 0.55, 0.6]} at={[x + dx + 0.58, 0.07, back + dz]} color={INK.ink} />
                <Block size={[0.7, 0.45, 0.06]} at={[x + dx, 0.75, back + dz - 0.18]} color={INK.ink} />
                <Block size={[0.6, 0.35, 0.02]} at={[x + dx, 0.8, back + dz - 0.14]} color={INK.aqua} />
                <Cyl r={0.2} h={0.42} at={[x + dx, 0.07, back + dz + 0.6]} color={INK.yellow} />
              </group>
            )),
          )}
        </group>
      )
    case 'hr':
      return (
        <group>
          {[-1.9, -1.0].map((dx) => (
            <group key={dx}>
              <Block size={[0.8, 1.5, 0.7]} at={[x + dx, 0.07, back]} color={INK.orange} edges />
              {[0.35, 0.7, 1.05].map((h) => (
                <Block key={h} size={[0.3, 0.05, 0.02]} at={[x + dx, 0.07 + h, back + 0.36]} color={INK.ink} />
              ))}
            </group>
          ))}
          <Block size={[1.8, 0.7, 0.8]} at={[x + 1.0, 0.07, back + 1.1]} color={INK.paper} edges />
          {[0, 0.1, 0.2].map((h, i) => (
            <Block
              key={h}
              size={[0.5, 0.08, 0.36]}
              at={[x + 0.6 + i * 0.05, 0.77 + h, back + 1.1]}
              color={i === 1 ? INK.yellow : INK.paper}
              rot={i * 0.2}
            />
          ))}
          <Cyl r={0.24} h={0.9} at={[x + 2.2, 0.07, back]} color={INK.paper} />
          <Cyl r={0.2} h={0.4} at={[x + 2.2, 0.97, back]} color={INK.aqua} />
        </group>
      )
    case 'lab':
      return (
        <group>
          {[-1.9, -0.9, 0.1, 1.1].map((dx, i) => (
            <Rack key={dx} at={[x + dx, back - 0.2]} phase={i} />
          ))}
          <Block size={[2.2, 0.75, 0.8]} at={[x + 0.4, 0.07, z - 0.9]} color={INK.paper} edges />
          <Cyl r={0.12} h={0.35} at={[x - 0.2, 0.82, z - 0.9]} color={INK.yellow} />
          <Cyl r={0.12} h={0.25} at={[x + 0.2, 0.82, z - 0.9]} color={INK.aqua} />
          <Block size={[0.6, 0.04, 0.45]} at={[x + 0.95, 0.82, z - 0.9]} color={INK.ink} />
        </group>
      )
    case 'training':
      return (
        <group>
          {/* whiteboard facing the seats */}
          <Block size={[2.6, 1.3, 0.08]} at={[x - 0.2, 0.55, z - 1.6]} color={INK.paper} edges />
          <Block size={[2.7, 0.08, 0.2]} at={[x - 0.2, 0.5, z - 1.55]} color={INK.purple} />
          <Block size={[0.06, 0.55, 0.06]} at={[x - 1.4, 0.07, z - 1.6]} color={INK.ink} />
          <Block size={[0.06, 0.55, 0.06]} at={[x + 1.0, 0.07, z - 1.6]} color={INK.ink} />
          <Block size={[1.2, 0.05, 0.02]} at={[x - 0.5, 1.4, z - 1.55]} color={INK.blue} />
          <Block size={[0.8, 0.05, 0.02]} at={[x - 0.7, 1.2, z - 1.55]} color={INK.orange} />
          {[-1.5, -0.4, 0.7].flatMap((dx) =>
            [0.2, 1.3].map((dz) => (
              <group key={`${dx}${dz}`}>
                <Block size={[0.55, 0.42, 0.5]} at={[x + dx, 0.07, z + dz]} color={INK.purple} edges />
                <Block size={[0.55, 0.4, 0.1]} at={[x + dx, 0.49, z + dz + 0.2]} color={INK.purple} />
              </group>
            )),
          )}
          <Block size={[0.6, 1.0, 0.5]} at={[x + 2.0, 0.07, z - 1.2]} color={INK.yellow} edges />
        </group>
      )
    case 'mail':
      return (
        <group>
          {/* pigeonholes */}
          <Block size={[2.4, 1.3, 0.5]} at={[x - 1.0, 0.07, z - 1.4]} color={INK.teal} edges />
          {[0, 1, 2, 3].flatMap((c) =>
            [0, 1, 2].map((r) => (
              <Block
                key={`${c}${r}`}
                size={[0.46, 0.3, 0.02]}
                at={[x - 1.85 + c * 0.57, 0.22 + r * 0.4, z - 1.14]}
                color={(c + r) % 3 === 0 ? INK.paper : INK.ink}
              />
            )),
          )}
          {/* parcels */}
          <Block size={[0.7, 0.5, 0.6]} at={[x + 1.3, 0.07, z + 0.2]} color={INK.orange} edges rot={0.3} />
          <Block size={[0.5, 0.35, 0.45]} at={[x + 1.4, 0.57, z + 0.2]} color={INK.paper} edges rot={-0.2} />
          <Block size={[0.6, 0.4, 0.5]} at={[x + 2.1, 0.07, z + 1.0]} color={INK.yellow} edges rot={0.6} />
          {/* the post box */}
          <Cyl r={0.36} h={1.1} at={[x - 2.0, 0.07, z + 1.2]} color={INK.orange} />
          <Block size={[0.4, 0.06, 0.1]} at={[x - 2.0, 0.85, z + 1.55]} color={INK.ink} />
        </group>
      )
  }
}

function Plant({ at }: { at: [number, number] }) {
  return (
    <group>
      <Cyl r={0.26} h={0.45} at={[at[0], 0.07, at[1]]} color={INK.orange} />
      <mesh position={[at[0], 0.95, at[1]]} material={riso(INK.green)} castShadow>
        <icosahedronGeometry args={[0.48, 0]} />
      </mesh>
    </group>
  )
}

function Rack({ at, phase }: { at: [number, number]; phase: number }) {
  const leds = useRef<THREE.Group>(null)
  useFrame(({ clock }) => {
    const g = leds.current
    if (!g) return
    g.children.forEach((c, i) => {
      c.visible = Math.sin(clock.elapsedTime * (2 + i * 0.7) + phase * 1.9 + i) > -0.2
    })
  })
  return (
    <group>
      <Block size={[0.8, 1.7, 0.75]} at={[at[0], 0.07, at[1]]} color={INK.ink} edges />
      <group ref={leds}>
        {[0.3, 0.6, 0.9, 1.2, 1.5].map((h) => (
          <Block key={h} size={[0.5, 0.05, 0.02]} at={[at[0], 0.07 + h, at[1] + 0.38]} color={INK.yellow} />
        ))}
      </group>
    </group>
  )
}

/* ── Rohan: walks the route, faces where he goes ───────────────────────── */

const SPEED = 3.4

function Rohan({ active, reduced, tall, onArrive }: Props) {
  const root = useRef<THREE.Group>(null)
  const legs = useRef<(THREE.Mesh | null)[]>([])
  const arms = useRef<(THREE.Mesh | null)[]>([])
  const start = standAt(deptById('reception'))
  const state = useRef({
    pos: new THREE.Vector2(start[0], start[1]),
    path: [] as [number, number][],
    goal: null as DeptId | null,
    yaw: Math.PI,
    stride: 0,
  })

  useEffect(() => {
    const st = state.current
    const d = deptById(active)
    const [sx, sz] = standAt(d)
    if (st.pos.distanceTo(new THREE.Vector2(sx, sz)) < 0.05) {
      st.path = []
      onArrive(active)
      return
    }
    if (reduced) {
      st.pos.set(sx, sz)
      st.path = []
      onArrive(active)
      return
    }
    st.path = routeTo([st.pos.x, st.pos.y], d)
    st.goal = active
    // onArrive is stable for the life of the scene
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, reduced])

  useFrame((_, dt) => {
    const st = state.current
    const g = root.current
    if (!g) return
    const step = Math.min(dt, 0.05)
    let moving = false
    if (st.path.length) {
      moving = true
      const [tx, tz] = st.path[0]
      const dx = tx - st.pos.x
      const dz = tz - st.pos.y
      const dist = Math.hypot(dx, dz)
      const move = SPEED * step
      if (dist <= move) {
        st.pos.set(tx, tz)
        st.path.shift()
        if (!st.path.length && st.goal) {
          const id = st.goal
          st.goal = null
          onArrive(id)
        }
      } else {
        st.pos.x += (dx / dist) * move
        st.pos.y += (dz / dist) * move
      }
      const want = Math.atan2(dx, dz)
      let diff = want - st.yaw
      diff = Math.atan2(Math.sin(diff), Math.cos(diff))
      st.yaw += diff * Math.min(1, step * 14)
    } else {
      // at rest, turn to face the camera
      let diff = (tall ? Math.PI / 2 - 0.3 : 0.35) - st.yaw
      diff = Math.atan2(Math.sin(diff), Math.cos(diff))
      st.yaw += diff * Math.min(1, step * 5)
    }
    st.stride = moving ? st.stride + step * 11 : st.stride * 0.85
    const swing = Math.sin(st.stride) * (moving ? 0.6 : 0)
    g.position.set(st.pos.x, Math.abs(Math.sin(st.stride)) * (moving ? 0.08 : 0), st.pos.y)
    g.rotation.y = st.yaw
    if (legs.current[0]) legs.current[0].rotation.x = swing
    if (legs.current[1]) legs.current[1].rotation.x = -swing
    if (arms.current[0]) arms.current[0].rotation.x = -swing * 0.8
    if (arms.current[1]) arms.current[1].rotation.x = swing * 0.8
  })

  const pink = riso(INK.pink)
  const ink = riso(INK.ink)
  const skin = riso('#E9A27A', INK.pink)
  const paper = riso(INK.paper)

  return (
    <group ref={root} position={[start[0], 0, start[1]]}>
      {[-0.13, 0.13].map((x, i) => (
        <group key={x} position={[x, 0.62, 0]}>
          <mesh
            ref={(m) => {
              legs.current[i] = m
            }}
            position={[0, -0.31, 0]}
            material={ink}
            castShadow
          >
            <capsuleGeometry args={[0.1, 0.42, 4, 10]} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 1.08, 0]} material={pink} castShadow>
        <capsuleGeometry args={[0.3, 0.45, 6, 16]} />
      </mesh>
      {/* lanyard badge */}
      <mesh position={[0, 0.98, 0.29]} material={paper}>
        <boxGeometry args={[0.18, 0.22, 0.03]} />
      </mesh>
      {[-0.38, 0.38].map((x, i) => (
        <group key={x} position={[x, 1.32, 0]}>
          <mesh
            ref={(m) => {
              arms.current[i] = m
            }}
            position={[0, -0.25, 0]}
            material={pink}
            castShadow
          >
            <capsuleGeometry args={[0.08, 0.36, 4, 10]} />
          </mesh>
        </group>
      ))}
      <mesh position={[0, 1.78, 0]} material={skin} castShadow>
        <sphereGeometry args={[0.27, 20, 16]} />
      </mesh>
      {/* hair */}
      <mesh position={[0, 1.86, -0.03]} rotation={[-0.35, 0, 0]} material={ink} castShadow>
        <sphereGeometry args={[0.28, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2]} />
      </mesh>
      {/* glasses */}
      {[-0.1, 0.1].map((x) => (
        <mesh key={x} position={[x, 1.78, 0.25]} material={ink}>
          <torusGeometry args={[0.065, 0.018, 6, 16]} />
        </mesh>
      ))}
    </group>
  )
}

/* ── Camera: frames the floor in the space the UI leaves, glides to rooms ── */

function CameraRig({ active, open, tall, insets, reduced }: Props) {
  const { camera, size } = useThree()
  const look = useRef(new THREE.Vector3(0, 0, 0))
  const off = useRef({ x: 0, y: 0 })
  const pointer = useRef({ x: 0, y: 0 })
  const first = useRef(true)

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = e.clientX / window.innerWidth - 0.5
      pointer.current.y = e.clientY / window.innerHeight - 0.5
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [])

  useFrame((_, dt) => {
    const cam = camera as THREE.PerspectiveCamera
    const ins = insets.current
    const availW = Math.max(120, size.width - ins.l - ins.r)
    const availH = Math.max(120, size.height - ins.t - ins.b)
    const tanV = Math.tan(THREE.MathUtils.degToRad(cam.fov / 2))

    const focus = open ? deptById(open) : null
    const target = focus
      ? new THREE.Vector3(focus.at[0], 0.4, focus.at[1])
      : new THREE.Vector3(tall ? 0.6 : 0, 0, tall ? 0 : 0.6)
    // across-screen and up-screen extents of what must fit
    const ex = focus ? (tall ? ROOM.d + 1 : ROOM.w + 1.6) : tall ? PLATE.d + 0.6 : PLATE.w + 0.6
    const ey = focus ? 6.5 : tall ? PLATE.w * 0.92 : PLATE.d * 0.85 + 2.8
    const fitW = ex / 2 / (tanV * (availW / size.height))
    const fitH = ey / 2 / (tanV * (availH / size.height))
    const dist = Math.max(fitW, fitH) * (tall ? 1.08 : 1.06)

    const el = THREE.MathUtils.degToRad(tall ? 72 : 52)
    const p = reduced ? { x: 0, y: 0 } : pointer.current
    const dir = tall
      ? new THREE.Vector3(Math.cos(el), Math.sin(el), p.x * 0.06)
      : new THREE.Vector3(0.16 + p.x * 0.14, Math.sin(el) - p.y * 0.06, Math.cos(el))
    dir.normalize()
    const want = target.clone().addScaledVector(dir, dist)

    const k = first.current || reduced ? 1 : 1 - Math.exp(-dt * 2.6)
    first.current = false
    cam.position.lerp(want, k)
    look.current.lerp(target, k)
    cam.lookAt(look.current)

    // shift the projection centre into the free area between the UI panels
    const wantX = (ins.r - ins.l) / 2
    const wantY = (ins.b - ins.t) / 2
    off.current.x += (wantX - off.current.x) * k
    off.current.y += (wantY - off.current.y) * k
    cam.setViewOffset(size.width, size.height, off.current.x, off.current.y, size.width, size.height)
    cam.updateProjectionMatrix()
  })

  return null
}

export function SceneFallback({ children }: { children: ReactNode }) {
  return <div className="office-fallback">{children}</div>
}
