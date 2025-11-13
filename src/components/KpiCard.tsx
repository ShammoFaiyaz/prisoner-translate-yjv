import React from 'react';

export type KpiCardProps = {
	title: string;
	value: string | number;
	subtitle?: string;
	/**
	 * Tailwind classes applied to the value display. Can be used to create a badge
	 * by passing bg-*, text-*, and ring-* utilities.
	 */
	accentColorClass?: string;
	/**
	 * Optional SOLID background color class for the card (e.g. 'bg-sky-600').
	 * When provided, the card renders with white text for strong contrast.
	 */
	bgClass?: string;
	/**
	 * Typography overrides for the value when not using a badge.
	 */
	valueClass?: string;
};

export function KpiCard(props: KpiCardProps): JSX.Element {
	const {
		title,
		value,
		subtitle,
		accentColorClass,
		bgClass,
		valueClass,
	} = props;
	const isSolid = Boolean(bgClass);
	const containerClass = isSolid
		? `rounded-xl border border-gray-200 p-4 elevation ${bgClass} text-white`
		: 'rounded-xl border border-gray-200 bg-white p-4 elevation';
	const titleClasses = isSolid ? 'text-sm font-medium text-white/90' : 'text-sm font-medium text-gray-500';
	const valueTypography = `${valueClass ?? 'text-2xl'} font-semibold ${isSolid ? 'text-white' : 'text-gray-900'}`;
	const subtitleClasses = isSolid ? 'mt-1 text-xs text-white/80' : 'mt-1 text-xs text-gray-500';

	return (
		<div className={containerClass}>
			<div className="flex items-start justify-between">
				<div className="min-w-0">
					<p className={titleClasses}>{title}</p>
					<div className="mt-2">
						{accentColorClass ? (
							<span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${accentColorClass}`}>
								{value}
							</span>
						) : (
							<p className={valueTypography}>{value}</p>
						)}
					</div>
					{subtitle ? (
						<p className={subtitleClasses}>{subtitle}</p>
					) : null}
				</div>
			</div>
		</div>
	);
}

export default KpiCard;


