import React from 'react';
import LanguageAnalyticsSection from '../components/LanguageAnalyticsSection';
import KpiCard from '../components/KpiCard';

export default function LanguageAnalyticsPage(): JSX.Element {
	// Multi-line usage chart for 3 languages across last 7 days
	function UsageChart(): JSX.Element {
		const w = 560;
		const h = 200;
		const pad = 28;
		const labels = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
		// mock sessions
		const urdu =   [120, 130, 125, 140, 150, 155, 160];
		const bengali = [90, 95, 100, 110, 108, 115, 120];
		const tagalog = [60, 65, 70, 72, 74, 75, 78];
		const series = [
			{ data: urdu, color: '#22c55e' },     // emerald
			{ data: bengali, color: '#65a30d' },  // lime/olive
			{ data: tagalog, color: '#a16207' },  // amber/brown
		];
		const maxV = Math.max(...urdu, ...bengali, ...tagalog) + 20;
		const xs = (i: number) => pad + (i * (w - 2 * pad)) / (labels.length - 1);
		const ys = (v: number) => h - pad - ((v) * (h - 2 * pad)) / maxV;
		const toPath = (arr: number[]) => arr.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ');
		return (
			<svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`}>
				<line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} className="stroke-gray-300" />
				<line x1={pad} y1={pad} x2={pad} y2={h - pad} className="stroke-gray-300" />
				{[50, 100, 150].map((g) => (
					<g key={g}>
						<line x1={pad} y1={ys(g)} x2={w - pad} y2={ys(g)} className="stroke-gray-200" />
						<text x={pad - 12} y={ys(g)} className="text-[10px] fill-gray-600" textAnchor="end" dominantBaseline="middle">{g}</text>
					</g>
				))}
				{labels.map((m, i) => (
					<g key={m + i}>
						<line x1={xs(i)} y1={h - pad} x2={xs(i)} y2={h - pad + 4} className="stroke-gray-300" />
						<text x={xs(i)} y={h - pad + 14} className="text-[10px] fill-gray-600" textAnchor="middle">{m}</text>
					</g>
				))}
				{series.map((s, idx) => (
					<g key={idx}>
						<path d={toPath(s.data)} fill="none" stroke={s.color} strokeWidth="2.5" />
						{s.data.map((v, i) => <circle key={i} cx={xs(i)} cy={ys(v)} r="2.2" style={{ fill: s.color }} />)}
					</g>
				))}
			</svg>
		);
	}
	return (
		<section className="space-y-8">
			<LanguageAnalyticsSection />
			{/* Additional metrics row */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<KpiCard title="New languages added (30d)" value="2" bgClass="bg-emerald-600" />
				<KpiCard title="Glossary terms maintained" value="1,240" bgClass="bg-green-700" />
				<KpiCard title="Avg translation latency" value="280 ms" bgClass="bg-amber-700" />
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Sessions per language</p>
					<div className="mt-4 space-y-3">
						{['Arabic', 'English', 'Urdu', 'Bengali', 'Tagalog', 'Amharic'].map((lang, i) => (
							<div key={lang} className="flex items-center gap-3">
								<span className="w-24 text-sm text-gray-700">{lang}</span>
								<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 rounded-full bg-sky-500" style={{ width: `${90 - i * 10}%` }} /></div>
							</div>
						))}
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Usage per language – last 7 days</p>
					<div className="mt-2">
						<UsageChart />
					</div>
				</div>
			</div>
		</section>
	);
}


