import Image from 'next/image';

import {cn} from '@/lib/utils';

import type {ReactElement, ReactNode} from 'react';

function CardTitle(props: {children: ReactNode}): ReactElement {
	return (
		<h3
			className={cn(
				'font-bold tracking-[-0.06em] text-black',
				'md:text-[36px] md:leading-[36px]',
				'text-[24px] leading-[24px]'
			)}>
			{props.children}
		</h3>
	);
}

function CardDescription(props: {children: ReactNode}): ReactElement {
	return (
		<p
			className={cn(
				'mt-4 tracking-[-0.02rem] text-black/20',
				'md:text-[26px] md:leading-[28px]',
				'text-[14px] leading-[14px]'
			)}>
			{props.children}
		</p>
	);
}

function FundingCard(): ReactElement {
	return (
		<div
			className={
				'relative col-span-6 row-span-2 aspect-[327/360] overflow-hidden rounded-3xl bg-grey md:aspect-auto'
			}>
			<div className={'absolute bottom-[16.56%] right-[-16.56%] top-[6.25%]'}>
				<Image
					src={'/featureCircle.png'}
					alt={'Funding'}
					width={474}
					height={474}
					className={'size-full object-contain'}
				/>
			</div>
			<div className={'relative z-10 mt-auto flex h-full flex-col justify-end'}>
				<div className={'bg-white/20 p-6 pt-20 backdrop-blur-2xl md:p-10'}>
					<CardTitle>{'Funding ($1.5M)'}</CardTitle>
					<CardDescription>
						{'Description text example in several lines text example in several lines'}
					</CardDescription>
				</div>
			</div>
		</div>
	);
}

function GPUCreditsCard(): ReactElement {
	return (
		<div
			className={
				'relative col-span-6 row-span-1 aspect-[327/360] rounded-3xl bg-grey p-6 md:aspect-auto md:p-10'
			}>
			<div className={'mt-auto flex h-full flex-col justify-end'}>
				<CardTitle>{'GPU credits in collaborations with Aethir'}</CardTitle>
				<CardDescription>
					{'Description text example in several lines text example in several lines'}
				</CardDescription>
			</div>
		</div>
	);
}

function SupportCard(): ReactElement {
	return (
		<div
			className={
				'relative col-span-6 row-span-1 aspect-[327/360] rounded-3xl bg-grey p-6 md:aspect-auto md:p-10'
			}>
			<div className={'mt-auto flex h-full flex-col justify-end'}>
				<CardTitle>{'GTM support, technical support, connections'}</CardTitle>
				<CardDescription>
					{'Description text example in several lines text example in several lines'}
				</CardDescription>
			</div>
		</div>
	);
}

export default function Features(): ReactElement {
	return (
		<section className={'mx-auto max-w-[1200px] pt-[160px] md:pt-[200px]'}>
			<div className={'container mx-auto'}>
				<h2
					className={cn(
						'mx-auto text-center -tracking-wider text-black',
						'md:text-[76px] md:leading-[76px]',
						'text-[40px] leading-[38px]'
					)}>
					{'Why Sophon is the best place to launch AI agents.'}
				</h2>
				<div className={'mt-10 grid grid-cols-6 gap-4 md:mt-12 md:grid-cols-12'}>
					<FundingCard />

					<GPUCreditsCard />

					<SupportCard />
				</div>
			</div>
		</section>
	);
}
