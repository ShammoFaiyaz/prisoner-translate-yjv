import React from 'react';
import KpiCard from './KpiCard';

export default function LegalJusticeSection(): JSX.Element {
	return (
		<section>
			<div className="mb-2">
				<h3 className="text-lg font-semibold text-gray-900">Legal Justice & Human Dignity</h3>
				<p className="mt-1 text-sm text-gray-600">
					The translator ensures inmates understand legal procedures and can clearly express their needs, supporting due process and dignity.
				</p>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<KpiCard
					title="Legal Clarity Score"
					value="96%"
					subtitle="Inmate understanding of rights & procedures"
					bgClass="bg-emerald-600"
				/>
				<KpiCard
					title="Legal Translation Sessions (Today)"
					value="128"
					bgClass="bg-amber-700"
					subtitle="Sessions conducted"
				/>
				<KpiCard
					title="Sensitive Topic Handling"
					value="99% success"
					bgClass="bg-emerald-600"
					subtitle="Successful handling of sensitive topics"
				/>
				<KpiCard
					title="Human Dignity Rating"
					value="Excellent"
					bgClass="bg-teal-600"
					subtitle="Measured by respect and due process"
				/>
			</div>

			<div className="mt-6 rounded-xl border border-gray-200 bg-white p-4 elevation">
				<p className="text-sm font-medium text-gray-900">Highlighted Legal Use-Cases</p>
				<ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-gray-700">
					<li>Explaining sentencing conditions</li>
					<li>Appeal rights</li>
					<li>Visitation rules</li>
					<li>Complaint and grievance process</li>
				</ul>
			</div>
		</section>
	);
}


