import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  BookmarkAltIcon,
  CalendarIcon,
  MenuIcon,
  PhoneIcon,
  ShieldCheckIcon,
  SupportIcon,
  XIcon,
  CodeIcon,
  TagIcon,
  TemplateIcon,
  DesktopComputerIcon,
} from "@heroicons/react/outline";

import { Link } from "react-scroll";
import Image from "next/image";

import React from "react";

const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "#",
  },
  { id: 3, name: "Improve your customer experience", href: "#" },
];

function Header() {
  return (
    <Popover className="relative bg-mainBg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="main" smooth={true} duration={1000}>
              {/* <Image src="/juno-logo.svg" height={80} width={100} /> */}
              <h1 className="font-NatsRegular text-5xl text-mainColor cursor-pointer">
                Juno
              </h1>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <Popover.Button className="bg-mainBg rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-mainColor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
              <span className="sr-only">Open menu</span>
              <MenuIcon className="h-6 w-6" aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden md:flex gap-10">
            <Link
              to="whatWeDo"
              smooth={true}
              duration={1000}
              className="text-mainColor-dark font-NatsRegular text-xl hover:text-gray-900 cursor-pointer"
            >
              What We Do
            </Link>
            <Link
              to="services"
              smooth={true}
              duration={1000}
              className="text-mainColor-dark font-NatsRegular text-xl hover:text-gray-900 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="pricing"
              smooth={true}
              duration={1000}
              className="text-mainColor-dark font-NatsRegular text-xl hover:text-gray-900 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              to="projects"
              smooth={true}
              duration={1000}
              className="text-mainColor-dark font-NatsRegular text-xl hover:text-gray-900 cursor-pointer"
            >
              Projects
            </Link>

            <Popover className="relative">
              {({ open }) => (
                <>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-md sm:px-0">
                      <div className="rounded-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                          {resources.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                            >
                              <item.icon
                                className="flex-shrink-0 h-6 w-6 text-mainColor"
                                aria-hidden="true"
                              />
                              <div className="ml-4">
                                <p className="text-mainColor-dark font-NatsRegular text-xl">
                                  {item.name}
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  {item.description}
                                </p>
                              </div>
                            </a>
                          ))}
                        </div>
                        <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                          <div>
                            <h3 className="text-sm tracking-wide font-medium text-gray-500 uppercase">
                              Recent Posts
                            </h3>
                            <ul role="list" className="mt-4 space-y-4">
                              {recentPosts.map((post) => (
                                <li
                                  key={post.id}
                                  className="text-base truncate"
                                >
                                  <a
                                    href={post.href}
                                    className="font-medium text-gray-900 hover:text-gray-700"
                                  >
                                    {post.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="mt-5 text-sm">
                            <a
                              href="#"
                              className="font-medium mainColor hover:text-indigo-500"
                            >
                              {" "}
                              View all posts{" "}
                              <span aria-hidden="true">&rarr;</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
          </Popover.Group>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="tel:09566754237"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainColor hover:bg-mainColor-dark font-NatsRegular lg:text-xl"
            >
              <PhoneIcon className="w-5 h-5 mr-4" />
              Contact Us
            </a>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-10"
        >
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-mainBg divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                {/* <Image src="/juno-green.svg" height={20} width={80} /> */}
                <h1 className="font-NatsRegular text-5xl text-mainColor cursor-pointer">
                  Juno
                </h1>
                <div className="-mr-2">
                  <Popover.Button className="bg-mainBg rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-white hover:bg-mainColor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link
                    to="whatWeDo"
                    smooth={true}
                    duration={1000}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <Popover.Button className="flex">
                      <CodeIcon
                        className="flex-shrink-0 h-6 w-6 text-mainColor"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-mainColor-dark font-NatsRegular text-xl">
                        What We Do
                      </span>
                    </Popover.Button>
                  </Link>

                  <Link
                    to="services"
                    smooth={true}
                    duration={1000}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <Popover.Button className="flex">
                      <TemplateIcon
                        className="flex-shrink-0 h-6 w-6 text-mainColor"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-mainColor-dark font-NatsRegular text-xl">
                        Services
                      </span>
                    </Popover.Button>
                  </Link>
                  <Link
                    to="pricing"
                    smooth={true}
                    duration={1000}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <Popover.Button className="flex">
                      <TagIcon
                        className="flex-shrink-0 h-6 w-6 text-mainColor"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-mainColor-dark font-NatsRegular text-xl">
                        Pricing
                      </span>
                    </Popover.Button>
                  </Link>
                  <Link
                    to="projects"
                    smooth={true}
                    duration={1000}
                    className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50 cursor-pointer"
                  >
                    <Popover.Button className="flex">
                      <DesktopComputerIcon
                        className="flex-shrink-0 h-6 w-6 text-mainColor"
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-mainColor-dark font-NatsRegular text-xl">
                        Projects
                      </span>
                    </Popover.Button>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="py-6 px-5 space-y-6">
              <div>
                <a
                  href="tel:09566754237"
                  className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-mainColor hover:bg-mainColor-dark ease-in-out duration-200"
                >
                  <PhoneIcon className="w-5 h-5 mr-4" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

export default Header;
