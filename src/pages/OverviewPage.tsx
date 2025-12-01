import React from 'react';
import KpiCard from '../components/KpiCard';
import RealTimeMonitorSection from '../components/RealTimeMonitorSection';
import Vision2030Section from '../components/Vision2030Section';
import { useTranslation } from '../i18n/useTranslation';

export default function OverviewPage(): JSX.Element {
	const { t } = useTranslation();
	return (
		<section className="space-y-8">
			{/* Top KPIs */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<KpiCard title={t('kpi.translationsToday')} value="3,480" subtitle={t('kpi.subtitle.completedToday')} bgClass="bg-green-700" valueClass="text-2xl" />
				<KpiCard title={t('kpi.aiAccuracy')} value="98.6%" subtitle={t('kpi.subtitle.weighted24h')} bgClass="bg-emerald-600" valueClass="text-2xl" />
				<KpiCard title={t('kpi.activeDevices')} value="142" subtitle={t('kpi.subtitle.mobileStatic')} bgClass="bg-amber-700" valueClass="text-2xl" />
				<KpiCard title={t('kpi.systemStatus')} value={t('kpi.online')} subtitle={t('kpi.subtitle.allHealthy')} bgClass="bg-teal-600" valueClass="text-2xl" />
			</div>

			{/* Today at a glance */}
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation lg:col-span-1">
					<p className="text-sm font-medium text-gray-900">{t('overview.activeSessions')}</p>
					<p className="mt-2 text-3xl font-semibold text-gray-900">8</p>
					<ul className="mt-3 space-y-2 text-sm text-gray-700">
						<li className="flex justify-between"><span>TRX-2033-29</span><span className="text-gray-500">{t('lang.tagalog')} • Routine</span></li>
						<li className="flex justify-between"><span>TRX-2033-26</span><span className="text-gray-500">{t('lang.bengali')} • Medical</span></li>
						<li className="flex justify-between"><span>TRX-2033-24</span><span className="text-gray-500">{t('lang.urdu')} • Legal</span></li>
					</ul>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">{t('overview.snapshot')}</p>
					<div className="mt-3 grid grid-cols-2 gap-3">
						<KpiCard title={t('overview.snapshotCards.incidents')} value="3" subtitle={`↓ 63% ${t('overview.snapshotCards.vsLastMonth')}`} bgClass="bg-rose-600" />
						<KpiCard title={t('overview.snapshotCards.emergency')} value="99.4%" subtitle={t('overview.snapshotCards.crisisMode')} bgClass="bg-emerald-600" />
						<KpiCard title={t('overview.snapshotCards.dailyTranslations')} value="3,480" bgClass="bg-sky-600" />
						<KpiCard title={t('overview.snapshotCards.medicalConsultations')} value="574" bgClass="bg-teal-600" />
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">{t('overview.visionPreview')}</p>
					<div className="mt-4 grid grid-cols-2 gap-3">
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 text-white flex items-center justify-center text-lg font-semibold">94%</div>
							<p className="mt-2 text-xs text-gray-700">{t('overview.modernization')}</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-300 text-white flex items-center justify-center text-lg font-semibold">98%</div>
							<p className="mt-2 text-xs text-gray-700">{t('overview.humanitarian')}</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-sky-500 to-sky-300 text-white flex items-center justify-center text-lg font-semibold">87%</div>
							<p className="mt-2 text-xs text-gray-700">{t('overview.innovation')}</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-teal-500 to-teal-300 text-white flex items-center justify-center text-xs font-semibold">Top 5</div>
							<p className="mt-2 text-xs text-gray-700">{t('overview.globalPosition')}</p>
						</div>
					</div>
				</div>
			</div>

			{/* Mini monitor preview (compact table) */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900 mb-3">{t('overview.livePreview')}</p>
				<RealTimeMonitorSection />
			</div>

			{/* Vision section condensed */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<Vision2030Section />
			</div>
		</section>
	);
}


