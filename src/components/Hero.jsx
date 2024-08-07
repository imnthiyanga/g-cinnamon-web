import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Navbar from "./Navbar";
import Link from "next/link";

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div id="hero" className="bg-white ">
      <Navbar />
      <div className="relative">
        <div className="mx-auto max-w-7xl">
          <div className="relative z-10 pt-24 lg:pt-14 lg:w-full lg:max-w-2xl">
            <svg
              className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-white lg:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="0,0 90,0 50,100 0,100" />
            </svg>

            <div className="relative px-6 py-30 sm:py-35 lg:px-8 lg:py-48 lg:pr-0">
              <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-7xl">
                  CINNAMON PARADISE
                </h1>
                <p className="mt-6 sm-text-lg leading-8 text-gray-600">
                  Pure assense from Sri Lanka&apos;s Lush Lands
                </p>

                <div className="mt-5 flex items-center gap-x-6">
                  <a
                    href="#contact"
                    className="bulk-order-btn rounded-md bg-orange-700 px-20 py-5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
                  >
                   
                  </a>
                  <a
                    href="#products"
                    className="block-order-btn text-sm font-semibold rounded-md bg-orange-700 px-20 py-5 leading-6 text-white  hover:bg-orange-600 "
                  >
                  </a>
                </div>
                <div className="pt-10">
                  <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                    Check our Reasearch section.{" "}
                    <Link href="/research/" className="text-orange-700">
                      Go to Research Page
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-full w-full object-cover lg:aspect-auto"
            src="/img/home.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
