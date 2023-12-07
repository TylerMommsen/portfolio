const TechStack = () => {
	return (
		<>
			<div className="techstack">
				<h2 className="section-title">Tech Stack</h2>

				<div className="sections">
					<div className="techstack-section">
						<h3 className="techstack-title">Frontend</h3>
						<div className="list">
							<div className="item">
								<img src="html-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">HTML</p>
							</div>
							<div className="item">
								<img src="css-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">CSS</p>
							</div>
							<div className="item">
								<img src="javascript-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">JavaScript</p>
							</div>
							<div className="item">
								<img src="sass-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">Sass</p>
							</div>
							<div className="item">
								<img src="react-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">React</p>
							</div>
							<div className="item">
								<img src="typescript-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">TypeScript</p>
							</div>
						</div>
					</div>

					<div className="techstack-section">
						<h3 className="techstack-title">Backend</h3>
						<div className="list">
							<div className="item">
								<img src="nodejs-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">NodeJS</p>
							</div>
							<div className="item">
								<img src="express-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">Express</p>
							</div>
							<div className="item">
								<img src="mongodb-icon.png" className="techstack-icon" />
								<p className="techstack-item-name">MongoDB</p>
							</div>
						</div>
					</div>

					<div className="techstack-section">
						<h3 className="techstack-title">Tools</h3>
						<div className="list">
							<div className="item">
								<img src="webpack-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">Webpack</p>
							</div>
							<div className="item">
								<img src="git-icon.svg" className="techstack-icon" />
								<p className="techstack-item-name">Git</p>
							</div>
							<div className="item">
								<img src="linux-icon.png" className="techstack-icon" />
								<p className="techstack-item-name">Linux</p>
							</div>
							<div className="item">
								<img src="npm-icon.png" className="techstack-icon" />
								<p className="techstack-item-name">NPM</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TechStack;
