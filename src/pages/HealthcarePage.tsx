import React from 'react';
import HealthcareSection from '../components/HealthcareSection';

export default function HealthcarePage(): JSX.Element {
	return (
		<section className="space-y-8">
			<HealthcareSection />
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation lg:col-span-2">
					<p className="text-sm font-medium text-gray-900">Daily medical consultations (last 14 days)</p>
					<div className="mt-4 h-40 rounded-md bg-gradient-to-b from-teal-200 to-white"></div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Language distribution in medical wing</p>
					<div className="mt-4 grid grid-cols-2 gap-4">
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-sm">Urdu</div>
							<p className="mt-2 text-xs text-gray-700">35%</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-sm">Bengali</div>
							<p className="mt-2 text-xs text-gray-700">28%</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm">Tagalog</div>
							<p className="mt-2 text-xs text-gray-700">22%</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm">Amharic</div>
							<p className="mt-2 text-xs text-gray-700">15%</p>
						</div>
					</div>
				</div>
			</div>
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900">Recent medical interactions</p>
				<table className="mt-3 w-full text-sm">
					<thead>
						<tr className="text-left text-gray-600">
							<th className="py-2">Language</th>
							<th className="py-2">Type of visit</th>
							<th className="py-2">Urgency</th>
							<th className="py-2">Outcome</th>
						</tr>
					</thead>
					<tbody className="text-gray-800">
						<tr><td className="py-2">Urdu</td><td>Checkup</td><td>Routine</td><td>Understood</td></tr>
						<tr><td className="py-2">Bengali</td><td>Injury</td><td>Urgent</td><td>Understood</td></tr>
						<tr><td className="py-2">Tagalog</td><td>Prescription</td><td>Routine</td><td>Understood</td></tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}


