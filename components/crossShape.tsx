import type {ReactElement, SVGProps} from 'react';

function CrossShape(props: SVGProps<SVGSVGElement>): ReactElement {
	return (
		<svg
			width={'92'}
			height={'92'}
			viewBox={'0 0 92 92'}
			fill={'none'}
			xmlns={'http://www.w3.org/2000/svg'}
			{...props}>
			<path
				d={'M46.0862 92V46.0887H0M45.9138 0V45.9113H92M45.9138 92V46.0887H92M46.0862 0V45.9113H0'}
				stroke={'white'}
				strokeWidth={'0.695104'}
				strokeDasharray={'0.7 0.7'}
			/>
		</svg>
	);
}
export {CrossShape};
