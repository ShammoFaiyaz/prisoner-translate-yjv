import React from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

type NavItem = {
	label: string;
	href: string;
	Icon: (props: { className?: string }) => JSX.Element;
};

const IconHome = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className ?? ''} strokeWidth="2">
		<path d="M3 11.5 12 4l9 7.5" />
		<path d="M5 10.5V20h14v-9.5" />
	</svg>
);
const IconActivity = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className ?? ''} strokeWidth="2">
		<path d="M3 12h4l3 7 4-14 3 7h4" />
	</svg>
);
const IconShield = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className ?? ''} strokeWidth="2">
		<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
	</svg>
);
const IconCog = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className ?? ''} strokeWidth="2">
		<path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
		<path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 0-.33 1.82l.03.07a2 2 0 1 1-3.32 0l.03-.07A1.65 1.65 0 0 0 10 19.4a1.65 1.65 0 0 0-1-.6 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 0-1.82-.33l-.07.03a2 2 0 1 1 0-3.32l.07.03A1.65 1.65 0 0 0 4.6 10a1.65 1.65 0 0 0 .6-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6c.3 0 .59-.1.85-.25A1.65 1.65 0 0 0 11.67 4l.07-.03a2 2 0 1 1 3.32 0L15.1 4a1.65 1.65 0 0 0 .82.35c.26.15.55.25.85.25.45 0 .88-.18 1.2-.5l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06c-.32.32-.5.75-.5 1.2 0 .3.1.59.25.85.2.26.35.55.35.85s-.15.59-.35.85c-.15.26-.25.55-.25.85z" />
	</svg>
);
const IconScale = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className ?? ''} strokeWidth="2">
		<path d="M12 3v18M6 7l-4 6h8l-4-6zM18 7l-4 6h8l-4-6z" />
	</svg>
);
const IconHeart = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className ?? ''} strokeWidth="2">
		<path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 22l7.8-8.6 1-1a5.5 5.5 0 0 0 0-7.8z" />
	</svg>
);
const IconGlobe = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className ?? ''} strokeWidth="2">
		<circle cx="12" cy="12" r="9" />
		<path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
	</svg>
);
const IconSparkles = ({ className }: { className?: string }) => (
	<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={className ?? ''} strokeWidth="2">
		<path d="M5 3l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4zM19 13l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
	</svg>
);

const navItems: NavItem[] = [
	{ label: 'Overview', href: '/', Icon: IconHome },
	{ label: 'Real-time Monitor', href: '/monitor', Icon: IconActivity },
	{ label: 'Security', href: '/security', Icon: IconShield },
	{ label: 'Operations', href: '/operations', Icon: IconCog },
	{ label: 'Legal & Justice', href: '/legal-justice', Icon: IconScale },
	{ label: 'Health', href: '/health', Icon: IconHeart },
	{ label: 'Languages', href: '/languages', Icon: IconGlobe },
	{ label: 'Vision 2030', href: '/vision-2030', Icon: IconSparkles },
];

