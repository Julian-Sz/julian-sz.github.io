import React, { useRef } from "react";

export default function SpaceWindowStar(props) {
  const mesh = useRef(null);
  // useFrame(() => {
  //   mesh.current.rotation.x = mesh.current.rotation.y += Math.random() * 0.01;
  // });

  return (
    <mesh castShadow position={props.position} ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[props.radius, 8, 8]} />
      <meshStandardMaterial attach="material" color={props.color} />
      <pointLight
        color={props.color}
        intensity={0.3}
        position={props.position}
      />
    </mesh>
  );
}
