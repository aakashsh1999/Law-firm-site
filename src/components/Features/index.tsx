"use client";
import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";
import { useTranslations } from "next-intl"; // Assuming you are using next-intl

const featuresData = [
  {
    name: "Unlimited inboxes", // These names are not displayed directly
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.", // This description is not displayed
    href: "#",
    icon: InboxIcon,
    translationKey: "feature1", // Custom key to map to translations
  },
  {
    name: "Manage team members", // These names are not displayed directly
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.", // This description is not displayed
    href: "#",
    icon: UsersIcon,
    translationKey: "feature2", // Custom key to map to translations
  },
  {
    name: "Spam report", // These names are not displayed directly
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.", // This description is not displayed
    href: "#",
    icon: TrashIcon,
    translationKey: "feature3", // Custom key to map to translations
  },
];

export default function Features() {
  const t = useTranslations("featuresSection");

  return (
    <div className="page-padding bg-[#2461E2] text-white md:text-left text-center">
      <div className="container-large">
        <div className="padding-vertical padding-huge">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-medium tracking-tight sm:text-6xl">
              {t("title")}
            </h2>
            <p className="mt-0 text-lg/8">{t("subtitle")}</p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {featuresData.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base/7 font-semibold">
                    <h2
                      className="font-semibold text-5xl"
                      style={{
                        lineHeight: "65px",
                      }}
                    >
                      {t(`${feature.translationKey}.settlement`)} <br />{" "}
                    </h2>
                  </dt>
                  <dd
                    className="mt-1 flex flex-auto flex-col font-light "
                    style={{
                      lineHeight: "23px",
                    }}
                  >
                    <p className="flex-auto">
                      {t(`${feature.translationKey}.description`)}
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
