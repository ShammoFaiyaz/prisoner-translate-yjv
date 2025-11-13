import React from 'react';
import SecuritySection from '../components/SecuritySection';
import KpiCard from '../components/KpiCard';

export default function SecurityPage(): JSX.Element {
	function AlertsChart(): JSX.Element {
		const w = 560;
		const h = 200;
		const pad = 28;
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
				{[1, 3, 5].map((g) => (
					<g key={g}>
						<line x1={pad} y1={ys(g)} x2={w - pad} y2={ys(g)} className="stroke-gray-200" />
						<text x={pad - 12} y={ys(g)} className="text-[10px] fill-gray-600" textAnchor="end" dominantBaseline="middle">{g}</text>
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
				<KpiCard title="Avg response time (24h)" value="03:12" subtitle="From alert to resolution" bgClass="bg-emerald-600" />
				<KpiCard title="Escalations prevented" value="27" subtitle="Resolved before manual review" bgClass="bg-green-700" />
				<KpiCard title="False positive rate" value="1.3%" subtitle="Model precision" bgClass="bg-amber-700" />
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Miscommunication alerts — last 30 days</p>
					<div className="mt-2"><AlertsChart /></div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation-static">
					<p className="text-sm font-medium text-gray-900">High-risk locations</p>
					<table className="mt-3 w-full text-sm">
						<thead>
							<tr className="text-left text-gray-600">
								<th className="py-2">Location</th>
								<th className="py-2">Facility</th>
								<th className="py-2">Risk</th>
							</tr>
						</thead>
						<tbody className="text-gray-800">
							<tr><td className="py-2">Legal Room 2</td><td>Riyadh Reform Center</td><td className="text-amber-600">Medium</td></tr>
							<tr><td className="py-2">Medical Wing A</td><td>Jeddah Rehabilitation</td><td className="text-rose-600">High</td></tr>
							<tr><td className="py-2">Intake Desk 1</td><td>Dammam Correctional</td><td className="text-emerald-600">Low</td></tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* Incident severity breakdown */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900">Incident severity breakdown</p>
				<div className="mt-3 space-y-3 text-sm text-gray-700">
					<div className="flex items-center gap-3">
						<span className="w-24">Low</span>
						<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 w-[62%] rounded-full bg-emerald-500" /></div>
						<span className="w-10 text-right">62%</span>
					</div>
					<div className="flex items-center gap-3">
						<span className="w-24">Medium</span>
						<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 w-[30%] rounded-full bg-amber-500" /></div>
						<span className="w-10 text-right">30%</span>
					</div>
					<div className="flex items-center gap-3">
						<span className="w-24">High</span>
						<div className="h-2 flex-1 rounded-full bg-gray-200"><div className="h-2 w-[8%] rounded-full bg-rose-500" /></div>
						<span className="w-10 text-right">8%</span>
					</div>
				</div>
			</div>
		</section>
	);
}


