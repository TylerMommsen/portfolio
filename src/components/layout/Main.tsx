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
				<Hero />
				<About />
				<Projects />
				<Contact />
			</main>
		</>
	);
};

export default Main;
