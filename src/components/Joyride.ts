"use client";
import { useEffect, useState } from "react";
import Joyride from "react-joyride";

export default function Onboarding() {
  const [isClient, setIsClient] = useState(false);
  const [run, setRun] = useState(false); // Controls whether the tour runs


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

  useEffect(() => {
    const hasSeenTour = localStorage.getItem("hasSeenTour");
    if (!hasSeenTour) {
      setRun(true); // Run the tour only if not seen
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleTourComplete = () => {
    localStorage.setItem("hasSeenTour", "true"); // Store flag to prevent re-running
    setRun(false);
  };

  if (!isClient) return null; // Prevent SSR rendering

  return (
    <Joyride
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
    />
  );
}
