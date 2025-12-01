import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { Language } from './translations';

type LanguageContextValue = {
	language: Language;
	setLanguage: (lang: Language) => void;
	toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextValue>({
	language: 'ar',
	setLanguage: () => {},
	toggleLanguage: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }): JSX.Element {
	const [language, setLanguageState] = useState<Language>(() => {
		const saved = typeof window !== 'undefined' ? (localStorage.getItem('pitp-language') as Language | null) : null;
		return saved ?? 'ar';
	});

	const setLanguage = (lang: Language) => {
		setLanguageState(lang);
		if (typeof window !== 'undefined') {
			localStorage.setItem('pitp-language', lang);
		}
	};

	const toggleLanguage = () => setLanguage(language === 'en' ? 'ar' : 'en');

	useEffect(() => {
		if (typeof document !== 'undefined') {
			document.documentElement.lang = language;
			document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
			// Update page title per language
			const title =
				language === 'ar'
					? 'الروبوت الذكي للترجمة الفورية والتفاعلية للنزلاء'
					: 'Prisoner Intelligent Translation Platform (PITP)';
			document.title = title;
		}
	}, [language]);

	const value = useMemo(() => ({ language, setLanguage, toggleLanguage }), [language]);
	return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
	return useContext(LanguageContext);
}



