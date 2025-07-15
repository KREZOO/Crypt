"use client";

import "@/i18n";
import { SelectOpenIcon } from "./icons";
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

  // Инициализация состояния выбранного языка на основе i18n
  const [selectedLanguage, setSelectedLanguage] = useState(
    () => languages.find((lang) => lang.name === i18n.language) || languages[0]
  );

  // Меняем язык в i18next при выборе нового
  const handleChange = (lang: (typeof languages)[number]) => {
    setSelectedLanguage(lang);
    i18n.changeLanguage(lang.name);
    localStorage.setItem("i18nextLng", lang.name); // сохраняем выбор
  };

  // При монтировании — убеждаемся, что язык соответствует сохранённому
  useEffect(() => {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang) {
      const found = languages.find((lang) => lang.name === savedLang);
      if (found) {
        setSelectedLanguage(found);
        i18n.changeLanguage(found.name);
      }
    }
  }, []);

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
