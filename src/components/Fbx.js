import { Canvas, useLoader } from '@react-three/fiber';
import {
  Environment,
  OrbitControls,
  useFBX,
} from '@react-three/drei';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { Suspense } from 'react';

const Scene = () => {

  const url = 'https://threejs.org/examples/models/fbx/Samba%20Dancing.fbx';
  const url2 ='https://github.com/mrdoob/three.js/raw/master/examples/models/fbx/Samba%20Dancing.fbx';
  const url3 = 'https://hopeseedblob.blob.core.windows.net/nft-jini/41_0xfe2a01997821dfbebd1b9352d44190e96e9a1b26_68_1680794274.fbx';
  const url4 = 'https://parallelworld.blob.core.windows.net/coin/41_0xfe2a01997821dfbebd1b9352d44190e96e9a1b26_68_1680794274.fbx';
  const url5 = 'https://parallelworld.blob.core.windows.net/coin/Samba%20Dancing.fbx';
  const url6 = 'https://parallelworld.blob.core.windows.net/coin/Dragon_Baked_Actions_fbx_6.1_ASCII.fbx';
  const url7 = 'https://parallelworld.blob.core.windows.net/coin/Dragon%202.5_fbx.fbx';
  // const fbx = useFBX(url); //  gun.fbx // 'test.fbx'
  const file = 'test.fbx';
  // const fbx = useLoader(FBXLoader, file)
  const fbx = useLoader(FBXLoader, file);

  return (
    <>
      <ambientLight intensity={0.5}/>
      <pointLight position={[10, 10, 10]} color="white"  intensity={5} />
      <primitive object={fbx} scale={0.5} position={[0, -3, 0]} />
    </>
  );
};

const Scene2 = () => {

  const url = 'https://threejs.org/examples/models/fbx/Samba%20Dancing.fbx';
  const file = 'sun.fbx';
  // const fbx = useLoader(FBXLoader, file)
  const fbx = useLoader(FBXLoader, file);

  return (
    <>
      <ambientLight intensity={0.05} />
      <pointLight position={[50, 50, 50]} />
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
          {/* <Environment preset="sunset" background /> */}
        </Suspense>
      </Canvas>
      <Canvas>
        <Suspense fallback={null}>
          <Scene2 />
          <OrbitControls />
          {/* <Environment preset="city" background /> */}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Fbx;
