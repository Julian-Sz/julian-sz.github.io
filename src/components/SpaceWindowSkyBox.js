import React from "react";
import BackgroundStarsOld from "../textures/bgStars.jpg";
import BackgroundStars from "../textures/bgStars.jpg";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
  CubeTextureLoader,
  TextureLoader,
  EquirectangularReflectionMapping,
} from "three";

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
  // const skyBox = new CubeTextureLoader().load(
  //   [
  //     BackgroundStars,
  //     BackgroundStars,
  //     BackgroundStars,
  //     BackgroundStars,
  //     BackgroundStars,
  //     BackgroundStars,
  //   ],
  //   (texture) => {
  //     scene.background = texture;
  //     console.log("scene");
  //   }
  // );

  const texture = new TextureLoader().load(BackgroundStars, (texture) => {
    texture.mapping = EquirectangularReflectionMapping;
    scene.background = texture;
  });
  return null;
}
