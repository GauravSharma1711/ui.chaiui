"use client"
import React from "react";

interface CourseCardProps {
  title?: string;
  subtitle?: string;
  desc?: string;
  tags?: string[];
  startDate?: string;
  duration?: string;
  price?: number;
  originalPrice?: number;
  discount?: string;
  img?: string;
  link?: string;
  ChaiTheme?: boolean;
}

function CourseCard({
  title = "Course Title",
  subtitle = "Course Subtitle",
  desc = "This is a brief course description that gets clamped to five lines for consistent and clean UI design. It gives a professional look and maintains layout integrity.",
  tags = ["Python", "TensorFlow", "Pandas"],
  startDate = "Starts April 12, 2025",
  duration = "6 months",
  price = 6999,
  originalPrice = 8999,
  discount = "Save 22%",
  img = "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
  link = "#",
  ChaiTheme = false
}: CourseCardProps) {
  return (
    <div
  className={`${ChaiTheme
      ? "bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50"
      : "bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200"
    } 
    w-72 shadow-md rounded-2xl overflow-hidden 
    transition-transform duration-200 group hover:scale-101 hover:shadow-lg flex flex-col`}
>

  <div className="aspect-[4/3] -translate-y-8 w-full overflow-hidden">
    <img
      src={img}
      alt="course"
      className="object-cover w-full h-full"
    />
  </div>

 
  <div className="p-4 pt-0 flex-col gap- flex-grow">   

    <div className="flex flex-wrap gap-0">
      {tags.map((tag, i) => (
        <span
          key={i}
          className={`text-xs px-2 ptunded-full font-medium 
          ${ChaiTheme
              ? "bg-amber-200/50 dark:bg-amber-800/40 text-amber-800 dark:text-amber-100"
              : "bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-700 dark:text-neutral-300"
            }`}
        >
          {tag}
        </span>
      ))}
    </div>

 
    <div className="-translate-y-5">
      <h2 className="text-base pt-0 font-bold line-clamp-1">{title}</h2>
      <p className="-translate-y-3 line-clamp-1 text-sm pt-0  opacity-80">{subtitle}</p>
    </div>


    <div className="flex items-center pt-0 -translate-y-9 justify-between text-xs text-gray-500 dark:text-gray-400">
      <span>📅 {startDate}</span>
      <span>⏳ {duration}</span>
    </div>

  
    <p className={`text-xs line-clamp-3 leading-relaxed pt-0 -translate-y-9
      ${ChaiTheme ? "text-amber-700 dark:text-amber-300" : "text-gray-600 dark:text-gray-300"}`}>
      {desc}
    </p>


    <div className="pt-2 mt-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-lg font-semibold">
          ₹{price} <span className="line-through text-sm text-gray-400 ml-1">₹{originalPrice}</span>
        </span>
        <span className="text-sm text-green-600 dark:text-green-400 font-medium">{discount}</span>
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`block w-full text-center py-2 text-sm font-medium rounded-xl transition 
          ${ChaiTheme
            ? "bg-amber-600 hover:bg-amber-700 text-white"
            : "bg-neutral-800 hover:bg-neutral-900 text-white"
          }`}
      >
        Learn More
      </a>
    </div>
  </div>
</div>

  
  );
}

export default CourseCard;
