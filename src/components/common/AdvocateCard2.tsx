import React from "react";
import { capitalizeWords, cn } from "@/lib/utils";
import { Star, CheckCircle, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface AdvocateProps {
  id: number;
  profileImage?: string;
  isApproved?: boolean;
  fullName?: string;
  addressDetails?: {
    city?: string;
    state?: string;
  };
  ratings?: number;
  yearsOfExperience?: number;
  practiceAreas?: string[];
}

export const AdvocateCard2: React.FC<AdvocateProps> = ({ props }) => {
  console.log(props, "propsss");
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) {
        return (
          <Star
            fill="gold"
            key={i}
            className="w-3 h-3 fill-yellow-400 text-yellow-400"
          />
        );
      } else {
        return <Star key={i} className="w-3 h-3 text-gray-300" />;
      }
    });
  };

  return (
    <div className="bg-white rounded-lg shadow hover:shadow-md transition-shadow duration-200 h-full border border-gray-100">
      <div className="p-3 flex flex-col sm:flex-row gap-3">
        {/* Avatar and Verification Badge */}
        <div className="relative flex-shrink-0">
          <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 mx-auto sm:mx-0">
            <img
              src={props.profileImage || "/placeholder.svg"}
              alt={props?.fullName || "Advocate"}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {props?.isApproved && (
            <div className="absolute bottom-0 right-0 sm:right-0">
              <CheckCircle className="h-4 w-4 text-green-500 fill-white stroke-green-500" />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Name and Location */}
          <div className="text-center sm:text-left">
            <h3 className="text-blue-700 font-semibold text-sm truncate">
              {props?.fullName || "Advocate Name"}
            </h3>
            {props?.addressDetails?.city ? (
              <div className="flex items-center justify-center sm:justify-start text-gray-600 text-xs mt-1">
                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                <span className="truncate">
                  {capitalizeWords(props?.addressDetails?.city || "")},
                  {capitalizeWords(
                    props?.addressDetails?.state?.split("_").join(" ") || ""
                  )}
                </span>
              </div>
            ) : (
              <div className="flex items-center justify-center sm:justify-start text-gray-600 text-xs mt-1">
                <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />

                <span className="truncate">
                  {capitalizeWords(
                    props?.barCouncilEnrollment?.barCouncil || ""
                  )}
                </span>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center mt-2 justify-center sm:justify-start">
            <div className="bg-yellow-400 text-white rounded px-1.5 py-0.5 text-xs font-medium mr-2">
              {props?.ratings || 4.5}
            </div>
            <div className="flex">{renderStars(props?.ratings || 4.5)}</div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="flex flex-col items-center sm:items-end justify-center flex-shrink-0 mt-2 sm:mt-0">
          {props?.yearsOfExperience && (
            <div className="space-y-1 text-center sm:text-right">
              <div className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                Exp.
              </div>
              <div className="text-sm font-semibold whitespace-nowrap">
                {props?.yearsOfExperience || Math}+ yrs
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Practice Areas */}
      <div className="px-3 py-2 border-t border-gray-100 flex flex-wrap gap-1.5">
        {(
          props?.practiceAreas || [
            "Family Law",
            "Criminal Law",
            "Corporate Law",
          ]
        )
          .slice(0, 3)
          .map((area, index) => (
            <span
              className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700"
              key={index}
            >
              {typeof area === "string" ? area.split("_").join(" ") : area}
            </span>
          ))}
        {(props?.practiceAreas?.length || 0) > 3 && (
          <span className="inline-flex items-center rounded-md bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
            +{(props?.practiceAreas?.length || 0) - 3}
          </span>
        )}
      </div>
    </div>
  );
};
