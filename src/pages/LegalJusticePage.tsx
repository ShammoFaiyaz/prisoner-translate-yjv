import React from 'react';
import LegalJusticeSection from '../components/LegalJusticeSection';

export default function LegalJusticePage(): JSX.Element {
	return (
		<section className="space-y-8">
			<LegalJusticeSection />
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Understanding Score by Language</p>
					<div className="mt-4 space-y-3">
						<div className="flex items-center gap-3">
							<span className="w-24 text-sm text-gray-700">Arabic</span>
							<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 rounded-full bg-emerald-500" style={{ width: '99%' }} /></div>
						</div>
						<div className="flex items-center gap-3">
							<span className="w-24 text-sm text-gray-700">Urdu</span>
							<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 rounded-full bg-emerald-500" style={{ width: '96%' }} /></div>
						</div>
						<div className="flex items-center gap-3">
							<span className="w-24 text-sm text-gray-700">Bengali</span>
							<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 rounded-full bg-emerald-500" style={{ width: '95%' }} /></div>
						</div>
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Today's legal sessions</p>
					<table className="mt-3 w-full text-sm">
						<thead>
							<tr className="text-left text-gray-600">
								<th className="py-2">Session ID</th>
								<th className="py-2">Language</th>
								<th className="py-2">Topic</th>
								<th className="py-2">Outcome</th>
							</tr>
						</thead>
						<tbody className="text-gray-800">
							<tr><td className="py-2">TRX-2033-09</td><td>Urdu</td><td>Sentencing</td><td>Understood</td></tr>
							<tr><td className="py-2">TRX-2033-12</td><td>Bengali</td><td>Appeal rights</td><td>Understood</td></tr>
							<tr><td className="py-2">TRX-2033-21</td><td>Amharic</td><td>Visitation rules</td><td>Needs follow-up</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}


