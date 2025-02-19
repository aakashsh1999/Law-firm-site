import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";

const LawyerRegistrationModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [lawyerData, setLawyerData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    city: "",
    state: "",
    certificates: "",
    degrees: "",
    isApproved: false,
  });

  const handleInputChange = (e) => {
    setLawyerData({ ...lawyerData, [e.target.name]: e.target.value });
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handlePreviousStep = () => {
    setStep(1);
  };

  const handleSaveData = async () => {
    try {
      await addDoc(collection(db, "lawyers_details"), lawyerData);
      console.log("Document successfully written!");
      setIsModalOpen(false); // Close the modal after saving
      setLawyerData({
        // Clear the form after saving
        name: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        certificates: "",
        degrees: "",
        isApproved: false,
      });
      setStep(1); // Reset the step
      toast.success("Added Succesfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex  items-center rounded-xl bg-[#2461E2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Join Us
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg w-1/2 p-6">
            <div className="flex justify-between">
              <h2 className="text-2xl font-bold mb-4">Lawyer Registration</h2>
              <X
                className=" cursor-pointer"
                onClick={() => setIsModalOpen(false)}
              />
            </div>

            {step === 1 && (
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border rounded w-full py-2 px-3 mb-4"
                  onChange={handleInputChange}
                  value={lawyerData.name}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border rounded w-full py-2 px-3 mb-4"
                  onChange={handleInputChange}
                  value={lawyerData.email}
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Mobile"
                  className="border rounded w-full py-2 px-3 mb-4"
                  onChange={handleInputChange}
                  value={lawyerData.mobile}
                  required
                />
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  className="border rounded w-full py-2 px-3 mb-4"
                  onChange={handleInputChange}
                  value={lawyerData.address}
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="border rounded w-full py-2 px-3 mb-4"
                  onChange={handleInputChange}
                  value={lawyerData.city}
                  required
                />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  className="border rounded w-full py-2 px-3 mb-4"
                  onChange={handleInputChange}
                  value={lawyerData.state}
                  required
                />
                <button
                  onClick={handleNextStep}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                  Next
                </button>
              </div>
            )}

            {step === 2 && (
              <div>
                <textarea
                  name="certificates"
                  placeholder="Certificates (Comma-separated)"
                  className="border rounded w-full py-2 px-3 mb-4"
                  rows="3"
                  onChange={handleInputChange}
                  value={lawyerData.certificates}
                ></textarea>
                <textarea
                  name="degrees"
                  placeholder="Degrees (Comma-separated)"
                  className="border rounded w-full py-2 px-3 mb-4"
                  rows="3"
                  onChange={handleInputChange}
                  value={lawyerData.degrees}
                ></textarea>
                <div className="flex gap-x-4">
                  <button
                    onClick={handleSaveData}
                    className=" rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm bg-green-500 hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Save
                  </button>
                  <button
                    onClick={handlePreviousStep}
                    className=" rounded-xl px-3 py-2 text-sm font-semibold text-white shadow-sm bg-gray-500 hover:bg-gray-700  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Previous
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LawyerRegistrationModal;
