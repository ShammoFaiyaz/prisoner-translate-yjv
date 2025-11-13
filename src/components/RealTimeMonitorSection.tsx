import React from 'react';
import { sessions as mockSessions, Topic } from '../data/sessions';
import { useNavigate } from 'react-router-dom';

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
	const navigate = useNavigate();
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
				<div className="inline-block min-w-full align-middle px-0">
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
									<tr key={s.id} className="hover:bg-gray-50/60 cursor-pointer" onClick={() => navigate(`/report/${s.id}`)}>
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


