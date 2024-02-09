const Hero = () => {
	const scrollToSection = (sectionClass: string) => {
		const section = document.getElementsByClassName(sectionClass);

		if (section.length > 0) {
			section[0].scrollIntoView({ behavior: 'smooth' });
		}
	};

	return (
		<>
			<div className="hero">
				<div className="hero-container">
					<img src="HeroImg.jpg" id="hero-img"></img>
					<div className="info">
						<h1 className="position">Frontend Developer</h1>
						<p className="description">
							Hi, I'm Tyler Mommsen, a passionate web developer with a special interest in Frontend
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
								<img
									src="https://skillicons.dev/icons?i=github"
									id="github-icon"
									alt="GitHub"
								></img>
							</a>
						</div>
						<button className="view-projects-btn" onClick={() => scrollToSection('projects')}>
							View Projects
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Hero;
