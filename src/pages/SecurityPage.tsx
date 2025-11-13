import React from 'react';
import SecuritySection from '../components/SecuritySection';

export default function SecurityPage(): JSX.Element {
	return (
		<section className="space-y-8">
			<SecuritySection />
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Miscommunication alerts — last 30 days</p>
					<div className="mt-4 h-40 w-full rounded-md bg-gradient-to-t from-rose-200 to-white relative overflow-hidden">
						<div className="absolute bottom-0 left-3 right-3 h-2 bg-rose-500/60" style={{ width: '8%' }} />
						<div className="absolute bottom-0 left-10 right-3 h-6 bg-rose-500/60" style={{ width: '16%' }} />
						<div className="absolute bottom-0 left-20 right-3 h-4 bg-rose-500/60" style={{ width: '12%' }} />
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">High-risk locations</p>
					<table className="mt-3 w-full text-sm">
						<thead>
							<tr className="text-left text-gray-600">
								<th className="py-2">Location</th>
								<th className="py-2">Facility</th>
								<th className="py-2">Risk</th>
							</tr>
						</thead>
						<tbody className="text-gray-800">
							<tr><td className="py-2">Legal Room 2</td><td>Riyadh Reform Center</td><td className="text-amber-600">Medium</td></tr>
							<tr><td className="py-2">Medical Wing A</td><td>Jeddah Rehabilitation</td><td className="text-rose-600">High</td></tr>
							<tr><td className="py-2">Intake Desk 1</td><td>Dammam Correctional</td><td className="text-emerald-600">Low</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}


