import { Canvas, useLoader } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  // useFBX,
} from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Suspense } from 'react';

const Scene = () => {

  // const fbx = useFBX('test.fbx'); //  gun.fbx // 'test.fbx'
  const file = 'test.fbx';
  const fbx = useLoader(FBXLoader, file)
  // const fbx = useLoader(FBXLoader, url);

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <primitive object={fbx} scale={0.5} position={[0, -3, 0]} />
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

export default Fbx;
