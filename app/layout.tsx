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
	title: 'Sophon Intelligence Agency',
	description:
		"Sophon's $5M initiative powering the next wave of AI agents onchain - bringing together elite teams, proven infrastructure, and substantial resources to build out a productive economy of interconnected AI agents."
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
