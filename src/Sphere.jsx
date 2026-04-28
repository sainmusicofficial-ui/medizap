import { useRef, useMemo, useState, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function Sphere() {
  const ref = useRef();
const { mouse } = useThree();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
      console.log("mouse move working");
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // ... your existing code continues

  const texture = useMemo(() => {
    return new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/sprites/circle.png"
    );
  }, []);

  const positions = useMemo(() => {
    const count = 5000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = 2;

      const u = Math.random();
      const v = Math.random();

      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      arr[i3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i3 + 2] = radius * Math.cos(phi);
    }

    return arr;
  }, []);

useFrame(() => {
  console.log(mouse);
  if (ref.current) {
    // base rotation
    ref.current.rotation.y += 0.002;

    // mouse interaction
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      mouse.y * 0.6,
      0.08
    );

    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      mouse.x * 0.6,
      0.08
    );
  }
});

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>

      <pointsMaterial
        map={texture}
        size={0.06}
        transparent
        opacity={0.9}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        color="#7df9ff"
      />
    </points>
  );
}