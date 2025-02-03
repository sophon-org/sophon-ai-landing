import BottomCTA from '../components/bottom-cta';
import Features from '../components/features';
import Footer from '../components/footer';
import Hero from '../components/hero';
import Partners from '../components/partners';

import type {ReactElement} from 'react';

export default function Page(): ReactElement {
	return (
		<main className={'min-h-screen p-2'}>
			<Hero />
			<Features />
			<Partners />
			<BottomCTA />
			<Footer />
		</main>
	);
}
