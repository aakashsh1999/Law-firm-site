// @ts-nocheck
"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/config";
import { CheckIcon, Scale, X } from "lucide-react";
import { toast } from "react-hot-toast";
import FormLayout from "../LawyerForm/FormLayout";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

const LawyerRegistrationModal = ({ className }: { className: string }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className={className}>
      <button
        onClick={() => setIsModalOpen(true)}
        className="inline-flex  items-center rounded-xl bg-[#2461E2] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        <Scale className="mr-2 w-4 h-4" />
        Join us as Lawyer
      </button>
      <Dialog
        open={isModalOpen}
        onClose={setIsModalOpen}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4 ">
                  Lawyer Registration
                </h2>

                <X
                  className=" cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                />
              </div>
              <FormLayout />
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default LawyerRegistrationModal;
