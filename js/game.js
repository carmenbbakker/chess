var scene;
var camera;
var clock;
var container;
var renderer;

function render() {
    //camera.lookAt(scene.position);

    renderer.render(scene, camera);
}

function animate() {
    requestAnimationFrame(animate);
    delta_time = clock.getDelta();

    render();
}

function resize() {
    var factor = 1;
    var width = window.innerWidth * factor;
    var height = window.innerHeight * factor;
    renderer.setSize(width, height);

    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

function init() {

    // DOCUMENT

    container = document.createElement("div");
    document.body.appendChild(container);

    // SCENE

    scene = new THREE.Scene();

    // CAMERA

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
    //camera.position.y = 50;
    scene.add(camera);

    // LIGHTS

    var ambientLight = new THREE.AmbientLight(0x404040, 1.0);
    scene.add(ambientLight);

    var directionalLight = new THREE.DirectionalLight( 0xffffff, 1.0 );
    directionalLight.position.set(2000, 1250, 100);
    scene.add(directionalLight);

    // MESH STUFF

    // RENDERER

    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // CONTROLS

    var controls = new THREE.OrbitControls(camera, renderer.domElement);

    // CLOCK

    clock = new THREE.Clock();

    // LISTENERS

    //document.addEventListener("keydown", onDocumentKeyDown);
    window.addEventListener("resize", resize, false);
}

init();
animate();
