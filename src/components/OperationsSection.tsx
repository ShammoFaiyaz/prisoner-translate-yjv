import React from 'react';
import KpiCard from './KpiCard';
import { useTranslation } from '../i18n/useTranslation';

export default function OperationsSection(): JSX.Element {
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';
	return (
		<section>
			<div className="mb-2">
				<h3 className={`text-lg font-semibold text-gray-900 ${align}`}>{t('operations.section.title')}</h3>
				<p className={`mt-1 text-sm text-gray-600 ${align}`}>{t('operations.section.desc')}</p>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
				<KpiCard title={t('operations.kpi.timeSavedPerInteraction')} value="1.8 min" bgClass="bg-emerald-600" />
				<KpiCard title={t('overview.snapshotCards.dailyTranslations')} value="3,480" bgClass="bg-green-700" />
				<KpiCard title={t('operations.kpi.automatedVsHuman')} value={`${language === 'ar' ? 'مؤتمت' : 'automated'} 94%`} bgClass="bg-amber-700" />
				<KpiCard title={t('operations.kpi.legalSpeedImprovement')} value="+75%" bgClass="bg-emerald-600" />
				<KpiCard title={t('operations.kpi.medicalCommImprovement')} value="+50%" bgClass="bg-emerald-600" />
			</div>

			<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('operations.section.timeToComplete')}</p>
				<div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
					{/* Intake */}
					<div className="rounded-lg border border-gray-100 p-3">
						<p className={`text-sm font-medium text-gray-800 ${align}`}>{t('operations.label.intake')}</p>
						<div className="mt-3 space-y-2">
							<div className="flex items-center justify-between text-xs text-gray-600">
								<span>{t('operations.label.before')}</span>
								<span>12 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-400" style={{ width: '100%' }} />
							</div>
							<div className="mt-2 flex items-center justify-between text-xs text-gray-600">
								<span>{t('operations.label.after')}</span>
								<span>7 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" style={{ width: '58%' }} />
							</div>
						</div>
					</div>
					{/* Medical Visit */}
					<div className="rounded-lg border border-gray-100 p-3">
						<p className={`text-sm font-medium text-gray-800 ${align}`}>{t('operations.label.medicalVisit')}</p>
						<div className="mt-3 space-y-2">
							<div className="flex items-center justify-between text-xs text-gray-600">
								<span>{t('operations.label.before')}</span>
								<span>16 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-400" style={{ width: '100%' }} />
							</div>
							<div className="mt-2 flex items-center justify-between text-xs text-gray-600">
								<span>{t('operations.label.after')}</span>
								<span>8 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" style={{ width: '50%' }} />
							</div>
						</div>
					</div>
					{/* Legal Consult */}
					<div className="rounded-lg border border-gray-100 p-3">
						<p className={`text-sm font-medium text-gray-800 ${align}`}>{t('operations.label.legalConsult')}</p>
						<div className="mt-3 space-y-2">
							<div className="flex items-center justify-between text-xs text-gray-600">
								<span>{t('operations.label.before')}</span>
								<span>20 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-sky-600 to-sky-400" style={{ width: '100%' }} />
							</div>
							<div className="mt-2 flex items-center justify-between text-xs text-gray-600">
								<span>{t('operations.label.after')}</span>
								<span>11 min</span>
							</div>
							<div className="h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-400" style={{ width: '55%' }} />
							</div>
						</div>
					</div>
				</div>
				<p className="mt-3 text-xs text-gray-500">{t('operations.note.illustrative')}</p>
			</div>
		</section>
	);
}


