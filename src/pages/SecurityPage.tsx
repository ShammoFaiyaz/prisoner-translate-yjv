import React from 'react';
import SecuritySection from '../components/SecuritySection';
import KpiCard from '../components/KpiCard';
import { useTranslation } from '../i18n/useTranslation';

export default function SecurityPage(): JSX.Element {
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';
	const trFacility = (val: string) => {
		if (language !== 'ar') return val;
		if (val === 'Riyadh Reform Center') return 'إصلاحية الرياض';
		if (val === 'Jeddah Rehabilitation') return 'مجمع تأهيل جدة';
		if (val === 'Dammam Correctional') return 'سجن الدمام';
		return val;
	};
	const trLocation = (val: string) => {
		if (language !== 'ar') return val;
		const legal = /^Legal Room\s+(.+)$/i.exec(val);
		if (legal) return `غرفة قانونية ${legal[1]}`;
		const med = /^Medical Wing\s+(.+)$/i.exec(val);
		if (med) return `الجناح الطبي ${med[1]}`;
		const intake = /^Intake Desk\s+(.+)$/i.exec(val);
		if (intake) return `مكتب الاستقبال ${intake[1]}`;
		return val;
	};
	function AlertsChart(): JSX.Element {
		const w = 560;
		const h = 200;
		const pad = 28;
		const tickPad = 14;
		// 30 days mock counts
		const values = Array.from({ length: 30 }, (_, i) => Math.round(1 + Math.sin(i / 4) * 2 + Math.random() * 1.5));
		const maxV = Math.max(...values) + 2;
		const xs = (i: number) => pad + (i * (w - 2 * pad)) / values.length;
		const barW = (w - 2 * pad) / values.length - 2;
		const ys = (v: number) => h - pad - ((v) * (h - 2 * pad)) / maxV;
		return (
			<svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`}>
				<defs>
					<linearGradient id="alertFill" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#fca5a5" />
						<stop offset="100%" stopColor="#fecaca" />
					</linearGradient>
				</defs>
				<line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} className="stroke-gray-300" />
				<line x1={pad} y1={pad} x2={pad} y2={h - pad} className="stroke-gray-300" />
				{[1, 3, 5].map((g, idx) => (
					<g key={g}>
						<line x1={pad} y1={ys(g)} x2={w - pad} y2={ys(g)} className="stroke-gray-200" />
						<text
							x={pad - tickPad}
							y={ys(g) + (idx - 1) * 2}
							className="text-[10px] fill-gray-600"
							textAnchor="end"
							dominantBaseline="middle"
							style={{ direction: 'ltr' }}
						>
							{g}
						</text>
					</g>
				))}
				{values.map((v, i) => (
					<rect key={i} x={xs(i)} y={ys(v)} width={barW} height={(h - pad) - ys(v)} fill="url(#alertFill)" rx="2" />
				))}
			</svg>
		);
	}

	return (
		<section className="space-y-8">
			<SecuritySection />
			{/* Security KPIs */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<KpiCard title={t('security.page.avgRespTime')} value="03:12" subtitle={t('security.page.fromAlert')} bgClass="bg-emerald-600" />
				<KpiCard title={t('security.page.escalationsPrevented')} value="27" subtitle={t('security.page.resolvedBefore')} bgClass="bg-green-700" />
				<KpiCard title={t('security.page.falsePositive')} value="1.3%" subtitle={t('security.page.modelPrecision')} bgClass="bg-amber-700" />
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('security.page.miscommAlerts')}</p>
					<div className="mt-2"><AlertsChart /></div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation-static">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('security.page.highRiskLocations')}</p>
					<table className="mt-3 w-full text-sm">
						<thead>
							<tr className={`text-gray-600 ${align}`}>
								<th className="py-2">{t('security.table.location')}</th>
								<th className="py-2">{t('security.table.facility')}</th>
								<th className="py-2">{t('security.table.risk')}</th>
							</tr>
						</thead>
						<tbody className="text-gray-800">
							<tr><td className="py-2">{trLocation('Legal Room 2')}</td><td>{trFacility('Riyadh Reform Center')}</td><td className="text-amber-600">{t('security.severity.medium')}</td></tr>
							<tr><td className="py-2">{trLocation('Medical Wing A')}</td><td>{trFacility('Jeddah Rehabilitation')}</td><td className="text-rose-600">{t('security.severity.high')}</td></tr>
							<tr><td className="py-2">{trLocation('Intake Desk 1')}</td><td>{trFacility('Dammam Correctional')}</td><td className="text-emerald-600">{t('security.severity.low')}</td></tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* Incident severity breakdown */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('security.page.incidentSeverity')}</p>
				<div className="mt-3 space-y-3 text-sm text-gray-700">
					<div className="flex items-center gap-3">
						<span className={`w-24 ${align}`}>{t('security.severity.low')}</span>
						<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 w-[62%] rounded-full bg-emerald-500" /></div>
						<span className="w-10 text-right">62%</span>
					</div>
					<div className="flex items-center gap-3">
						<span className={`w-24 ${align}`}>{t('security.severity.medium')}</span>
						<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 w-[30%] rounded-full bg-amber-500" /></div>
						<span className="w-10 text-right">30%</span>
					</div>
					<div className="flex items-center gap-3">
						<span className={`w-24 ${align}`}>{t('security.severity.high')}</span>
						<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 w-[8%] rounded-full bg-rose-500" /></div>
						<span className="w-10 text-right">8%</span>
					</div>
				</div>
			</div>
		</section>
	);
}


