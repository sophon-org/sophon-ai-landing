import Link from 'next/link';

import {cn} from '@/lib/utils';

import {Logo} from './logo';

import type {ReactElement} from 'react';

export default function Hero(): ReactElement {
	return (
		<section
			className={cn(
				'relative flex w-full items-center justify-center rounded-3xl md:rounded-lg',
				'bg-cover bg-center',
				'bg-[url("/hero-mobile.jpg")] md:bg-[url("/hero.jpg")]',
				'aspect-[359/663] w-full md:aspect-[1904/828] md:min-h-[620px]'
			)}>
			<div className={'absolute inset-x-0 top-[32px] flex justify-center'}>
				<Logo className={'text-white'} />
			</div>
			<div className={'relative z-10 mx-auto space-y-10 px-4 text-center'}>
				<h1
					className={cn(
						'font-bold -tracking-wider text-white',
						'md:text-[72px] md:leading-[60px]',
						'text-[48px] leading-[48px]',
						'whitespace-break-spaces uppercase'
					)}>
					{'Sophon\nIntelligence\nAgency'}
					<span className={cn('block pt-1 -tracking-wider', 'text-[24px] leading-[24px]')}>{'( SIA )'}</span>
				</h1>
				<p
					className={cn(
						'mx-auto uppercase text-white pt-3',
						'max-w-sm md:max-w-[560px] whitespace-break-spaces',
						'md:text-[26px] md:leading-[26px] md:-tracking-wider',
						'text-[16px] leading-[18px] -tracking-[-0.02em]'
					)}>
					{
						'Bring autonomous AI agents to life with funding, GPU credits, and the infrastructure to scale – on the\nuser-centric chain.'
					}
				</p>
				<div className={'flex flex-col justify-center gap-4 md:flex-row'}>
					<button className={'button-regular'}>{'Chat on Telegram'}</button>
					<Link
						href={'https://blog.sophon.xyz/'}
						target={'_blank'}
						className={'flex max-md:w-full'}>
						<button className={'button-glass w-full'}>{'Learn more'}</button>
					</Link>
				</div>
			</div>
		</section>
	);
}
