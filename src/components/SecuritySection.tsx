import React from 'react';
import KpiCard from './KpiCard';

export default function SecuritySection(): JSX.Element {
	return (
		<section>
			<div className="mb-4">
				<h3 className="text-lg font-semibold text-gray-900">
					Security & Incident Prevention
				</h3>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{/* Using subtitle to convey the downward trend; can be upgraded to a badge later */}
				<KpiCard
					title="Comms-related Incidents (This Month)"
					value="3"
					subtitle="↓ 63% vs last month"
					bgClass="bg-amber-700"
				/>
				<KpiCard
					title="Emergency Translation Reliability"
					value="99.4%"
					subtitle="Crisis-mode sessions"
					bgClass="bg-emerald-600"
				/>
				<KpiCard
					title="High-risk Miscommunication Alerts (24h)"
					value="1"
					subtitle="Flagged sessions"
					bgClass="bg-amber-700"
				/>
			</div>

			<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900">
					Incident Index – Before vs After Translator System
				</p>
				<div className="mt-4 flex h-56 items-end justify-center gap-8">
					{/* Before bar (baseline 100) */}
					<div className="flex flex-col items-center">
						<div className="mb-2 text-sm font-semibold text-gray-700">100</div>
						<div className="flex h-44 w-12 items-end justify-center rounded-md bg-gradient-to-t from-teal-600 to-teal-400 shadow-inner">
							<div className="h-full w-full rounded-md" />
						</div>
						<div className="mt-2 text-xs text-gray-600">Before</div>
					</div>
					{/* After bar (37) */}
					<div className="flex flex-col items-center">
						<div className="mb-2 text-sm font-semibold text-gray-700">37</div>
						<div className="flex h-44 w-12 items-end justify-center rounded-md bg-gray-100 shadow-inner">
							<div
								className="w-full rounded-md bg-gradient-to-t from-emerald-600 to-emerald-400"
								style={{ height: '37%' }}
							/>
						</div>
						<div className="mt-2 text-xs text-gray-600">After</div>
					</div>
				</div>
				<p className="mt-3 text-xs text-gray-500">
					Hypothetical index illustrating reduction in security incidents attributable to improved multilingual communication.
				</p>
			</div>
		</section>
	);
}


