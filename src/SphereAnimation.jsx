import React, { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import "./SphereAnimation.css"; // Import CSS for styling

const SphereAnimation = () => {
  const mountRef = useRef(null);
  const [mesh, setMesh] = useState(null);
  const [mesh2, setMesh2] = useState(null);

  useEffect(() => {
    const mount = mountRef.current;

    if (!mount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, -10, 10);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight); // Use container size
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Load textures
    const texture = new THREE.TextureLoader().load(
      "https://s33.postimg.cc/zaty10vot/out.png"
    );
    const texture2 = new THREE.TextureLoader().load(
      "https://s33.postimg.cc/x69kzy9hp/middle.png"
    );

    // Create materials
    const material = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
    });
    const material2 = new THREE.MeshBasicMaterial({
      map: texture2,
      transparent: true,
    });

    // Create geometries and meshes
    const geometry = new THREE.SphereGeometry(9.98, 50, 50);
    const geometry2 = new THREE.SphereGeometry(10, 50, 50);

    const mesh = new THREE.Mesh(geometry, material);
    const mesh2 = new THREE.Mesh(geometry2, material2);

    mesh.rotation.y = -Math.PI / 2;
    mesh2.rotation.y = -Math.PI / 2;

    scene.add(mesh);
    scene.add(mesh2);

    setMesh(mesh);
    setMesh2(mesh2);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);

      if (mesh && mesh2) {
        mesh2.rotation.y -= 0.0009;
        mesh.rotation.y += 0.0009;
      }
    };

    animate();

    // Handle mouse/touch events
    const handleMouseMove = (e) => {
      const pageX = e.touches ? e.touches[0].pageX : e.pageX;
      const pageY = e.touches ? e.touches[0].pageY : e.pageY;

      const pos =
        (((360 * (pageX - window.innerWidth / 2)) / window.innerWidth) *
          Math.PI) /
          180 /
          2 -
        Math.PI / 2;
      const pos2 =
        (((360 * (pageY - window.innerHeight / 8)) / window.innerHeight) *
          Math.PI) /
          180 -
        Math.PI / 2;

      if (mesh && mesh2) {
        mesh2.rotation.y = -pos - Math.PI;
        mesh.rotation.y = pos;
        mesh2.rotation.x = pos2 / 10;
        mesh.rotation.x = pos2 / 10;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchstart", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div className="sphere-container" ref={mountRef}></div>;
};

export default SphereAnimation;
