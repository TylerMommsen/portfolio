const Hero = () => {
	return (
		<>
			<div className="hero">
				<div className="info">
					<p>Placeholder img</p>
					<h1 className="position">Front-End Developer</h1>
					<p className="description">
						Hi, I'm Tyler Mommsen, a passionate web developer with a special interest in Front-End
						development.
					</p>
					<div className="contact-info">
						<a
							href="https://www.linkedin.com/in/tylermommsen/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="https://skillicons.dev/icons?i=linkedin"
								id="linkedin-icon"
								alt="LinkedIn"
							></img>
						</a>
						<a href="https://github.com/TylerMommsen" target="_blank" rel="noopener noreferrer">
							<img src="https://skillicons.dev/icons?i=github" id="github-icon" alt="GitHub"></img>
						</a>
					</div>
					<button className="view-projects-btn">View Projects</button>
				</div>
			</div>
		</>
	);
};

export default Hero;
