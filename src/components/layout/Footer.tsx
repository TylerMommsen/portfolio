'use client';

import React, { useState, useEffect } from 'react';

const Footer = () => {
	const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

	useEffect(() => {
		const intervalId = setInterval(
			() => {
				setCurrentYear(new Date().getFullYear());
			},
			1000 * 60 * 60
		);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			<footer className="bg-background grid place-items-center text-primary p-2">
				<p>Copyright © {currentYear} Tyler Mommsen</p>
			</footer>
		</>
	);
};

export default Footer;
