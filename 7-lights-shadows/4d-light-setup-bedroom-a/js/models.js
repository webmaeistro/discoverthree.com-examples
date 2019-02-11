import {
  AnimationMixer,
  Vector3,
} from './vendor/three/three.module.js';

import createAsyncLoader from './vendor/utility/createAsyncLoader.module.js';

import { GLTFLoader } from './vendor/three/loaders/GLTFLoader.module.js';

function setupModel(  gltf ) {

  const room = gltf.scene.children[ 0 ];

  console.log( 'model: ', room );

  return room;

};


export default async function loadModels() {

  const gltfLoader = new GLTFLoader();

  DRACOLoader.setDecoderPath( 'js/vendor/three/loaders/draco/' );
  gltfLoader.setDRACOLoader( new DRACOLoader() );

  const asyncLoader = createAsyncLoader( gltfLoader );

  const room = setupModel(
    await asyncLoader.load( 'models/lighting/bedroom.glb' )
  );

  return { room };

}
