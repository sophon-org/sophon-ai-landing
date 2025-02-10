import Link from 'next/link';

import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

export default function BottomCTA(): ReactElement {
	return (
		<section className={'mx-auto max-w-[1200px] pt-[160px] md:pt-[200px]'}>
			<div
				className={cn(
					'relative flex items-center justify-center overflow-hidden rounded-3xl md:rounded-[32px] text-white',
					'max-sm:aspect-[359/560] md:w-full md:max-w-[1200px] md:min-h-[683px] h-auto'
				)}>
				<div
					className={cn(
						'absolute inset-0 bg-cover bg-center',
						'bg-[url("/banner-mobile.jpg")] md:bg-[url("/banner.jpg")]'
					)}
				/>
				<div className={'relative z-10 p-4 text-center'}>
					<h2
						className={cn(
							'block -tracking-wider',
							'md:text-[71px] md:leading-[71px]',
							'text-[48px] leading-[48px]',
							'uppercase font-bold'
						)}>
						{'Join the SIA'}
					</h2>
					<p
						className={cn(
							'block font-bold uppercase pt-4 -tracking-wider',
							'md:text-[24px] md:leading-[24px]',
							'text-[16px] leading-[16px]',
							'max-w-[720px] w-full'
						)}>
						{'We bring together elite teams building practical, consumer-facing AI-powered applications.'}
					</p>
					<p
						className={cn(
							'mx-auto pt-[50px] md:pt-10 text-center text-white',
							'max-w-[720px] w-full tracking-[-0.02em]',
							'md:text-[24px] md:leading-[24px]',
							'text-[16px] leading-[18px]'
						)}>
						{'As more curated products roll out in Q1 2025 and beyond, expect the '}
						<b>{'agentic economy'}</b>
						{' on Sophon to grow in ways few other chains can match.'}
					</p>
					<p
						className={cn(
							'mx-auto pt-10 text-center text-white',
							'max-w-[720px] w-full tracking-[-0.02em]',
							'md:text-[24px] md:leading-[24px]',
							'text-[16px] leading-[18px]'
						)}>
						{
							'We invite you – builders, creators, and forward-thinkers – to join us and help define the next era of blockchain-powered entertainment, gaming, and finance.'
						}
					</p>
					<div className={'flex items-center justify-center pt-10'}>
						<Link
							href={'https://t.me/DeFiBrum'}
							target={'_blank'}>
							<button className={'button-regular min-w-[240px]'}>{'Chat on Telegram'}</button>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
