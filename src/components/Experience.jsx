/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useScroll, Stars } from "@react-three/drei";
import { CoffeeShop } from "./Coffee_shop";
import { Glasses } from "./Glasses";
import { GlassesRight } from "./GlassesRight";
import { GlassesLeft } from "./GlassesLeft";
import * as THREE from "three";
import { Overlay } from "./Overlay";
import { Head } from "./Head";

export const Experience = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const pointLightRef = useRef();
  const pointLightRef2 = useRef();
  const handleScroll = () => {
    console.log(window.scrollY)
    setScrollPosition(window.scrollY);
  };

  // const data = useScroll();

  // useFrame(() => {
  //   if (data) {
  //     const orbitRadius = 2; // Adjust this radius as needed
  //     const orbitSpeed = 25; // Adjust this speed as needed

  //     const x = orbitRadius * Math.sin(data.offset * orbitSpeed);
  //     const y = orbitRadius * Math.cos(data.offset * orbitSpeed);

  //     if (pointLightRef.current) {
  //       pointLightRef.current.position.set(x, y, 1);
  //     }
  //   }
  // });

  // useFrame(() => {
  //   if (data) {
  //     const orbitRadius = 2; // Adjust this radius as needed
  //     const orbitSpeed = 25; // Adjust this speed as needed

  //     const x = orbitRadius * Math.sin(data.offset * orbitSpeed);
  //     const y = orbitRadius * Math.cos(data.offset * orbitSpeed);

  //     if (pointLightRef2.current) {
  //       pointLightRef2.current.position.set(-x, -y, 1);
  //     }
  //   }
  // }
  // );

  const updateLightPosition = (e) => {
    // Calculate the normalized mouse coordinates
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    // Adjust the scale factor as needed to control the light's movement
    const scaleFactor = 2;

    // Apply the scale factor to the mouse coordinates
    const x = mouseX * scaleFactor;
    const y = mouseY * scaleFactor;

    // Set the light positions
    if (pointLightRef.current) {
      pointLightRef.current.position.set(x, y, .2);
    }
    if (pointLightRef2.current) {
      pointLightRef2.current.position.set(-x, -y, .2);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateLightPosition);
    return () => window.removeEventListener('mousemove', updateLightPosition);
  }
  );


  return (
    <>
      <pointLight position={[0, 0, 1]} intensity={0.01} ref={pointLightRef} color={
        new THREE.Color(0x57CCE6)
      }/>
      <ambientLight intensity={0.0} color={
        new THREE.Color(0xffffff)
      }/>
      {/* <pointLight position={[0, 0, 1]} intensity={0.01} ref={pointLightRef2} color={
        new THREE.Color(0x00ff00)
      } /> */}
      <Head />
      {/* <Stars/> */}
    </>
  );
};

