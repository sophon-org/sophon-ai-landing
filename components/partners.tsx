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
					fill={'currentColor'}
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

function PartnerCardBig(): ReactElement {
	return (
		<div
			className={cn(
				'space-y-4 rounded-lg bg-grey p-6 row-span-2 flex flex-col justify-between',
				'aspect-[327/360] md:aspect-auto'
			)}>
			<div className={'flex justify-end'}>
				<div className={'flex size-[120px] items-center justify-center rounded-lg bg-black'}>
					<svg
						className={'size-[60px] text-white'}
						viewBox={'0 0 24 24'}>
						<circle
							cx={'12'}
							cy={'12'}
							r={'8'}
							stroke={'currentColor'}
							fill={'none'}
							strokeWidth={'2'}
						/>
					</svg>
				</div>
			</div>
			<div className={'mt-auto'}>
				<p
					className={cn(
						'font-bold tracking-[-0.06em] text-black',
						'md:text-[36px] md:leading-[36px]',
						'text-[24px] leading-[24px]'
					)}>
					{'App Name'}
				</p>
				<p className={'mt-4 text-[14px] leading-[14px] tracking-[-0.03rem] text-black/30'}>
					{'Description text example text example in several lines text example in several lines'}
				</p>
				<div className={'mt-8 flex items-center gap-x-0.5 text-blue md:text-black/10'}>
					<b className={'text-[16px] font-bold leading-[16px] tracking-[-0.03rem]'}>{'Read more'}</b>
					<ArrowIcon />
				</div>
			</div>
		</div>
	);
}

function PartnerCardSmall(): ReactElement {
	return (
		<div className={cn('space-y-4 rounded-lg bg-grey p-6 flex flex-col justify-between')}>
			<div className={'flex justify-between gap-4 md:gap-16'}>
				<div className={'mt-auto'}>
					<p className={cn('font-bold tracking-[-0.06em] text-black', 'text-[24px] leading-[24px]')}>
						{'App Name'}
					</p>
					<p className={'mt-4 text-[14px] leading-[14px] tracking-[-0.03rem] text-black/30'}>
						{'Description text example text example in several lines text example in several lines'}
					</p>
					<div className={'mt-8 flex items-center gap-x-0.5 text-blue md:text-black/10'}>
						<b className={'text-[16px] font-bold leading-[16px] tracking-[-0.03rem]'}>{'Read more'}</b>
						<ArrowIcon />
					</div>
				</div>
				<div className={'flex aspect-square size-[80px] items-center justify-center rounded-lg bg-black'}>
					<svg
						className={'size-[40px] text-white'}
						viewBox={'0 0 24 24'}>
						<circle
							cx={'12'}
							cy={'12'}
							r={'8'}
							stroke={'currentColor'}
							fill={'none'}
							strokeWidth={'2'}
						/>
					</svg>
				</div>
			</div>
		</div>
	);
}

export default function Partners(): ReactElement {
	return (
		<section className={'mx-auto max-w-[1200px] pt-[160px] md:pt-[200px]'}>
			<div className={'container mx-auto'}>
				<h2
					className={cn(
						'mx-auto text-center -tracking-wider text-black',
						'md:text-[76px] md:leading-[76px]',
						'text-[40px] leading-[38px]'
					)}>
					{'Join the best.'}
				</h2>
				<div className={'grid grid-cols-1 gap-4 pt-10 md:grid-cols-3 md:pt-[49px]'}>
					<PartnerCardBig />
					<PartnerCardSmall />
					<PartnerCardSmall />
					<PartnerCardSmall />
					<PartnerCardSmall />
				</div>
			</div>
		</section>
	);
}
