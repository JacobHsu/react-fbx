import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useFBX } from '@react-three/drei';
import { Suspense } from 'react';

// Create a functional component called Fbx
const Scene = () => {
  const fbx = useFBX('test.fbx'); //  gun.fbx

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <primitive object={fbx} scale={0.5} position={[0, -3, 0]}/>
    </>
  );
};

const Fbx = () => {
  return (
    <div>
      <Canvas>
        <Suspense fallback={null}>
          <Scene />
          <OrbitControls />
          <Environment preset="sunset" background />
        </Suspense>
      </Canvas>
    </div>
  );
};

// Export the Fbx component
export default Fbx;
