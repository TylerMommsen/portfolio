import React from 'react';
import Project from '../Project';

export default function Projects() {
	return (
		<section className="w-full bg-background py-12 px-4 grid place-items-center">
			<div className="max-w-7xl text-primary flex flex-col gap-8 items-center w-full">
				<h2 className="text-2xl font-bold text-primary2">Projects</h2>
				<Project
					name="CryptoCove"
					description="CryptoCove is a mockup crypto exchange site. View real-time crypto market updates for the top 50 cryptocoins. Used CoinGecko's API to fetch latest data."
					images={['/CryptoCovePreview.png']}
					techStack={['nextjs', 'react', 'ts', 'tailwind']}
					links={[
						{ name: 'Repo', link: '/' },
						{ name: 'Live', link: '/' },
					]}
				/>

				<Project
					name="Pathfinding Visualization"
					description="Pathfinding visualization tool designed to demonstrate various pathfinding algorithms as they navigate from point A to point B. It also offers an engaging look at different maze generation algorithms and how they craft intricate mazes."
					images={['/display-algorithm.gif']}
					techStack={['html', 'sass', 'javascript']}
					links={[
						{ name: 'Repo', link: '/' },
						{ name: 'Live', link: '/' },
					]}
					flipToLeft={true}
				/>

				<Project
					name="GameVault"
					description="GameVault is a Game Catalog site which is the ultimate destination for exploring a vast collection of over 800,000 games. All data is fetched using RAWG API to provide comprehensive information, including descriptions, ratings, metacritic scores, publishers, developers and much more!"
					images={['/display-algorithm.gif']}
					techStack={['nextjs', 'react', 'ts', 'tailwind']}
					links={[
						{ name: 'Repo', link: '/' },
						{ name: 'Live', link: '/' },
					]}
				/>

				<Project
					name="Time Crafted"
					description="Time Crafted is a mockup e-commerce store that immerses you in the world of high-class watches. Explore a curated collection of luxury timepieces, from timeless classics to avant-garde horological masterpieces. Experience the art of precision engineering and style at its finest."
					images={['/TimeCraftedPreview.png']}
					techStack={['react', 'ts', 'sass', 'nodejs', 'express', 'mongodb']}
					links={[
						{ name: 'Repo', link: '/' },
						{ name: 'Live', link: '/' },
					]}
					flipToLeft={true}
				/>
			</div>
		</section>
	);
}
