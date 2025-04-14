import React from "react";
import Form from "../Footer/Form";
import Image from "next/image";
import telephone from "../../assets/telephone.png";
import location from "../../assets/location.png";
import { Mail } from "lucide-react";
import { useTranslations } from "next-intl";

function Information() {
  const t = useTranslations("contactInformation");
  return (
    <div>
      <div id="information" className="section-contact-content">
        <div className="page-padding">
          <div className="container-large">
            <div className="padding-vertical padding-huge">
              <div className="w-layout-grid contact-content_component">
                <div id="w-node-_8d9ddff1-129c-9c2b-dca2-a28b694bc4f1-4497f351">
                  <div className="margin-bottom margin-small">
                    <div className="text-size-large text-style-muted mt-[180px] md:mt-0">
                      {t("description")}
                    </div>
                    <div className="text-size-large text-style-muted">
                      {t("description2")}
                    </div>
                  </div>
                  <div className="margin-bottom margin-large">
                    <div>{t("commitment")}</div>
                  </div>
                  <div className="margin-bottom margin-large">
                    <div>{t("commitment2")}</div>
                  </div>
                  <div className="margin-bottom margin-xsmall">
                    <div className="heading-small"> {t("lawFirmName")}</div>
                  </div>
                  <dl className="mt-10 space-y-4 text-base/7 text-gray-300">
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt=""
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          {t("addresses1")}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt=""
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          {t("addresses2")}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Address</span>
                        <Image
                          src={location}
                          alt=""
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          {t("address3")}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Email</span>
                        <Mail className="w-8 h-8 px-1.5 rounded-full text-white bg-[#2461E2]" />
                      </dt>
                      <dd>
                        <a
                          className="text-black hover:text-blue-600 underline"
                          href="mailto:bplaw@yahoo.com"
                        >
                          bplaw@yahoo.com
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-x-4">
                      <dt className="flex-none">
                        <span className="sr-only">Telephone</span>
                        <Image
                          src={telephone}
                          alt=""
                          className="h-8 w-8 text-gray-400"
                        />
                      </dt>
                      <dd>
                        <a className="text-black hover:text-black">
                          +91-8541814401
                        </a>
                      </dd>
                    </div>
                  </dl>
                  {/* <div className="margin-bottom margin-small">
                    <div className="text-weight-medium">Directions Via:</div>
                    <div>
                      <a
                        href="https://maps.google.com/?q=3%20Park%20Avenue%20New%20York%2C%20NY%2010016"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Google Maps
                      </a>
                      ,{" "}
                      <a
                        href="https://www.bing.com/maps/?v=2&amp;where1=3%20Park%20Avenue%20New%20York%2C%20NY%2010016"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Bing Maps
                      </a>
                      ,{" "}
                      <a
                        href="https://www.mapquest.com/search/result?query=3%20Park%20Avenue%20New%20York,%20NY%2010016&amp;page=0&amp;index=0"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        Mapquest
                      </a>
                    </div>
                  </div> */}
                </div>
                <div className="bg-color-grey sticky tablet-no-sticky">
                  <div
                    id="cr-form-FOR8a92fc4c319343728fa1df06164b9f51"
                    className="form-embed w-embed w-iframe w-script"
                    style={{
                      padding: "8px",
                    }}
                  >
                    {/* <script type="text/javascript">
                      window.addEventListener("scroll", () => {
                        const scriptCallRaill = document.createElement("script");
                        scriptCallRaill.src =
                          "//cdn.callrail.com/companies/326055888/5192cdaa19613b775287/12/swap.js";
                        scriptCallRaill.async = "true";
                        document.head.append(scriptCallRaill);
                        console.log(228);
                        scriptCallRaill.addEventListener("error", (e) =>
                          console.log("error")
                        );
                        scriptCallRaill.addEventListener("load", (e) => {
                          console.log("scriptCallRaill done");

                          const observer = new MutationObserver((mutations, obs) => {
                            const iframe = document.querySelector(
                              "#FOR8a92fc4c319343728fa1df06164b9f51"
                            );
                            if (iframe) {
                              const setIframeHeight = () => {
                                iframe.setAttribute("title", "Contact Form");
                                iframe.scrolling = "no";
                              };
                              setIframeHeight();
                              window.addEventListener("resize", setIframeHeight);

                              console.log("Iframe is loaded and height is set.");

                              function fixIframe() {
                                let iframes = document.getElementsByTagName("iframe");
                                for (let i = 0; i < iframes.length; i++) {
                                  let iframe = document.getElementsByTagName("iframe")[i];
                                  iframe.height = iframe.contentWindow.parent.innerHeight;
                                }
                              }
                              window.onload = fixIframe();
                              obs.disconnect();
                            }
                          });

                          observer.observe(document.body, {
                            childList: true,
                            subtree: true,
                          });
                        });
                      }, { once: true });
                    </script> */}
                    <Form classes="mt-0 rounded-xl " />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Information;
