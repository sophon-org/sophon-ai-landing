import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

export default function BottomCTA(): ReactElement {
	return (
		<section className={'mx-auto max-w-[1200px] pt-[160px] md:pt-[200px]'}>
			<div
				className={cn(
					'relative flex items-center justify-center overflow-hidden rounded-[32px] text-white',
					'aspect-[359/560] md:aspect-[1200/520]'
				)}>
				<div
					className={cn(
						'absolute inset-0 bg-cover bg-center',
						'bg-[url("/banner-mobile.jpg")] md:bg-[url("/banner.jpg")]'
					)}
				/>
				<div className={'relative z-10 space-y-10 px-4 text-center'}>
					<h2
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
					</h2>
					<p
						className={cn(
							'mx-auto tracking-[-0.02em] text-center text-white',
							'max-w-[720px]',
							'md:text-[26px] md:leading-[28px]',
							'text-[16px] leading-[18px]'
						)}>
						{
							'Introducing a new era of on-chain crypto culture, entertainment, and community. Empowering creators and developers with blockchain.'
						}
					</p>
					<div className={'flex items-center justify-center'}>
						<button className={'button-regular min-w-[240px]'}>{'Apply now'}</button>
					</div>
				</div>
			</div>
		</section>
	);
}
