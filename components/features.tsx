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
				'mt-0 md:mt-4 text-black/20',
				'md:text-[20px] md:leading-[24px] md:tracking-[-0.02rem]',
				'text-[14px] leading-[18px] tracking-[-0.03rem]'
			)}>
			{props.children}
		</p>
	);
}

function FundingCard(): ReactElement {
	return (
		<div
			className={
				'relative col-span-1 row-span-2 h-[360px] overflow-hidden rounded-3xl bg-grey md:aspect-[592/640] md:h-auto'
			}>
			<div className={'absolute inset-y-[40px] right-[-72px] md:right-[-288px] md:top-[-120px]'}>
				<Image
					src={'/featureCircle.png'}
					alt={'Funding'}
					width={720}
					height={720}
					className={'size-[280px] object-contain md:size-full'}
				/>
			</div>

			<div
				className={cn(
					'mb-6 w-fit rounded-[80px] bg-black/5 px-3 py-2 opacity-30 backdrop-blur-2xl',
					'absolute top-6 right-6 md:hidden'
				)}>
				<p className={cn('font-bold text-black text-[12px] leading-[16px] tracking-[-0.02em] uppercase')}>
					{'Coming soon'}
				</p>
			</div>

			<div className={'relative z-10 mt-auto flex h-full flex-col justify-end'}>
				<div className={'bg-white/20 p-6 backdrop-blur-2xl md:p-10'}>
					<div
						className={cn(
							'mb-6 w-fit rounded-[80px] bg-black/5 px-3 py-2 opacity-30 backdrop-blur-2xl',
							'hidden md:block'
						)}>
						<p
							className={cn(
								'font-bold text-black text-[12px] leading-[16px] tracking-[-0.02em] uppercase'
							)}>
							{'Coming soon'}
						</p>
					</div>
					<CardTitle>{'$1.5M via ‘Sophon Spark’'}</CardTitle>
					<div className={'flex flex-col items-start gap-6 pt-4 md:flex-row md:items-end md:gap-8 md:pt-0'}>
						<CardDescription>
							{
								'In partnership with Cod3x, this initiative will launch a ‘Giga Swarm’ of productive AI agents on Sophon.'
							}
						</CardDescription>
						<button className={'button-regular whitespace-nowrap'}>{'Read more'}</button>
					</div>
				</div>
			</div>
		</div>
	);
}

function GPUCreditsCard(): ReactElement {
	return (
		<div
			className={
				'relative col-span-1 row-span-1 h-[200px] rounded-3xl bg-grey p-6 md:aspect-auto md:h-auto md:p-10'
			}>
			<div className={'mt-auto flex h-full flex-col justify-between'}>
				<CardTitle>{'Aethir Compute Grants'}</CardTitle>
				<CardDescription>
					{
						'Through our partnership with Aethir, the leading decentralized compute provider, approved projects receive compute grants from Aethir’s $100M ecosystem fund – helping offset model training and execution costs.'
					}
				</CardDescription>
			</div>
		</div>
	);
}

function SupportCard(): ReactElement {
	return (
		<div
			className={
				'relative col-span-1 row-span-1 h-[200px] rounded-3xl bg-grey p-6 md:aspect-auto md:h-auto md:p-10'
			}>
			<div className={'mt-auto flex h-full flex-col justify-between'}>
				<CardTitle>{'Go-To-Market & Technical Support'}</CardTitle>
				<CardDescription>
					{
						'Teams building on Sophon gain access to strategic guidance, partnerships, and integration support to accelerate adoption.'
					}
				</CardDescription>
			</div>
		</div>
	);
}

export default function Features(): ReactElement {
	return (
		<section className={'mx-auto max-w-[1200px] pt-[160px] md:pt-[200px]'}>
			<div className={'mx-auto'}>
				<h2
					className={cn(
						'mx-auto text-center -tracking-wider text-black',
						'md:text-[76px] md:leading-[76px]',
						'text-[40px] leading-[38px]'
					)}>
					{'Supporting AI Agent Adoption.'}
				</h2>
				<div className={'mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2'}>
					<FundingCard />

					<GPUCreditsCard />

					<SupportCard />
				</div>
			</div>
		</section>
	);
}
