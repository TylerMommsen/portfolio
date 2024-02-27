import React from 'react';
import Image from 'next/image';

export default function Contact() {
	return (
		<section id="contact" className="w-full bg-background py-12 px-4 grid place-items-center">
			<div className="max-w-7xl text-primary flex flex-col gap-8 items-center w-full">
				<h2 className="text-2xl font-bold text-primary2">Contact / Find Me</h2>

				<div className="flex gap-4">
					<a
						href="https://github.com/TylerMommsen"
						target="_blank"
						rel="noreferrer noopener"
						className="hover:-translate-y-2 transform transition duration-300 hover:shadow-md"
					>
						<Image
							src={'https://skillicons.dev/icons?i=github'}
							width={60}
							height={60}
							alt="github icon"
							draggable={false}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/tylermommsen/"
						target="_blank"
						rel="noreferrer noopener"
						className="hover:-translate-y-2 transform transition duration-300 hover:shadow-md"
					>
						<Image
							src={'https://skillicons.dev/icons?i=linkedin'}
							width={60}
							height={60}
							alt="linkedIn icon"
							draggable={false}
						/>
					</a>
					<a
						href="mailto:tylermommsenbh@gmail.com"
						target="_blank"
						rel="noreferrer noopener"
						className="hover:-translate-y-2 transform transition duration-300 hover:shadow-md"
					>
						<Image
							src={'https://skillicons.dev/icons?i=gmail'}
							width={60}
							height={60}
							alt="gmail icon"
							draggable={false}
						/>
					</a>
				</div>
			</div>
		</section>
	);
}
