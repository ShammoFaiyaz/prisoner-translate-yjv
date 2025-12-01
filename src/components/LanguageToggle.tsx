import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageToggle: React.FC = () => {
	const { language, toggleLanguage } = useLanguage();
	const label = language === 'en' ? 'العربية' : 'English';
	return (
		<button
			type="button"
			onClick={toggleLanguage}
			className="h-9 rounded-md border border-emerald-600 bg-emerald-600 px-3 py-1 text-sm font-medium text-white transition-colors duration-150 hover:bg-emerald-700"
			style={{ backgroundImage: 'none' }}
			aria-label="Toggle language"
			title="Toggle language"
		>
			{label}
		</button>
	);
};

export default LanguageToggle;



