import React from "react";
import { locales } from "../../../locales/locales";
import { useRouter, usePathname } from "next/navigation";

const LanguageDropdown = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleChangeLanguage = (event) => {
    const selectedLocale = event.target.value;
    console.log(selectedLocale);
    router.push(`${window.location.origin}/${selectedLocale}`);
  };

  return (
    <div className="language-dropdown">
      <select
        value={pathname === "/" ? "br" : "en"}
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
