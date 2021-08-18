import React, { useRef, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import SpaceWindowStar from "./SpaceWindowStar";
import SpaceWindowEarth from "./SpaceWindowEarth";
import SpaceWindowMoon from "./SpaceWindowMoon";
import SpaceWindowSkyBox from "./SpaceWindowSkyBox";

const DisplayBox = (props) => {
  const mesh = useRef(null);
  useFrame(() => {
    mesh.current.rotation.x = mesh.current.rotation.y += Math.random() * 0.01;
  });

  // const [expand, setExpand] = useState(false);
  // let scaleProps = useSpring({
  //   scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  // });

  return (
    <mesh
      // onClick={() => setExpand(!expand)}
      // scale={scaleProps.scale}
      castShadow
      position={[...props.position]}
      ref={mesh}
    >
      <boxBufferGeometry attach="geometry" args={[2, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={props.color}
        // speed={1}
        // factor={1}
      />
    </mesh>
  );
};

export default function HomeSpaceWindow() {
  const starRadius = 0.5;
  const starColor = 0xffffff;
  const starAmount = 200;
  const starForbiddenZone = 50;

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
  console.log(posArr);
  return (
    <div className="h-screen w-screen z-0">
      <Canvas
        shadows
        camera={{ position: [0, 8, 15], rotation: [0, 0, 0], fov: 75 }}
      >
        <Suspense fallback={null}>
          <SpaceWindowEarth position={[0, 0, 0]} radius={4} />
        </Suspense>
        <Suspense fallback={null}>
          <SpaceWindowMoon radius={1} />
        </Suspense>
        {posArr.map((el, index) => {
          return (
            <SpaceWindowStar
              position={el}
              key={index}
              color={starColor}
              radius={starRadius}
            />
          );
        })}
        <SpaceWindowSkyBox />
        <OrbitControls />
        <gridHelper />
      </Canvas>
    </div>
  );
}

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
