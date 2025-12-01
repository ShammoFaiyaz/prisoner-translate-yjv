import React from 'react';
import { sessions as mockSessions, Topic } from '../data/sessions';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '../i18n/useTranslation';

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
	const { t, language } = useTranslation();
	const thAlign = language === 'ar' ? 'text-right' : 'text-left';
	// Helpers to translate certain fields in RTL while preserving codes/numbers
	const trFacility = (val: string) => {
		if (language !== 'ar') return val;
		if (val === 'Riyadh Reform Center') return 'إصلاحية الرياض';
		if (val === 'Jeddah Rehabilitation Complex') return 'مجمع تأهيل جدة';
		if (val === 'Dammam Correctional Facility') return 'سجن الدمام';
		return val;
	};
	const trLocation = (val: string) => {
		if (language !== 'ar') return val;
		// Legal Room N
		const legal = /^Legal Room\s+(.+)$/i.exec(val);
		if (legal) return `غرفة قانونية ${legal[1]}`;
		// Medical Wing CODE
		const med = /^Medical Wing\s+(.+)$/i.exec(val);
		if (med) return `الجناح الطبي ${med[1]}`;
		// Intake Desk N
		const intake = /^Intake Desk\s+(.+)$/i.exec(val);
		if (intake) return `مكتب الاستقبال ${intake[1]}`;
		// Control Desk
		if (/^Control Desk$/i.test(val)) return 'مكتب التحكم';
		// Visitation Hall
		if (/^Visitation Hall$/i.test(val)) return 'قاعة الزيارة';
		return val;
	};
	const trOfficer = (val: string) => {
		if (language !== 'ar') return val;
		// Translate rank and common surnames
		const parts = val.split(' ');
		if (!parts.length) return val;
		const rank = parts.shift()!;
		const name = parts.join(' ');
		const rankMap: Record<string, string> = { 'Lt.': 'ملازم', 'Officer': 'ضابط', 'Sgt.': 'رقيب', 'Cpt.': 'نقيب' };
		const nameMap: Record<string, string> = {
			'Al-Faraj': 'الفراج',
			'Al-Qahtani': 'القحطاني',
			'Al-Harbi': 'الحربي',
			'Al-Juhani': 'الجهني',
			'Al-Mutairi': 'المطيري',
			'Al-Shahrani': 'الشهراني',
			'Al-Shehri': 'الشهري',
		};
		const arRank = rankMap[rank] || rank;
		const arName = nameMap[name] || name;
		return `${arRank} ${arName}`;
	};
	const trLanguage = (val: string) => {
		if (language !== 'ar') return val;
		const map: Record<string, string> = {
			Urdu: 'الأوردو',
			Bengali: 'البنغالية',
			Tagalog: 'التاغالوغ',
			Amharic: 'الأمهرية',
			Arabic: 'العربية',
			English: 'الإنجليزية',
		};
		return map[val] || val;
	};
	return (
		<section>
			<div className="mb-4">
				<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
					<div>
						<h3 className="text-lg font-semibold text-gray-900">
							{t('monitor.title')}
						</h3>
						<p className="mt-1 text-sm text-gray-600">
							{t('monitor.subtitle')}
						</p>
					</div>
					<div className="flex items-center gap-2">
						<select className="filter-control">
							<option>{t('header.lang.all')}</option>
							<option>{t('header.lang.ar')}</option>
							<option>{t('header.lang.en')}</option>
							<option>{t('header.lang.ur')}</option>
							<option>{t('header.lang.bn')}</option>
							<option>{t('header.lang.tl')}</option>
							<option>{t('header.lang.am')}</option>
						</select>
						<select className="filter-control">
							<option>{t('header.topic.all')}</option>
							<option>{t('header.topic.medical')}</option>
							<option>{t('header.topic.legal')}</option>
							<option>{t('header.topic.routine')}</option>
							<option>{t('header.topic.urgent')}</option>
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
									<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4`}>
										{t('table.sessionId')}
									</th>
									<th scope="col" className={`hidden md:table-cell px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4`}>
										{t('table.facility')}
									</th>
									<th scope="col" className={`hidden lg:table-cell px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4`}>
										{t('table.location')}
									</th>
									<th scope="col" className={`hidden xl:table-cell px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4`}>
										{t('table.officer')}
									</th>
									<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4`}>
										{t('table.languageDetected')}
									</th>
									<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4`}>
										{t('table.topic')}
									</th>
									<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4`}>
										{t('table.aiConfidence')}
									</th>
									<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600 sm:px-4`}>
										{t('table.duration')}
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
											{trFacility(s.facility)}
										</td>
										<td className="hidden lg:table-cell truncate px-3 py-2 text-sm text-gray-700 sm:px-4">
											{trLocation(s.location)}
										</td>
										<td className="hidden xl:table-cell truncate px-3 py-2 text-sm text-gray-700 sm:px-4">
											{trOfficer(s.officer)}
										</td>
										<td className="truncate px-3 py-2 text-sm text-gray-700 sm:px-4">
											{trLanguage(s.languageDetected)}
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


