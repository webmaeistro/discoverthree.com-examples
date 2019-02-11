import {
  Color,
  DirectionalLightHelper,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import createLights from './lights.js';
import createMeshes from './meshes.js';
import loadModels from './models.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 0.4;

  app.scene.background = new Color( 0x8FBCD4 );
  app.scene.fog = new Fog( 0x8FBCD4, 200, 230 );
  app.camera.position.set( -20, 30, 50 );

  app.start();

  const lights = createLights();
  app.scene.add( lights.ambient, lights.main );

  app.scene.add( new DirectionalLightHelper( lights.main ) );

  const meshes = createMeshes();
  app.scene.add( meshes.plinth, meshes.shapes );

  const models = await loadModels();
  app.scene.add( ...models.horsesArray );

}

initScene();
