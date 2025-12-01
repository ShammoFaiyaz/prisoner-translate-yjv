import React from 'react';
import KpiCard from './KpiCard';
import { useTranslation } from '../i18n/useTranslation';

export default function HealthcareSection(): JSX.Element {
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';
	return (
		<section>
			<div className="mb-2">
				<h3 className={`text-lg font-semibold text-gray-900 ${align}`}>{t('health.section.title')}</h3>
				<p className={`mt-1 text-sm text-gray-600 ${align}`}>{t('health.section.subtitle')}</p>
			</div>

			{/* Main metrics row */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				<KpiCard title={t('health.kpi.consultationsToday')} value="574" bgClass="bg-teal-600" />
				<KpiCard title={t('health.kpi.termAccuracy')} value="99%" bgClass="bg-emerald-600" />
			</div>

			{/* Languages and Risk visualization */}
			<div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-2">
				{/* Health Wing Languages */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('health.section.languagesTitle')}</p>
					<div className="mt-3 flex flex-wrap gap-2">
						<span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-sky-50 text-sky-700 ring-sky-600/20">
							{/* Keep Urdu in English per request */}
							Urdu
						</span>
						<span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-teal-50 text-teal-700 ring-teal-600/20">
							{/* Keep Bengali in English per request */}
							Bengali
						</span>
						<span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-indigo-50 text-indigo-700 ring-indigo-600/20">
							{/* Keep Tagalog in English per request */}
							Tagalog
						</span>
						<span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset bg-emerald-50 text-emerald-700 ring-emerald-600/20">
							{/* Keep Amharic in English per request */}
							Amharic
						</span>
					</div>
				</div>

				{/* Miscommunication Risk Index */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('health.section.riskIndex')}</p>
					<div className="mt-3">
						<div className="flex items-center justify-between">
							<span className="text-sm text-gray-700">{t('health.section.safeZone')}</span>
							<span className="text-sm font-medium text-gray-900">{'< 1%'}</span>
						</div>
						<div className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-200">
							{/* Fill 99% safe in emerald, leaving ~1% unfilled to imply low risk */}
							<div className="h-3 bg-emerald-500" style={{ width: '99%' }} />
						</div>
						<p className="mt-2 text-xs text-gray-500">{t('health.section.riskNote')}</p>
					</div>
				</div>
			</div>
		</section>
	);
}


