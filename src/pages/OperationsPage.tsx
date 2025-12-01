import React from 'react';
import OperationsSection from '../components/OperationsSection';
import KpiCard from '../components/KpiCard';
import { useTranslation } from '../i18n/useTranslation';

export default function OperationsPage(): JSX.Element {
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';
	function ProcedureTrendChart(): JSX.Element {
		const w = 560;
		const h = 200;
		const pad = 28;
		const tickPad = 14;
		// average minutes to complete a standard procedure over last 14 days (lower is better)
		const data = [18, 18, 17, 17, 16, 16, 15, 15, 15, 14, 14, 13, 13, 12];
		const labels = Array.from({ length: 14 }, (_, i) => `${i + 1}`);
		const maxV = Math.max(...data) + 4;
		const xs = (i: number) => pad + (i * (w - 2 * pad)) / (labels.length - 1);
		const ys = (v: number) => h - pad - ((v) * (h - 2 * pad)) / maxV;
		const dPath = data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ');
		const area = `${dPath} L ${xs(data.length - 1)} ${h - pad} L ${xs(0)} ${h - pad} Z`;
		return (
			<svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`}>
				<defs>
					<linearGradient id="opsArea" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
						<stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
					</linearGradient>
				</defs>
				<line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} className="stroke-gray-300" />
				<line x1={pad} y1={pad} x2={pad} y2={h - pad} className="stroke-gray-300" />
				{[10, 15, 20].map((g, idx) => (
					<g key={g}>
						<line x1={pad} y1={ys(g)} x2={w - pad} y2={ys(g)} className="stroke-gray-200" />
						<text
							x={pad - tickPad}
							y={ys(g) + (idx - 1) * 3}
							className="text-[10px] fill-gray-600"
							textAnchor="end"
							dominantBaseline="middle"
							style={{ direction: 'ltr' }}
						>
							{g}m
						</text>
					</g>
				))}
				{labels.map((m, i) => (
					<g key={m + i}>
						<line x1={xs(i)} y1={h - pad} x2={xs(i)} y2={h - pad + 4} className="stroke-gray-300" />
						<text x={xs(i)} y={h - pad + 14} className="text-[10px] fill-gray-600" textAnchor="middle">{m}</text>
					</g>
				))}
				<path d={area} fill="url(#opsArea)" />
				<path d={dPath} className="stroke-sky-500" fill="none" strokeWidth="2.5" />
				{data.map((v, i) => (<circle key={i} cx={xs(i)} cy={ys(v)} r="2.2" className="fill-sky-500" />))}
			</svg>
		);
	}
	return (
		<section className="space-y-8">
			<OperationsSection />
			{/* Additional ops KPIs */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<KpiCard title={t('operations.kpi.avgProcTime')} value="12 min" bgClass="bg-emerald-600" />
				<KpiCard title={t('operations.kpi.automatedTasks')} value="1,128" bgClass="bg-green-700" />
				<KpiCard title={t('operations.kpi.handoffsAvoided')} value="284" bgClass="bg-amber-700" />
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('operations.page.procTrend')}</p>
					<div className="mt-2">
						<ProcedureTrendChart />
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation-static">
					<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('operations.page.topBottlenecks')}</p>
					<table className="mt-3 w-full text-sm">
						<thead>
							<tr className={`text-gray-600 ${align}`}>
								<th className="py-2">{t('operations.table.bottleneck')}</th>
								<th className="py-2">{t('operations.table.impact')}</th>
							</tr>
						</thead>
						<tbody className="text-gray-800">
							<tr><td className="py-2">{t('operations.bottlenecks.intakeClarification')}</td><td>{t('operations.impact.reducedWait40')}</td></tr>
							<tr><td className="py-2">{t('operations.bottlenecks.legalBriefing')}</td><td>{t('operations.impact.incidentsDown63')}</td></tr>
							<tr><td className="py-2">{t('operations.bottlenecks.medicalTriage')}</td><td>{t('operations.impact.improvedAccuracy99')}</td></tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* Additional throughput panel */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className={`text-sm font-medium text-gray-900 ${align}`}>{t('operations.page.throughput')}</p>
				<div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
					<div>
						<p className={`mb-1 text-xs text-gray-600 ${align}`}>{t('operations.shift.morning')}</p>
						<div className="h-2 w-full rounded-full bg-gray-200"><div className="h-2 w-[78%] rounded-full bg-emerald-500" /></div>
					</div>
					<div>
						<p className={`mb-1 text-xs text-gray-600 ${align}`}>{t('operations.shift.afternoon')}</p>
						<div className="h-2 w-full rounded-full bg-gray-200"><div className="h-2 w-[85%] rounded-full bg-emerald-500" /></div>
					</div>
					<div>
						<p className={`mb-1 text-xs text-gray-600 ${align}`}>{t('operations.shift.night')}</p>
						<div className="h-2 w-full rounded-full bg-gray-200"><div className="h-2 w-[66%] rounded-full bg-emerald-500" /></div>
					</div>
				</div>
			</div>
		</section>
	);
}


