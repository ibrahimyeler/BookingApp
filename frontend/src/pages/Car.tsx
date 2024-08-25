import React from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh, MeshStandardMaterial } from 'three';

const Car: React.FC = () => {
  const { scene } = useGLTF('/car.glb'); // Modelin yolunu buraya yazın
  const carRef = React.useRef<Mesh>(null);

  // Renk değişikliği için materyalleri güncelle
  React.useEffect(() => {
    if (carRef.current) {
      carRef.current.traverse((child) => {
        if (child instanceof Mesh && child.material instanceof MeshStandardMaterial) {
          // Rengi buradan değiştirin (örneğin, kırmızı)
          (child.material as MeshStandardMaterial).color.set('#ff0000'); // Kırmızı renk
        }
      });
    }
  }, []);

  // Arabanın yatay hareket etmesini sağlayan animasyon
  useFrame(() => {
    if (carRef.current) {
      carRef.current.position.x += 0.05; // Araba x ekseninde hareket ediyor
      if (carRef.current.position.x > 10) {
        carRef.current.position.x = -10; // Ekranın sol tarafından başlayıp sağ tarafa geçince tekrar sola döner
      }
    }
  });

  return (
    <group ref={carRef} position={[0, 0, 0]} scale={[0.3, 0.3, 0.3]}>
      <primitive object={scene} />
    </group>
  );
};

export default Car;
