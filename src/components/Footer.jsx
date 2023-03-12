import React from "react";
import { BsFacebook, BsGithub } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="w-full bg-black p-10">
      <div className="text-gray-400 grid md:grid-cols-5 max-w-[1200px] mx-auto px-3">
        <div className="md:col-span-2">
          <ul>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Analytics
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Marketing
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Commerce
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Insights
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Pricing
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Documentation
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Guides
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              API Status
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              About
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Blog
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Jobs
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Press
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Careers
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <ul>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Claim
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Policy
            </li>
            <li className="py-2 text-normal hover:text-gray-50 cursor-pointer">
              Terms
            </li>
          </ul>
          <div className="flex justify-between mt-5 text-2xl w-[150px]">
            <BsFacebook className="hover:text-gray-50 cursor-pointer" />
            <BsGithub className="hover:text-gray-50 cursor-pointer" />
            <FaTiktok className="hover:text-gray-50 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
