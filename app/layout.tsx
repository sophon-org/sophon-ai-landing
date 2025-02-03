import localFont from 'next/font/local';

import './globals.css';

import type {Metadata} from 'next';
import type {ReactElement} from 'react';

const altehaasGrotesk = localFont({
	variable: '--font-altehaasgrotesk',
	src: [
		{
			path: './fonts/AlteHaasGroteskRegular.ttf',
			style: 'normal',
			weight: '400'
		},
		{
			path: './fonts/AlteHaasGroteskBold.ttf',
			style: 'normal',
			weight: '700'
		}
	]
});

export const metadata: Metadata = {
	title: 'Sophon AI Agents',
	description: 'Sophon AI Agents'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>): ReactElement {
	return (
		<html lang={'en'}>
			<body className={`${altehaasGrotesk.variable} bg-white antialiased`}>{children}</body>
		</html>
	);
}