export default function DashboardLayout(): JSX.Element {
	const location = useLocation();
	const [notifOpen, setNotifOpen] = React.useState(false);
	React.useEffect(() => {
		// On route change: fade in all page sections at once
		const targets = Array.from(
			document.querySelectorAll<HTMLElement>('section, .elevation, .elevation-static, table tr')
		);
		// Reset any previous classes
		targets.forEach((el) => {
			el.classList.remove('reveal-visible');
			el.classList.add('reveal');
		});
		// Force reflow then show all simultaneously for smooth transition
		requestAnimationFrame(() => {
			targets.forEach((el) => {
				// force reflow to ensure transition runs
				void el.getBoundingClientRect();
				el.classList.add('reveal-visible');
			});
		});
	}, [location.pathname]);
	return (
		<div className="flex h-screen w-full bg-gray-50 text-gray-900">
			<aside className="hidden w-80 shrink-0 border-r border-gray-200 bg-white shadow-xl relative z-20 sm:flex sm:flex-col">
				<div className="flex h-20 items-center gap-3 px-4">
					<img src="/PITP-guard-logo.svg" alt="PITP Logo" className="h-12 w-12" />
					<div className="min-w-0">
						<p className="truncate text-base font-semibold text-gray-900">
							Prisoner Intelligent <br />Translation Platform (PITP)
						</p>
					</div>
				</div>
				<div className="px-4 pt-3">
					<div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-3 py-2 text-emerald-700">
						<span className="h-2 w-2 rounded-full bg-emerald-500" />
						<span className="text-sm font-medium">Connected</span>
					</div>
					<div className="mt-5">
						<div className="mb-2 text-sm font-semibold text-gray-700">
							Translator Overview
						</div>
						<div className="grid grid-cols-2 gap-2">
							<div className="rounded-2xl border border-gray-200 p-4 h-28 flex flex-col justify-between elevation bg-green-700 text-white">
								<div className="text-sm font-medium text-white/90">Translations Today</div>
								<div className="text-2xl font-semibold">3,480</div>
							</div>
							<div className="rounded-2xl border border-gray-200 p-4 h-28 flex flex-col justify-between elevation bg-emerald-600 text-white">
								<div className="text-sm font-medium text-white/90">AI Accuracy</div>
								<div className="text-2xl font-semibold">98.6%</div>
							</div>
							<div className="rounded-2xl border border-gray-200 p-4 h-28 flex flex-col justify-between elevation bg-amber-700 text-white">
								<div className="text-sm font-medium text-white/90">Active Devices</div>
								<div className="text-2xl font-semibold">142</div>
							</div>
							<div className="rounded-2xl border border-gray-200 p-4 h-28 flex flex-col justify-between elevation bg-teal-600 text-white">
								<div className="text-sm font-medium text-white/90">System Status</div>
								<div className="text-xl font-semibold">Online</div>
							</div>
						</div>
					</div>
				</div>
				<nav className="flex-1 overflow-y-auto p-2 mt-4">
					<ul className="space-y-1">
						{navItems.map((item) => {
							const active = location.pathname === item.href;
							return (
								<li key={item.label}>
									<NavLink
										to={item.href}
										className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 ${
											active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'
										}`}
									>
										<item.Icon className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
										<span className="truncate">{item.label}</span>
									</NavLink>
								</li>
							);
						})}
					</ul>
				</nav>
				<div className="border-t border-gray-200 p-3">
					<a
						href="https://inova.sa"
						target="_blank"
						rel="noopener noreferrer"
						className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
					>
						<span>Powered by</span>
						<img src="/inova-logo.svg" alt="INOVA" className="h-8 w-auto" />
					</a>
				</div>
			</aside>
			<div className="flex min-w-0 flex-1 flex-col">
				{/* Top controls bar */}
				<header className="sticky top-0 z-30 w-full border-b border-gray-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
					<div className="mx-auto flex h-14 max-w-[1400px] items-center justify-end gap-2 px-3 sm:px-4 lg:px-6">
						<label htmlFor="global-facility" className="hidden text-sm text-gray-600 md:block">
							Facility
						</label>
						<select id="global-facility" name="global-facility" className="filter-control">
							<option>All Facilities</option>
							<option>Riyadh Reform Center</option>
							<option>Jeddah Rehabilitation Complex</option>
							<option>Dammam Correctional Facility</option>
						</select>
						<select className="hidden md:block filter-control">
							<option>All Topics</option>
							<option>Medical</option>
							<option>Legal</option>
							<option>Routine</option>
							<option>Urgent</option>
						</select>
						<select className="hidden md:block filter-control">
							<option>Today</option>
							<option>Last 7 days</option>
							<option>Last 30 days</option>
						</select>
						<select className="hidden lg:block filter-control">
							<option>All Languages</option>
							<option>Arabic</option>
							<option>English</option>
							<option>Urdu</option>
							<option>Bengali</option>
							<option>Tagalog</option>
							<option>Amharic</option>
						</select>
						<div className="hidden items-center gap-2 filter-control text-gray-700 sm:flex">
							<span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
							<span>System Online</span>
						</div>
						<div className="relative">
							<button
								type="button"
								aria-label="Notifications"
								onClick={() => setNotifOpen((v) => !v)}
								className="rounded-full p-2 text-gray-700 hover:bg-gray-100 focus:outline-none"
							>
								<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" strokeWidth="2">
									<path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2z" />
									<path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2z" />
								</svg>
							</button>
							{/* Notification badge */}
							<span id="notif-badge" className="pointer-events-none absolute -right-0.5 -top-0.5 inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-rose-500"></span>
							{notifOpen ? (
								<div className="absolute right-0 z-50 mt-2 w-72 rounded-md border border-gray-200 bg-white/95 p-2 shadow-md backdrop-blur">
									<div className="mb-1 flex items-center justify-between">
										<p className="text-xs font-medium text-gray-900">Notifications</p>
										<button className="text-[11px] text-emerald-700 hover:underline" onClick={() => {
											// simulate mark all read by closing and removing badge
											const badge = (document.querySelector('#notif-badge') as HTMLElement) || null;
											if (badge) badge.style.display = 'none';
											setNotifOpen(false);
										}}>Mark all as read</button>
									</div>
									<ul className="space-y-1 text-xs text-gray-700">
										<li className="flex items-start gap-2 rounded-md p-2 hover:bg-gray-50">
											<span className="mt-1 h-2 w-2 rounded-full bg-emerald-500" />
											<span>System healthy. No incidents reported.</span>
										</li>
										<li className="flex items-start gap-2 rounded-md p-2 hover:bg-gray-50">
											<span className="mt-1 h-2 w-2 rounded-full bg-amber-500" />
											<span>Maintenance window tonight 02:00–03:00.</span>
										</li>
										<li className="flex items-start gap-2 rounded-md p-2 hover:bg-gray-50">
											<span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
											<span>New device activated in Riyadh Reform Center.</span>
										</li>
									</ul>
								</div>
							) : null}
						</div>
					</div>
				</header>
				<div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 via-white to-gray-100">
					<main className="mx-auto max-w-[1400px] px-3 py-8 sm:px-4 lg:px-6">
						<div key={location.pathname} className="route-fade">
							<Outlet />
						</div>
					</main>
				</div>
			</div>
		</div>
	);
}


