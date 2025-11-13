import React from 'react';
import Vision2030Section from '../components/Vision2030Section';

export default function Vision2030Page(): JSX.Element {
	return (
		<section className="space-y-8">
			<div className="mb-2">
				<h2 className="text-xl font-semibold text-gray-900">Vision 2030 Alignment</h2>
				<p className="mt-1 text-sm text-gray-600">
					A strategic enabler for modern, humane, data-driven correctional facilities across the Kingdom.
				</p>
			</div>
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<Vision2030Section />
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{[
					['Enhance National Security', ['Reduce language-based conflicts', 'Real-time incident translation'], 92],
					['Modern, Humane Environment', ['Clear rights communication', 'Respect and dignity first'], 98],
					['Operational Excellence', ['Faster procedures', 'Fewer handoffs'], 88],
					['Empower Workforce', ['AI-assisted workflows', 'Training and upskilling'], 85],
					['Safeguard Justice & Dignity', ['Legal clarity', 'Sensitive topic handling'], 96],
					['Improve Healthcare', ['Accurate med terms', 'Compassionate care'], 90],
					['Data & Analytics', ['Realtime dashboards', 'Predictive insights'], 82],
					['Innovation Leadership', ['AI adoption at scale', 'Global benchmark'], 87],
				].map(([title, bullets, pct]) => (
					<div key={title as string} className="rounded-xl border border-gray-200 bg-white p-4 elevation">
						<p className="text-sm font-medium text-gray-900">{title as string}</p>
						<ul className="mt-2 list-disc pl-5 text-xs text-gray-700">
							{(bullets as string[]).map((b) => (<li key={b}>{b}</li>))}
						</ul>
						<div className="mt-3">
							<div className="flex items-center justify-between text-xs text-gray-600">
								<span>Progress</span><span>{pct as number}%</span>
							</div>
							<div className="mt-1 h-2 w-full rounded-full bg-gray-200">
								<div className="h-2 rounded-full bg-emerald-500" style={{ width: `${pct}%` }} />
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Capability Radar</p>
					<div className="mt-4 h-48 rounded-md bg-gradient-to-b from-emerald-100 to-white flex items-center justify-center text-emerald-700 text-sm">
						Mock radar chart placeholder
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Goal progress over last 12 months</p>
					<div className="mt-4 h-48 rounded-md bg-gradient-to-b from-sky-100 to-white"></div>
				</div>
			</div>
			<div className="rounded-xl border border-gray-200 bg-white p-6 elevation text-center text-sm text-gray-800">
				Smart partnership. Human-centered technology. Strengthening national security, justice, and dignity in line with Vision 2030.
			</div>
		</section>
	);
}


