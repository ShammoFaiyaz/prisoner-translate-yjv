import React from 'react';
import HealthcareSection from '../components/HealthcareSection';
import KpiCard from '../components/KpiCard';

export default function HealthcarePage(): JSX.Element {
	// Simple 14-day line chart
	function DailyConsultationsChart(): JSX.Element {
		const w = 640;
		const h = 200;
		const pad = 28;
		// mock counts for last 14 days
		const data = [32, 35, 30, 38, 40, 42, 44, 41, 39, 45, 47, 50, 48, 52];
		const today = new Date();
		const labels = Array.from({ length: 14 }, (_, i) => {
			const d = new Date(today);
			d.setDate(today.getDate() - (13 - i));
			return `${d.getDate()}`;
		});
		const maxV = Math.max(...data) + 10;
		const xs = (i: number) => pad + (i * (w - 2 * pad)) / (data.length - 1);
		const ys = (v: number) => h - pad - ((v) * (h - 2 * pad)) / maxV;
		const dPath = data.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ');
		const area = `${dPath} L ${xs(data.length - 1)} ${h - pad} L ${xs(0)} ${h - pad} Z`;
		return (
			<svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`}>
				<defs>
					<linearGradient id="medArea" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#34d399" stopOpacity="0.35" />
						<stop offset="100%" stopColor="#34d399" stopOpacity="0" />
					</linearGradient>
				</defs>
				<line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} className="stroke-gray-300" />
				<line x1={pad} y1={pad} x2={pad} y2={h - pad} className="stroke-gray-300" />
				{[10, 20, 30, 40, 50].map((g) => (
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
				<path d={area} fill="url(#medArea)" />
				<path d={dPath} className="stroke-emerald-500" fill="none" strokeWidth="2.5" />
				{data.map((v, i) => (<circle key={i} cx={xs(i)} cy={ys(v)} r="2.2" className="fill-emerald-500" />))}
			</svg>
		);
	}

	return (
		<section className="space-y-8">
			<HealthcareSection />
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation lg:col-span-2">
					<p className="text-sm font-medium text-gray-900">Daily medical consultations (last 14 days)</p>
					<div className="mt-2">
						<DailyConsultationsChart />
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Language distribution in medical wing</p>
					<div className="mt-4 grid grid-cols-2 gap-4">
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-sky-100 flex items-center justify-center text-sky-700 text-sm">Urdu</div>
							<p className="mt-2 text-xs text-gray-700">35%</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 text-sm">Bengali</div>
							<p className="mt-2 text-xs text-gray-700">28%</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 text-sm">Tagalog</div>
							<p className="mt-2 text-xs text-gray-700">22%</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm">Amharic</div>
							<p className="mt-2 text-xs text-gray-700">15%</p>
						</div>
					</div>
				</div>
			</div>
			{/* Additional healthcare KPIs */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<KpiCard title="Avg Wait Time (Today)" value="06:20" subtitle="Reception to consultation" bgClass="bg-emerald-600" />
				<KpiCard title="Urgent Cases (Today)" value="18" subtitle="Across all facilities" bgClass="bg-amber-700" />
				<KpiCard title="Discharge Instructions Clarified" value="98%" subtitle="Understanding score" bgClass="bg-green-700" />
			</div>
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation-static">
				<p className="text-sm font-medium text-gray-900">Recent medical interactions</p>
				<table className="mt-3 w-full text-sm">
					<thead>
						<tr className="text-left text-gray-600">
							<th className="py-2">Language</th>
							<th className="py-2">Type of visit</th>
							<th className="py-2">Urgency</th>
							<th className="py-2">Outcome</th>
						</tr>
					</thead>
					<tbody className="text-gray-800">
						<tr><td className="py-2">Urdu</td><td>Checkup</td><td>Routine</td><td>Understood</td></tr>
						<tr><td className="py-2">Bengali</td><td>Injury</td><td>Urgent</td><td>Understood</td></tr>
						<tr><td className="py-2">Tagalog</td><td>Prescription</td><td>Routine</td><td>Understood</td></tr>
					</tbody>
				</table>
			</div>
		</section>
	);
}


