// @ts-nocheck
"use client";
import React, { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import {
  Bars3Icon,
  BellIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import Search from "../Search";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LawyerRegistrationModal from "../Modals/AddLawyer";
import logo from "../../assets/BP_LOGO.jpg";
import Image from "next/image";
import LocaleSwitcher from "../LocaleSwitcher";
import { useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// const JoyRide = dynamic(() => import("react-joyride"), { ssr: false });

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/why-choose-us", current: false },
  { name: "Services", href: "/service", current: false },
  { name: "Testimonials", href: "/testimonials", current: false },
  { name: "Our Team", href: "/our-team", current: false },
  { name: "Contact", href: "/contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const joyRideSteps = [
  {
    target: ".client-step",
    content: "Need a lawyer? Find expert legal help here!",
    placement: "bottom",
  },
  {
    target: ".lawyer-step",
    content: "If you are a Lawyer? Join Our Trusted Network!",
    placement: "left",
  },
];

export const solutions = [
  {
    heading: "Business & Commercial Law",
    items: [
      { title: "Corporate Law", url: "/service/corporate-law" },
      { title: "Contract Law", url: "/service/contract-law" },
      {
        title: "Mergers and Acquisitions (M&A)",
        url: "/service/mergers-and-acquisitions",
      },
      { title: "Competition Law", url: "/service/competition-law" },
      {
        title: "Banking and Finance Law",
        url: "/service/banking-and-finance-law",
      },
      { title: "Taxation Law", url: "/service/taxation-law" },
      {
        title: "Intellectual Property Rights",
        url: "/service/intellectual-property-rights",
      },
    ],
  },
  {
    heading: "Litigation & Dispute Resolution",
    items: [
      { title: "Civil Litigation", url: "/service/civil-litigation" },
      { title: "Criminal Law", url: "/service/criminal-law" },
      { title: "Criminal Litigation", url: "/service/criminal-litigation" },
      {
        title: "Alternative Dispute Resolution (ADR)",
        url: "/service/alternative-dispute-resolution",
      },
      { title: "ED/CBI", url: "/service/ed-cbi" },
    ],
  },
  {
    heading: "Specialized Legal Fields",
    items: [
      { title: "Constitutional Law", url: "/service/constitutional-law" },
      { title: "Environmental Law", url: "/service/environmental-law" },
      { title: "Family Law", url: "/service/family-law" },
      { title: "Human Rights", url: "/service/human-rights" },
      {
        title: "International Commercial Law",
        url: "/service/international-commercial-law",
      },
      { title: "Labour Law", url: "/service/labour-law" },
      { title: "Maritime Law", url: "/service/maritime-law" },
      {
        title: "Public International Law",
        url: "/service/public-international-law",
      },
      {
        title: "Real Estate and Real Property Law",
        url: "/service/real-estate-and-real-property-law",
      },
      { title: "Sports Law", url: "/service/sports-law" },
      { title: "Technology Law", url: "/service/technology-law" },
      { title: "Aviation Law", url: "/service/aviation-law" },
      { title: "Women and Law", url: "/service/women-and-law" },
      { title: "Political Party laws", url: "/service/political-party-laws" },
    ],
  },
];
function NavBar() {
  const pathname = usePathname();
  const [run, setRun] = useState(false); // Controls whether the tour runs
  const [isClient, setIsClient] = useState(false);

  // useEffect(() => {
  //   setIsClient(true);
  // }, []);

  // useEffect(() => {
  //   if (isClient) {
  //     const hasSeenTour =
  //       typeof window !== "undefined" && localStorage.getItem("hasSeenTour");
  //     if (!hasSeenTour) {
  //       setRun(true); // Run the tour only if not seen
  //     }
  //   }
  // }, [isClient]); //

  // const handleTourComplete = () => {
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("hasSeenTour", "true"); // Store flag to prevent re-running
  //   }
  //   setRun(false);
  // };

  // if (!isClient) return null; // Prevent SSR rendering

  return (
    <>
      {/* <JoyRide
        steps={joyRideSteps}
        run={run}
        continuous
        showProgress
        showSkipButton
        styles={{
          options: { zIndex: 1000 },
        }}
        callback={(data) => {
          if (data.status === "finished" || data.status === "skipped") {
            handleTourComplete();
          }
        }}
      /> */}
      <Disclosure as="header" className="bg-[#0B284C] shadow">
        {({ open }) => (
          <>
            <div className="mx-auto ">
              <div className="relative flex h-16 justify-between  px-2 sm:px-4  lg:px-24">
                <div className="relative z-10 flex px-2 lg:px-0">
                  <div className="flex shrink-0 items-center">
                    <Link href={"/"}>
                      <Image src={logo} width={50} alt="" height={50} />
                    </Link>
                  </div>
                </div>
                <div className="relative z-0  flex flex-1 items-center justify-center px-2  sm:absolute sm:inset-0 client-step">
                  <Search />
                </div>
                <div className="relative z-10 flex items-center lg:hidden">
                  {/* Mobile menu button */}
                  <DisclosureButton className="group relative inline-flex items-center justify-center p-2 ">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open menu</span>
                    <Bars3Icon
                      aria-hidden="true"
                      className={`block text-white size-6 transition-transform duration-300 ${
                        open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
                      }`}
                    />
                    <XMarkIcon
                      aria-hidden="true"
                      className={`absolute text-white size-6 transition-transform duration-300 ${
                        open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
                      }`}
                    />
                  </DisclosureButton>
                </div>
                <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                  <LawyerRegistrationModal className="lawyer-step" />
                  <a
                    href="#"
                    className="ml-3 inline-flex  items-center rounded-xl bg-[#2461E2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact Us
                  </a>
                  <LocaleSwitcher />
                </div>
              </div>
              <nav
                aria-label="Global"
                className="hidden lg:flex lg:space-x-8 lg:py-2 px-2 sm:px-4  lg:px-8 bg-[#f5f5f5] justify-center"
              >
                {navigation.map((item) => {
                  if (item.name === "Services") {
                    return (
                      <Popover
                        className="relative"
                        key={item.name}
                        style={{ zIndex: 2 }}
                      >
                        <PopoverTrigger
                          className={classNames(
                            pathname.includes("service")
                              ? "text-blue-500"
                              : "text-blue-900 hover:text-blue-500",
                            "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                          )}
                        >
                          <span>{item.name}</span>
                          <ChevronDownIcon
                            aria-hidden="true"
                            className="size-5"
                          />
                        </PopoverTrigger>

                        <PopoverContent
                          transition
                          className=" z-10 mt-4 w-screen max-w-7xl px-4 "
                        >
                          {/* <div className="flex-auto overflow-hidden rounded-3xl bg-white text-sm/6 shadow-lg ring-1 ring-gray-900/5 "> */}
                          <div className="grid grid-cols-1 gap-x-2 gap-y-1 p-4 lg:grid-cols-3 text-[#0B284C]">
                            {solutions.map((item) => (
                              <div
                                key={item.heading}
                                className="group relative flex flex-col gap-y-2 rounded-lg p-4"
                              >
                                <div className="font-semibold ">
                                  {item.heading}
                                </div>
                                <div className="flex flex-col gap-y-1">
                                  {item.items.map((el) => (
                                    <Link
                                      href={el.url}
                                      key={el.title}
                                      className="font-light text-sm cursor-pointer hover:underline text-blue-950"
                                    >
                                      {el.title}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                          {/* </div> */}
                        </PopoverContent>
                      </Popover>
                    );
                  }
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.href === pathname
                          ? "text-blue-500"
                          : "text-blue-900 hover:text-blue-500",
                        "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                      )}
                    >
                      {item.name}
                    </a>
                  );
                })}
              </nav>
            </div>

            <DisclosurePanel
              as="nav"
              aria-label="Global"
              className="lg:hidden bg-white transition-ease"
              style={{
                transition: "all 1s ease-out",
              }}
            >
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => {
                  if (item.name === "Services") {
                    return (
                      <Popover className="relative" key={item.name}>
                        <PopoverTrigger
                          className={classNames(
                            pathname.includes("service")
                              ? "text-blue-500"
                              : "text-blue-900 hover:bg-gray-50 hover:text-gray-900",
                            "flex items-center  rounded-md px-3 py-2 text-base font-light"
                          )}
                        >
                          <span>Services</span>
                          {/* <ChevronDownIcon
                          aria-hidden="true"
                          className="size-5"
                        /> */}
                        </PopoverTrigger>

                        <PopoverContent
                          transition
                          className="flex  px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                          <div className="flex overflow-hidden text-sm/6">
                            <div className="grid grid-cols-1 gap-y-1 lg:grid-cols-3 text-[#0B284C]">
                              {solutions.map((item) => (
                                <div
                                  key={item.heading}
                                  className=" flex flex-col gap-y-2 rounded-lg py-2"
                                >
                                  <div className="font-semibold">
                                    {item.heading}
                                  </div>
                                  <div className="flex flex-col  gap-y-1">
                                    {item.items.map((el) => (
                                      <Link
                                        href={el.url}
                                        key={el.title}
                                        className="font-light cursor-pointer hover:underline text-blue-950"
                                      >
                                        {el.title}
                                      </Link>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </PopoverContent>
                      </Popover>
                    );
                  }
                  return (
                    <DisclosureButton
                      key={item.name}
                      as="a"
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={classNames(
                        item.href === pathname
                          ? "text-blue-500"
                          : "text-blue-900 hover:bg-gray-50 hover:text-gray-900",
                        "block rounded-md px-3 py-2 text-base font-light"
                      )}
                    >
                      {item.name}
                    </DisclosureButton>
                  );
                })}
              </div>
              <div className="pb-3 pt-2  lawyer-step">
                <div className="flex flex-col items-start justify-start px-4 gap-y-3">
                  <LawyerRegistrationModal />

                  <a
                    href="#"
                    className=" inline-flex  items-center rounded-xl bg-[#2461E2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </>
  );
}

export default NavBar;

export const Logo = () => {
  return (
    <>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="60px"
        height="60px"
        viewBox="0 0 485.000000 471.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,471.000000) scale(0.100000,-0.100000)"
          fill="#ffffff"
          stroke="none"
        >
          <path
            d="M5 2355 c0 -1298 1 -1828 2 -1177 2 651 2 1713 0 2360 -1 647 -2 115
    -2 -1183z"
          />

          <path
            d="M1568 4353 c-19 -21 -68 -83 -108 -138 -154 -211 -211 -262 -409
    -364 -94 -49 -126 -71 -138 -94 -14 -28 -15 -74 -10 -392 8 -487 33 -742 97
    -995 49 -194 130 -385 222 -525 l42 -65 129 0 129 0 -29 38 c-132 171 -233
    444 -277 750 -27 184 -37 345 -43 698 l-6 342 54 30 c30 16 81 45 114 63 91
    52 183 145 280 286 133 192 100 173 294 173 91 0 274 -5 406 -10 132 -5 380
    -13 550 -17 l310 -7 75 -115 c89 -137 243 -298 369 -386 l84 -58 -7 -81 c-3
    -45 -13 -218 -21 -386 -18 -350 -34 -507 -70 -679 -42 -196 -121 -404 -219
    -570 -20 -34 -36 -64 -36 -67 0 -2 57 -4 128 -4 l127 0 57 103 c74 132 110
    214 158 356 77 230 110 446 135 901 8 151 20 344 26 428 7 84 10 154 8 155 -2
    2 -42 28 -89 59 -115 76 -223 170 -296 259 -59 72 -176 236 -223 312 l-23 37
    -877 0 -877 0 -36 -37z"
          />
          <path
            d="M1777 3823 c-99 -150 -194 -245 -305 -308 l-72 -40 0 -245 c0 -551
    54 -913 175 -1167 51 -108 101 -186 156 -242 l39 -41 678 0 678 0 36 63 c86
    147 143 275 184 412 68 224 84 356 114 965 l11 215 -24 20 c-147 122 -186 158
    -243 228 -36 45 -88 118 -115 163 l-50 81 -337 6 c-185 4 -450 10 -588 13
    l-252 7 -85 -130z m789 -462 c220 -97 241 -401 35 -518 -25 -15 -47 -27 -48
    -28 -2 -1 38 -122 87 -270 50 -148 90 -271 90 -272 0 -2 -126 -3 -281 -3
    l-281 0 6 23 c3 12 37 135 75 272 l70 250 -22 14 c-12 8 -45 38 -74 67 -78 78
    -100 172 -68 281 51 171 244 257 411 184z"
          />
          <path
            d="M880 1341 l0 -201 128 0 c130 0 226 11 275 31 37 15 60 61 52 100 -7
    32 -55 69 -87 69 -30 0 -20 14 22 32 42 18 57 48 46 94 -5 18 -20 32 -54 47
    -40 18 -71 22 -214 25 l-168 4 0 -201z m259 118 c23 -8 31 -17 31 -35 0 -30
    -32 -44 -101 -44 l-49 0 0 45 0 45 44 0 c23 0 57 -5 75 -11z m22 -159 c11 -6
    19 -21 19 -35 0 -33 -27 -45 -99 -45 l-61 0 0 45 0 45 61 0 c33 0 69 -5 80
    -10z"
          />
          <path
            d="M1420 1341 l0 -202 73 3 72 3 3 65 c2 36 8 68 15 72 7 4 48 7 93 7
    134 0 204 42 204 123 0 53 -13 74 -63 100 -38 20 -59 23 -219 26 l-178 4 0
    -201z m289 110 c25 -14 28 -53 6 -71 -8 -7 -44 -15 -80 -18 l-65 -5 0 58 0 58
    59 -6 c32 -2 68 -10 80 -16z"
          />
          <path
            d="M2210 1340 l0 -200 195 0 195 0 0 40 0 40 -120 0 -120 0 0 160 0 160
    -75 0 -75 0 0 -200z"
          />
          <path
            d="M2733 1347 c-57 -106 -103 -196 -103 -200 0 -4 33 -7 73 -7 l74 0 18
    40 18 40 108 0 109 0 20 -40 20 -40 80 0 c44 0 80 3 80 8 0 4 -47 93 -104 197
    l-103 190 -94 3 -94 2 -102 -193z m190 -45 c-36 -2 -67 -1 -69 1 -2 2 12 39
    32 82 l36 78 33 -79 33 -79 -65 -3z"
          />
          <path
            d="M3276 1394 c19 -81 40 -169 47 -198 l13 -51 90 -3 89 -3 50 145 c27
    80 53 142 56 138 4 -4 21 -54 38 -112 18 -58 37 -120 42 -137 l11 -33 88 0
    c76 0 89 3 94 18 9 32 86 364 86 373 0 5 -29 9 -65 9 -74 0 -64 18 -95 -159
    -11 -63 -21 -116 -23 -117 -1 -2 -20 60 -41 137 l-39 139 -92 0 -92 0 -42
    -137 c-23 -75 -43 -139 -45 -140 -4 -5 -34 154 -43 227 l-6 50 -77 0 -77 0 33
    -146z"
          />
          <path
            d="M2150 871 l0 -99 70 -4 c76 -3 90 -1 90 13 0 5 -22 9 -50 9 l-50 0 0
    90 0 90 -30 0 -30 0 0 -99z"
          />
          <path
            d="M2350 868 l0 -103 80 3 c84 4 113 22 35 22 l-45 0 0 90 0 90 -35 0
    -35 0 0 -102z"
          />
          <path
            d="M2557 963 c-4 -3 -7 -48 -7 -100 l0 -93 35 0 c34 0 35 1 35 39 l0 38
    51 6 c28 4 58 12 66 18 22 19 12 71 -17 86 -26 13 -152 18 -163 6z m107 -19
    c9 -4 16 -18 16 -34 0 -27 -15 -40 -46 -40 -10 0 -14 12 -14 40 0 41 9 47 44
    34z"
          />
          <path d="M870 885 l0 -25 550 0 550 0 0 25 0 25 -550 0 -550 0 0 -25z" />
          <path d="M2880 885 l0 -25 556 0 555 0 -3 23 -3 22 -552 3 -553 2 0 -25z" />
          <path
            d="M285 620 c-3 -5 1 -10 9 -10 13 0 16 -13 16 -65 0 -58 2 -65 20 -65
    18 0 20 7 20 65 0 37 4 65 10 65 6 0 10 5 10 10 0 6 -18 10 -39 10 -22 0 -43
    -4 -46 -10z"
          />
          <path
            d="M400 555 c0 -60 3 -75 15 -75 11 0 15 11 15 36 0 45 24 42 28 -4 2
    -19 9 -32 17 -32 11 0 14 17 14 69 0 74 -6 80 -66 81 -22 0 -23 -4 -23 -75z
    m58 33 c-5 -32 -28 -35 -28 -4 0 17 5 26 16 26 10 0 14 -7 12 -22z"
          />
          <path
            d="M532 558 l3 -73 45 0 45 0 3 73 c2 59 0 72 -12 72 -12 0 -16 -16 -18
    -67 -2 -53 -6 -68 -18 -68 -12 0 -16 15 -18 68 -2 51 -6 67 -18 67 -12 0 -14
    -13 -12 -72z"
          />
          <path
            d="M672 618 c-19 -19 -14 -36 18 -65 32 -28 40 -63 15 -63 -8 0 -15 7
    -15 15 0 8 -7 15 -16 15 -9 0 -14 -7 -12 -17 2 -14 13 -18 43 -18 36 0 40 3
    43 26 2 20 -4 32 -27 49 -33 23 -41 50 -16 50 8 0 15 -4 15 -10 0 -5 7 -10 15
    -10 8 0 15 6 15 14 0 25 -56 36 -78 14z"
          />
          <path
            d="M770 620 c0 -5 7 -10 15 -10 12 0 15 -14 15 -65 0 -51 3 -65 15 -65
    12 0 15 14 15 65 0 51 3 65 15 65 8 0 15 5 15 10 0 6 -20 10 -45 10 -25 0 -45
    -4 -45 -10z"
          />
          <path
            d="M887 623 c-4 -3 -7 -37 -7 -75 l0 -68 43 1 c23 1 32 4 21 6 -15 3
    -23 13 -26 34 -4 24 -1 29 16 30 17 1 18 2 4 6 -27 7 -24 53 3 53 11 0 17 5
    14 10 -7 11 -58 14 -68 3z"
          />
          <path
            d="M990 556 l0 -76 40 0 c46 0 60 18 60 77 0 51 -8 61 -58 69 l-42 7 0
    -77z m58 -3 c-4 -81 -28 -85 -28 -4 0 48 3 61 15 61 13 0 15 -11 13 -57z"
          />
          <path
            d="M1195 573 c-9 -32 -19 -66 -21 -75 -7 -25 23 -23 31 2 3 11 15 20 25
    20 9 0 20 -9 23 -20 3 -11 12 -20 21 -20 13 0 15 6 9 28 -28 114 -29 117 -51
    120 -18 3 -23 -5 -37 -55z m47 -13 c4 -25 1 -30 -15 -30 -13 0 -17 5 -13 16 3
    9 6 22 6 30 0 27 18 14 22 -16z"
          />
          <path
            d="M1317 624 c-4 -4 -7 -38 -7 -76 l0 -68 34 0 c60 0 66 6 66 70 0 33
    -3 61 -8 64 -15 9 -78 17 -85 10z m58 -74 c0 -42 -3 -55 -15 -55 -11 0 -16 14
    -18 58 -3 52 -1 58 15 55 15 -3 18 -13 18 -58z"
          />
          <path
            d="M1439 625 c-3 -3 1 -37 10 -75 14 -61 19 -70 38 -70 18 0 23 9 33 58
    6 31 14 65 16 75 4 11 0 17 -9 17 -10 0 -18 -15 -22 -42 -12 -82 -18 -86 -30
    -24 -9 54 -22 75 -36 61z"
          />
          <path
            d="M1567 623 c-4 -3 -7 -37 -7 -75 0 -62 2 -68 21 -68 15 0 19 4 15 16
    -3 9 -6 42 -6 75 0 55 -7 69 -23 52z"
          />
          <path
            d="M1643 623 c-23 -9 -14 -49 18 -77 30 -27 34 -46 11 -54 -7 -2 -12 3
    -12 12 0 9 -7 16 -15 16 -8 0 -15 -9 -15 -21 0 -18 5 -20 43 -17 37 3 42 6 45
    28 2 19 -5 32 -28 48 -32 24 -40 52 -15 52 8 0 15 -4 15 -10 0 -5 7 -10 15
    -10 8 0 15 6 15 14 0 22 -44 33 -77 19z"
          />
          <path
            d="M1761 616 c-7 -9 -11 -38 -9 -73 l3 -58 45 0 45 0 3 58 c2 35 -2 64
    -9 73 -15 18 -63 18 -78 0z m54 -66 c0 -42 -3 -55 -15 -55 -11 0 -16 14 -18
    58 -3 52 -1 58 15 55 15 -3 18 -13 18 -58z"
          />
          <path
            d="M1890 555 c0 -60 3 -75 15 -75 11 0 15 11 15 36 0 45 24 42 28 -4 2
    -20 9 -32 18 -32 18 0 20 66 2 73 -10 4 -10 6 0 6 6 1 12 14 12 30 0 24 -5 29
    -31 35 -59 12 -59 12 -59 -69z m55 30 c0 -10 -6 -20 -12 -22 -8 -3 -13 5 -13
    22 0 17 5 25 13 23 6 -3 12 -13 12 -23z"
          />
          <path
            d="M2026 614 c-22 -21 -21 -26 14 -59 17 -16 30 -37 30 -47 0 -22 -18
    -24 -26 -3 -9 21 -36 19 -32 -2 2 -14 13 -18 43 -18 35 0 40 3 43 25 2 17 -6
    34 -23 50 -25 24 -33 50 -15 50 6 0 10 -4 10 -10 0 -5 7 -10 15 -10 20 0 19
    26 -1 34 -25 10 -42 7 -58 -10z"
          />
          <path
            d="M2260 555 c0 -60 3 -75 15 -75 12 0 15 15 15 75 0 60 -3 75 -15 75
    -12 0 -15 -15 -15 -75z"
          />
          <path
            d="M2330 555 c0 -91 18 -101 22 -12 l3 62 15 -60 c13 -48 20 -61 38 -63
    21 -3 22 0 22 72 0 91 -18 102 -22 14 l-3 -63 -19 63 c-14 47 -23 62 -37 62
    -17 0 -19 -8 -19 -75z"
          />
          <path
            d="M2455 620 c-3 -5 1 -10 9 -10 13 0 16 -13 16 -65 0 -58 2 -65 20 -65
    18 0 20 7 20 65 0 52 3 65 16 65 8 0 12 5 9 10 -3 6 -24 10 -45 10 -21 0 -42
    -4 -45 -10z"
          />
          <path
            d="M2570 555 l0 -75 38 1 c23 1 28 3 15 6 -18 3 -23 11 -23 33 0 22 5
    30 23 33 l22 4 -22 2 c-31 1 -33 51 -3 51 11 0 20 5 20 10 0 6 -16 10 -35 10
    l-35 0 0 -75z"
          />
          <path
            d="M2680 555 l0 -75 38 1 c23 1 28 3 15 6 -21 4 -23 10 -23 74 0 55 -3
    69 -15 69 -12 0 -15 -15 -15 -75z"
          />
          <path
            d="M2777 623 c-4 -3 -7 -37 -7 -75 l0 -68 43 1 c34 1 37 2 17 8 -23 6
    -25 12 -28 74 -3 62 -9 77 -25 60z"
          />
          <path
            d="M2870 555 c0 -60 3 -75 15 -75 12 0 15 15 15 75 0 60 -3 75 -15 75
    -12 0 -15 -15 -15 -75z"
          />
          <path
            d="M2951 616 c-7 -9 -11 -38 -9 -73 l3 -58 48 -3 47 -3 0 35 c0 33 -3
    36 -27 35 -16 0 -22 -3 -15 -6 6 -2 12 -16 12 -30 0 -18 -5 -24 -17 -21 -14 2
    -19 15 -21 61 -3 60 3 67 38 45 24 -15 37 -4 20 17 -16 19 -64 20 -79 1z"
          />
          <path
            d="M3077 623 c-4 -3 -7 -37 -7 -75 l0 -68 43 1 c23 1 32 4 20 6 -18 3
    -23 11 -23 33 0 22 5 30 23 33 l22 4 -22 2 c-31 1 -33 51 -3 51 11 0 20 5 20
    10 0 11 -63 14 -73 3z"
          />
          <path
            d="M3180 556 c0 -61 3 -76 15 -76 11 0 15 13 16 53 1 56 2 55 19 -10 8
    -32 16 -43 30 -43 18 0 20 7 20 75 0 43 -4 75 -10 75 -6 0 -10 -28 -11 -62
    l-1 -63 -17 60 c-14 47 -22 61 -39 63 -21 3 -22 0 -22 -72z"
          />
          <path
            d="M3310 620 c0 -5 7 -10 15 -10 12 0 15 -14 15 -65 0 -51 3 -65 15 -65
    12 0 15 14 15 65 0 51 3 65 15 65 8 0 15 5 15 10 0 6 -20 10 -45 10 -25 0 -45
    -4 -45 -10z"
          />
          <path
            d="M3492 618 c-20 -20 -14 -42 20 -69 21 -18 29 -32 25 -43 -8 -20 -27
    -21 -27 -1 0 8 -7 15 -15 15 -8 0 -15 -9 -15 -21 0 -18 5 -20 43 -17 37 3 42
    6 45 28 2 19 -5 32 -28 48 -32 24 -40 52 -15 52 8 0 15 -4 15 -10 0 -5 7 -10
    15 -10 8 0 15 6 15 14 0 25 -56 36 -78 14z"
          />
          <path
            d="M3611 616 c-7 -9 -11 -38 -9 -73 l3 -58 45 0 45 0 3 58 c2 35 -2 64
    -9 73 -15 18 -63 18 -78 0z m54 -66 c0 -42 -3 -55 -15 -55 -11 0 -16 14 -18
    58 -3 52 -1 58 15 55 15 -3 18 -13 18 -58z"
          />
          <path
            d="M3740 556 l0 -76 38 1 c22 1 28 3 15 6 -20 4 -22 11 -25 70 -2 42 -8
    68 -15 71 -10 3 -13 -16 -13 -72z"
          />
          <path
            d="M3837 623 c-10 -9 -8 -115 2 -131 5 -8 23 -12 47 -10 l39 3 3 73 c2
    59 0 72 -13 72 -12 0 -15 -13 -15 -64 0 -64 -14 -92 -31 -65 -5 8 -9 40 -9 72
    0 53 -7 67 -23 50z"
          />
          <path
            d="M3955 620 c-3 -5 1 -10 9 -10 13 0 16 -13 16 -65 0 -58 2 -65 20 -65
    18 0 20 7 20 65 0 52 3 65 16 65 8 0 12 5 9 10 -3 6 -24 10 -45 10 -21 0 -42
    -4 -45 -10z"
          />
          <path
            d="M4070 555 c0 -60 3 -75 15 -75 12 0 15 15 15 75 0 60 -3 75 -15 75
    -12 0 -15 -15 -15 -75z"
          />
          <path
            d="M4152 621 c-9 -5 -12 -27 -10 -72 l3 -64 39 -3 c48 -4 56 7 56 75 0
    42 -4 54 -19 63 -23 12 -51 13 -69 1z m48 -71 c0 -47 -3 -60 -15 -60 -12 0
    -15 13 -15 60 0 47 3 60 15 60 12 0 15 -13 15 -60z"
          />
          <path
            d="M4277 624 c-4 -4 -7 -38 -7 -76 0 -54 3 -68 15 -68 11 0 15 13 16 58
    l1 57 15 -57 c13 -50 18 -58 39 -58 23 0 24 3 24 76 0 56 -3 75 -12 72 -8 -3
    -14 -27 -16 -59 l-4 -54 -17 55 c-15 51 -36 71 -54 54z"
          />
          <path
            d="M4428 619 c-26 -15 -22 -35 12 -66 32 -28 40 -63 15 -63 -8 0 -15 7
    -15 15 0 8 -7 15 -16 15 -9 0 -14 -7 -12 -17 2 -14 13 -18 43 -18 34 0 40 3
    43 24 3 16 -6 32 -27 52 -34 30 -40 49 -16 49 8 0 15 -4 15 -10 0 -5 7 -10 15
    -10 20 0 19 26 -1 34 -22 8 -36 7 -56 -5z"
          />
          <path
            d="M2130 490 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
    -15 -4 -15 -10z"
          />
          <path
            d="M4530 490 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0
    -15 -4 -15 -10z"
          />
        </g>
      </svg>
    </>
  );
};
