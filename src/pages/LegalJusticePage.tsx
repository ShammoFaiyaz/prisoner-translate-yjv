import React from 'react';
import LegalJusticeSection from '../components/LegalJusticeSection';
import KpiCard from '../components/KpiCard';
import { useTranslation } from '../i18n/useTranslation';

export default function LegalJusticePage(): JSX.Element {
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';
	return (
		<section className="space-y-8">
			<LegalJusticeSection />
			{/* Additional high-level legal justice metrics */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<KpiCard title={t('legal.metrics.appealSuccessRate')} value="76%" subtitle={t('legal.metrics.subtitle.past30days')} bgClass="bg-emerald-600" />
				<KpiCard title={t('legal.metrics.rightsClarificationToday')} value="42" subtitle={t('legal.metrics.subtitle.acrossFacilities')} bgClass="bg-amber-700" />
				<KpiCard title={t('legal.metrics.avgSessionDuration')} value="07:12" subtitle={t('legal.metrics.subtitle.hhmm')} bgClass="bg-green-700" />
				<KpiCard title={t('legal.metrics.humanEscalations')} value="3" subtitle={t('legal.metrics.subtitle.complexCases')} bgClass="bg-amber-700" />
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation-static">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('legal.page.understandingByLang')}</p>
					<div className="mt-4 space-y-3">
						<div className="flex items-center gap-3">
							<span className={`w-24 text-sm text-gray-700 ${align}`}>{t('lang.arabic')}</span>
							<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 rounded-full bg-emerald-500" style={{ width: '99%' }} /></div>
						</div>
						<div className="flex items-center gap-3">
							<span className={`w-24 text-sm text-gray-700 ${align}`}>{t('lang.urdu')}</span>
							<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 rounded-full bg-emerald-500" style={{ width: '96%' }} /></div>
						</div>
						<div className="flex items-center gap-3">
							<span className={`w-24 text-sm text-gray-700 ${align}`}>{t('lang.bengali')}</span>
							<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 rounded-full bg-emerald-500" style={{ width: '95%' }} /></div>
						</div>
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation-static">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('legal.page.todaysSessions')}</p>
					<table className="mt-3 w-full text-sm">
						<thead>
							<tr className={`text-gray-600 ${align}`}>
								<th className="py-2">{t('table.sessionId')}</th>
								<th className="py-2">{t('table.languageDetected')}</th>
								<th className="py-2">{t('table.topic')}</th>
								<th className="py-2">{t('table.outcome')}</th>
							</tr>
						</thead>
						<tbody className="text-gray-800">
							<tr><td className="py-2">TRX-2033-09</td><td>{t('lang.urdu')}</td><td>Sentencing</td><td>{t('outcome.understood')}</td></tr>
							<tr><td className="py-2">TRX-2033-12</td><td>{t('lang.bengali')}</td><td>Appeal rights</td><td>{t('outcome.understood')}</td></tr>
							<tr><td className="py-2">TRX-2033-21</td><td>{t('lang.amharic')}</td><td>Visitation rules</td><td>{t('outcome.needsFollowUp')}</td></tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
}


