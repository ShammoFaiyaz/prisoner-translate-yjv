import React from 'react';
import KpiCard from '../components/KpiCard';
import RealTimeMonitorSection from '../components/RealTimeMonitorSection';
import Vision2030Section from '../components/Vision2030Section';

export default function OverviewPage(): JSX.Element {
	return (
		<section className="space-y-8">
			{/* Top KPIs */}
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<KpiCard title="Translations Today" value="3,480" subtitle="Completed today" bgClass="bg-green-700" valueClass="text-2xl" />
				<KpiCard title="AI Accuracy" value="98.6%" subtitle="Last 24h (weighted)" bgClass="bg-emerald-600" valueClass="text-2xl" />
				<KpiCard title="Active Devices" value="142" subtitle="Mobile & Static" bgClass="bg-amber-700" valueClass="text-2xl" />
				<KpiCard title="System Status" value="Online" subtitle="All services healthy" bgClass="bg-teal-600" valueClass="text-2xl" />
			</div>

			{/* Today at a glance */}
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation lg:col-span-1">
					<p className="text-sm font-medium text-gray-900">Active Sessions</p>
					<p className="mt-2 text-3xl font-semibold text-gray-900">8</p>
					<ul className="mt-3 space-y-2 text-sm text-gray-700">
						<li className="flex justify-between"><span>TRX-2033-29</span><span className="text-gray-500">Tagalog • Routine</span></li>
						<li className="flex justify-between"><span>TRX-2033-26</span><span className="text-gray-500">Bengali • Medical</span></li>
						<li className="flex justify-between"><span>TRX-2033-24</span><span className="text-gray-500">Urdu • Legal</span></li>
					</ul>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Today's Snapshot</p>
					<div className="mt-3 grid grid-cols-2 gap-3">
						<KpiCard title="Incidents (month)" value="3" subtitle="↓ 63% vs last month" bgClass="bg-rose-600" />
						<KpiCard title="Emergency Reliability" value="99.4%" subtitle="Crisis-mode" bgClass="bg-emerald-600" />
						<KpiCard title="Daily Translations" value="3,480" bgClass="bg-sky-600" />
						<KpiCard title="Medical Consultations" value="574" bgClass="bg-teal-600" />
					</div>
				</div>
				<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
					<p className="text-sm font-medium text-gray-900">Vision 2030 Preview</p>
					<div className="mt-4 grid grid-cols-2 gap-3">
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-emerald-500 to-emerald-300 text-white flex items-center justify-center text-lg font-semibold">94%</div>
							<p className="mt-2 text-xs text-gray-700">Modernization</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-violet-500 to-indigo-300 text-white flex items-center justify-center text-lg font-semibold">98%</div>
							<p className="mt-2 text-xs text-gray-700">Humanitarian</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-sky-500 to-sky-300 text-white flex items-center justify-center text-lg font-semibold">87%</div>
							<p className="mt-2 text-xs text-gray-700">Innovation</p>
						</div>
						<div className="text-center">
							<div className="mx-auto h-16 w-16 rounded-full bg-gradient-to-tr from-teal-500 to-teal-300 text-white flex items-center justify-center text-xs font-semibold">Top 5</div>
							<p className="mt-2 text-xs text-gray-700">Global Position</p>
						</div>
					</div>
				</div>
			</div>

			{/* Mini monitor preview (compact table) */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900 mb-3">Live Sessions Preview</p>
				<RealTimeMonitorSection />
			</div>

			{/* Vision section condensed */}
			<div className="rounded-xl border border-gray-200 bg-white p-4 elevation">
				<Vision2030Section />
			</div>
		</section>
	);
}


