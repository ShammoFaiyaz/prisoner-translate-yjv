import { translations } from './translations';
import { useLanguage } from './LanguageContext';

export function useTranslation() {
	const { language } = useLanguage();
	const t = (key: string): string => translations[language][key] ?? key;
	return { t, language };
}



