import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import * as THREE from 'three';

const SoundWave = ({ count = 100, radius = 4 }) => {
  const mesh = useRef<THREE.Points>(null);
  const [hovered, setHovered] = useState(false);

  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360);
      const phi = THREE.MathUtils.randFloatSpread(360);

      positions[i * 3] = radius * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = radius * Math.cos(theta);
    }
    return positions;
  }, [count, radius]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime() * 0.5;
    if (mesh.current && mesh.current.geometry.attributes.position) {
      const positions = mesh.current.geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];

        const noise = Math.sin(x * 0.1 + time) * Math.cos(y * 0.1 + time) * Math.sin(z * 0.1 + time);
        const newRadius = radius + noise * (hovered ? 1.5 : 1);

        positions[i3] = x * (newRadius / radius);
        positions[i3 + 1] = y * (newRadius / radius);
        positions[i3 + 2] = z * (newRadius / radius);
      }
      mesh.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points ref={mesh} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particlesPosition.length / 3}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color={hovered ? "#ffd700" : "#4b0082"}
        sizeAttenuation
        transparent
        alphaTest={0.5}
        opacity={0.8}
      />
    </points>
  );
};

const MusicalElements = () => {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={group}>
      <Text
        position={[2, 0, 0]}
        rotation={[0, Math.PI / 2, 0]}
        fontSize={0.5}
        color="#4169e1"
        anchorX="center"
        anchorY="middle"
      >
        ♪
      </Text>
      <Text
        position={[-2, 1, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        fontSize={0.5}
        color="#9370db"
        anchorX="center"
        anchorY="middle"
      >
        ♫
      </Text>
      <Text
        position={[0, -2, 1]}
        rotation={[Math.PI / 4, 0, 0]}
        fontSize={0.5}
        color="#20b2aa"
        anchorX="center"
        anchorY="middle"
      >
        ♩
      </Text>
    </group>
  );
};

const AnimatedBackground: React.FC = () => {
  return (
    <div className="animated-bg">
      <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
        <color attach="background" args={['#0a0a0a']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <SoundWave />
        <MusicalElements />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;