"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight, faCircleLeft } from "@fortawesome/free-solid-svg-icons";

import Link from "next/link";
import {
  MdOutlineDashboard,
  MdAnalytics,
  MdOutlineSupervisedUserCircle,
  MdOutlineAutoAwesomeMosaic,
  MdOutlineSupportAgent,
} from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";

const Sidebar = () => {
  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };


  return (
    <aside
      className={`flex flex-col justify-between py-12 bg-slate-50 ${
        isMinimized ? "w-1/10 px-4" : "w-1/5 px-4"
      } grow dark:bg-[#191919] dark:text-white`}
    >
      <div className="flex flex-col">
        <Link href="#" className={`flex items-center gap-4 hover:bg-[#393832] transition-all ease-in-out duration-300 p-4 rounded-lg ${
            isMinimized ? "items-center" : ""
          }`}
        >
          <div className="w-12 h-12 rounded-full bg-yellow-200 text-black font-black flex items-center justify-center">
            M
          </div>
          <div className={`flex flex-col ${isMinimized ? "sr-only" : ""}`}>
            <strong>Marcus Pettersen</strong>
            <p className="text-xs text-slate-100">Digitalt Byrå</p>
          </div>
        </Link>
        <nav
          className={`flex flex-col gap-1 mt-8 ${
            isMinimized ? "items-center" : ""
          }`}
        >
          <Link
            href="#"
            className="flex items-center gap-4 hover:bg-[#393832] transition-all ease-in-out duration-300 p-4 rounded-lg"
          >
            <MdOutlineDashboard
              className={`${isMinimized ? "w-8 h-8" : "w-6 h-6"}`}
            />
            <span className={`${isMinimized ? "sr-only" : ""}`}>Dashboard</span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 hover:bg-[#393832] transition-all ease-in-out duration-300 p-4 rounded-lg"
          >
            <MdAnalytics className={`${isMinimized ? "w-8 h-8" : "w-6 h-6"}`} />
            <span className={`${isMinimized ? "sr-only" : ""}`}>
              Statistikk
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 hover:bg-[#393832] transition-all ease-in-out duration-300 p-4 rounded-lg"
          >
            <MdOutlineSupervisedUserCircle
              className={`${isMinimized ? "w-8 h-8" : "w-6 h-6"}`}
            />
            <span className={`${isMinimized ? "sr-only" : ""}`}>
              Brukerstyring
            </span>
          </Link>
          <Link
            href="#"
            className="flex items-center gap-4 hover:bg-[#393832] transition-all ease-in-out duration-300 p-4 rounded-lg"
          >
            <MdOutlineAutoAwesomeMosaic
              className={`${isMinimized ? "w-8 h-8" : "w-6 h-6"}`}
            />
            <span className={`${isMinimized ? "sr-only" : ""}`}>
              Domenestyring
            </span>
          </Link>
        </nav>
      </div>
      <div className={`flex flex-col gap-1 ${isMinimized ? "items-center" : ""}`}>
          <Link href="#" className="flex items-center gap-4 hover:bg-[#393832] transition-all ease-in-out duration-300 p-4 rounded-lg">
            <MdOutlineSupportAgent className={`${isMinimized ? "w-8 h-8" : "w-6 h-6"}`} />
            <span className={`${isMinimized ? "sr-only" : ""}`}>Support</span>
            </Link>
          <Link href="#" className="flex items-center gap-4 hover:bg-[#393832] transition-all ease-in-out duration-300 p-4 rounded-lg">
            <RiLogoutCircleLine className={`${isMinimized ? "w-8 h-8" : "w-6 h-6"}`} />
            <span className={`${isMinimized ? "sr-only" : ""}`}>Logg ut</span>
            </Link>
        <div
          className={`flex mt-4 ${isMinimized ? "justify-center" : "justify-end mr-6"}`}
        >
          <FontAwesomeIcon
            className="w-8 h-8 cursor-pointer"
            icon={isMinimized ? faCircleRight : faCircleLeft}
            onClick={toggleMinimize}
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
