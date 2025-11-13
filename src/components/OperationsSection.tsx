import React from 'react';
import KpiCard from './KpiCard';

export default function OperationsSection(): JSX.Element {
	return (
		<section>
			<div className="mb-2">
				<h3 className="text-lg font-semibold text-gray-900">Operational Efficiency</h3>
				<p className="mt-1 text-sm text-gray-600">
					Faster procedures, fewer handoffs, and measurable workload reductions across facilities.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
				<KpiCard title="Avg Time Saved per Interaction" value="1.8 min" bgClass="bg-emerald-600" />
				<KpiCard title="Daily Translations" value="3,480" bgClass="bg-sky-600" />
				<KpiCard title="Automated vs Human-reviewed" value="94% automated" bgClass="bg-indigo-600" />
				<KpiCard title="Legal Consultation Speed Improvement" value="+75%" bgClass="bg-emerald-600" />
				<KpiCard title="Medical Communication Improvement" value="+50%" bgClass="bg-emerald-600" />
			</div>

			<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900">
					Time to complete procedure – Before vs After Translator System
				</p>
				<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
					{/* Intake */}
					<div className="rounded-lg border border-gray-100 p-3">
						<p className="text-sm font-medium text-gray-800">Intake</p>
						<div className="mt-3 space-y-2">
							<div className="flex items-center justify-between text-xs text-gray-600">
								<span>Before</span>
								<span>12 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-400" style={{ width: '100%' }} />
							</div>
							<div className="mt-2 flex items-center justify-between text-xs text-gray-600">
								<span>After</span>
								<span>7 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" style={{ width: '58%' }} />
							</div>
						</div>
					</div>
					{/* Medical Visit */}
					<div className="rounded-lg border border-gray-100 p-3">
						<p className="text-sm font-medium text-gray-800">Medical Visit</p>
						<div className="mt-3 space-y-2">
							<div className="flex items-center justify-between text-xs text-gray-600">
								<span>Before</span>
								<span>16 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-400" style={{ width: '100%' }} />
							</div>
							<div className="mt-2 flex items-center justify-between text-xs text-gray-600">
								<span>After</span>
								<span>8 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" style={{ width: '50%' }} />
							</div>
						</div>
					</div>
					{/* Legal Consult */}
					<div className="rounded-lg border border-gray-100 p-3">
						<p className="text-sm font-medium text-gray-800">Legal Consult</p>
						<div className="mt-3 space-y-2">
							<div className="flex items-center justify-between text-xs text-gray-600">
								<span>Before</span>
								<span>20 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-400" style={{ width: '100%' }} />
							</div>
							<div className="mt-2 flex items-center justify-between text-xs text-gray-600">
								<span>After</span>
								<span>11 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" style={{ width: '55%' }} />
							</div>
						</div>
					</div>
				</div>
				<p className="mt-3 text-xs text-gray-500">
					Illustrative timings showcasing reduced procedure durations with AI translation assistance.
				</p>
			</div>
		</section>
	);
}


