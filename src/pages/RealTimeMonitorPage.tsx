import React from 'react';
import RealTimeMonitorSection from '../components/RealTimeMonitorSection';
import KpiCard from '../components/KpiCard';

export default function RealTimeMonitorPage(): JSX.Element {
	return (
		<section className="space-y-8">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<KpiCard title="Active Sessions" value="8" bgClass="bg-sky-600" />
				<KpiCard title="Avg AI Confidence" value="93%" bgClass="bg-emerald-600" />
				<KpiCard title="Most Used Language" value="Bengali" bgClass="bg-indigo-600" />
				<KpiCard title="Urgent Sessions" value="1" bgClass="bg-rose-600" />
			</div>
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900">Topic distribution today</p>
				<div className="mt-4 grid grid-cols-4 gap-4">
					<div className="text-center">
						<div className="mx-auto h-20 w-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-semibold">Medical</div>
						<p className="mt-2 text-xs text-gray-700">44%</p>
					</div>
					<div className="text-center">
						<div className="mx-auto h-20 w-20 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 font-semibold">Legal</div>
						<p className="mt-2 text-xs text-gray-700">26%</p>
					</div>
					<div className="text-center">
						<div className="mx-auto h-20 w-20 rounded-full bg-gray-100 flex items-center justify-center text-gray-700 font-semibold">Routine</div>
						<p className="mt-2 text-xs text-gray-700">28%</p>
					</div>
					<div className="text-center">
						<div className="mx-auto h-20 w-20 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 font-semibold">Urgent</div>
						<p className="mt-2 text-xs text-gray-700">2%</p>
					</div>
				</div>
			</div>
			<RealTimeMonitorSection />
		</section>
	);
}


