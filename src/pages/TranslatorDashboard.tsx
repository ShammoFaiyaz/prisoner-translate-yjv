import React from 'react';
import KpiCard from '../components/KpiCard';
import RealTimeMonitorSection from '../components/RealTimeMonitorSection';
import SecuritySection from '../components/SecuritySection';
import OperationsSection from '../components/OperationsSection';
import OfficerEmpowermentSection from '../components/OfficerEmpowermentSection';
import LegalJusticeSection from '../components/LegalJusticeSection';
import HealthcareSection from '../components/HealthcareSection';
import LanguageAnalyticsSection from '../components/LanguageAnalyticsSection';
import Vision2030Section from '../components/Vision2030Section';

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
  { label: 'Overview', href: '#overview', Icon: IconHome },
  { label: 'Real-time Monitor', href: '#monitor', Icon: IconActivity },
  { label: 'Security', href: '#security', Icon: IconShield },
  { label: 'Operations', href: '#operations', Icon: IconCog },
  { label: 'Legal & Justice', href: '#legal', Icon: IconScale },
  { label: 'Health', href: '#health', Icon: IconHeart },
  { label: 'Languages', href: '#languages', Icon: IconGlobe },
  { label: 'Vision 2030', href: '#vision', Icon: IconSparkles },
];

type SidebarStatTileProps = {
  label: string;
  value: string;
  hint?: string;
  colorClass?: string;
  fromClass?: string; // gradient from color to white
  bgClass?: string; // solid color background
  valueClass?: string;
};

function SidebarStatTile({
  label,
  value,
  hint,
  colorClass,
  fromClass,
  bgClass,
  valueClass,
}: SidebarStatTileProps): JSX.Element {
  if (bgClass) {
    return (
      <div className={`rounded-2xl border border-gray-200 p-4 h-28 flex flex-col justify-between elevation ${bgClass} text-white`}>
        <div className="text-sm font-medium text-white/90">{label}</div>
        <div className={`${valueClass ?? 'text-2xl'} font-semibold text-white`}>{value}</div>
        {hint ? <div className="text-xs text-white/80">{hint}</div> : null}
      </div>
    );
  }
  // Fallback to gradient style if provided
  return (
      <div className={`rounded-2xl border border-gray-200 p-4 h-28 flex flex-col justify-between elevation bg-gradient-to-b ${fromClass ?? ''} to-white`}>
        <div className={`text-sm font-medium ${colorClass ?? 'text-gray-700'}`}>{label}</div>
        <div className={`${valueClass ?? 'text-2xl'} font-semibold ${colorClass ?? 'text-gray-900'}`}>{value}</div>
        {hint ? <div className="text-xs text-gray-600">{hint}</div> : null}
      </div>
    );
}

function DashboardOverviewHeader(): JSX.Element {
  return (
    <section className="mb-8 space-y-4">
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        {/* Overview title intentionally removed per request */}
        <div className="flex items-center gap-2">
          <label htmlFor="facility" className="text-sm text-gray-600">
            Facility
          </label>
          <select
            id="facility"
            name="facility"
            className="filter-control"
            defaultValue="All Facilities"
          >
            <option>All Facilities</option>
            <option>Riyadh Reform Center</option>
            <option>Jeddah Rehabilitation Complex</option>
            <option>Dammam Correctional Facility</option>
          </select>
          {/* Additional filters */}
          <select className="hidden sm:block filter-control">
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
          <div className="hidden items-center gap-2 filter-control text-gray-700 sm:flex">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
            <span>System Online</span>
          </div>
          <span className="filter-control flex items-center font-medium text-gray-700">
            Facility: All
          </span>
          {/* Notifications button */}
          <NotificationsButton fullWidth />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KpiCard title="Translations Today" value="3,480" subtitle="Completed today" bgClass="bg-sky-600" valueClass="text-2xl" />
        <KpiCard title="AI Accuracy" value="98.6%" subtitle="Last 24h (weighted)" bgClass="bg-emerald-600" valueClass="text-2xl" />
        <KpiCard title="Active Devices" value="142" subtitle="Mobile & Static" bgClass="bg-indigo-600" valueClass="text-2xl" />
        <KpiCard
          title="System Status"
          value="Online"
          subtitle="All services healthy"
          bgClass="bg-teal-600"
          valueClass="text-2xl"
        />
      </div>
    </section>
  );
}

