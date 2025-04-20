"use client"
import React, { ReactNode } from "react";

interface TestimonialCardProps {
  companyName?: string;
  companyLogo?: string | null;
  testimonialText?: string;
  personName?: string;
  personDesignation?: string;
  personAddress?: string;
  personImage?: string | null;
  ChaiTheme?: boolean;
}

function TestimonialCard({
  companyName = "Company name",
  companyLogo = null,
  testimonialText = "Feedback Text...",
  personName = "Name",
  personDesignation = "Designation",
  personAddress = "Address",
  personImage = null,
  ChaiTheme = false
}: TestimonialCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 w-full max-w-84 h-110 flex flex-col justify-between shadow-md transition-all duration-300 hover:shadow-lg hover:scale-[1.01] ${
        ChaiTheme
          ? "bg-amber-50 text-amber-900 dark:bg-amber-900 dark:text-amber-50"
          : "bg-gray-50 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200"
      }`}
    >

      <div className="flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden border dark:border-gray-700">
          {personImage ? (
            <img 
              src={personImage}
              alt={personName}
              className="w-full h-full object-cover -translate-y-8"
            />
          ) : (
            <div
              className={`w-full h-full flex items-center justify-center ${
                ChaiTheme
                  ? "bg-amber-200 dark:bg-amber-800"
                  : "bg-gray-200 dark:bg-gray-800"
              }`}
            />
          )}
        </div>

        <div
          className={`px-4 py-2 rounded-xl border text-sm font-medium ${
            ChaiTheme
              ? "border-amber-300 text-amber-900 dark:border-amber-700 dark:text-amber-50"
              : "border-gray-300 text-gray-800 dark:border-gray-700 dark:text-gray-200"
          }`}
        >
          {companyLogo ? (
            <img src={companyLogo} alt={companyName} className="h-5" />
          ) : (
            companyName
          )}
        </div>
      </div>

   
      <div
        className={`text-5xl font-serif mb-1.5 ${
          ChaiTheme
            ? "text-amber-300 dark:text-amber-600"
            : "text-blue-300 dark:text-blue-600"
        }`}
      >
        "
      </div>


      <div className="flex-grow mb-6">
        <div
          className={`text-base leading-relaxed line-clamp-4 ${
            ChaiTheme
              ? "text-amber-800 dark:text-amber-100"
              : "text-gray-800 dark:text-gray-200"
          }`}
        >
          {testimonialText}
        </div>
      </div>


      <div
        className={`border-l-2 pl-4 py-1 ${
          ChaiTheme
            ? "border-amber-300 dark:border-amber-700"
            : "border-gray-300 dark:border-gray-700"
        }`}
      >
        <div
          className={`font-semibold ${
            ChaiTheme
              ? "text-amber-900 dark:text-amber-50"
              : "text-gray-900 dark:text-gray-100"
          }`}
        >
          {personName}
        </div>
        <div
          className={`text-sm ${
            ChaiTheme
              ? "text-amber-700 dark:text-amber-300"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {personDesignation}
        </div>
        <div
          className={`text-sm ${
            ChaiTheme
              ? "text-amber-700 dark:text-amber-300"
              : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {personAddress}
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
