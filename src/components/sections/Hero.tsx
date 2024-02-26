import Image from 'next/image';
import { Button } from '../ui/moving-border';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';

const techStackIcons = [
	{
		name: 'html',
		image: (
			<Image
				src={'https://skillicons.dev/icons?i=html'}
				width={60}
				height={60}
				alt="html skill icon"
			/>
		),
	},
	{
		name: 'css',
		image: (
			<Image
				src={'https://skillicons.dev/icons?i=css'}
				width={60}
				height={60}
				alt="css skill icon"
			/>
		),
	},
	{
		name: 'javascript',
		image: (
			<Image
				src={'https://skillicons.dev/icons?i=js'}
				width={60}
				height={60}
				alt="javascript skill icon"
			/>
		),
	},
	{
		name: 'nextjs',
		image: (
			<Image
				src={'https://skillicons.dev/icons?i=nextjs'}
				width={60}
				height={60}
				alt="nextjs skill icon"
			/>
		),
	},
	{
		name: 'react',
		image: (
			<Image
				src={'https://skillicons.dev/icons?i=react'}
				width={60}
				height={60}
				alt="react skill icon"
			/>
		),
	},
	{
		name: 'typescript',
		image: (
			<Image
				src={'https://skillicons.dev/icons?i=ts'}
				width={60}
				height={60}
				alt="typescript skill icon"
			/>
		),
	},
	{
		name: 'sass',
		image: (
			<Image
				src={'https://skillicons.dev/icons?i=sass'}
				width={60}
				height={60}
				alt="sass skill icon"
			/>
		),
	},
	{
		name: 'tailwind',
		image: (
			<Image
				src={'https://skillicons.dev/icons?i=tailwind'}
				width={60}
				height={60}
				alt="tailwind skill icon"
			/>
		),
	},
];

export default function Hero() {
	const scrollToProjects = () => {
		const projectsSection = document.getElementById('projects');
		if (projectsSection) {
			projectsSection.scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<section className="grid place-items-center w-screen min-h-screen">
				<div className="h-full w-full bg-background bg-dot-white/[0.2] relative flex items-center justify-center">
					{/* Radial gradient for the container to give a faded look */}
					<div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

					<div className="flex flex-col gap-12 items-center">
						<div className="flex flex-col items-center text-center gap-4">
							<h2 className="text-2xl relative z-20 bg-clip-text text-primary2 bg-gradient-to-b">
								Tyler Mommsen
							</h2>
							<h1 className="text-6xl font-bold relative z-20 text-primary">
								Frontend{' '}
								<span
									className="gradient-text text-transparent animate-gradientText"
									style={{ backgroundClip: 'text' }}
								>
									React
								</span>{' '}
								Developer
							</h1>
						</div>

						<div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
							<InfiniteMovingCards
								items={techStackIcons}
								direction="left"
								speed="slow"
								pauseOnHover={false}
							/>
						</div>

						<div onClick={scrollToProjects}>
							<Button borderRadius="1rem" className="font-bold px-8 py-4">
								View Projects
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
