export type Topic = 'Medical' | 'Legal' | 'Routine' | 'Urgent';

export interface RealTimeSession {
  id: string;
  facility: string;
  location: string;
  officer: string;
  languageDetected: string;
  topic: Topic;
  aiConfidence: number; // 0-100
  duration: string; // "mm:ss"
}

export const sessions: RealTimeSession[] = [
  {
    id: 'TRX-2033-09',
    facility: 'Riyadh Reform Center',
    location: 'Legal Room 2',
    officer: 'Lt. Al-Faraj',
    languageDetected: 'Urdu',
    topic: 'Legal',
    aiConfidence: 97,
    duration: '06:42',
  },
  {
    id: 'TRX-2033-12',
    facility: 'Jeddah Rehabilitation Complex',
    location: 'Medical Wing A',
    officer: 'Officer Al-Qahtani',
    languageDetected: 'Bengali',
    topic: 'Medical',
    aiConfidence: 93,
    duration: '03:19',
  },
  {
    id: 'TRX-2033-18',
    facility: 'Dammam Correctional Facility',
    location: 'Intake Desk 1',
    officer: 'Sgt. Al-Harbi',
    languageDetected: 'Tagalog',
    topic: 'Routine',
    aiConfidence: 88,
    duration: '01:54',
  },
  {
    id: 'TRX-2033-21',
    facility: 'Riyadh Reform Center',
    location: 'Visitation Hall',
    officer: 'Cpt. Al-Juhani',
    languageDetected: 'Amharic',
    topic: 'Urgent',
    aiConfidence: 84,
    duration: '04:27',
  },
  {
    id: 'TRX-2033-24',
    facility: 'Jeddah Rehabilitation Complex',
    location: 'Legal Room 1',
    officer: 'Lt. Al-Mutairi',
    languageDetected: 'Urdu',
    topic: 'Legal',
    aiConfidence: 96,
    duration: '08:05',
  },
  {
    id: 'TRX-2033-26',
    facility: 'Dammam Correctional Facility',
    location: 'Medical Wing B',
    officer: 'Officer Al-Shahrani',
    languageDetected: 'Bengali',
    topic: 'Medical',
    aiConfidence: 91,
    duration: '02:48',
  },
  {
    id: 'TRX-2033-29',
    facility: 'Riyadh Reform Center',
    location: 'Control Desk',
    officer: 'Sgt. Al-Shehri',
    languageDetected: 'Tagalog',
    topic: 'Routine',
    aiConfidence: 86,
    duration: '00:52',
  },
];

export function getSessionById(id: string): RealTimeSession | undefined {
  return sessions.find((s) => s.id === id);
}


