import { useEffect, useState } from 'react';

const Projects = () => {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1200);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 1200);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<>
			<div className="projects">
				<h2 className="section-title">Projects</h2>
				{!isSmallScreen ? <h3 className="project-title">Pathfinding Visualization</h3> : null}
				<div className="project">
					{!isSmallScreen ? <img src="display-algorithm.gif" className="project-img"></img> : null}
					<div className="info">
						{isSmallScreen ? <h3 className="project-title">Pathfinding Visualization</h3> : null}

						{isSmallScreen ? <img src="display-algorithm.gif" className="project-img"></img> : null}

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
								<img src="https://skillicons.dev/icons?i=html" className="techstack-icon" />
								<img src="https://skillicons.dev/icons?i=sass" className="techstack-icon" />
								<img src="https://skillicons.dev/icons?i=javascript" className="techstack-icon" />
							</div>
						</div>
						<div className="links">
							<a
								href="https://github.com/TylerMommsen/pathfinding-visualization"
								target="_blank"
								id="view-code-btn"
							>
								View Code
							</a>
							<a
								href="https://tylermommsen.github.io/pathfinding-visualization/"
								target="_blank"
								id="live-preview-btn"
							>
								Live Preview
							</a>
						</div>
					</div>
				</div>
				{!isSmallScreen ? <h3 className="project-title">Watch Store</h3> : null}
				<div className="project">
					<div className="info">
						<p className="project-description">
							Time Crafted is a mockup e-commerce store that immerses you in the world of high-class
							watches. Explore a curated collection of luxury timepieces, from timeless classics to
							avant-garde horological masterpieces. Experience the art of precision engineering and
							style at its finest.
						</p>
						<div className="tools-to-build-project">
							<h4>Tools Used</h4>
							<div className="tools">
								<img src="https://skillicons.dev/icons?i=react" className="techstack-icon" />
								<img src="https://skillicons.dev/icons?i=ts" className="techstack-icon" />
								<img src="https://skillicons.dev/icons?i=sass" className="techstack-icon" />
								<img src="https://skillicons.dev/icons?i=nodejs" className="techstack-icon" />
								<img src="https://skillicons.dev/icons?i=express" className="techstack-icon" />
								<img src="https://skillicons.dev/icons?i=mongodb" className="techstack-icon" />
							</div>
						</div>
						<div className="links">
							<a
								href="https://github.com/TylerMommsen/watch-store"
								target="_blank"
								id="view-code-btn"
							>
								View Code
							</a>
							<a id="live-preview-btn">Live Preview</a>
						</div>
					</div>
					{!isSmallScreen ? <p className="project-img">Placeholder</p> : null}
				</div>
			</div>
		</>
	);
};

export default Projects;
