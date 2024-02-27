import { FloatingNav } from '../ui/floating-navbar';

const navItems = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'About',
		link: '/about',
	},
	{
		name: 'Projects',
		link: '/projects',
	},
	{
		name: 'Contact',
		link: '/contact',
	},
];

const Header = () => {
	return <FloatingNav navItems={navItems} />;
};

export default Header;
