import React from 'react';
import KpiCard from './KpiCard';
import { useTranslation } from '../i18n/useTranslation';

export default function SecuritySection(): JSX.Element {
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';
	return (
		<section>
			<div className="mb-4">
				<h3 className={`text-lg font-semibold text-gray-900 ${align}`}>
					{t('security.section.title')}
				</h3>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{/* Using subtitle to convey the downward trend; can be upgraded to a badge later */}
				<KpiCard
					title={t('security.kpi.commsIncidents')}
					value="3"
					subtitle={`↓ 63% ${t('overview.snapshotCards.vsLastMonth')}`}
					bgClass="bg-amber-700"
				/>
				<KpiCard
					title={t('security.kpi.emergencyReliability')}
					value="99.4%"
					subtitle={t('overview.snapshotCards.crisisMode')}
					bgClass="bg-emerald-600"
				/>
				<KpiCard
					title={t('security.kpi.highRiskAlerts')}
					value="1"
					subtitle={t('security.flaggedSessions')}
					bgClass="bg-amber-700"
				/>
			</div>

			<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className={`text-sm font-medium text-gray-900 ${align}`}>
					{t('security.chart.incidentIndex')}
				</p>
				<div className="mt-4 flex h-56 items-end justify-center gap-8">
					{/* Before bar (baseline 100) */}
					<div className="flex flex-col items-center">
						<div className="mb-2 text-sm font-semibold text-gray-700">100</div>
						<div className="flex h-44 w-12 items-end justify-center rounded-md bg-gradient-to-t from-teal-600 to-teal-400 shadow-inner">
							<div className="h-full w-full rounded-md" />
						</div>
						<div className="mt-2 text-xs text-gray-600">{t('security.label.before')}</div>
					</div>
					{/* After bar (37) */}
					<div className="flex flex-col items-center">
						<div className="mb-2 text-sm font-semibold text-gray-700">37</div>
						<div className="flex h-44 w-12 items-end justify-center rounded-md bg-gray-100 shadow-inner">
							<div
								className="w-full rounded-md bg-gradient-to-t from-emerald-600 to-emerald-400"
								style={{ height: '37%' }}
							/>
						</div>
						<div className="mt-2 text-xs text-gray-600">{t('security.label.after')}</div>
					</div>
				</div>
				<p className="mt-3 text-xs text-gray-500"></p>
			</div>
		</section>
	);
}


