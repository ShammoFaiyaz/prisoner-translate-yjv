import React from 'react';
import KpiCard from './KpiCard';
import { useTranslation } from '../i18n/useTranslation';

export default function LegalJusticeSection(): JSX.Element {
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';
	return (
		<section>
			<div className="mb-2">
				<h3 className={`text-lg font-semibold text-gray-900 ${align}`}>{t('legal.section.title')}</h3>
				<p className={`mt-1 text-sm text-gray-600 ${align}`}>{t('legal.paragraph')}</p>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<KpiCard
					title={t('legal.kpi.legalClarityScore')}
					value="96%"
					subtitle={t('legal.subtitle.clarity')}
					bgClass="bg-emerald-600"
				/>
				<KpiCard
					title={t('legal.kpi.sessionsToday')}
					value="128"
					bgClass="bg-amber-700"
					subtitle={t('legal.subtitle.sessionsConducted')}
				/>
				<KpiCard
					title={t('legal.kpi.sensitiveHandling')}
					value={`${language === 'ar' ? t('legal.value.success') : 'success'} 99%`}
					bgClass="bg-emerald-600"
					subtitle={t('legal.subtitle.sensitiveHandling')}
				/>
				<KpiCard
					title={t('legal.kpi.dignityRating')}
					value={t('legal.value.excellent')}
					bgClass="bg-teal-600"
					subtitle={t('legal.subtitle.dignityMeasured')}
				/>
			</div>

			<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('legal.useCases.title')}</p>
				<ul className={`mt-3 list-disc space-y-1 ${language === 'ar' ? 'pr-5' : 'pl-5'} text-sm text-gray-700`}>
					<li>{t('legal.useCases.sentencing')}</li>
					<li>{t('legal.useCases.appealRights')}</li>
					<li>{t('legal.useCases.visitationRules')}</li>
					<li>{t('legal.useCases.complaintProcess')}</li>
				</ul>
			</div>
		</section>
	);
}


