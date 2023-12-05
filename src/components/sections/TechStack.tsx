const TechStack = () => {
	return (
		<>
			<div className="techstack">
				<h2 className="section-title">Tech Stack</h2>

				<div className="sections">
					<div className="techstack-section">
						<h3 className="techstack-title">Frontend</h3>
						<div className="icons">
							<img src="html-icon.svg" className="techstack-icon" />
							<img src="css-icon.svg" className="techstack-icon" />
							<img src="javascript-icon.svg" className="techstack-icon" />
							<img src="sass-icon.svg" className="techstack-icon" />
							<img src="react-icon.svg" className="techstack-icon" />
							<img src="typescript-icon.svg" className="techstack-icon" />
						</div>
					</div>

					<div className="techstack-section">
						<h3 className="techstack-title">Backend</h3>
						<div className="icons">
							<img src="nodejs-icon.svg" className="techstack-icon" />
							<img src="express-icon.svg" className="techstack-icon" />
							<img src="mongodb-icon.png" className="techstack-icon" />
						</div>
					</div>

					<div className="techstack-section">
						<h3 className="techstack-title">Extras</h3>
						<div className="icons">
							<img src="webpack-icon.svg" className="techstack-icon" />
							<img src="git-icon.svg" className="techstack-icon" />
							<img src="linux-icon.png" className="techstack-icon" />
							<img src="npm-icon.png" className="techstack-icon" />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TechStack;
