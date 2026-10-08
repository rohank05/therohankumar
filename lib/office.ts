// The office floor: six departments around one corridor, printed in Riso inks.
// Shared by the 3D scene (geometry, routes) and the DOM (directory, files).

export const INK = {
  blue: '#3255A4', // medium blue: the flood the floor floats on
  pink: '#FF48B0', // fluorescent pink: only what moves or is selected
  yellow: '#FFE800',
  aqua: '#5EC8E5',
  orange: '#FF6C2F',
  green: '#00A95C',
  purple: '#765BA7',
  teal: '#006D74', // deep teal: dark enough to carry paper text
  ink: '#1B1F3B',
  paper: '#F3F4F1',
} as const

export type DeptId = 'reception' | 'product' | 'hr' | 'lab' | 'training' | 'mail'

export interface Dept {
  id: DeptId
  name: string
  /** What the file holds, in the directory */
  holds: string
  /** One datum printed on the room's floor tag */
  datum: string
  ink: string
  /** Room centre on the floor plate (x, z) */
  at: [number, number]
  /** Which side of the corridor the room sits on: -1 far, 1 near */
  side: -1 | 1
}

// Route order: along the far row left to right, back along the near row right to left
export const DEPTS: Dept[] = [
  {
    id: 'reception',
    name: 'Reception',
    holds: 'Who I am',
    datum: 'Delhi · IST',
    ink: INK.yellow,
    at: [-6.2, -3.9],
    side: -1,
  },
  {
    id: 'product',
    name: 'Product Floor',
    holds: 'Six things I shipped',
    datum: '6 shipped',
    ink: INK.aqua,
    at: [0, -3.9],
    side: -1,
  },
  {
    id: 'hr',
    name: 'HR Records',
    holds: 'Where I’ve worked',
    datum: '2023 — now',
    ink: INK.orange,
    at: [6.2, -3.9],
    side: -1,
  },
  {
    id: 'lab',
    name: 'R&D Lab',
    holds: 'The stack I reach for',
    datum: '4 racks',
    ink: INK.green,
    at: [6.2, 3.9],
    side: 1,
  },
  {
    id: 'training',
    name: 'Training Room',
    holds: 'School & certificates',
    datum: '2019 — now',
    ink: INK.purple,
    at: [0, 3.9],
    side: 1,
  },
  { id: 'mail', name: 'Mailroom', holds: 'Email & resume', datum: 'Open', ink: INK.teal, at: [-6.2, 3.9], side: 1 },
]

const DARK_INKS: string[] = [INK.blue, INK.purple, INK.teal, INK.ink]

/** The text colour that reads on a given ink */
export const onInk = (ink: string) => (DARK_INKS.includes(ink) ? INK.paper : INK.ink)

export const deptById = (id: DeptId) => DEPTS.find((d) => d.id === id)!

export const ROOM = { w: 5.8, d: 5.2 }
export const CORRIDOR_HALF = 1.3 // corridor runs along x, |z| < 1.3

/** Where the character stands inside a room: just in from the door */
export function standAt(d: Dept): [number, number] {
  return [d.at[0], d.side * (CORRIDOR_HALF + 1.5)]
}

/** Walk from any point to a room: out of the current room, along the corridor, in through the door */
export function routeTo(from: [number, number], d: Dept): [number, number][] {
  const pts: [number, number][] = []
  const [x, z] = from
  if (Math.abs(z) > CORRIDOR_HALF) {
    // inside a room: leave through its own door first
    const room = DEPTS.find((r) => Math.abs(r.at[0] - x) < ROOM.w / 2 && Math.sign(z) === r.side)
    const doorX = room ? room.at[0] : x
    pts.push([doorX, Math.sign(z) * (CORRIDOR_HALF + 0.6)])
    pts.push([doorX, 0])
  } else {
    pts.push([x, 0])
  }
  pts.push([d.at[0], 0])
  pts.push([d.at[0], d.side * (CORRIDOR_HALF + 0.6)])
  pts.push(standAt(d))
  // drop zero-length legs
  return pts.filter((p, i) => {
    const prev = i === 0 ? from : pts[i - 1]
    return Math.hypot(p[0] - prev[0], p[1] - prev[1]) > 0.01
  })
}
