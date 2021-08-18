import BackgroundStars from "../textures/bgStars.jpg";
import { useThree } from "@react-three/fiber";
import { TextureLoader, EquirectangularReflectionMapping } from "three";

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

  const texture = new TextureLoader().load(BackgroundStars, (texture) => {
    texture.mapping = EquirectangularReflectionMapping;
    scene.background = texture;
  });
  return null;
}
