import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Contact from '../sections/Contact';
import TechStack from '../sections/TechStack';

const Main = () => {
	return (
		<>
			<main>
				<div className="sections">
					<Hero />
					<About />
					<TechStack />
					<Projects />
					<Contact />
				</div>
			</main>
		</>
	);
};

export default Main;
