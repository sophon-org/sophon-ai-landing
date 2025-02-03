import {cn} from '@/lib/utils';

import {Logo} from './ui/logo';

import type {ReactElement} from 'react';

export default function Hero(): ReactElement {
	return (
		<section
			className={cn(
				'relative flex w-full items-center justify-center rounded-3xl md:rounded-lg',
				'bg-cover bg-center',
				'bg-[url("/hero-mobile.jpg")] md:bg-[url("/hero.jpg")]',
				'aspect-[359/663] md:aspect-[1904/828]'
			)}>
			<div className={'absolute inset-x-0 top-[32px] flex justify-center'}>
				<Logo className={'text-white'} />
			</div>
			<div className={'relative z-10 mx-auto space-y-10 px-4 text-center'}>
				<h1
					className={cn(
						'font-bold -tracking-wider text-white',
						'md:text-[39px] md:leading-[39px]',
						'text-[24px] leading-[24px]'
					)}>
					{'JOIN SOPHON'}
					<span
						className={cn(
							'block pt-1 -tracking-wider',
							'md:text-[71px] md:leading-[71px]',
							'text-[48px] leading-[48px]'
						)}>
						{'(AI PROGRAM)'}
					</span>
				</h1>
				<p
					className={cn(
						'mx-auto uppercase -tracking-wider text-white',
						'max-w-sm md:max-w-[560px]',
						'md:text-[31px] md:leading-[28px]',
						'text-[24px] leading-[22px]'
					)}>
					{'Example text description in several lines text description in several lines Example text'}
				</p>
				<div className={'flex flex-col justify-center gap-4 md:flex-row'}>
					<button className={'button-regular'}>{'Apply now'}</button>
					<button className={'button-glass'}>{'Learn more'}</button>
				</div>
			</div>
		</section>
	);
}
