import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';

const LanguageToggle: React.FC = () => {
	const { language, toggleLanguage } = useLanguage();
	const label = language === 'en' ? 'العربية' : 'English';
	return (
		<button
			type="button"
			onClick={toggleLanguage}
			className="filter-control !h-9 px-3 py-1 text-sm font-medium"
			aria-label="Toggle language"
			title="Toggle language"
		>
			{label}
		</button>
	);
};

export default LanguageToggle;



