import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export const useIsEn = () => {
    const {
        i18n: { language },
      } = useTranslation();

    const isEn = useMemo(() => {
        return language === 'en';
      }, [language]);

  return {isEn};
};