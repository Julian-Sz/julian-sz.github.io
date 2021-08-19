import BackgroundStars from "../textures/bgStars.jpg";
import { useThree } from "@react-three/fiber";
import { TextureLoader, EquirectangularReflectionMapping } from "three";

export default function SpaceWindowSkyBox() {
  const { scene } = useThree();

  new TextureLoader().load(BackgroundStars, (texture) => {
    texture.mapping = EquirectangularReflectionMapping;
    scene.background = texture;
  });
  return null;
}
