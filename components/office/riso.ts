import * as THREE from 'three'
import { INK } from '@/lib/office'

// Riso print shading: a lit face prints as flat ink; light falling off becomes
// halftone dots of a second ink overprinted (multiplied) on top, with paper
// speckle where the drum starved. Built on Lambert so real shadows still land.

const shared = {
  uCell: { value: 5.5 },
  uDpr: { value: 1 },
  uPaper: { value: new THREE.Color(INK.paper) },
}

export function setRisoDpr(dpr: number) {
  shared.uDpr.value = dpr
}

const cache = new Map<string, THREE.MeshLambertMaterial>()

export function riso(color: string, over: string = INK.blue): THREE.MeshLambertMaterial {
  const key = `${color}|${over}`
  const hit = cache.get(key)
  if (hit) return hit

  const m = new THREE.MeshLambertMaterial({ color })
  const uOver = { value: new THREE.Color(over) }
  m.onBeforeCompile = (s) => {
    s.uniforms.uCell = shared.uCell
    s.uniforms.uDpr = shared.uDpr
    s.uniforms.uPaper = shared.uPaper
    s.uniforms.uOver = uOver
    s.fragmentShader = s.fragmentShader
      .replace(
        'void main() {',
        /* glsl */ `
uniform float uCell;
uniform float uDpr;
uniform vec3 uPaper;
uniform vec3 uOver;
float risoLum(vec3 c) { return dot(c, vec3(0.2126, 0.7152, 0.0722)); }
float risoHash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
void main() {`,
      )
      .replace(
        '#include <opaque_fragment>',
        /* glsl */ `
float cell = uCell * uDpr;
vec2 q = mat2(0.7071, -0.7071, 0.7071, 0.7071) * gl_FragCoord.xy / cell;
float dist = length(fract(q) - 0.5);
float shade = clamp(risoLum(outgoingLight) / max(risoLum(diffuseColor.rgb), 1e-4), 0.0, 1.0);
float dark = 1.0 - smoothstep(0.42, 0.97, shade);
float r = sqrt(dark) * 0.66;
float aa = 1.2 / cell;
float dotMask = 1.0 - smoothstep(r - aa, r + aa, dist);
vec3 inked = mix(diffuseColor.rgb, diffuseColor.rgb * uOver, dotMask);
float speck = step(0.972, risoHash(floor(gl_FragCoord.xy / max(uDpr, 1.0))));
inked = mix(inked, uPaper, speck * 0.4);
gl_FragColor = vec4(inked, diffuseColor.a);`,
      )
  }
  m.customProgramCacheKey = () => 'riso'
  cache.set(key, m)
  return m
}
