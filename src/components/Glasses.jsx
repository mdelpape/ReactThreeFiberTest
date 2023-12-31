/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 public/models/glasses.glb --transform
Files: public/models/glasses.glb [1.3MB] > glasses-transformed.glb [130.39KB] (90%)
*/
import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Glasses(props) {
  const { nodes, materials } = useGLTF('./glasses-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Glasses0004001.geometry} material={
        new THREE.MeshPhysicalMaterial({
          color: 0x000000,
          metalness: 0.5,
          roughness: 0.5,
          clearcoat: 1,
          clearcoatRoughness: 0.5,
          reflectivity: 1,
          transmission: 0.5,
          opacity: 0.5,
          transparent: true,
          side: THREE.DoubleSide,
          depthWrite: false,
          depthTest: false,
        })
      } position={[0, 1.803, 0.164]} />
    </group>
  )
}

useGLTF.preload('./glasses-transformed.glb')
