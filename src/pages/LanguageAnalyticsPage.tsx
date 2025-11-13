import React from 'react';
import LanguageAnalyticsSection from '../components/LanguageAnalyticsSection';

export default function LanguageAnalyticsPage(): JSX.Element {
	return (
		<section className="space-y-8">
			<LanguageAnalyticsSection />
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
					<div className="mt-4 h-40 rounded-md bg-gradient-to-b from-indigo-200 to-white"></div>
				</div>
			</div>
		</section>
	);
}


