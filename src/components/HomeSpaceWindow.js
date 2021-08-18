import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SpaceWindowStar from "./SpaceWindowStar";
import SpaceWindowEarth from "./SpaceWindowEarth";
import SpaceWindowMoon from "./SpaceWindowMoon";
import SpaceWindowSun from "./SpaceWindowSun";
import SpaceWindowSkyBox from "./SpaceWindowSkyBox";

export default function HomeSpaceWindow() {
  const ram = navigator.deviceMemory;
  let lowTier = false;
  if (ram < 4 || ram == undefined) {
    lowTier = true;
  }
  const starRadius = 0.5;
  const starColor = 0xffffff;
  const starAmount = 200;
  const starForbiddenZone = 90;
  const starIntensity = 0.01;

  const posArr = [];
  for (let i = 0; i < starAmount; i++) {
    const [x, y, z] = Array(3)
      .fill()
      .map(() => THREE.MathUtils.randFloatSpread(200));
    if (
      Math.abs(x) < starForbiddenZone &&
      Math.abs(y) < starForbiddenZone &&
      Math.abs(z) < starForbiddenZone
    ) {
      i--;
      continue;
    } else {
      posArr.push([x, y, z]);
    }
  }
  return (
    <div className="h-screen w-screen z-0">
      <Canvas
        shadows
        colorManagement
        camera={{
          position: [0, 8, 15],
          rotation: [0, 0, 0],
          fov: 75,
          far: 2500,
        }}
      >
        <ambientLight color={0xffffff} intensity={0.03} />
        <Suspense fallback={null}>
          <SpaceWindowEarth position={[0, 0, 0]} radius={4} />
        </Suspense>
        <Suspense fallback={null}>
          <SpaceWindowMoon radius={1} />
        </Suspense>
        {/* Relative Sun Size: 436 */}
        <Suspense fallback={null}>
          <SpaceWindowSun position={[-1000, -200, -2000]} radius={100} />
        </Suspense>
        {!lowTier &&
          posArr.map((el, index) => {
            return (
              <SpaceWindowStar
                position={el}
                key={index}
                color={starColor}
                radius={starRadius}
                intensity={starIntensity}
              />
            );
          })}
        <SpaceWindowSkyBox />
        <OrbitControls />
        {/* <gridHelper /> */}
      </Canvas>
    </div>
  );
}

// const DisplayBox = (props) => {
//   const mesh = useRef(null);
//   useFrame(() => {
//     mesh.current.rotation.x = mesh.current.rotation.y += Math.random() * 0.01;
//   });

//   return (
//     <mesh castShadow position={[...props.position]} ref={mesh}>
//       <boxBufferGeometry attach="geometry" args={[2, 1, 1]} />
//       <meshStandardMaterial attach="material" color={props.color} />
//     </mesh>
//   );
// };

{
  /* <ambientLight intensity={0.3} />
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-shadowMapWidth={1024}
          shadow-mapSize-shadowMapHeight={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        /> */
}
{
  /* 
        <DisplayBox position={[0, 1, 0]} color="blue" />
        <DisplayBox position={[-1, -1, -2]} color="red" />
        <DisplayBox position={[2, 0, -1]} color="green" />
        <DisplayBox position={[-2, 2, -1]} color="yellow" /> */
}
