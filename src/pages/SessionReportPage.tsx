import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { getSessionById } from '../data/sessions';
import { useTranslation } from '../i18n/useTranslation';

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
	const { language, t } = useTranslation();
	const align = language === 'ar' ? 'text-right' : 'text-left';

	// Translate dynamic values (facility/location/officer) when Arabic is active.
	const trFacility = (v: string): string => {
		if (language !== 'ar') return v;
		const map: Record<string, string> = {
			'Riyadh Reform Center': 'إصلاحية الرياض',
			'Jeddah Rehabilitation Complex': 'مجمع تأهيل جدة',
			'Dammam Correctional Facility': 'سجن الدمام',
		};
		return map[v] ?? v;
	};
	const trLocation = (v: string): string => {
		if (language !== 'ar') return v;
		if (/^Legal Room\s+/i.test(v)) return v.replace(/^Legal Room\s+/i, 'غرفة قانونية ');
		if (/^Medical Wing\s+/i.test(v)) return v.replace(/^Medical Wing\s+/i, 'الجناح الطبي ');
		if (/^Intake Desk\s+/i.test(v)) return v.replace(/^Intake Desk\s+/i, 'منضدة الاستقبال ');
		return v;
	};
	const trOfficer = (v: string): string => {
		if (language !== 'ar') return v;
		const rankMap: Record<string, string> = { 'Lt.': 'الملازم', 'Sgt.': 'الرقيب', 'Cpt.': 'النقيب', 'Maj.': 'الرائد' };
		const parts = v.split(' ');
		if (parts.length > 1 && rankMap[parts[0]]) return `${rankMap[parts[0]]} ${parts.slice(1).join(' ')}`;
		return v;
	};

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
		language === 'ar'
			? session.topic === 'Legal'
				? ['توضيح شروط Sentencing', 'ارتباك بصياغة Right-to-appeal']
				: session.topic === 'Medical'
				? ['سوء فهم جرعة الدواء', 'توضيح مصطلح الحساسية']
				: session.topic === 'Urgent'
				? ['تم رصد ارتفاع في النبرة', 'تداخل في الأدوار', 'الحاجة لوجود مشرف']
				: ['عدم تطابق عام في المفردات', 'التأقلم مع اللكنة']
			: session.topic === 'Legal'
			? ['Clarification of sentencing conditions', 'Right-to-appeal phrasing confusion']
			: session.topic === 'Medical'
			? ['Medication dosage misunderstanding', 'Allergy term clarification']
			: session.topic === 'Urgent'
			? ['Raised voice detected', 'Overlapping turns', 'Need for supervisor presence']
			: ['General vocabulary mismatch', 'Accent adaptation'];

	const recommendations =
		language === 'ar'
			? [
					'تأكيد الفهم باستخدام ترجمة حلقة مغلقة',
					'استخدام وسائل/قوالب بصرية في التفاعل القادم',
					'التصعيد إلى مترجم بشري إذا انخفضت الثقة < 75%',
			  ]
			: [
					'Confirm understanding with closed‑loop translation',
					'Use visual aids/templates in next interaction',
					'Escalate to human interpreter if confidence drops < 75%',
			  ];

	const keyPhrases =
		language === 'ar'
			? session.topic === 'Legal'
				? ['فترة المراقبة', 'نموذج الاستئناف', 'جلسة المحكمة', 'توقيع']
				: session.topic === 'Medical'
				? ['جرعة', 'حساسية', 'زيارة العيادة', 'مختبر']
				: ['جدول الزيارات', 'الكانتين', 'مكالمة هاتفية', 'مهمة عمل']
			: session.topic === 'Legal'
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
				<h2 className="text-xl font-semibold text-gray-900">{t('report.title')}: {session.id}</h2>
				<Link to="/monitor" className="text-emerald-700 hover:underline text-sm">
					{t('report.back')}
				</Link>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-xs text-gray-600">{t('report.facility')}</p>
					<p className="font-medium text-gray-900">{trFacility(session.facility)}</p>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-xs text-gray-600">{t('report.location')}</p>
					<p className="font-medium text-gray-900">{trLocation(session.location)}</p>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-xs text-gray-600">{t('report.officer')}</p>
					<p className="font-medium text-gray-900">{trOfficer(session.officer)}</p>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-xs text-gray-600">{t('report.langTopic')}</p>
					<div className="mt-1 flex items-center gap-2">
						{pill('bg-emerald-50 text-emerald-700 ring-emerald-600/20', session.languageDetected)}
						{pill(topicBadge, session.topic)}
					</div>
				</div>
			</div>

			{/* Summary */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<h3 className={`text-sm font-semibold text-gray-900 ${align}`}>{t('report.summary')}</h3>
				<p className="mt-2 text-sm text-gray-700">
					{language === 'ar'
						? `سهلت الترجمة الآلية ${session.topic} محادثة باللغة ${session.languageDetected}. حافظ النموذج على ثقة مقدرة بنسبة ${session.aiConfidence}% لمدة ${session.duration}. لم تُكتشف أخطاء ترجمة حرجة. اختتمت المحادثة بخطوات متفق عليها سجّلها ${session.officer}.`
						: `Automated ${session.topic.toLowerCase()} translation facilitated a conversation in ${session.languageDetected}. The model maintained an estimated confidence of ${session.aiConfidence}% over ${session.duration}. No critical translation failures were detected. The conversation concluded with agreed next steps recorded by ${session.officer}.`}
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
				{/* Issues */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className={`text-sm font-semibold text-gray-900 ${align}`}>{t('report.issues')}</h3>
					<ul className={`mt-2 list-disc space-y-1 ${language === 'ar' ? 'pr-5' : 'pl-5'} text-sm text-gray-700`}>
						{issues.map((i) => (
							<li key={i}>{i}</li>
						))}
					</ul>
				</div>

				{/* Key phrases */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className={`text-sm font-semibold text-gray-900 ${align}`}>{t('report.keyPhrases')}</h3>
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
					<h3 className={`text-sm font-semibold text-gray-900 ${align}`}>{t('report.recommendations')}</h3>
					<ul className={`mt-2 list-disc space-y-1 ${language === 'ar' ? 'pr-5' : 'pl-5'} text-sm text-gray-700`}>
						{recommendations.map((r) => (
							<li key={r}>{r}</li>
						))}
					</ul>
				</div>
				{/* Sentiment analysis pie */}
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className={`text-sm font-semibold text-gray-900 ${align}`}>{t('report.sentiment')}</h3>
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
						<ul className={`text-sm text-gray-700 ${align}`}>
							<li><span className={`inline-block h-2 w-2 rounded-full bg-emerald-500 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />{t('sentiment.positive')} ~ {Math.round(pos * 100)}%</li>
							<li><span className={`inline-block h-2 w-2 rounded-full bg-amber-500 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />{t('sentiment.neutral')} ~ {Math.round(neu * 100)}%</li>
							<li><span className={`inline-block h-2 w-2 rounded-full bg-rose-500 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />{t('sentiment.negative')} ~ {Math.round(neg * 100)}%</li>
						</ul>
					</div>
				</div>
			</div>

			{/* Additional charts: Topic distribution & language confidence mini pie */}
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<h3 className={`text-sm font-semibold text-gray-900 ${align}`}>{t('report.topicDist')}</h3>
					<div className="mt-4 flex items-center justify-center gap-6">
						<svg width="160" height="160" viewBox="0 0 120 120">
							<circle cx="60" cy="60" r="50" fill="#e5e7eb" />
							<path d="M60,60 L60,10 A50,50 0 0,1 110,60 Z" fill="#93c5fd" />
							<path d="M60,60 L110,60 A50,50 0 0,1 70,108 Z" fill="#a78bfa" />
							<path d="M60,60 L70,108 A50,50 0 0,1 60,110 Z" fill="#fca5a5" />
							<path d="M60,60 L60,110 A50,50 0 0,1 60,10 Z" fill="#d1d5db" />
						</svg>
						<ul className={`text-sm text-gray-700 ${align}`}>
							<li><span className={`inline-block h-2 w-2 rounded-full bg-blue-400 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />Medical ~ 40%</li>
							<li><span className={`inline-block h-2 w-2 rounded-full bg-purple-400 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />Legal ~ 30%</li>
							<li><span className={`inline-block h-2 w-2 rounded-full bg-red-400 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />Urgent ~ 5%</li>
							<li><span className={`inline-block h-2 w-2 rounded-full bg-gray-400 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />Routine ~ 25%</li>
						</ul>
					</div>
				</div>
				{/* Right column intentionally left for future analytics; removed Confidence by Language snapshot card as requested */}
			</div>
		</section>
	);
}


