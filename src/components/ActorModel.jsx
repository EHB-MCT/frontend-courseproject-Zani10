import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ActorModel = ({ modelPath, scale = 2 }) => {
  const mountRef = useRef(null);
  const controlsRef = useRef(null); // Reference for controls to toggle auto-rotation

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); 
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);

    const loader = new GLTFLoader();
    console.log('Attempting to load model from:', modelPath);
    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        model.scale.set(scale, scale, scale); // Use the custom scale passed as prop
        scene.add(model);

        controlsRef.current = new OrbitControls(camera, renderer.domElement);
        controlsRef.current.enableZoom = false;
        controlsRef.current.enablePan = false;
        controlsRef.current.autoRotate = true; // Enable auto-rotation
        controlsRef.current.autoRotateSpeed = 2.0; // Adjust rotation speed as needed

        // Make model rotatable by the user as well
        controlsRef.current.addEventListener('start', () => controlsRef.current.autoRotate = false);
        controlsRef.current.addEventListener('end', () => controlsRef.current.autoRotate = true);

        animate();
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the model:', error);
      }
    );

    const animate = () => {
      requestAnimationFrame(animate);
      controlsRef.current.update(); // Ensure controls update is called
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      const { clientWidth, clientHeight } = mountRef.current;
      renderer.setSize(clientWidth, clientHeight);
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (mountRef.current) {
      mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, [modelPath, scale]);

  return <div ref={mountRef} className="actor-wrapper"></div>;
};

export default ActorModel;
