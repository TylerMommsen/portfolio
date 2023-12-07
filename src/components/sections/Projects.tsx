const Projects = () => {
	return (
		<>
			<div className="projects">
				<h2 className="section-title">Projects</h2>
				<div className="project">
					<p className="project-img">Placeholder</p>
					<div className="info">
						<h3 className="project-title">Pathfinding Visualization</h3>
						<p className="project-description">
							This is a visualization tool designed to demonstrate the inner workings of various
							pathfinding algorithms as they navigate from point A to point B. Additionally, it
							offers an engaging look at different maze generation algorithms and how they craft
							intricate mazes. This interactive tool is crafted using HTML, SCSS, and JavaScript.
							Feel free to explore and enjoy the experience!
						</p>
						<div className="tools-to-build-project">
							<h4>Tools Used</h4>
							<div className="tools">
								<img src="html-icon.svg" className="techstack-icon" />
								<img src="sass-icon.svg" className="techstack-icon" />
								<img src="javascript-icon.svg" className="techstack-icon" />
							</div>
						</div>
						<div className="links">
							<a>View Code</a>
							<a>Live Preview</a>
						</div>
					</div>
				</div>
				<div className="project">
					<div className="info">
						<h3 className="project-title">Watch Store</h3>
						<p className="project-description">
							Time Crafted is a mockup e-commerce store that immerses you in the world of high-class
							watches. Explore a curated collection of luxury timepieces, from timeless classics to
							avant-garde horological masterpieces. Experience the art of precision engineering and
							style at its finest.
						</p>
						<div className="tools-to-build-project">
							<h4>Tools Used</h4>
							<div className="tools">
								<img src="react-icon.svg" className="techstack-icon" />
								<img src="typescript-icon.svg" className="techstack-icon" />
								<img src="sass-icon.svg" className="techstack-icon" />
								<img src="nodejs-icon.svg" className="techstack-icon" />
								<img src="express-icon.svg" className="techstack-icon" />
								<img src="mongodb-icon.png" className="techstack-icon" />
							</div>
						</div>
						<div className="links">
							<a href="https://github.com/TylerMommsen/watch-store">View Code</a>
							<a>Live Preview</a>
						</div>
					</div>
					<p className="project-img">Placeholder</p>
				</div>
			</div>
		</>
	);
};

export default Projects;
