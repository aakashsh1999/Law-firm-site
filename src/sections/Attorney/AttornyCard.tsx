import Image from "next/image";
import Link from "next/link";
import type { Attorney } from "./types";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import sunilImage from "../../assets/advt-sunil-kumar.png";
import vedantImage from "../../assets/advt-vedant.png";
import ayushmanImage from "../../assets/adv_ayushman.png";
import babluImage from "../../assets/advt-bablu.png";
import akritiImage from "../../assets/akriti.png";
interface AttorneyCardProps {
  attorney: Attorney;
  index: number;
}

const data = {
  0: {
    facebook: "https://www.facebook.com/SunilKumarBPLaw",
    twitter: "https://twitter.com/SunilKumarBPL?t=_vHL8D00Pd-yEyEGNkMkNQ&s=08",
    instagram: "https://instagram.com/sunilkumarbpl?utm_medium=copy_link",
    linkedin: "https://www.linkedin.com/in/adv-sunil-kumar-706821205",
    img: sunilImage,
  },

  2: {
    facebook: "https://www.facebook.com/sj.vedant",
    twitter: "https://twitter.com/VedantSj?t=1yARjobcZmB__bD5zE1WaQ&s=08",
    instagram: "https://www.instagram.com/sj.ved",
    linkedin: "https://www.linkedin.com/in/sj-vedant-5154079a",
    img: vedantImage,
  },

  1: {
    facebook: "https://www.facebook.com/www.bodhitreetrust.org",
    twitter: "https://www.twitter.com/Bodhitreef",
    instagram: "https://www.instagram.com/bodhitreefoundation",
    linkedin:
      "https://www.linkedin.com/in/bodhitree-foundation-trust-709923ab/?originalSubdomain=in",
    img: babluImage,
  },
  4: {
    // facebook: "https://www.facebook.com/www.bodhitreetrust.org",
    // twitter: "https://www.twitter.com/Bodhitreef",
    // instagram: "https://www.instagram.com/bodhitreefoundation",
    // linkedin:
    //   "https://www.linkedin.com/in/bodhitree-foundation-trust-709923ab/?originalSubdomain=in",
    img: ayushmanImage,
  },
  3: {
    img: akritiImage,
  },

};

export default function AttorneyCard({ attorney, index }: AttorneyCardProps) {
  const socialLinks = data?.[index] || null;
  return (
    <div className="attorneys__item  swiper-slide">
      <div className="attorneys__link">
        <div className="attorneys__photo">
          <Image
            src={data[index]?.img || "https://placehold.co/600x400"}
            alt={attorney.name}
            width={300}
            height={400}
            className="picture-item top bg-[#D1CAC8]"
          />
        </div>
        <p className="upper-text upper-text_bottom">{attorney.position}</p>
        <div
          // href={`/attorneys/${attorney.slug}`}
          className="w-inline-block local"
        >
          <h3 className="card-title">{attorney.name}</h3>
        </div>
        <div className="rich-text-block w-richtext">
          <p>{attorney.description}</p>
        </div>
        <div>
          {socialLinks && Object.keys(socialLinks)?.length > 0 && (
            <div className="flex gap-x-2 items-center">
              {socialLinks?.facebook && (
                <a
                  href={socialLinks?.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 rounded-full border border-blue-400 hover:bg-blue-400"
                >
                  <Facebook className="w-5 h-5 text-blue-400 hover:text-white " />
                </a>
              )}
              {socialLinks?.twitter && (
                <a
                  href={socialLinks?.twitter}
                  target="_blank"
                  className="p-1 rounded-full border border-blue-400 hover:bg-blue-400"
                >
                  <Twitter className="w-5 h-5 text-blue-400 hover:text-white " />
                </a>
              )}
              {socialLinks?.instagram && (
                <a
                  href={socialLinks?.instagram}
                  target="_blank"
                  className="p-1 rounded-full border border-blue-400 hover:bg-blue-400"
                >
                  <Instagram className="w-5 h-5 text-blue-400 hover:text-white " />
                </a>
              )}
              {socialLinks?.linkedin && (
                <a
                  href={socialLinks?.linkedin}
                  target="_blank"
                  className="p-1 rounded-full border border-blue-400 hover:bg-blue-400"
                >
                  <Linkedin className="w-5 h-5 text-blue-400 hover:text-white " />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
