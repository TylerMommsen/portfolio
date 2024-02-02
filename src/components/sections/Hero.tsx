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
						<img src="linkedin-icon.svg" id="linkedin-icon"></img>
						<img src="github-icon.svg" id="github-icon"></img>
					</div>
					<button className="view-projects-btn">View Projects</button>
				</div>
			</div>
		</>
	);
};

export default Hero;
