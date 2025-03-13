"use client";

import { CheckIcon, LanguageIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/service/locale";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslations } from "next-intl";

type Props = {
  defaultValue: string;
  items: Array<{ value: string; label: string }>;
  label: string;
};

export default function LocaleSwitcherSelect({
  defaultValue,
  items,
  label,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const t = useTranslations("LocaleSwitcherSelect");

  function onChange(value: string) {
    const locale = value as Locale;
    startTransition(() => {
      setUserLocale(locale);
    });
  }

  return (
    <div className="relative">
      <Select defaultValue={defaultValue} onValueChange={onChange}>
        <SelectTrigger aria-label={t("placeholder")}>
          <LanguageIcon className="h-6 w-6 text-white transition-colors hover:text-slate-200" />
        </SelectTrigger>
        <SelectContent
          align="end"
          className="w-[200px] overflow-hidden rounded-sm bg-white py-1 shadow-md"
          position="popper"
        >
          {items.map((item) => (
            <SelectItem
              key={item.value}
              className="flex cursor-default items-center px-3 py-2 text-base data-[highlighted]:bg-slate-100"
              value={item.value}
            >
              {/* <div className="mr-2 w-[1rem]">
                {item.value === defaultValue && (
                  <CheckIcon className="h-5 w-5 text-slate-600" />
                )}
              </div> */}
              <span className="text-slate-900">
                {item.label.includes("hi") ? "Hindi" : "English"}
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
