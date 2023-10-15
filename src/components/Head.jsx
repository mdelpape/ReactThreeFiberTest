/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/free_head.gltf --transform
Files: public/models/free_head.gltf [1.37MB] > free_head-transformed.glb [37.04KB] (97%)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

export function Head(props) {
  const { nodes, materials } = useGLTF('/models/free_head-transformed.glb')

  materials.Head = new THREE.MeshPhongMaterial({
    color: 0xffffff,      // Set the base color to white
    specular: 0x11111,   // Set a subtle specular color
    shininess: 10000,        // Reduce the shininess for a smoother look
    reflectivity: 1.6,    // Increase the reflectivity for a glossy effect
    combine: THREE.MixOperation, // Mix the base color with the environment map
  });

  return (
    <group {...props} dispose={null}
      position={[0, 0, -9]}
      scale={[20, 20, 20]}
    >
      <mesh geometry={nodes.eye_low_L_eyeball_mesh003.geometry} material={
        materials.Head
      }
      position={[0, -1.6, 0]}
      />
    </group>
  )
}

useGLTF.preload('/free_head-transformed.glb')
