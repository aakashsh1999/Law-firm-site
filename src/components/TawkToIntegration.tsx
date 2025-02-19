"use client";
import { useEffect } from "react";

const TawkToIntegration = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/67b0f7a70bdf7e190c0083a5/1ik5keq1m";
    script.async = true;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default TawkToIntegration;
