/* eslint-disable no-unused-vars */
import "./App.css";
import { Canvas } from "@react-three/fiber";
import { ScrollControls } from "@react-three/drei";
import { Experience } from "./components/Experience";

function App() {
  const isMobile = window.innerWidth < 768;
  return (
    <>
      <Canvas
        shadows={isMobile ? false : true}
        camera={{ position: [0, 0, .5], fov: 60 }}
      >
        <Experience />
      </Canvas>
      {/* <form className='form-container'>
        <div className="input-container">
          <input type="text" placeholder="Type something..." className="input" />
        </div>
        <btn className="btn">Submit</btn>
      </form> */}
    </>
  );
}

export default App;
