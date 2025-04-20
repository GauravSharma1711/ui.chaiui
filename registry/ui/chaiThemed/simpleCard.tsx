"use client"
import React from "react";

interface SimpleCardProps {
  title?: string;
  subtitle?: string;
  desc?: string;
  src?: string;
  link?: string;
  ChaiTheme?: boolean;
}

const SimpleCard: React.FC<SimpleCardProps> = ({
  title = "Default Title",
  subtitle = "Default Subtitle",
  desc = "default description",
  src = "https://images.pexels.com/photos/734983/pexels-photo-734983.jpeg?auto=compress&cs=tinysrgb&w=600",
  link = "./",
  ChaiTheme = false,
}) => {
    return (
        <div className={`${ChaiTheme 
          ? 'bg-amber-50 dark:bg-amber-900 text-amber-900 dark:text-amber-50' 
          : 'bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200'}
          overflow-hidden mr-2.5 w-3xs h-80 p-0 m-0 aspect-[3/2] shadow-md transition-transform duration-100 rounded-2xl group hover:scale-101 hover:shadow-lg`}>
          
          <div className="overflow-hidden -translate-y-10 transition-transform duration-300 rounded-t-2xl h-50 group-hover:scale-104">
            <img src={src} alt="card visual" className="object-cover"/>
          </div>
          
          <div className="px-3 -translate-y-9">
      
            <div className={`font-bold text-lg ${ChaiTheme ? 'text-amber-900 dark:text-amber-100' : ''}`}>
              {title}
            </div>
            
       
            <div className={`text-sm ${ChaiTheme 
              ? 'text-amber-700 dark:text-amber-300' 
              : 'text-gray-500 dark:text-neutral-400'}`}>
              {subtitle}
            </div> 
            
       
            <div className={`pt-1 text-xs ${ChaiTheme 
              ? 'text-amber-600 dark:text-amber-400' 
              : 'text-gray-800 dark:text-gray-400'} line-clamp-3`}>
              {desc}
            </div>
            
 
            <a className={`pt-3 opacity-0 group-hover:opacity-100   
              translate-y-2 group-hover:translate-y-0
              transition-all duration-300 ease-in-out 
              text-sm underline underline-offset-4 inline-block cursor-pointer
              ${ChaiTheme ? 'text-amber-600 dark:text-amber-300' : ''}`}
              target="_blank" 
              rel="noopener noreferrer"
              href={link}>
              Learn More
            </a>
          </div>
        </div>
)
};

export default SimpleCard;
