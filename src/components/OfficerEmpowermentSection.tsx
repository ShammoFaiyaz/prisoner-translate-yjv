import React from 'react';
import KpiCard from './KpiCard';

export default function OfficerEmpowermentSection(): JSX.Element {
	return (
		<section>
			<div className="mb-2">
				<h3 className="text-lg font-semibold text-gray-900">Officer Empowerment & Training</h3>
				<p className="mt-1 text-sm text-gray-600">
					AI assists and augments officers-speeding up workflows and improving outcomes without replacing human judgment.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<KpiCard title="Active Officers Today" value="263" bgClass="bg-green-700" />
				<KpiCard title="Training Completion" value="92% of staff" bgClass="bg-emerald-600" />
				<KpiCard title="Officer Satisfaction" value="4.7 / 5" bgClass="bg-amber-700" />
				<KpiCard title="Repetition Fatigue Reduction" value="-30%" bgClass="bg-emerald-600" />
			</div>

			<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900">Training Status</p>
				<div className="mt-3">
					<div className="h-3 w-full overflow-hidden rounded-full bg-gray-200">
						<div className="h-3 bg-emerald-500" style={{ width: '92%' }} />
						<div className="h-3 bg-amber-400" style={{ width: '6%' }} />
						<div className="h-3 bg-gray-400" style={{ width: '2%' }} />
					</div>
					<div className="mt-3 grid grid-cols-3 gap-2 text-xs">
						<div className="flex items-center gap-2">
							<span className="inline-block h-2 w-2 rounded-sm bg-emerald-500" />
							<span className="text-gray-700">Completed 92%</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="inline-block h-2 w-2 rounded-sm bg-amber-400" />
							<span className="text-gray-700">In progress 6%</span>
						</div>
						<div className="flex items-center gap-2">
							<span className="inline-block h-2 w-2 rounded-sm bg-gray-400" />
							<span className="text-gray-700">Not started 2%</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


