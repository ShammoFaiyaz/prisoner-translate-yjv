import React from 'react';

type CircleMetricProps = {
	label: string;
	value: string;
	percent?: number; // 0-100 for the progress ring
};

function CircleMetric({ label, value, percent = 100 }: CircleMetricProps): JSX.Element {
	const pct = Math.max(0, Math.min(100, percent));
	const gradient = `conic-gradient(rgb(16 185 129) ${pct}%, rgb(229 231 235) ${pct}%)`; // emerald-500 and gray-200
	return (
		<div className="flex flex-col items-center">
			<div
				className="relative h-28 w-28 rounded-full"
				style={{ background: gradient }}
			>
				<div className="absolute inset-1 flex items-center justify-center rounded-full bg-white">
					<span className="text-sm font-semibold text-gray-900">{value}</span>
				</div>
			</div>
			<p className="mt-3 max-w-[10rem] text-center text-xs text-gray-700">{label}</p>
		</div>
	);
}

export default function Vision2030Section(): JSX.Element {
	return (
		<section>
			<div className="mb-2">
				<h3 className="text-lg font-semibold text-gray-900">Vision 2030 Impact</h3>
				<p className="mt-1 text-sm text-gray-600">Modern, humane, data-driven correctional facilities</p>
			</div>

			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<div className="grid grid-cols-2 place-items-center gap-6 sm:grid-cols-4">
					<CircleMetric label="Modernization Index" value="94%" percent={94} />
					<CircleMetric label="Humanitarian Standards Score" value="98%" percent={98} />
					<CircleMetric label="Innovation Adoption Rate" value="87%" percent={87} />
					<CircleMetric label="Global Benchmark Position" value="Top 5" percent={100} />
				</div>
				<p className="mt-6 text-center text-sm text-gray-700">
					Smart partnership. Human-centered technology. Serving justice and dignity.
				</p>
			</div>
		</section>
	);
}


