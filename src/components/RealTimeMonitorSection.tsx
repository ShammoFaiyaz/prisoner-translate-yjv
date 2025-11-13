import React from 'react';

export type Topic = 'Medical' | 'Legal' | 'Routine' | 'Urgent';

export interface RealTimeSession {
	id: string;
	facility: string;
	location: string;
	officer: string;
	languageDetected: string;
	topic: Topic;
	aiConfidence: number; // 0-100
	duration: string; // "mm:ss"
}

const mockSessions: RealTimeSession[] = [
	{
		id: 'TRX-2033-09',
		facility: 'Riyadh Reform Center',
		location: 'Legal Room 2',
		officer: 'Lt. Al-Faraj',
		languageDetected: 'Urdu',
		topic: 'Legal',
		aiConfidence: 97,
		duration: '06:42',
	},
	{
		id: 'TRX-2033-12',
		facility: 'Jeddah Rehabilitation Complex',
		location: 'Medical Wing A',
		officer: 'Officer Al-Qahtani',
		languageDetected: 'Bengali',
		topic: 'Medical',
		aiConfidence: 93,
		duration: '03:19',
	},
	{
		id: 'TRX-2033-18',
		facility: 'Dammam Correctional Facility',
		location: 'Intake Desk 1',
		officer: 'Sgt. Al-Harbi',
		languageDetected: 'Tagalog',
		topic: 'Routine',
		aiConfidence: 88,
		duration: '01:54',
	},
	{
		id: 'TRX-2033-21',
		facility: 'Riyadh Reform Center',
		location: 'Visitation Hall',
		officer: 'Cpt. Al-Juhani',
		languageDetected: 'Amharic',
		topic: 'Urgent',
		aiConfidence: 84,
		duration: '04:27',
	},
	{
		id: 'TRX-2033-24',
		facility: 'Jeddah Rehabilitation Complex',
		location: 'Legal Room 1',
		officer: 'Lt. Al-Mutairi',
		languageDetected: 'Urdu',
		topic: 'Legal',
		aiConfidence: 96,
		duration: '08:05',
	},
	{
		id: 'TRX-2033-26',
		facility: 'Dammam Correctional Facility',
		location: 'Medical Wing B',
		officer: 'Officer Al-Shahrani',
		languageDetected: 'Bengali',
		topic: 'Medical',
		aiConfidence: 91,
		duration: '02:48',
	},
	{
		id: 'TRX-2033-29',
		facility: 'Riyadh Reform Center',
		location: 'Control Desk',
		officer: 'Sgt. Al-Shehri',
		languageDetected: 'Tagalog',
		topic: 'Routine',
		aiConfidence: 86,
		duration: '00:52',
	},
];

const topicStyles: Record<Topic, string> = {
	Medical: 'bg-blue-50 text-blue-700 ring-blue-600/20',
	Legal: 'bg-purple-50 text-purple-700 ring-purple-600/20',
	Routine: 'bg-gray-100 text-gray-700 ring-gray-500/20',
	Urgent: 'bg-red-50 text-red-700 ring-red-600/20',
};

function confidenceBarColor(conf: number): string {
	if (conf >= 90) return 'bg-emerald-500';
	if (conf >= 75) return 'bg-amber-500';
	return 'bg-rose-500';
}

export default function RealTimeMonitorSection(): JSX.Element {
	return (
		<section>
			<div className="mb-4">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h3 className="text-lg font-semibold text-gray-900">
							Real-time Translation Monitor
						</h3>
						<p className="mt-1 text-sm text-gray-600">
							Live view of active sessions across all facilities
						</p>
					</div>
					<div className="flex items-center gap-2">
						<select className="filter-control">
							<option>All Languages</option>
							<option>Arabic</option>
							<option>English</option>
							<option>Urdu</option>
							<option>Bengali</option>
							<option>Tagalog</option>
							<option>Amharic</option>
						</select>
						<select className="filter-control">
							<option>All Topics</option>
							<option>Medical</option>
							<option>Legal</option>
							<option>Routine</option>
							<option>Urgent</option>
						</select>
					</div>
				</div>
			</div>

			<div className="mx-0 overflow-x-visible">
				<div className="inline-block min-w-full align-middle px-4 sm:px-6 lg:px-8">
					<div className="elevation-static rounded-xl bg-white">
						<div className="overflow-hidden rounded-xl border border-gray-200">
							<table className="min-w-full divide-y divide-gray-200">
							<thead className="bg-gray-50">
								<tr>
									<th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4">
										Session ID
									</th>
									<th scope="col" className="hidden md:table-cell px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4">
										Facility
									</th>
									<th scope="col" className="hidden lg:table-cell px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4">
										Location
									</th>
									<th scope="col" className="hidden xl:table-cell px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4">
										Officer
									</th>
									<th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4">
										Language Detected
									</th>
									<th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4">
										Topic
									</th>
									<th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4">
										AI Confidence
									</th>
									<th scope="col" className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4">
										Duration
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200 bg-white">
								{mockSessions.map((s) => (
									<tr key={s.id} className="hover:bg-gray-50/60">
										<td className="truncate px-3 py-2 text-sm font-medium text-gray-900 sm:px-4">
											{s.id}
										</td>
										<td className="hidden md:table-cell truncate px-3 py-2 text-sm text-gray-700 sm:px-4">
											{s.facility}
										</td>
										<td className="hidden lg:table-cell truncate px-3 py-2 text-sm text-gray-700 sm:px-4">
											{s.location}
										</td>
										<td className="hidden xl:table-cell truncate px-3 py-2 text-sm text-gray-700 sm:px-4">
											{s.officer}
										</td>
										<td className="truncate px-3 py-2 text-sm text-gray-700 sm:px-4">
											{s.languageDetected}
										</td>
										<td className="px-3 py-2 sm:px-4">
											<span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${topicStyles[s.topic]}`}>
												{s.topic}
											</span>
										</td>
										<td className="px-3 py-2 sm:px-4">
											<div className="flex min-w-[140px] flex-col">
												<div className="flex items-center justify-between">
													<span className="text-sm font-medium text-gray-900">{s.aiConfidence}%</span>
												</div>
												<div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
													<div
														className={`h-1.5 rounded-full ${confidenceBarColor(s.aiConfidence)}`}
														style={{ width: `${s.aiConfidence}%` }}
													/>
												</div>
											</div>
										</td>
										<td className="truncate px-3 py-2 text-sm text-gray-700 sm:px-4">
											{s.duration}
										</td>
									</tr>
								))}
							</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}


