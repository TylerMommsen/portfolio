import React from 'react';
import { Button } from '../ui/moving-border';
import Image from 'next/image';

export default function About() {
	const scrollToContact = () => {
		const contactSection = document.getElementById('contact');
		if (contactSection) {
			contactSection.scrollIntoView({ behavior: 'smooth' });
		}
	};
	return (
		<section
			id="about"
			className="bg-background w-full grid place-items-center text-primary py-12 px-4"
		>
			<div className="max-w-7xl w-full gap-4 lg:gap-12 grid lg:grid-cols-2 place-items-center">
				<div className="h-full grid items-end justify-items-center lg:items-center lg:justify-items-end aspect-square w-full">
					<Image
						src={'/tyler-mommsen-photo.jpg'}
						width={1000}
						height={1000}
						alt="Tyler Mommsen personal photo"
						className="rounded-2xl object-cover h-[50%] w-[50%] lg:h-[75%] lg:w-[75%]"
					/>
				</div>

				<div className="flex flex-col w-full items-center lg:items-start gap-2">
					<h2 className="text-2xl font-bold text-primary2">About</h2>
					<p className="max-w-[45ch] leading-6 text-center lg:text-start">
						Hey there! My name is Tyler Mommsen, I&apos;m a passionate Frontend Developer. My main
						stack focuses on React/Next.js with Tailwind and TypeScript, but I always love learning
						and experimenting with new technologies. <br /> <br /> Enjoy the projects!
					</p>

					<div className="mt-4 rounded-[1rem]" onClick={scrollToContact}>
						<Button borderRadius="1rem" className="font-bold px-8 py-4 transition-all duration-300">
							Contact
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
