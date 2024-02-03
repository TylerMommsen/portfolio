const Contact: React.FC = () => {
	return (
		<>
			<div className="contact">
				<h2 className="section-title">Contact</h2>

				<div className="socials">
					<h2>Social</h2>
					<div className="socials-icons">
						<a href="https://github.com/TylerMommsen" target="_blank" rel="noopener noreferrer">
							<img src="https://skillicons.dev/icons?i=github" id="github-icon" alt="GitHub"></img>
						</a>
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
					</div>
				</div>

				<div className="mail">
					<h2>Mail</h2>
					<div className="contact-email">
						<p>tylermommsenbh@gmail.com</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
