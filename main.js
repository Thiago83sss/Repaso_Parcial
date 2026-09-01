// =====================================================
// main.js — EJEMPLOS DE THREE.JS
// =====================================================

import * as THREE from 'https://esm.sh/three@0.158.0';

// ESCENA
const scene = new THREE.Scene();

// CÁMARA
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 2, 5);

// RENDERER
const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

// Si quieres usar Three.js en una página completa:
// document.body.appendChild(renderer.domElement);

// =====================================================
// FIGURA
// =====================================================

const geometry = new THREE.BoxGeometry(1, 1, 1);

const material = new THREE.MeshBasicMaterial({
    color: 0xff0000
});

const cube = new THREE.Mesh(
    geometry,
    material
);

scene.add(cube);

// OTRAS GEOMETRÍAS:
// new THREE.SphereGeometry(1, 32, 32)
// new THREE.CylinderGeometry(1, 1, 2, 32)
// new THREE.PlaneGeometry(10, 10)

// =====================================================
// LUCES
// =====================================================

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    0.5
);

scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    1
);

directionalLight.position.set(5, 10, 5);
scene.add(directionalLight);

// =====================================================
// POSICIÓN / ROTACIÓN / ESCALA
// =====================================================

cube.position.set(0, 0, 0);
cube.rotation.set(0, 0, 0);
cube.scale.set(1, 1, 1);

// =====================================================
// ANIMACIÓN
// =====================================================

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

// Para ejecutar Three.js en una página completa:
// animate();

// =====================================================
// RESPONSIVE
// =====================================================

window.addEventListener('resize', () => {
    camera.aspect =
        window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();

    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
});

// =====================================================
// RESUMEN THREE.JS
// =====================================================
//
// Scene      = escenario
// Camera     = cámara
// Renderer   = renderizado
// Light      = iluminación
// Geometry   = forma
// Material   = apariencia
// Mesh       = objeto
// scene.add  = agregar objeto
// position   = posición
// rotation   = rotación
// scale      = tamaño
// animate    = movimiento
//
// Para modelos 3D externos:
// GLTFLoader / FBXLoader
// =====================================================
