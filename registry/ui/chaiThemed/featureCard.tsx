"use client"
import React from "react";

interface FeatureCardProps {
  title?: string;
  description?: string;
  icon?: string;
  ChaiTheme?: boolean;
}

function FeatureCard({
  title = "Feature Title",
  description = "Default feature description that explains what this feature does in detail.",
  icon = "✨",
  ChaiTheme = false
}: FeatureCardProps) {
  return (
    <div
      className={`${
        ChaiTheme
          ? "bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50"
          : "bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
      } 
      feature-card rounded-2xl p-6 shadow-md group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 w-64 h-64 flex flex-col`}
    >

      <div
        className={`${
          ChaiTheme ? "bg-amber-100 dark:bg-amber-800" : "bg-neutral-100 dark:bg-neutral-700"
        } feature-icon w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105`}
      >
        {icon}
      </div>

      <h3
        className={`text-xl font-bold mb-2 ${
          ChaiTheme ? "text-amber-900 dark:text-amber-100" : ""
        }`}
      >
        {title}
      </h3>

  
      <p
        className={`text-sm flex-grow ${
          ChaiTheme
            ? "text-amber-700 dark:text-amber-300"
            : "text-neutral-600 dark:text-neutral-400"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default FeatureCard;
