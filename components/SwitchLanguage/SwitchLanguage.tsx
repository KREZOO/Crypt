"use client";

import "@/i18n";
import { SelectOpenIcon } from "../ui/icons";
import Style from "./SwitchLanguage.module.scss";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {}

const languages = [
  { id: 1, name: "en" },
  { id: 2, name: "uk" },
  { id: 3, name: "ru" },
];

export function SwitchLanguage({}: Props) {
  const { i18n } = useTranslation();

  const [selectedLanguage, setSelectedLanguage] = useState(
    () => languages.find((lang) => lang.name === i18n.language) || languages[0]
  );

  const handleChange = (lang: (typeof languages)[number]) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.name);
    // localStorage удалён
  };

  // При монтировании просто синхронизируем selectedLanguage с текущим языком i18n
  useEffect(() => {
    const found = languages.find((lang) => lang.name === i18n.language);
    if (found) {
      setSelectedLanguage(found);
    }
  }, [i18n.language]);

  return (
    <Listbox value={selectedLanguage} onChange={handleChange}>
      <div className={Style.listbox}>
        <ListboxButton className={Style.language}>
          {selectedLanguage.name}
          <SelectOpenIcon className={Style.open} />
        </ListboxButton>
        <ListboxOptions anchor="bottom" className={Style.options}>
          {languages.map((lang) => (
            <ListboxOption key={lang.id} value={lang} className={Style.option}>
              {lang.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </div>
    </Listbox>
  );
}

export default SwitchLanguage;
