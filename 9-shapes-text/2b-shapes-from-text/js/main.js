import {
  Color,
} from './vendor/three/three.module.js';

import App from './vendor/App.module.js';

import loadFont from './text.js';

async function initScene() {

  const app = new App( '#scene-container' );

  app.init();

  app.renderer.toneMappingExposure = 1;
  app.scene.background = new Color( 0x222222 );
  app.camera.position.set( 7, 3, 7 );

  app.start();

  app.controls.target.x = 0.5;

  const text = await loadFont();
  app.scene.add( text.discover );

}

initScene();
