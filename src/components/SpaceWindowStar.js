import React, { useRef } from "react";

export default function SpaceWindowStar(props) {
  const mesh = useRef(null);

  return (
    <mesh position={props.position} ref={mesh}>
      <sphereBufferGeometry attach="geometry" args={[props.radius, 4, 4]} />
      <meshBasicMaterial attach="material" color={props.color} />
    </mesh>
  );
}
