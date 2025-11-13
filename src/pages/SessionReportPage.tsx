import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSessionById } from '../data/sessions';

function pill(color: string, text: string) {
	return (
		<span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset ${color}`}>
			{text}
		</span>
	);
}

export default function SessionReportPage(): JSX.Element {
	const { id } = useParams<{ id: string }>();
	const session = id ? getSessionById(id) : undefined;

	if (!session) {
		return (
			<div className="space-y-4">
				<p className="text-sm text-gray-600">Session not found.</p>
				<Link to="/monitor" className="text-emerald-700 hover:underline text-sm">
					← Back to Real‑time Monitor
				</Link>
			</div>
		);
	}

	// derive mock details
	const topicBadge =
		session.topic === 'Medical'
			? 'bg-blue-50 text-blue-700 ring-blue-600/20'
			: session.topic === 'Legal'
			? 'bg-purple-50 text-purple-700 ring-purple-600/20'
			: session.topic === 'Urgent'
			? 'bg-red-50 text-red-700 ring-red-600/20'
			: 'bg-gray-100 text-gray-700 ring-gray-500/20';

	const sentiment =
		session.topic === 'Urgent'
			? { label: 'Mixed → resolving', score: 0.55 }
			: { label: 'Positive', score: 0.82 };

	const issues =
		session.topic === 'Legal'
			? ['Clarification of sentencing conditions', 'Right-to-appeal phrasing confusion']
			: session.topic === 'Medical'
			? ['Medication dosage misunderstanding', 'Allergy term clarification']
			: session.topic === 'Urgent'
			? ['Raised voice detected', 'Overlapping turns', 'Need for supervisor presence']
			: ['General vocabulary mismatch', 'Accent adaptation'];

	const recommendations = [
		'Confirm understanding with closed‑loop translation',
		'Use visual aids/templates in next interaction',
		'Escalate to human interpreter if confidence drops < 75%',
	];

	const keyPhrases =
		session.topic === 'Legal'
			? ['probation period', 'appeal form', 'court hearing', 'signature']
			: session.topic === 'Medical'
			? ['dosage', 'allergy', 'clinic visit', 'laboratory']
			: ['visit schedule', 'canteen', 'phone call', 'work assignment'];

	// values for sentiment pie in the UI (positive / neutral / negative)
	const r = 42;
	const C = 2 * Math.PI * r;
	const pos = Math.min(0.95, Math.max(0.1, sentiment.score)); // derive from sentiment score
	const neu = 0.2;
	const neg = Math.max(0.05, 1 - pos - neu);
	const posLen = Math.round(pos * C);
	const neuLen = Math.round(neu * C);
	const negLen = Math.round(neg * C);

	return (
		<section className="space-y-6">
			<div className="flex items-center justify-between">
				<h2 className="text-xl font-semibold text-gray-900">Conversation Report: {session.id}</h2>
				<Link to="/monitor" className="text-emerald-700 hover:underline text-sm">
					← Back to Real‑time Monitor
				</Link>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-xs text-gray-600">Facility</p>
					<p className="font-medium text-gray-900">{session.facility}</p>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-xs text-gray-600">Location</p>
					<p className="font-medium text-gray-900">{session.location}</p>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-xs text-gray-600">Officer</p>
					<p className="font-medium text-gray-900">{session.officer}</p>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-xs text-gray-600">Language / Topic</p>
					<div className="mt-1 flex items-center gap-2">
						{pill('bg-emerald-50 text-emerald-700 ring-emerald-600/20', session.languageDetected)}
						{pill(topicBadge, session.topic)}
					</div>
				</div>
			</div>

			{/* Summary */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<h3 className="text-sm font-semibold text-gray-900">Summary</h3>
				<p className="mt-2 text-sm text-gray-700">
					Automated {session.topic.toLowerCase()} translation facilitated a conversation in {session.languageDetected}.
					The model maintained an estimated confidence of {session.aiConfidence}% over {session.duration}. No critical translation
					failures were detected. The conversation concluded with agreed next steps recorded by {session.officer}.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				{/* Issues */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className="text-sm font-semibold text-gray-900">Issues Identified</h3>
					<ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
						{issues.map((i) => (
							<li key={i}>{i}</li>
						))}
					</ul>
				</div>

				{/* Key phrases */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className="text-sm font-semibold text-gray-900">Key Phrases</h3>
					<div className="mt-2 flex flex-wrap gap-2">
						{keyPhrases.map((k) => (
							<span key={k} className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700">
								{k}
							</span>
						))}
					</div>
				</div>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				{/* Recommendations */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className="text-sm font-semibold text-gray-900">Recommendations</h3>
					<ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-gray-700">
						{recommendations.map((r) => (
							<li key={r}>{r}</li>
						))}
					</ul>
				</div>
				{/* Sentiment analysis pie */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className="text-sm font-semibold text-gray-900">Sentiment Analysis</h3>
					<div className="mt-4 flex items-center justify-center gap-6">
						<svg width="140" height="140" viewBox="0 0 100 100">
							<circle cx="50" cy="50" r={r} fill="none" stroke="#e5e7eb" strokeWidth="10" />
							<circle
								cx="50"
								cy="50"
								r={r}
								fill="none"
								stroke="#10b981"
								strokeWidth="10"
								strokeDasharray={`${posLen} ${C - posLen}`}
								strokeDashoffset={0}
								transform="rotate(-90 50 50)"
							/>
							<circle
								cx="50"
								cy="50"
								r={r}
								fill="none"
								stroke="#fbbf24"
								strokeWidth="10"
								strokeDasharray={`${neuLen} ${C - neuLen}`}
								strokeDashoffset={-posLen}
								transform="rotate(-90 50 50)"
							/>
							<circle
								cx="50"
								cy="50"
								r={r}
								fill="none"
								stroke="#ef4444"
								strokeWidth="10"
								strokeDasharray={`${negLen} ${C - negLen}`}
								strokeDashoffset={-(posLen + neuLen)}
								transform="rotate(-90 50 50)"
							/>
							<text x="50" y="54" textAnchor="middle" className="text-[12px] fill-gray-800">
								{Math.round(pos * 100)}%+
							</text>
						</svg>
						<ul className="text-sm text-gray-700">
							<li><span className="inline-block h-2 w-2 rounded-full bg-emerald-500 mr-2" />Positive ~ {Math.round(pos * 100)}%</li>
							<li><span className="inline-block h-2 w-2 rounded-full bg-amber-500 mr-2" />Neutral ~ {Math.round(neu * 100)}%</li>
							<li><span className="inline-block h-2 w-2 rounded-full bg-rose-500 mr-2" />Negative ~ {Math.round(neg * 100)}%</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Additional charts: Topic distribution & language confidence mini pie */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className="text-sm font-semibold text-gray-900">Topic Distribution (last 5 mins)</h3>
					<div className="mt-4 flex items-center justify-center gap-6">
						<svg width="160" height="160" viewBox="0 0 120 120">
							<circle cx="60" cy="60" r="50" fill="#e5e7eb" />
							<path d="M60,60 L60,10 A50,50 0 0,1 110,60 Z" fill="#93c5fd" />
							<path d="M60,60 L110,60 A50,50 0 0,1 70,108 Z" fill="#a78bfa" />
							<path d="M60,60 L70,108 A50,50 0 0,1 60,110 Z" fill="#fca5a5" />
							<path d="M60,60 L60,110 A50,50 0 0,1 60,10 Z" fill="#d1d5db" />
						</svg>
						<ul className="text-sm text-gray-700">
							<li><span className="inline-block h-2 w-2 rounded-full bg-blue-400 mr-2" />Medical ~ 40%</li>
							<li><span className="inline-block h-2 w-2 rounded-full bg-purple-400 mr-2" />Legal ~ 30%</li>
							<li><span className="inline-block h-2 w-2 rounded-full bg-red-400 mr-2" />Urgent ~ 5%</li>
							<li><span className="inline-block h-2 w-2 rounded-full bg-gray-400 mr-2" />Routine ~ 25%</li>
						</ul>
					</div>
				</div>
				{/* Right column intentionally left for future analytics; removed Confidence by Language snapshot card as requested */}
			</div>
		</section>
	);
}


