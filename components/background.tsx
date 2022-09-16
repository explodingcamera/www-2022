import React, { useRef, useState } from 'react';
import styled from '@emotion/styled';

import { Canvas, useFrame } from '@react-three/fiber';
import { Bloom, EffectComposer } from '@react-three/postprocessing';
import { PointMaterial, Points } from '@react-three/drei';

import { inSphere } from 'maath/random';
import { KernelSize } from 'postprocessing';
import type * as THREE from 'three';

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100vw;
`;

function Starfield(props) {
	const ref = useRef<THREE.Points>();

	const [sphere] = useState(() =>
		inSphere(new Float32Array(5000), { radius: 1.5 }),
	);

	useFrame((_state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	useFrame(({ clock }) => {
		const opacity = Math.max((clock.getElapsedTime() - 0.3) / 5, 0);
		if (opacity > 1 || Array.isArray(ref.current.material)) return;
		ref.current.material.opacity = opacity;
	});

	return (
		<Points
			ref={ref}
			positions={sphere}
			stride={3}
			frustumCulled={false}
			{...props}
		>
			<PointMaterial
				transparent
				color="#a0ffff"
				size={0.005}
				sizeAttenuation
				depthWrite={false}
			/>
		</Points>
	);
}

export const Background = () => (
	<Wrapper>
		<Canvas camera={{ position: [0, 0, 1] }}>
			<Starfield />
			{/* <OrbitControls
				enableZoom={false}
				enablePan={false}
				enableRotate={false}
			/> */}
			<EffectComposer multisampling={8}>
				<Bloom
					kernelSize={KernelSize.HUGE}
					luminanceThreshold={0}
					luminanceSmoothing={0}
					intensity={0.5}
				/>
			</EffectComposer>
		</Canvas>
	</Wrapper>
);

export default Background;
