"use client"
import React, { useState } from "react";

interface TabData {
  title: string;
  content: string;
}

interface ChaiTabsProps {
  tabsData?: TabData[];
  ChaiTheme?: boolean;
}

function ChaiTabs({
  tabsData = [
    { title: "Tab 1", content: "Description 1" },
    { title: "Tab 2", content: "Description 2 " }
  ],
  ChaiTheme = false
}: ChaiTabsProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className={`rounded-2xl p-4 md:p-6 w-full max-w-2xl mx-auto transition-all shadow-md min-h-[200px] flex flex-col ${
        ChaiTheme
          ? "bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50"
          : "bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
      }`}
    >
   
      <div className="flex flex-wrap justify-center gap-2 sm:space-x-4 mb-6">
        {tabsData.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-3 py-2 sm:px-4 rounded-lg text-sm font-medium transition-all border flex-grow sm:flex-grow-0 max-w-[200px] ${
              activeIndex === index
                ? ChaiTheme
                  ? "bg-amber-200 dark:bg-amber-600 border-amber-400 dark:border-amber-600 text-amber-900 dark:text-amber-50"
                  : "bg-neutral-200 dark:bg-neutral-700 border-neutral-400 dark:border-neutral-600 text-black dark:text-white"
                : ChaiTheme
                ? "bg-transparent border-amber-200 dark:border-amber-800 text-amber-600 dark:text-amber-300"
                : "bg-transparent border-neutral-300 dark:border-neutral-700 text-gray-600 dark:text-gray-300"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

 
      <div
        className={`text-center text-sm md:text-base leading-relaxed transition-opacity duration-300 ease-in-out flex-grow flex items-center justify-center p-4 ${
          ChaiTheme
            ? "text-amber-700 dark:text-amber-200"
            : "text-gray-800 dark:text-gray-300"
        }`}
      >
        <p className="max-w-lg">{tabsData[activeIndex]?.content}</p>
      </div>
    </div>
  );
}

export default ChaiTabs;
