import { Suspense } from "react";
import { MathUtils } from "three";
import { Canvas } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
import SpaceWindowCamera from "./SpaceWindowCamera";
import SpaceWindowStar from "./SpaceWindowStar";
import SpaceWindowEarth from "./SpaceWindowEarth";
import SpaceWindowMoon from "./SpaceWindowMoon";
import SpaceWindowSun from "./SpaceWindowSun";
import SpaceWindowSkyBox from "./SpaceWindowSkyBox";

export default function HomeSpaceWindow() {
  // useFrame(() => {});

  const ram = navigator.deviceMemory;
  let lowTier = false;
  if (ram < 4 || ram === undefined) {
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
      .map(() => MathUtils.randFloatSpread(200));
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
    <div className="h-full w-full">
      <Canvas
        resize={{ scroll: false }} // quick fix for scroll issue
        colorManagement
      >
        <SpaceWindowCamera />
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
        {/* <OrbitControls /> */}
        {/* <gridHelper /> */}
      </Canvas>
    </div>
  );
}
