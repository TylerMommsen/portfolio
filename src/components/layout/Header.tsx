import React, { useEffect, useState } from 'react';

const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true);
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 768);
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollPos = window.scrollY;
			const isScrollingUp = prevScrollPos > currentScrollPos;

			setPrevScrollPos(currentScrollPos);

			// Set the visibility based on the scroll direction
			setVisible((prevVisible) => (isScrollingUp || currentScrollPos < 10 ? true : false));
		};

		if (!isMenuOpen) {
			window.addEventListener('scroll', handleScroll);
		}

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [prevScrollPos]);

	const scrollToSection = (sectionClass: string) => {
		if (isMenuOpen) openCloseMenu();
		const section = document.getElementsByClassName(sectionClass);

		if (section.length > 0) {
			section[0].scrollIntoView({ behavior: 'smooth' });
		}
	};

	const openCloseMenu = () => {
		setIsMenuOpen(!isMenuOpen);
		document.body.classList.toggle('menu-open', !isMenuOpen);
	};

	return (
		<>
			<header className={visible ? 'visible' : 'hidden'}>
				<div className="name">Tyler Mommsen</div>
				{isSmallScreen ? (
					<>
						<img src="menu-icon.svg" id="menu-icon" onClick={openCloseMenu}></img>
						{isMenuOpen ? (
							<>
								<nav className={isMenuOpen ? 'open' : ''}>
									<img src="exit-icon.png" id="exit-icon" onClick={openCloseMenu}></img>
									<button onClick={() => scrollToSection('about')}>About</button>
									<button onClick={() => scrollToSection('projects')}>Projects</button>
									<button onClick={() => scrollToSection('contact')}>Contact</button>
								</nav>
							</>
						) : null}
					</>
				) : (
					<>
						<nav>
							<button onClick={() => scrollToSection('about')}>About</button>
							<button onClick={() => scrollToSection('projects')}>Projects</button>
							<button onClick={() => scrollToSection('contact')}>Contact</button>
						</nav>
					</>
				)}
			</header>
		</>
	);
};

export default Header;
