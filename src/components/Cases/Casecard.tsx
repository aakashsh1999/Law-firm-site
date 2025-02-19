import Image from "next/image";
import Link from "next/link";
import type { CaseItem } from "./types";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface CaseCardProps {
  caseItem: CaseItem;
  index: number;
}

export default function CaseCard({ caseItem, index }: CaseCardProps) {
  return (
    <div data-index={index} className="cases__item">
      <div className="cases__item-block">
        <Link
          href={caseItem.link}
          className="cases__item-content w-inline-block local"
        >
          <div className="cases__item-info">
            <p className="upper-text">{caseItem.category}</p>
            <h3 className="card-title card-title_case">{caseItem.amount}</h3>
            <p className="cases__info">{caseItem.description}</p>
          </div>
          <div className="section-link">
            <p className="section-link__text">View the Case</p>
            <ArrowRightIcon className="mt-2.5 ml-2 w-5" strokeWidth={3} />
          </div>
        </Link>
      </div>
    </div>
  );
}
