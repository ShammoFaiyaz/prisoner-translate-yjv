import React from 'react';

type LanguageStat = {
	language: string;
	dailySessions: number;
	accuracy: number; // percentage 0-100
	avgConfidence: number; // percentage 0-100
};

const languageStats: LanguageStat[] = [
	{ language: 'Arabic', dailySessions: 920, accuracy: 99.2, avgConfidence: 98.0 },
	{ language: 'English', dailySessions: 780, accuracy: 99.5, avgConfidence: 98.8 },
	{ language: 'Urdu', dailySessions: 610, accuracy: 98.1, avgConfidence: 96.3 },
	{ language: 'Bengali', dailySessions: 540, accuracy: 97.8, avgConfidence: 95.4 },
	{ language: 'Tagalog', dailySessions: 480, accuracy: 97.1, avgConfidence: 94.8 },
	{ language: 'Amharic', dailySessions: 360, accuracy: 96.4, avgConfidence: 93.2 },
];

const maxSessions = Math.max(...languageStats.map(s => s.dailySessions));

export default function LanguageAnalyticsSection(): JSX.Element {
	return (
		<section>
			<div className="mb-2">
				<h3 className="text-lg font-semibold text-gray-900">Language Analytics</h3>
				<p className="mt-1 text-sm text-gray-600">
					Most common languages and their translation performance.
				</p>
			</div>

			<div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
				{/* Table */}
				<div className="lg:col-span-2">
					<div className="-mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
						<div className="inline-block min-w-full align-middle px-4 sm:px-6 lg:px-8">
							<div className="elevation-static rounded-xl bg-white">
								<div className="overflow-hidden rounded-xl border border-gray-200">
									<table className="min-w-full divide-y divide-gray-200">
									<thead className="bg-gray-50">
										<tr>
											<th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6">
												Language
											</th>
											<th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6">
												Daily Sessions
											</th>
											<th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6">
												Accuracy
											</th>
											<th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-6">
												Avg Confidence
											</th>
										</tr>
									</thead>
									<tbody className="divide-y divide-gray-200 bg-white">
										{languageStats.map((row) => {
											const widthPct = Math.max(6, Math.round((row.dailySessions / maxSessions) * 100)); // ensure visible
											return (
												<tr key={row.language} className="hover:bg-gray-50/60">
													<td className="whitespace-nowrap px-4 py-3 text-sm font-medium text-gray-900 sm:px-6">
														{row.language}
													</td>
													<td className="px-4 py-3 sm:px-6">
														<div className="text-sm text-gray-900">{row.dailySessions}</div>
														<div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
															<div
																className="h-1.5 rounded-full bg-sky-500"
																style={{ width: `${widthPct}%` }}
															/>
														</div>
													</td>
													<td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700 sm:px-6">
														{row.accuracy.toFixed(1)}%
													</td>
													<td className="whitespace-nowrap px-4 py-3 text-sm text-gray-700 sm:px-6">
														{row.avgConfidence.toFixed(1)}%
													</td>
												</tr>
											);
										})}
									</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Predicted Demand Card */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Predicted Demand Next Month</p>
					<ul className="mt-3 space-y-2 text-sm text-gray-700">
						<li className="flex items-center justify-between">
							<span className="text-gray-700">Urdu</span>
							<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">↑ Increase</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-gray-700">Bengali</span>
							<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">↑ Increase</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-gray-700">Tagalog</span>
							<span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-400/30">→ Stable</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-gray-700">Amharic</span>
							<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">↑ Increase</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-gray-700">English</span>
							<span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-400/30">→ Stable</span>
						</li>
					</ul>
					<p className="mt-3 text-xs text-gray-500">
						Mock predictions for planning purposes. Actual demand may vary.
					</p>
				</div>
			</div>
		</section>
	);
}


