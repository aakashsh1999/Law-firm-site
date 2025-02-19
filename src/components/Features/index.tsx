import { InboxIcon, TrashIcon, UsersIcon } from "@heroicons/react/24/outline";

const features = [
  {
    name: "Unlimited inboxes",
    description:
      "Non quo aperiam repellendus quas est est. Eos aut dolore aut ut sit nesciunt. Ex tempora quia. Sit nobis consequatur dolores incidunt.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Manage team members",
    description:
      "Vero eum voluptatem aliquid nostrum voluptatem. Vitae esse natus. Earum nihil deserunt eos quasi cupiditate. A inventore et molestiae natus.",
    href: "#",
    icon: UsersIcon,
  },
  {
    name: "Spam report",
    description:
      "Et quod quaerat dolorem quaerat architecto aliquam accusantium. Ex adipisci et doloremque autem quia quam. Quis eos molestiae at iure impedit.",
    href: "#",
    icon: TrashIcon,
  },
];

export default function Features() {
  return (
    <div className="page-padding bg-[#2461E2] text-white md:text-left text-center">
      <div className="container-large">
        <div className="padding-vertical padding-huge">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-pretty text-4xl font-medium tracking-tight sm:text-6xl">
              Success Stories
            </h2>
            <p className="mt-0 text-lg/8">
              In a suit agains Company, which was selling dangerous products.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base/7 font-semibold">
                    <h2
                      className="font-semibold text-5xl"
                      style={{
                        lineHeight: "65px",
                      }}
                    >
                      1.5 Million <br /> Settlement
                    </h2>
                  </dt>
                  <dd
                    className="mt-1 flex flex-auto flex-col font-light "
                    style={{
                      lineHeight: "23px",
                    }}
                  >
                    <p className="flex-auto">
                      In a suit against Company, <br />
                      which was selling dangerous
                      <br />
                      products, we won a record <br /> settlement for our
                      clients, <br /> making sure that they are <br />
                      taken care of for life
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
