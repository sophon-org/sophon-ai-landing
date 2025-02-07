import Image from 'next/image';
import Link from 'next/link';

import {cn} from '@/lib/utils';

import type {ReactElement} from 'react';

function ArrowIcon(): ReactElement {
	return (
		<svg
			width={'18'}
			height={'18'}
			viewBox={'0 0 18 18'}
			fill={'none'}
			className={'-mb-0.5'}
			xmlns={'http://www.w3.org/2000/svg'}>
			<mask
				id={'mask0_60_430'}
				style={{maskType: 'alpha'}}
				maskUnits={'userSpaceOnUse'}
				x={'0'}
				y={'0'}
				width={'18'}
				height={'18'}>
				<rect
					x={'18'}
					y={'18'}
					width={'18'}
					height={'18'}
					transform={'rotate(-180 18 18)'}
					fill={'#000000'}
				/>
			</mask>
			<g mask={'url(#mask0_60_430)'}>
				<path
					d={
						'M12.1316 8.25022L8.45664 4.57522C8.30664 4.42522 8.23477 4.25022 8.24102 4.05022C8.24727 3.85022 8.32539 3.67522 8.47539 3.52522C8.62539 3.38772 8.80039 3.31585 9.00039 3.3096C9.20039 3.30335 9.37539 3.37522 9.52539 3.52522L14.4754 8.47522C14.5504 8.55022 14.6035 8.63147 14.6348 8.71897C14.666 8.80647 14.6816 8.90022 14.6816 9.00022C14.6816 9.10022 14.666 9.19397 14.6348 9.28147C14.6035 9.36897 14.5504 9.45022 14.4754 9.52522L9.52539 14.4752C9.38789 14.6127 9.21602 14.6815 9.00977 14.6815C8.80352 14.6815 8.62539 14.6127 8.47539 14.4752C8.32539 14.3252 8.25039 14.1471 8.25039 13.9408C8.25039 13.7346 8.32539 13.5565 8.47539 13.4065L12.1316 9.75022L3.75039 9.75022C3.53789 9.75022 3.35977 9.67835 3.21602 9.5346C3.07227 9.39085 3.00039 9.21272 3.00039 9.00022C3.00039 8.78772 3.07227 8.6096 3.21602 8.46585C3.35977 8.3221 3.53789 8.25022 3.75039 8.25022L12.1316 8.25022Z'
					}
					fill={'currentColor'}
				/>
			</g>
		</svg>
	);
}

function PartnerCardBig(props: {logoURI: string; href: string}): ReactElement {
	const {logoURI, href} = props;

	return (
		<div
			className={cn(
				'space-y-4 rounded-lg bg-grey p-6 flex flex-col',
				'aspect-[327/360] w-full md:w-[440px] md:min-w-[440px] md:aspect-auto'
			)}>
			<div className={'flex justify-end'}>
				<div className={'flex size-[120px] items-center justify-center rounded-[24px]'}>
					<Image
						src={logoURI}
						alt={'Cod3x'}
						width={120}
						height={120}
						className={'object-contain'}
					/>
				</div>
			</div>
			<div className={'pt-[42px]'}>
				<p
					className={cn(
						'font-bold tracking-[-0.06em] text-black',
						'md:text-[36px] md:leading-[36px]',
						'text-[24px] leading-[24px]'
					)}>
					{'Cod3x'}
				</p>
				<p
					className={
						'mt-4 whitespace-break-spaces text-[20px] leading-[24px] tracking-[-0.04rem] text-black/30'
					}>
					{
						'Cod3x makes it easy to launch personalized AI agents to execute financial tasks on blockchain — no code required.\n\nAs this network grows on Sophon, it will expand beyond DeFi into gaming, social interactions, and new forms of entertainment.'
					}
				</p>
				<Link
					href={href}
					target={'_blank'}>
					<div
						className={
							'mt-8 flex cursor-pointer items-center gap-x-0.5 text-black/10 transition-colors hover:text-blue'
						}>
						<b className={'text-[16px] font-bold leading-[16px] tracking-[-0.03rem]'}>
							{'Learn more on X'}
						</b>
						<ArrowIcon />
					</div>
				</Link>
			</div>
		</div>
	);
}

