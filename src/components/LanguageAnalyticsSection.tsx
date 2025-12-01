import React from 'react';
import { useTranslation } from '../i18n/useTranslation';

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
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';
	const thAlign = language === 'ar' ? 'text-right' : 'text-left';
	return (
		<section>
			<div className="mb-2">
				<h3 className={`text-lg font-semibold text-gray-900 ${align}`}>{t('langAnalytics.title')}</h3>
				<p className={`mt-1 text-sm text-gray-600 ${align}`}>{t('langAnalytics.desc')}</p>
			</div>

			<div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
				{/* Redesigned compact table */}
				<div className="lg:col-span-2">
					<div className="elevation-static rounded-xl bg-white">
						<div className="overflow-hidden rounded-xl border border-gray-200">
							<table className="min-w-full table-fixed divide-y divide-gray-200">
								<colgroup>
									<col style={{ width: '20%' }} />
									<col style={{ width: '45%' }} />
									<col style={{ width: '17.5%' }} />
									<col style={{ width: '17.5%' }} />
								</colgroup>
								<thead className="bg-gray-50">
									<tr>
								<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600`}>
											{t('table.languageDetected')}
										</th>
										<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600`}>
											{t('table.dailySessions')}
										</th>
										<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600`}>
											{t('table.accuracy') || 'Accuracy'}
										</th>
										<th scope="col" className={`px-3 py-2 ${thAlign} text-xs font-semibold uppercase tracking-wide text-gray-600`}>
											{t('table.avgConfidence') || 'Avg Confidence'}
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 bg-white">
									{languageStats.map((row) => {
										const widthPct = Math.max(6, Math.round((row.dailySessions / maxSessions) * 100));
										const displayName = t(`lang.${row.language.toLowerCase()}`) || row.language;
										return (
											<tr key={row.language} className="hover:bg-gray-50/60">
												<td className="truncate px-3 py-2 text-sm font-medium text-gray-900">
													{displayName}
												</td>
												<td className="px-3 py-2">
													<div className="text-sm text-gray-900">{row.dailySessions}</div>
													<div className="mt-1 h-1.5 w-full rounded-full bg-gray-200">
														<div
															className="h-1.5 rounded-full bg-sky-500"
															style={{ width: `${widthPct}%` }}
														/>
													</div>
												</td>
												<td className="truncate px-3 py-2 text-sm text-gray-700">
													{row.accuracy.toFixed(1)}%
												</td>
												<td className="truncate px-3 py-2 text-sm text-gray-700">
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

				{/* Predicted Demand Card */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('langAnalytics.predictedNextMonth')}</p>
					<ul className="mt-3 space-y-2 text-sm text-gray-700">
						<li className="flex items-center justify-between">
							<span className="text-gray-700">{t('lang.urdu')}</span>
							<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">↑ {t('change.increase')}</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-gray-700">{t('lang.bengali')}</span>
							<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">↑ {t('change.increase')}</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-gray-700">{t('lang.tagalog')}</span>
							<span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-400/30">→ {t('change.stable')}</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-gray-700">{t('lang.amharic')}</span>
							<span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20">↑ {t('change.increase')}</span>
						</li>
						<li className="flex items-center justify-between">
							<span className="text-gray-700">{t('lang.english')}</span>
							<span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-medium text-gray-700 ring-1 ring-inset ring-gray-400/30">→ {t('change.stable')}</span>
						</li>
					</ul>
					<p className="mt-3 text-xs text-gray-500">
						{t('langAnalytics.disclaimer')}
					</p>
				</div>
			</div>
		</section>
	);
}


