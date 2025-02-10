import Image from 'next/image';
import Link from 'next/link';

import {cn} from '@/lib/utils';

import type {ReactElement, ReactNode} from 'react';

function CardTitle(props: {children: ReactNode}): ReactElement {
	return (
		<h3
			className={cn(
				'font-bold tracking-[-0.06em] text-white',
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
				'mt-0 md:mt-4 text-white',
				'md:text-[20px] md:leading-[24px] md:tracking-[-0.02rem]',
				'text-[14px] leading-[18px] tracking-[-0.03rem]'
			)}>
			{props.children}
		</p>
	);
}

function FundingCard(): ReactElement {
	return (
		<Link
			href={'https://blog.sophon.xyz/'}
			target={'_blank'}
			className={cn(
				'relative col-span-1 row-span-2 h-[360px] overflow-hidden rounded-3xl md:h-full',
				'bg-grey hover:bg-gradient-to-b from-[#F9FBFB] to-[#EDF6FB] transition-colors'
			)}>
			<div className={'absolute inset-0'}>
				<Image
					src={'/feature-spark.jpg'}
					alt={'Funding'}
					width={720}
					height={720}
					className={'object-cover md:size-full'}
				/>
			</div>

			<div
				className={cn(
					'mb-6 w-fit rounded-[80px] bg-white/10 px-3 py-2 opacity-30 backdrop-blur-2xl',
					'absolute top-6 right-6 md:hidden'
				)}>
				<p className={cn('font-bold text-white text-[12px] leading-[16px] tracking-[-0.02em] uppercase')}>
					{'Coming soon'}
				</p>
			</div>

			<div className={'relative z-10 mt-auto flex h-full flex-col justify-end'}>
				<div
					style={{
						background:
							'linear-gradient(180deg, rgba(82, 163, 229, 0.01) 0%, rgba(82, 163, 229, 0.5) 100%)',
						backdropFilter: 'blur(32px)'
					}}
					className={'p-6 md:p-10'}>
					<div
						className={cn(
							'mb-6 w-fit rounded-[80px] bg-white/10 px-3 py-2 backdrop-blur-2xl',
							'hidden md:block'
						)}>
						<p
							className={cn(
								'font-bold text-white text-[12px] leading-[16px] tracking-[-0.02em] uppercase'
							)}>
							{'Coming soon'}
						</p>
					</div>
					<CardTitle>{'$1.5M via ‘Sophon Spark’'}</CardTitle>
					<div className={'flex flex-col items-start gap-6 pt-4 md:flex-row md:items-end md:gap-8 md:pt-0'}>
						<CardDescription>
							{'In partnership with Cod3x, this initiative will launch a '}
							<b>{'‘Giga Swarm’'}</b>
							{' of productive AI agents on Sophon.'}
						</CardDescription>
						<Link
							href={'https://blog.sophon.xyz/ai-agent-initiative/'}
							target={'_blank'}>
							<button className={'button-regular whitespace-nowrap'}>{'Read more'}</button>
						</Link>
					</div>
				</div>
			</div>
		</Link>
	);
}

function GPUCreditsCard(): ReactElement {
	return (
		<div
			className={
				'relative col-span-1 row-span-1 h-[200px] rounded-3xl bg-grey p-6 md:aspect-auto md:h-auto md:p-10'
			}>
			<div className={'absolute inset-0 z-10 overflow-hidden rounded-3xl'}>
				<Image
					src={'/feature-aethir.jpg'}
					alt={'Funding'}
					width={592}
					height={312}
					className={'size-full object-cover'}
				/>
			</div>
			<div className={'relative z-20 mt-auto flex h-full flex-col justify-between'}>
				<CardTitle>{'$1M in Aethir Compute Grants'}</CardTitle>
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
			<div className={'absolute inset-0 z-10 overflow-hidden rounded-3xl'}>
				<Image
					src={'/feature-gtm.jpg'}
					alt={'Funding'}
					width={592}
					height={312}
					className={'size-full object-cover'}
				/>
			</div>
			<div className={'relative z-20 mt-auto flex h-full flex-col justify-between'}>
				<CardTitle>{'Funding, Go-To-Market & Technical Support'}</CardTitle>
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
					{'$5M to Support AI Agent Adoption.'}
				</h2>
				<div className={'mt-10 grid grid-cols-1 gap-4 md:mt-12 md:grid-cols-2'}>
					<FundingCard />

					<GPUCreditsCard />

					<SupportCard />
				</div>
				<div
					className={
						'relative mt-4 w-full overflow-hidden rounded-3xl bg-[#5095CC] md:aspect-[1200/640] md:h-auto'
					}>
					<div className={'relative z-10 grid size-full grid-cols-12'}>
						<div className={'relative col-span-12 h-[482px] md:col-span-8 md:h-auto'}>
							<div
								style={{boxShadow: '0px 0px 100px 80px #FFFFFF1A inset'}}
								className={
									'relative z-20 col-span-8 flex h-full flex-col bg-white/10 px-10 py-14 backdrop-blur-3xl min-[1000px]:pr-[200px]'
								}>
								<p
									className={cn(
										'font-bold tracking-[-0.05em] text-white',
										// 'md:text-[32px] md:leading-[28px]',
										'min-[1000px]:text-[32px] min-[1000px]:leading-[28px]',
										'text-[24px] leading-[24px]'
									)}>
									{
										"While many talk about AI's potential when combined with blockchain, we're focused on making it practical, accessible, and immediately valuable for users."
									}
								</p>
								<div className={'mt-auto flex flex-col gap-10'}>
									<Image
										src={'/logo.png'}
										alt={'SIA'}
										width={120}
										height={56}
										className={'h-[56px] w-[120px] mix-blend-luminosity'}
									/>
									<p
										className={cn(
											'text-white',
											'md:text-[20px] md:leading-[20px] md:tracking-[-0.02em]',
											'text-[14px] leading-[18px] tracking-[-0.03em]'
										)}>
										{
											'The SIA brings together elite teams, proven infrastructure, and substantial resources to make this vision real.'
										}
									</p>
								</div>
							</div>
						</div>
						<div className={'col-span-12 block aspect-square w-full md:hidden'}>
							<video
								src={'/sia-video.webm'}
								className={'size-full object-cover'}
								autoPlay
								muted
								loop
							/>
						</div>
					</div>
					<div className={'absolute inset-0 hidden md:block'}>
						<video
							src={'/sia-video.webm'}
							className={'size-full object-cover'}
							autoPlay
							muted
							loop
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
