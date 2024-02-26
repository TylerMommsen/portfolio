import React from 'react';
import Autoplay from 'embla-carousel-autoplay';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

interface ProjectProps {
	name: string;
	description: string;
	images: string[];
	techStack: string[];
	links: {
		name: string;
		link: string;
	}[];
	flipToLeft?: boolean;
}

export default function Project({
	name,
	description,
	images,
	techStack,
	links,
	flipToLeft = false,
}: ProjectProps) {
	const plugin = React.useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

	return (
		<div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-4 lg:gap-12">
			<div
				className={`${flipToLeft ? 'lg:flex' : 'lg:hidden'} hidden flex-col items-center text-center lg:items-start lg:text-start gap-4 w-full`}
			>
				<h3 className="font-bold text-xl">{name}</h3>
				<p className="leading-6 max-w-[45ch]">{description}</p>

				<div className="flex gap-2">
					{techStack.map((name, index) => {
						return (
							<Image
								key={index}
								src={`https://skillicons.dev/icons?i=${name}`}
								width={60}
								height={60}
								alt={name + 'icon'}
							/>
						);
					})}
				</div>

				<div className="flex justify-center gap-2 mt-1">
					<a
						href={links[0].link}
						target="_blank"
						rel="noreferrer noopener"
						className="relative inline-flex overflow-hidden font-bold text-primary p-[1px] rounded-xl hover:-translate-y-2 transform transition duration-300 hover:shadow-md"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent)_0%,var(--accent3)_50%,var(--accent)_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-6 py-2 text-sm text-white backdrop-blur-3xl">
							{links[0].name}
						</span>
					</a>

					<a
						href={links[1].link}
						target="_blank"
						rel="noreferrer noopener"
						className="font-bold text-primary px-6 py-2 gradient-text animate-gradientText rounded-xl hover:-translate-y-2 transform transition duration-300 hover:shadow-md"
					>
						{links[1].name}
					</a>
				</div>
			</div>

			<div>
				<Carousel
					plugins={[plugin.current]}
					onMouseEnter={plugin.current.stop}
					onMouseLeave={plugin.current.reset}
				>
					<CarouselContent>
						{images.map((image, index) => {
							return (
								<CarouselItem key={index}>
									<div className="w-full">
										<Image
											src={image}
											width={1920}
											height={1080}
											alt={name + 'image'}
											className="rounded-2xl"
										/>
									</div>
								</CarouselItem>
							);
						})}
					</CarouselContent>
					{/* <CarouselPrevious />
				<CarouselNext /> */}
				</Carousel>
			</div>

			<div
				className={`${flipToLeft ? 'lg:hidden' : 'flex'} flex flex-col items-center text-center lg:items-start lg:text-start gap-4 w-full`}
			>
				<h3 className="font-bold text-xl">{name}</h3>
				<p className="leading-6 max-w-[45ch]">{description}</p>

				<div className="flex gap-2">
					{techStack.map((name, index) => {
						return (
							<Image
								key={index}
								src={`https://skillicons.dev/icons?i=${name}`}
								width={60}
								height={60}
								alt={name + 'icon'}
							/>
						);
					})}
				</div>

				<div className="flex justify-center gap-2 mt-1">
					<a
						href={links[0].link}
						target="_blank"
						rel="noreferrer noopener"
						className="relative inline-flex overflow-hidden font-bold text-primary p-[1px] rounded-xl hover:-translate-y-2 transform transition duration-300 hover:shadow-md"
					>
						<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,var(--accent)_0%,var(--accent3)_50%,var(--accent)_100%)]" />
						<span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-xl bg-slate-950 px-6 py-2 text-sm text-white backdrop-blur-3xl">
							{links[0].name}
						</span>
					</a>

					<a
						href={links[1].link}
						target="_blank"
						rel="noreferrer noopener"
						className="font-bold text-primary px-6 py-2 gradient-text animate-gradientText rounded-xl hover:-translate-y-2 transform transition duration-300 hover:shadow-md"
					>
						{links[1].name}
					</a>
				</div>
			</div>
		</div>
	);
}
