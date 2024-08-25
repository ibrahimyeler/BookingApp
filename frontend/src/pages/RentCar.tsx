import React from 'react';
import { Link } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls } from '@react-three/drei';
import Car from './Car'; // Car bileşenini import edin

const RentCar: React.FC = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-gray-100 to-blue-100 flex flex-col items-center justify-start p-6">
      <Link to="/" className="absolute top-4 left-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-300 transition-colors duration-300">
        Return to Home Page
      </Link>
      <div className="w-full h-[60vh] flex items-center justify-center"> {/* Canvas container'ını ortalama */}
        <Canvas>
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <PerspectiveCamera makeDefault position={[0, 5, 20]} /> {/* Kamera konumunu ayarlama */}
          <OrbitControls />
          <Car />
        </Canvas>
      </div>
      <div className="flex-grow flex flex-col items-center justify-center mt-24">
        <h1 className="text-4xl font-bold text-center text-blue-500 mb-6">
          Welcome to the Rent a Car Page
        </h1>
      </div>
    </div>
  );
};

export default RentCar;
