import React from 'react';
import Project from '../Project';

export default function Projects() {
	return (
		<section id="projects" className="w-full bg-background py-12 px-4 grid place-items-center">
			<div className="max-w-7xl text-primary flex flex-col gap-8 items-center w-full">
				<h2 className="text-2xl font-bold text-primary2">Projects</h2>
				<Project
					name="CryptoCove"
					description="CryptoCove is a mockup crypto exchange site. View real-time crypto market updates for the top 50 cryptocoins. Used CoinGecko's API to fetch latest data."
					images={[
						'/projects/cryptocove/cryptocove1.png',
						'/projects/cryptocove/cryptocove2.png',
						'/projects/cryptocove/cryptocove3.png',
						'/projects/cryptocove/cryptocove4.png',
						'/projects/cryptocove/cryptocove5.png',
					]}
					techStack={['nextjs', 'react', 'ts', 'tailwind']}
					links={[
						{ name: 'Repo', link: 'https://github.com/TylerMommsen/cryptocove' },
						{ name: 'Live', link: 'https://tylermommsen-cryptocove.vercel.app/' },
					]}
				/>

				<Project
					name="Pathfinding Visualization"
					description="Pathfinding visualization tool designed to demonstrate various pathfinding algorithms as they navigate from point A to point B. It also offers an engaging look at different maze generation algorithms and how they craft intricate mazes."
					images={['/display-algorithm.gif']}
					techStack={['html', 'sass', 'javascript']}
					links={[
						{ name: 'Repo', link: 'https://github.com/TylerMommsen/pathfinding-visualization' },
						{ name: 'Live', link: 'https://tylermommsen.github.io/pathfinding-visualization/' },
					]}
					flipToLeft={true}
				/>

				<Project
					name="GameVault"
					description="GameVault is a Game Catalog site which is the ultimate destination for exploring a vast collection of over 800,000 games. All data is fetched using RAWG API to provide comprehensive information, including descriptions, ratings, metacritic scores, publishers, developers and much more!"
					images={['/projects/gamevault/gamevault1.png', '/projects/gamevault/gamevault2.png']}
					techStack={['nextjs', 'react', 'ts', 'tailwind']}
					links={[
						{ name: 'Repo', link: 'https://github.com/TylerMommsen/gamevault' },
						{ name: 'Live', link: 'https://tylermommsen-gamevault.vercel.app/' },
					]}
				/>

				<Project
					name="Time Crafted"
					description="Time Crafted is a mockup e-commerce store that immerses you in the world of high-class watches. Explore a curated collection of luxury timepieces, from timeless classics to avant-garde horological masterpieces. Experience the art of precision engineering and style at its finest."
					images={['/TimeCraftedPreview.png']}
					techStack={['react', 'ts', 'sass', 'nodejs', 'express', 'mongodb']}
					links={[
						{ name: 'Repo', link: 'https://github.com/TylerMommsen/time-crafted' },
						{ name: 'Live', link: 'https://tylermommsen-watchstore.netlify.app' },
					]}
					flipToLeft={true}
				/>
			</div>
		</section>
	);
}
