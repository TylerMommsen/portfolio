import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Tyler Portfolio',
	description: 'Portfolio site',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.className} overflow-x-hidden`}>
				<div id="root">{children}</div>
			</body>
		</html>
	);
}
