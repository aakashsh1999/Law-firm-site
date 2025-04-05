import Image from "next/image";
import Link from "next/link";
import type { Attorney } from "./types";

interface AttorneyCardProps {
  attorney: Attorney;
}

export default function AttorneyCard({ attorney }: AttorneyCardProps) {
  return (
    <div className="attorneys__item swiper-slide">
      <div className="attorneys__link">
        <div className="attorneys__photo">
          <img
            src={"https://placehold.co/600x400"}
            alt={attorney.name}
            width={300}
            height={400}
            className="picture-item top"
          />
        </div>
        <p className="upper-text upper-text_bottom">{attorney.position}</p>
        <Link
          href={`/attorneys/${attorney.slug}`}
          className="w-inline-block local"
        >
          <h3 className="card-title">{attorney.name}</h3>
        </Link>
        <div className="rich-text-block w-richtext">
          <p>{attorney.description}</p>
        </div>
        <Link
          href={`/`}
          className="section-link section-link_top w-inline-block local"
        >
          <p className="section-link__text">About {attorney.name}</p>
          <Image
            src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447de0caf01e102efd6c3b7_material-symbols_arrow-back%20(1).svg"
            alt="Arrow icon"
            width={30}
            height={30}
            className="practice__list-after"
          />
        </Link>
      </div>
    </div>
  );
}
