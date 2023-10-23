/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import { useRef, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, ScrollControls, useScroll, Stars } from "@react-three/drei";
import * as THREE from "three";
import { Overlay } from "./Overlay";
import { Head } from "./Head";
import { City } from "./City";

export const Experience = () => {
  const isMobile = window.innerWidth < 768;
  const [scrollPosition, setScrollPosition] = useState(0);
  const pointLightRef = useRef();
  const pointLightRef2 = useRef();
  const handleScroll = () => {
    console.log(window.scrollY)
    setScrollPosition(window.scrollY);
  };
  const updateLightPosition = (e) => {
    // Calculate the normalized mouse coordinates
    const mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    const mouseY = -(e.clientY / window.innerHeight) * 2 + 1;

    // Adjust the scale factor as needed to control the light's movement
    const scaleFactorx = 12;
    const scaleFactory = 6;

    // Apply the scale factor to the mouse coordinates
    const x = mouseX * scaleFactorx;
    const y = mouseY * scaleFactory;

    // Set the light positions
    if (pointLightRef.current) {
      pointLightRef.current.position.set(x, y, -5);
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateLightPosition);
    return () => window.removeEventListener('mousemove', updateLightPosition);
  }
  );

  useFrame(({ clock }) => {
    if (pointLightRef2.current) {
      // You can adjust the oscillation range and speed as needed
      const oscillationRange = 2;
      const oscillationSpeed = 1;
      const minimumIntensity = 1; // Set a minimum intensity value

      const intensity = oscillationRange * Math.sin(clock.elapsedTime * oscillationSpeed) + 5;
      pointLightRef2.current.intensity = intensity;
    }
  });


  return (
    <>
      {!isMobile && <pointLight position={[0, 0, -5]} intensity={700} ref={pointLightRef} color={
        new THREE.Color(0x57CCE6)
        // new THREE.Color(0x57CCE6)
      }
        castShadow={true}
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
        distance={100}

      />}
      <ambientLight intensity={0.5} />

      {isMobile && <pointLight position={[0, 0, -3]} intensity={20} ref={pointLightRef2} color={
        new THREE.Color(0xfffffff)
      } />}
      <City />
      <Head />
    </>
  );
};

