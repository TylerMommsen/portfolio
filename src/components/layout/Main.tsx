import Hero from '../sections/Hero';
import Projects from '../sections/Projects';
import About from '../sections/About';
import Contact from '../sections/Contact';
import Bg from '../common/bg';

const Main = () => {
	return (
		<>
			<main>
				<Bg />
				<div className="sections">
					<Hero />
					<About />
					<Projects />
					<Contact />
				</div>
			</main>
		</>
	);
};

export default Main;