function PartnerCardSmall(props: {title: string; description: string; logoURI: string; href: string}): ReactElement {
	const {title, description, logoURI, href} = props;

	return (
		<div className={cn('space-y-4 rounded-lg bg-grey p-6 flex flex-col justify-between')}>
			<div className={'flex flex-col'}>
				<div className={'flex flex-row items-center justify-between'}>
					<p className={cn('font-bold tracking-[-0.06em] text-black', 'text-[24px] leading-[24px]')}>
						{title}
					</p>
					<div className={'aspect-square size-[40px] rounded-[12px]'}>
						<Image
							src={logoURI}
							alt={title}
							width={40}
							height={40}
							className={'rounded-[12px] object-cover'}
						/>
					</div>
				</div>
				<p className={'mt-3 text-[14px] leading-[18px] tracking-[-0.03rem] text-black/30'}>{description}</p>
				<Link
					href={href}
					target={'_blank'}>
					<div
						className={
							'mt-9 flex cursor-pointer items-center gap-x-0.5 text-black/10 transition-colors hover:text-blue'
						}>
						<b className={'text-[16px] font-bold leading-[16px] tracking-[-0.03rem]'}>
							{'Learn more on X'}
						</b>
						<ArrowIcon />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default function Partners(): ReactElement {
	return (
		<section className={'mx-auto max-w-[1200px] pt-[160px] md:pt-[200px]'}>
			<div className={'mx-auto'}>
				<h2
					className={cn(
						'mx-auto text-center -tracking-wider text-black',
						'md:text-[76px] md:leading-[76px]',
						'text-[40px] leading-[38px]'
					)}>
					{'A Growing AI Ecosystem.'}
				</h2>
				<div className={'flex flex-col gap-4 pt-10 md:pt-[49px] lg:flex-row'}>
					<PartnerCardBig
						logoURI={'/partners/codex.png'}
						href={'https://x.com/Cod3xOrg'}
					/>
					<div className={'grid-col-1 grid gap-4 md:grid-cols-2'}>
						<PartnerCardSmall
							title={'Anomaly'}
							href={'https://x.com/anomalygamesinc'}
							logoURI={'/partners/anomaly.png'}
							description={
								'The creators of Nova — an Agentic World Builder that drives AI-powered gaming, trading, and social ecosystems. Leveraging AI to redefine AI-driven storytelling and interactive gameplay.'
							}
						/>
						<PartnerCardSmall
							title={'Scoreplay'}
							href={'https://x.com/ScorePlay_xyz'}
							logoURI={'/partners/scoreplay.png'}
							description={
								'Improving sports prediction markets with Crypto x AI — already serving 10,000+ users on testnet with 68% retention.'
							}
						/>
						<PartnerCardSmall
							title={'SPHNX'}
							href={'https://x.com/SPHNX_ai'}
							logoURI={'/partners/sphnx.png'}
							description={
								'SPHNX is a modular benchmark suite designed to evaluate and enhance the privacy management capabilities of LLM-based multi-agent systems.'
							}
						/>
						<PartnerCardSmall
							title={'Aethir'}
							href={'https://x.com/AethirCloud'}
							logoURI={'/partners/aethir.png'}
							description={
								'Aethir powers Sophon’s AI ecosystem with 3,000+ NVIDIA H100 GPUs and 43,000+ additional high-performance GPUs, providing the scalable, decentralized compute needed for advanced AI apps.'
							}
						/>
						<PartnerCardSmall
							title={'Beam'}
							href={'https://x.com/BuildOnBeam'}
							logoURI={'/partners/beam.png'}
							description={
								'BeamAI, led by an Oxford-trained AI researcher, pioneers innovations like lifelike NPCs, procedural world generation, and advanced player behavior analysis.'
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
