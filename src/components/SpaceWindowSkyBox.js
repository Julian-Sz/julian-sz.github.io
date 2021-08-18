import React from "react";
import BackgroundStars from "../textures/bgStars.jpg";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import { CubeTextureLoader } from "three";

export default function SpaceWindowSkyBox() {
  const { scene } = useThree();
  const urls = [
    "../textures/bg_stars.jpg",
    "../textures/bg_stars.jpg",
    "../textures/bg_stars.jpg",
    "../textures/bg_stars.jpg",
    "../textures/bg_stars.jpg",
    "../textures/bg_stars.jpg",
  ];
  const skyBox = new CubeTextureLoader().load(
    [
      BackgroundStars,
      BackgroundStars,
      BackgroundStars,
      BackgroundStars,
      BackgroundStars,
      BackgroundStars,
    ],
    (texture) => {
      scene.background = texture;
      console.log("scene");
    }
  );

  // const texture = loader.load([
  //   "../textures/2k_stars.jpg",
  //   "../textures/2k_stars.jpg",
  //   "../textures/2k_stars.jpg",
  //   "../textures/2k_stars.jpg",
  //   "../textures/2k_stars.jpg",
  //   "../textures/2k_stars.jpg",
  // ]);
  // scene.background = texture;
  return null;
}
