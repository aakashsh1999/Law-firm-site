"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTransition } from "react";

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // Function to handle locale change
  const handleLocaleChange = (newLocale: string) => {
    const currentPathname = pathname;

    // Replace the locale segment in the path
    const pathnameWithoutLocale = currentPathname.replace(`/${locale}`, "");

    // Start the transition
    startTransition(() => {
      // In case the pathname doesn't include the locale
      const newPath = `/${newLocale}${pathnameWithoutLocale || ""}`;
      router.push(newPath);
    });
  };

  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-2 py-1 rounded-md text-sm font-medium ${
          locale === "en"
            ? "bg-[#2461E2] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => handleLocaleChange("en")}
        disabled={isPending}
      >
        English
      </button>
      <button
        className={`px-2 py-1 rounded-md text-sm font-medium ${
          locale === "hi"
            ? "bg-[#2461E2] text-white"
            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
        onClick={() => handleLocaleChange("hi")}
        disabled={isPending}
      >
        हिन्दी
      </button>
    </div>
  );
}
