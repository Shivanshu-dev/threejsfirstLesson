import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

scene.background = new THREE.Color('red');

// prespective camera handles how we see the item in 2D
const camera1 = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera1.position.z = 2;
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
camera.position.z = 2;

// ortho camera is for cubic render of elements
const camera2 = new THREE.OrthographicCamera(-2, 2, 2, -2, 0.1, 1000);
camera2.position.z = 2;
// creating own canvas to render
const canvas1 = document.getElementById('canvas1') as HTMLCanvasElement;
const canvas2 = document.getElementById('canvas2') as HTMLCanvasElement;
const canvas3 = document.getElementById('canvas3') as HTMLCanvasElement;
const canvas4 = document.getElementById('canvas4') as HTMLCanvasElement;

// rendering created canvas with webGLRendered which is default renderer and the fastest as well
const renderer1 = new THREE.WebGLRenderer({ canvas: canvas1 });
const renderer2 = new THREE.WebGLRenderer({ canvas: canvas2 });
const renderer3 = new THREE.WebGLRenderer({ canvas: canvas3 });
const renderer4 = new THREE.WebGLRenderer({ canvas: canvas4 });

// giving own size to canvas
renderer1.setSize(200, 200);
renderer2.setSize(200, 200);
renderer3.setSize(200, 200);
renderer4.setSize(200, 200);

// dnt append single child just return all canvas below
// document.body.appendChild(renderer.domElement);

// provide mouse controls to the canvas
new OrbitControls(camera1, renderer1.domElement);
// new OrbitControls(camera, renderer2.domElement);
// new OrbitControls(camera, renderer3.domElement);
// new OrbitControls(camera, renderer4.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({
	color: 0x00ff00,
	wireframe: true,
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// window.addEventListener('resize', onWindowResize, false);
// function onWindowResize() {
// 	camera.aspect = window.innerWidth / window.innerHeight;
// 	camera.updateProjectionMatrix();
// 	renderer.setSize(window.innerWidth, window.innerHeight);
// 	render();
// }

function animate() {
	requestAnimationFrame(animate);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	render();
}

function render() {
	renderer1.render(scene, camera1);
	renderer2.render(scene, camera2);
	renderer3.render(scene, camera);
	renderer4.render(scene, camera);
}

animate();
