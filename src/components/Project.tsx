import React from 'react';
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
	links,
	flipToLeft = false,
}: ProjectProps) {
	return (
		<div className="flex flex-col items-center justify-center lg:grid lg:grid-cols-2 gap-4 lg:gap-12">
			<div
				className={`${flipToLeft ? 'lg:flex' : 'lg:hidden'} hidden flex-col items-center text-center lg:items-start lg:text-start gap-4 w-full`}
			>
				<h3 className="font-bold text-xl">{name}</h3>
				<p className="leading-6 max-w-[45ch]">{description}</p>

				<div className="flex justify-center gap-2 mt-1">
					{links.map((link, index) => {
						const linkTo = link.name;
						return (
							<a
								key={index}
								href={`${link.link}`}
								target="_blank"
								rel="noreferrer noopener"
								className={`${linkTo === 'Repo' ? 'from-accent to-accent3' : 'from-green-500 to-green-700'} bg-gradient-to-b font-bold text-primary px-6 py-2 rounded-xl`}
							>
								{linkTo}
							</a>
						);
					})}
				</div>
			</div>

			<div>
				<Carousel>
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

				<div className="flex justify-center gap-2 mt-1">
					{links.map((link, index) => {
						const linkTo = link.name;
						return (
							<a
								key={index}
								href={`${link.link}`}
								target="_blank"
								rel="noreferrer noopener"
								className={`${linkTo === 'Repo' ? 'from-accent to-accent3' : 'from-green-500 to-green-700'} bg-gradient-to-b font-bold text-primary px-6 py-2 rounded-xl`}
							>
								{linkTo}
							</a>
						);
					})}
				</div>
			</div>
		</div>
	);
}