function NotificationsButton({ fullWidth = false }: { fullWidth?: boolean }): JSX.Element {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={fullWidth ? 'filter-control flex items-center justify-center' : 'rounded-full p-2 text-gray-700 hover:bg-gray-100'}
        aria-label="Notifications"
      >
        {/* Bell icon */}
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" strokeWidth="2">
          <path d="M12 22a2 2 0 0 0 2-2H10a2 2 0 0 0 2 2z" />
          <path d="M18 16v-5a6 6 0 0 0-12 0v5l-2 2h16l-2-2z" />
        </svg>
      </button>
      {open ? (
        <div className="absolute right-0 z-50 mt-2 w-64 rounded-lg border border-gray-200 bg-white p-3 shadow-lg">
          <p className="text-sm font-semibold text-gray-900">Notifications</p>
          <ul className="mt-2 space-y-2 text-sm text-gray-700">
            <li className="rounded-md bg-emerald-50 p-2">
              System healthy. No incidents reported.
            </li>
            <li className="rounded-md bg-amber-50 p-2">
              Maintenance window tonight 02:00–03:00.
            </li>
            <li className="rounded-md bg-sky-50 p-2">
              New device activated in Riyadh Reform Center.
            </li>
          </ul>
          <button className="mt-3 w-full rounded-md border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-700 hover:bg-gray-50"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
}

function TranslatorDashboard(): JSX.Element {
  const [hash, setHash] = React.useState<string>(typeof window !== 'undefined' ? window.location.hash : '');
  React.useEffect(() => {
    const onHash = () => setHash(window.location.hash);
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  return (
    <div className="flex h-screen w-full bg-gray-50 text-gray-900">
      <aside className="hidden w-80 shrink-0 border-r border-gray-200 bg-white shadow-xl relative z-20 sm:flex sm:flex-col">
        <div className="flex h-20 items-center gap-3 px-4">
          <img src="/PITP-guard-logo.svg" alt="PITP Logo" className="h-12 w-12" />
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-gray-900">
              Prisoner Intelligent <br></br>Translation Platform (PITP)
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
              <SidebarStatTile
                label="Translations Today"
                value="3,480"
                bgClass="bg-sky-600"
              />
              <SidebarStatTile
                label="AI Accuracy"
                value="98.6%"
                bgClass="bg-emerald-600"
              />
              <SidebarStatTile
                label="Active Devices"
                value="142"
                hint="Mobile & Static"
                bgClass="bg-indigo-600"
              />
              <SidebarStatTile
                label="System Status"
                value="Online"
                bgClass="bg-teal-600"
                valueClass="text-xl"
              />
            </div>
          </div>
        </div>
        <nav className="flex-1 overflow-y-auto p-2 mt-4">
          <ul className="space-y-1">
            {navItems.map((item) => {
              const active = hash === item.href || (!hash && item.href === '#overview');
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`group flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-gray-100 hover:text-gray-900 ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-700'}`}
                    aria-current={active ? 'page' : undefined}
                  >
                    <item.Icon className="h-4 w-4 text-gray-500 group-hover:text-gray-700" />
                    <span className="truncate">{item.label}</span>
                  </a>
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

          <div className="flex-1 overflow-y-auto bg-gradient-to-br from-gray-50 via-white to-gray-100">
          <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <div id="overview" className="scroll-mt-6">
              <DashboardOverviewHeader />
            </div>
            {/* <h2 className="text-2xl font-bold tracking-tight text-gray-900">
              Saudi Prison AI Translator
            </h2> */}
            <div className="space-y-10">
              <div id="monitor" className="scroll-mt-6"><RealTimeMonitorSection /></div>
              <div id="security" className="scroll-mt-6"><SecuritySection /></div>
              <div id="operations" className="scroll-mt-6"><OperationsSection /></div>
              <OfficerEmpowermentSection />
              <div id="legal" className="scroll-mt-6"><LegalJusticeSection /></div>
              <div id="health" className="scroll-mt-6"><HealthcareSection /></div>
              <div id="languages" className="scroll-mt-6"><LanguageAnalyticsSection /></div>
              <div id="vision" className="scroll-mt-6"><Vision2030Section /></div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default TranslatorDashboard;


