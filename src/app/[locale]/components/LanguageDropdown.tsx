import React, { useEffect } from "react";
import { locales } from "../../../locales/locales";
import { useRouter } from "next/navigation";

const LanguageDropdown = () => {
  const router = useRouter();

  const handleChangeLanguage = (event) => {
    const selectedLocale = event.target.value;
    router.push(router.pathname, router.asPath, { locale: selectedLocale });
  };

  return (
    <div className="language-dropdown">
      <select
        className="language-dropdown__select"
        onChange={handleChangeLanguage}
      >
        {Object.keys(locales).map((locale) => (
          <option key={locale} value={locale}>
            {locales[locale].label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageDropdown;
