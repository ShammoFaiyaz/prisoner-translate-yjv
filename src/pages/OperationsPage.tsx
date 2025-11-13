import React from 'react';
import OperationsSection from '../components/OperationsSection';
import KpiCard from '../components/KpiCard';

export default function OperationsPage(): JSX.Element {
	function ProcedureTrendChart(): JSX.Element {
		const w = 560;
		const h = 200;
		const pad = 28;
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
				{[10, 15, 20].map((g) => (
					<g key={g}>
						<line x1={pad} y1={ys(g)} x2={w - pad} y2={ys(g)} className="stroke-gray-200" />
						<text x={pad - 12} y={ys(g)} className="text-[10px] fill-gray-600" textAnchor="end" dominantBaseline="middle">{g}m</text>
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
				<KpiCard title="Avg Procedure Time (Today)" value="12 min" bgClass="bg-emerald-600" />
				<KpiCard title="Automated tasks (Today)" value="1,128" bgClass="bg-green-700" />
				<KpiCard title="Hand-offs avoided" value="284" bgClass="bg-amber-700" />
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Procedure completion time trend (last 14 days)</p>
					<div className="mt-2">
						<ProcedureTrendChart />
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation-static">
					<p className="text-sm font-medium text-gray-900">Top bottlenecks resolved by translator</p>
					<table className="mt-3 w-full text-sm">
						<thead>
							<tr className="text-left text-gray-600">
								<th className="py-2">Bottleneck</th>
								<th className="py-2">Impact</th>
							</tr>
						</thead>
						<tbody className="text-gray-800">
							<tr><td className="py-2">Language clarification at intake</td><td>Reduced wait by 40%</td></tr>
							<tr><td className="py-2">Legal briefing misunderstandings</td><td>↓ incidents by 63%</td></tr>
							<tr><td className="py-2">Medical symptom triage</td><td>Improved accuracy to 99%</td></tr>
						</tbody>
					</table>
				</div>
			</div>
			{/* Additional throughput panel */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900">Throughput per shift (sessions processed)</p>
				<div className="mt-3 grid grid-cols-1 gap-2 md:grid-cols-3">
					<div>
						<p className="text-xs text-gray-600">Morning</p>
						<div className="h-2 w-full rounded-full bg-gray-200"><div className="h-2 w-[78%] rounded-full bg-emerald-500" /></div>
					</div>
					<div>
						<p className="text-xs text-gray-600">Afternoon</p>
						<div className="h-2 w-full rounded-full bg-gray-200"><div className="h-2 w-[85%] rounded-full bg-emerald-500" /></div>
					</div>
					<div>
						<p className="text-xs text-gray-600">Night</p>
						<div className="h-2 w-full rounded-full bg-gray-200"><div className="h-2 w-[66%] rounded-full bg-emerald-500" /></div>
					</div>
				</div>
			</div>
		</section>
	);
}


