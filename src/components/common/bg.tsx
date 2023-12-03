import { useCallback } from 'react';
import type { Container, Engine } from 'tsparticles-engine';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
// import { tsParticles } from 'tsparticles-engine';
// import { loadParallaxMover } from 'tsparticles-move-parallax';

const Bg = () => {
	const particlesInit = useCallback(async (engine: Engine) => {
		console.log(engine);

		// you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		// await loadFull(engine);
		await loadSlim(engine);
	}, []);

	const particlesLoaded = useCallback(async (container: Container | undefined) => {
		console.log(container);
	}, []);

	return (
		<>
			<div className="bg">
				<Particles
					id="tsparticles"
					init={particlesInit}
					loaded={particlesLoaded}
					options={{
						// background: {
						// 	color: {
						// 		value: '#0d47a1',
						// 	},
						// },
						fpsLimit: 60,
						interactivity: {
							events: {
								onClick: {
									enable: false,
									mode: 'push',
								},
								onHover: {
									enable: true,
									mode: 'grab',
								},
								resize: true,
							},
							modes: {
								push: {
									quantity: 4,
								},
								// repulse: {
								// 	distance: 50,
								// 	duration: 0.2,
								// },
							},
						},
						particles: {
							color: {
								value: '#ffffff',
							},
							links: {
								color: '#ffffff',
								distance: 120,
								enable: true,
								opacity: 0.5,
								width: 1,
							},
							move: {
								direction: 'none',
								enable: true,
								outModes: {
									default: 'bounce',
								},
								random: true,
								speed: 2,
								straight: false,
							},
							number: {
								density: {
									enable: true,
									area: 1000,
								},
								value: 80,
							},
							opacity: {
								value: 0.5,
							},
							shape: {
								type: 'circle',
							},
							size: {
								value: { min: 1, max: 2 },
							},
						},
						detectRetina: true,
					}}
				/>
			</div>
		</>
	);
};

export default Bg;
