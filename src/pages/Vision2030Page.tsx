import React from 'react';
import Vision2030Section from '../components/Vision2030Section';
import { useTranslation } from '../i18n/useTranslation';

export function Vision2030Page(): JSX.Element {
	const { t, language } = useTranslation();
	// --- Simple SVG Radar (spider) chart with mock values ---
	const radarLabels = [
		t('vision.radar.security'),
		t('vision.radar.operational'),
		t('vision.radar.justice'),
		t('vision.radar.healthcare'),
		t('vision.radar.workforce'),
		t('vision.radar.data'),
		t('vision.radar.tech'),
	];
	// normalized 0-1
	const radarValues = [0.92, 0.88, 0.96, 0.9, 0.85, 0.82, 0.87];

	function RadarChart(): JSX.Element {
		const size = 260;
		const cx = size / 2;
		const cy = size / 2;
		// Smaller radius to leave room for outer labels
		const maxR = (size / 2) - 44;
		const steps = 5;
		const N = radarLabels.length;
		const angleStep = (Math.PI * 2) / N;

		const toPoint = (i: number, value: number) => {
			const angle = -Math.PI / 2 + i * angleStep;
			const r = maxR * value;
			return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)];
		};

		const polygonPoints = radarValues
			.map((v, i) => toPoint(i, v))
			.map(([x, y]) => `${x},${y}`)
			.join(' ');

		return (
			<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto block">
				{/* grid rings */}
				{Array.from({ length: steps }, (_, s) => {
					const r = maxR * ((s + 1) / steps);
					return <circle key={s} cx={cx} cy={cy} r={r} className="fill-none stroke-gray-200" strokeWidth="1" />;
				})}
				{/* axes */}
				{Array.from({ length: N }, (_, i) => {
					const [x, y] = toPoint(i, 1);
					return <line key={i} x1={cx} y1={cy} x2={x} y2={y} className="stroke-gray-200" strokeWidth="1" />;
				})}
				{/* polygon */}
				<polygon points={polygonPoints} className="fill-emerald-300/40 stroke-emerald-600" strokeWidth="2" />
				{/* labels placed outside the circle and larger */}
				{radarLabels.map((lbl, i) => {
					const [x, y] = toPoint(i, 1.25);
					// adjust a few labels slightly to keep clarity regardless of language
					let dx = 0;
					if (i === 1) dx = 12; // operational
					if (i === radarLabels.length - 1) dx = -12; // tech
					if (i === radarLabels.length - 2) dx = -12; // data
					return (
						<text key={lbl} x={x + dx} y={y} textAnchor="middle" dominantBaseline="middle" className="text-[12px] fill-gray-700">
							{lbl}
						</text>
					);
				})}
			</svg>
		);
	}

	// --- Simple SVG Line chart for last 12 months (mock trend) ---
	const lineData = [62, 66, 68, 72, 75, 78, 80, 84, 86, 89, 92, 94]; // %
	function LineChart(): JSX.Element {
		const w = 560;
		const h = 200;
		const pad = 28;
		const tickPad = 14;
		const xs = (i: number) => pad + (i * (w - 2 * pad)) / (lineData.length - 1);
		const ys = (v: number) => h - pad - ((v - 50) * (h - 2 * pad)) / 50; // scale 50-100%
		const d = lineData.map((v, i) => `${i === 0 ? 'M' : 'L'} ${xs(i)} ${ys(v)}`).join(' ');
		const area = `${d} L ${xs(lineData.length - 1)} ${h - pad} L ${xs(0)} ${h - pad} Z`;
		// last 12 month labels for x-axis
		const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		const now = new Date();
		const startIndex = (now.getMonth() + 1 - lineData.length + 12 * 10) % 12; // handles negative
		const months = Array.from({ length: lineData.length }, (_, i) => monthNames[(startIndex + i) % 12]);
		return (
			<svg width="100%" height={h} viewBox={`0 0 ${w} ${h}`}>
				<defs>
					<linearGradient id="areaFill" x1="0" x2="0" y1="0" y2="1">
						<stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
						<stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
					</linearGradient>
				</defs>
				{/* axes */}
				<line x1={pad} y1={h - pad} x2={w - pad} y2={h - pad} className="stroke-gray-300" />
				<line x1={pad} y1={pad} x2={pad} y2={h - pad} className="stroke-gray-300" />
				{/* grid lines */}
				{[60, 70, 80, 90, 100].map((g) => (
					<g key={g}>
						<line x1={pad} y1={ys(g)} x2={w - pad} y2={ys(g)} className="stroke-gray-200" />
						<text x={pad - tickPad} y={ys(g)} className="text-[10px] fill-gray-600" textAnchor="end" dominantBaseline="middle" style={{ direction: 'ltr' }}>{g}%</text>
					</g>
				))}
				{/* x-axis ticks and labels */}
				{months.map((m, i) => (
					<g key={m + i}>
						<line x1={xs(i)} y1={h - pad} x2={xs(i)} y2={h - pad + 4} className="stroke-gray-300" />
						<text x={xs(i)} y={h - pad + 14} className="text-[10px] fill-gray-600" textAnchor="middle">{m}</text>
					</g>
				))}
				{/* area and line */}
				<path d={area} fill="url(#areaFill)" />
				<path d={d} className="stroke-sky-500" fill="none" strokeWidth="2.5" />
				{/* points */}
				{lineData.map((v, i) => (
					<circle key={i} cx={xs(i)} cy={ys(v)} r="2.5" className="fill-sky-500" />
				))}
			</svg>
		);
	}

	return (
		<section className="space-y-8">
			<div className="mb-2">
				<h2 className="text-xl font-semibold text-gray-900">{t('vision.alignment')}</h2>
				<p className="mt-1 text-sm text-gray-600">
					{t('vision.alignment.subtitle')}
				</p>
			</div>
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<Vision2030Section />
			</div>
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
				{[
					['vision.cards.enhanceSecurity.title', ['vision.cards.enhanceSecurity.b1', 'vision.cards.enhanceSecurity.b2'], 92],
					['vision.cards.modernHumane.title', ['vision.cards.modernHumane.b1', 'vision.cards.modernHumane.b2'], 98],
					['vision.cards.operational.title', ['vision.cards.operational.b1', 'vision.cards.operational.b2'], 88],
					['vision.cards.empowerWorkforce.title', ['vision.cards.empowerWorkforce.b1', 'vision.cards.empowerWorkforce.b2'], 85],
					['vision.cards.safeguardJustice.title', ['vision.cards.safeguardJustice.b1', 'vision.cards.safeguardJustice.b2'], 96],
					['vision.cards.improveHealthcare.title', ['vision.cards.improveHealthcare.b1', 'vision.cards.improveHealthcare.b2'], 90],
					['vision.cards.dataAnalytics.title', ['vision.cards.dataAnalytics.b1', 'vision.cards.dataAnalytics.b2'], 82],
					['vision.cards.innovation.title', ['vision.cards.innovation.b1', 'vision.cards.innovation.b2'], 87],
				].map(([titleKey, bullets, pct]) => (
					<div key={titleKey as string} className="rounded-xl border border-gray-200 bg-white p-4 elevation">
						<p className="text-sm font-medium text-gray-900">{t(titleKey as string)}</p>
						<ul className={`mt-2 list-disc ${language === 'ar' ? 'pr-4' : 'pl-4'} text-xs text-gray-700`}>
							{(bullets as string[]).map((b) => (<li key={b}>{t(b)}</li>))}
						</ul>
						<div className="mt-3">
							<div className="flex items-center justify-between text-xs text-gray-600">
								<span>{t('vision.cards.progress')}</span><span>{pct as number}%</span>
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
					<p className="text-sm font-medium text-gray-900">{t('vision.capabilityRadar')}</p>
					<div className="mt-2">
						<RadarChart />
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">{t('vision.goalProgress12mo')}</p>
					<div className="mt-2">
						<LineChart />
					</div>
				</div>
			</div>
			<div className="rounded-xl border border-gray-200 bg-white p-6 elevation text-center text-sm text-gray-800">
				{t('vision.tagline')}
			</div>
		</section>
	);
}


