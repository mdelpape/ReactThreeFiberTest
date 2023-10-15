/* eslint-disable no-unused-vars */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, .5], fov: 60 }}
    >
      {/* <ScrollControls pages={10} damping={0.15} infinite={true}>
      </ScrollControls> */}

      <Experience />
    </Canvas>
  );
}

export default App;
