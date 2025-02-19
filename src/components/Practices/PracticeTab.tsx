import Link from "next/link";
import Image from "next/image";
import type { PracticeArea } from "./types";

interface PracticeTabProps {
  area: PracticeArea;
  isActive: boolean;
}

export default function PracticeTab({ area, isActive }: PracticeTabProps) {
  if (!isActive) return null;

  return (
    <div className="practice__tab ">
      <div className="practice__tab-content">
        <h3 className="card-title">{area.title}</h3>
        <p className="practice__tab-info practice__tab-info_top">
          {area.description}
        </p>
        {area.additionalInfo && (
          <p className="practice__tab-info">{area.additionalInfo}</p>
        )}
        <ul role="list" className="practice__list">
          {area.services.map((service, index) => (
            <li key={index} className="practice__list-item">
              <Link
                href={service.link}
                className="practice__list-link w-inline-block local"
              >
                <Image
                  src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447de0caf01e102efd6c3b7_material-symbols_arrow-back%20(1).svg"
                  alt="Arrow icon"
                  width={24}
                  height={24}
                  className="practice__list-before"
                />
                <h4 className="practice__list-title">{service.title}</h4>
                <Image
                  src="https://cdn.prod.website-files.com/63a4a6b4b1600866f3190000/6447de0d6cf05b4ac4e489c5_material-symbols_arrow-back.svg"
                  alt="Arrow icon"
                  width={24}
                  height={24}
                  className="practice__list-after"
                />
              </Link>
            </li>
          ))}
        </ul>
        {area.viewAllLink && (
          <Link
            href={area.viewAllLink}
            className="new-btn new-btn_transparent new-btn_top"
          >
            View All {area.title} Services
          </Link>
        )}
      </div>
    </div>
  );
}
