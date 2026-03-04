import en from './en.json';
import br from './br.json';

export const languages = {
    en: 'English',
    br: 'Português (Brasil)',
};

export const defaultLang = 'en';

export const ui = {
    en,
    br,
} as const;
