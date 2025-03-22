import React, { useState } from "react";
import { capitalizeWords, cn } from "@/lib/utils";
import { Star, CheckCircle, MapPin, Phone, Mail, StarHalf } from "lucide-react";

export interface AdvocateProps {
  id: number;
  name: string;
  location: string;
  rating: number;
  clientRatings: number;
  experience: string;
  answers: number;
  languages: string[];
  email: string;
  phone: string;
  expertise: string[];
  verified: boolean;
  image: string;
}

export const AdvocateCard: React.FC<AdvocateProps> = ({ props }) => {
  const [showContact, setShowContact] = useState(false);

  const maskEmail = (email: string) => {
    const [username, domain] = email.split("@");
    return `${username.charAt(0)}${"*".repeat(
      username.length - 2
    )}${username.charAt(username.length - 1)}@${domain}`;
  };

  const maskPhone = (phone: string) => {
    return `${phone.slice(0, 2)}${"*".repeat(phone.length - 4)}${phone.slice(
      -2
    )}`;
  };

  const toggleContact = () => {
    setShowContact(!showContact);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => {
      if (i < Math.floor(rating)) {
        return (
          <Star
            fill="gold"
            key={i}
            className="w-4 h-4 fill-advocate-rating text-yellow-400"
          />
        );
      } else {
        return <Star key={i} className="w-4 h-4 text-gray-300" />;
      }
    });
  };

  return (
    <div className="relative my-4 bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-md animate-fade-in">
      <div className="p-6 flex flex-col sm:flex-row gap-5">
        {/* Avatar and Verification Badge */}
        <div className="relative flex-shrink-0">
          <div className="w-36 h-36 rounded-full overflow-hidden bg-gray-100">
            <img
              src={props?.profileImage}
              alt={props?.profileImage}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
          {props?.isApproved && (
            <div className="absolute bottom-0 right-0">
              <CheckCircle className="h-6 w-6 text-advocate-verified fill-advocate-verified stroke-white" />
            </div>
          )}
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Name and Location */}
          <div>
            <h3 className="text-advocate-blue font-semibold text-lg">
              {props?.fullName}
            </h3>
            <div className="flex items-center text-gray-500 text-sm mt-1">
              <MapPin className="h-3.5 w-3.5 mr-1" />
              <span>{`${capitalizeWords(
                props?.addressDetails?.city
              )}, ${capitalizeWords(
                props?.addressDetails?.state.split("_").join(" ")
              )}`}</span>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center mt-3">
            <div className="bg-advocate-rating/10 text-white bg-yellow-400 rounded-md px-2 py-0.5 text-sm font-medium text-advocate-rating mr-2">
              {props?.ratings}
            </div>
            <div className="flex">{renderStars(props?.ratings)}</div>
            {/* <span className="text-sm text-gray-500 ml-2">
              {clientRatings} Client Ratings
            </span> */}
          </div>

          {/* Contact Information */}
          <div className="mt-3 space-y-1.5">
            <div className="flex items-center text-sm">
              <Phone className="h-3.5 w-3.5 text-gray-500 mr-1.5" />
              <span className="text-gray-700 font-medium">
                {showContact
                  ? props?.mobileNumber
                  : maskPhone(props?.mobileNumber)}
              </span>
            </div>
            <div className="flex items-center text-sm">
              <Mail className="h-3.5 w-3.5 text-gray-500 mr-1.5" />
              <span className="text-gray-700 font-medium">
                {showContact
                  ? props?.emailAddress
                  : maskEmail(props?.emailAddress)}
              </span>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-end justify-between sm:min-w-40">
          <div className="space-y-1 text-right mb-4">
            <div className="bg-blue-50 text-advocate-blue px-3 py-1 rounded text-sm">
              Experience
            </div>
            <div className="text-lg font-semibold">
              {props?.yearsOfExperience || 0}+ Years
            </div>
          </div>

          {/* Languages */}
          <div className="mt-2 text-sm">
            <span className="text-gray-500">Speaks:</span>{" "}
            <span className="text-gray-800">
              {props?.languagesProficiency.join(", ")}
            </span>
          </div>

          {/* <div className="space-y-1 text-right mb-auto">
            <div className="bg-blue-50 text-advocate-blue px-3 py-1 rounded text-sm">
              Answers
            </div>
            <div className="text-lg font-semibold">{answers}</div>
          </div> */}
        </div>
      </div>
      <div className="px-6 items-center pb-4 flex justify-between">
        <div className="pt-0 flex flex-wrap gap-2">
          {props?.practiceAreas.map((exp, index) => {
            if (index < 3) {
              return (
                <span
                  key={index}
                  className=" bg-gray-200 capitalize text-[#2461E2] font-light text-xs  px-3 py-1.5 rounded-md"
                >
                  {exp.split("_").join(" ")}
                </span>
              );
            } else {
              return (
                <span
                  key={index}
                  className=" bg-gray-200 capitalize text-[#2461E2] font-light text-xs  px-3 py-1.5 rounded-md"
                >
                  + {props?.practiceAreas.length - 3} More
                </span>
              );
            }
          })}
        </div>

        <button
          onClick={toggleContact}
          className="w-full mt-auto sm:w-auto bg-[#2461E2] hover:bg-blue-300 text-white py-3 px-5 rounded-md transition-colors text-sm font-medium"
        >
          {showContact ? "Hide Profile" : "View Profile"}
        </button>
      </div>
    </div>
  );
};

export default AdvocateCard;
