import React from 'react';
import KpiCard from './KpiCard';

export default function HealthcareSection(): JSX.Element {
	return (
		<section>
			<div className="mb-2">
				<h3 className="text-lg font-semibold text-gray-900">Healthcare Support</h3>
				<p className="mt-1 text-sm text-gray-600">
					Medical staff use the translator to deliver accurate, compassionate care across languages.
				</p>
			</div>

			{/* Main metrics row */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<KpiCard title="Medical Consultations Supported (Today)" value="574" bgClass="bg-teal-600" />
				<KpiCard title="Medical Term Accuracy" value="99%" bgClass="bg-emerald-600" />
			</div>

			{/* Languages and Risk visualization */}
			<div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
				{/* Health Wing Languages */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Health Wing Languages</p>
					<div className="mt-3 flex flex-wrap gap-2">
						<span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-sky-50 text-sky-700 ring-sky-600/20">
							Urdu
						</span>
						<span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-teal-50 text-teal-700 ring-teal-600/20">
							Bengali
						</span>
						<span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-indigo-50 text-indigo-700 ring-indigo-600/20">
							Tagalog
						</span>
						<span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-600/20">
							Amharic
						</span>
					</div>
				</div>

				{/* Miscommunication Risk Index */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Miscommunication Risk Index</p>
					<div className="mt-3">
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-700">Safe zone</span>
							<span className="text-sm font-medium text-gray-900">{'< 1%'}</span>
						</div>
						<div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-200">
							{/* Fill 99% safe in emerald, leaving ~1% unfilled to imply low risk */}
							<div className="h-3 bg-emerald-500" style={{ width: '99%' }} />
						</div>
						<p className="mt-2 text-xs text-gray-500">
							Lower is better — current risk levels are within the safe operational range.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}


