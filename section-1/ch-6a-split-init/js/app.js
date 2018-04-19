// these need to be accessed inside more than one function so we'll declare them first
let container;
let camera;
let renderer;
let scene;
let controls;

function init() {

  // Get a reference to the container element that will hold our scene
  container = document.querySelector( '#container' );

  // create a Scene
  scene = new THREE.Scene();

  initCamera();
  initControls();
  initLights();
  initMeshes();
  initRenderer();

  renderer.animate( () => {

    update();
    render();

  } );

}

function initCamera() {

  camera = new THREE.PerspectiveCamera(
    35, // FOV
    container.clientWidth / container.clientHeight, // aspect
    0.1, // near clipping plane
    100, // far clipping plane
  );

  // move the camera back a bit so that we can view the scene
  camera.position.set( 0, 0, 10 );

}

function initControls() {

  controls = new THREE.OrbitControls( camera, container );

}

function initLights() {

  const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
  scene.add( ambientLight );


  const pointLight = new THREE.PointLight( 0xffffff, 1.0 );
  pointLight.position.set( 0, 0, 2 );

  scene.add( pointLight );
}

function initMeshes() {

  const geometry = new THREE.BoxBufferGeometry( 2, 2, 2 );
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );

  const mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
}

function initRenderer() {

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setSize( container.clientWidth, container.clientHeight );

  // add the automatically created <canvas> element to the page
  container.appendChild( renderer.domElement );
}

// perform any updates to the scene, called once per frame
// avoid heavy computation here
function update() {

  // Don't delete this function

}

function render() {

  renderer.render( scene, camera );

}

function onWindowResize() {

  // set the aspect ratio to match the new browser window aspect ratio
  camera.aspect = container.clientWidth / container.clientHeight;

  // update the camera's frustum
  camera.updateProjectionMatrix();

  // update the size of the renderer AND the canvas
  renderer.setSize( container.clientWidth, container.clientHeight );

}

window.addEventListener( 'resize', onWindowResize );

init();
