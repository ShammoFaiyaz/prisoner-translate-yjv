import React from 'react';
import OperationsSection from '../components/OperationsSection';

export default function OperationsPage(): JSX.Element {
	return (
		<section className="space-y-8">
			<OperationsSection />
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Procedure completion time trend (last 14 days)</p>
					<div className="mt-4 h-40 rounded-md bg-gradient-to-b from-sky-200 to-white"></div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Top bottlenecks resolved by translator</p>
					<table className="mt-3 w-full text-sm">
						<thead>
							<tr className="text-left text-gray-600">
								<th className="py-2">Bottleneck</th>
								<th className="py-2">Impact</th>
							</tr>
						</thead>
						<tbody className="text-gray-800">
							<tr><td className="py-2">Language clarification at intake</td><td>Reduced wait by 40%</td></tr>
							<tr><td className="py-2">Legal briefing misunderstandings</td><td>↓ incidents by 63%</td></tr>
							<tr><td className="py-2">Medical symptom triage</td><td>Improved accuracy to 99%</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}


