import React, { useEffect, useState } from 'react';

const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const isScrollingUp = prevScrollPos > currentScrollPos;

			setPrevScrollPos(currentScrollPos);

			// Set the visibility based on the scroll direction
			setVisible((prevVisible) => (isScrollingUp || currentScrollPos < 10 ? true : false));
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	return (
		<>
			<header className={visible ? 'visible' : 'hidden'}>
				<nav>
					<button>About</button>
					<button>Projects</button>
					<button>Contact</button>
				</nav>
			</header>
		</>
	);
};

export default Header;
