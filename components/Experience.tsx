import React, { useState } from "react";

import { Button, MovingDiv } from "./ui/MovingBorders";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";
import TagLine from "./ui/TagLine";
import Generating from "./ui/Generating";
import {
  Gradient,
  PhotoChatMessage,
  VideoBar,
  VideoChatMessage,
} from "./ui/ExperienceDesign";

const Experience = () => {
  const [isFirstOpen, setIsFirstOpen] = useState(false);
  const [isSecondOpen, setIsSecondOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [isFourOpen, setIsFourOpen] = useState(false);

  const experienceDates = [
    "Dec 2021 to Present",
    "Feb 2017 to May 2018",
    "Nov 2016 to Dec 2016",
  ];

  const sjcDesc = [
    "Mostly Working From Home, located in Seoul, Korea",
    "Mainly focusing on managing online sales platforms. ",
    "Creating commercial and event images/pages and upload them to the sales platform. Tracking and analysing sales indicators.",
    "Job also includes assisting to prepare financial documents. All information for the documents are provided by the accounting platform, named BAROEROP by KB Bank, Korea.",
  ];

  const sticksIcons = [
    "/recording-01.svg",
    "/recording-03.svg",
    "/sliders-04.svg",
    "/chrome-cast.svg",
    "/disc-02.svg",
  ];
  const sticksDesc = [
    "Based in Seoul, Korea (WFH)",
    "Digital Optimized Contents for Social Media. Job included creating event contents for social media like Facebook and other social media. (For Samsung electronics, February 2017 – December 2018)",
    "Samsung RMS 2.0 UX/UI Design. Creating/editing texts and image using Photoshop. Tanslating Korean instruction into English.(For Samsung electronics USA, October 2017 – December 2018)",
    "Samsung RMS 2.0 Guide Video. Mainly translating Korean into English for captions (For Samsung electronics, February 2018 – May 2018)",
  ];

  const internDesc = [
    "Property management internships",
    "Responding to enquiries from customers, mainly tenants",
    "Managing regular inspections",
  ];

  const buttonHandlerOne = () => {
    setIsFirstOpen(true);
  };
  const buttonHandlerTwo = () => {
    setIsSecondOpen(true);
  };
  const buttonHandlerThree = () => {
    setIsThirdOpen(true);
  };
  const randomLength = () => {
    Math.floor(Math.random() * 10000) + 10000;
  };

  return (
    <div className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>
      <p className="font-code mt-2 text-end mr-2">CLICK FOR DETAIL</p>
      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {/* Experience 1 */}
        <Button
          onClick={buttonHandlerOne}
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <Image
              src="/exp1.svg"
              alt="/exp1.svg"
              className="lg:w-32 md:w-20 w-16 hidden md:block lg:block"
              width={20}
              height={20}
            />
            <div className="lg:ms-5">
              <TagLine>{experienceDates[0]}</TagLine>
              <h1 className="text-start text-xl md:text-2xl font-bold mt-3">
                SJC Cooperation
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                Managing inventory. Promoting and assisting events. Managing
                online-based sales platforms in Korea (Naver market and
                Coupang).
              </p>
            </div>
          </div>
        </Button>
        <Drawer open={isFirstOpen} onOpenChange={setIsFirstOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-center text-2xl text-bold"></DrawerTitle>
              <DrawerDescription className="text-start">
                <MovingDiv
                  className={`relative z-1 flex items-center h-[40rem] p-8 overflow-hidden lg:p-20 xl:h-[46rem] border-neutral-200 dark:border-slate-800 `}
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: `calc(1.75rem* 0.96)`,
                  }}
                >
                  <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
                    <img
                      className="w-[80%] h-fit object-cover md:object-right opacity-10 p-10 rounded-[1.75rem] md:opacity-60 lg:opacity-60"
                      width={800}
                      alt="Smartest AI"
                      height={730}
                      src="/service-1.png"
                    />
                    <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg-right-auto lg:bottom-8 lg:-translate-x-1/2" />
                  </div>

                  <div className="relative z-1 max-w-[21rem] ml-auto">
                    <TagLine>{experienceDates[0]}</TagLine>

                    <p className="body-2 mt-3 mb-[1rem] md:text-n-3 lg:text-n-3 sm:text-white">
                      Managing inventory. Promoting and assisting events.
                      Managing online-based sales platforms in Korea (Naver
                      market and Coupang.
                    </p>

                    <ul className="body-2">
                      {sjcDesc.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start py-4 border-t border-n-6"
                        >
                          <img width={24} height={24} src="/check.svg" />
                          {index === 3 ? (
                            <p className="ml-4 mb-10">{item}</p>
                          ) : (
                            <p className="ml-4">{item}</p>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </MovingDiv>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        {/* Experience 2 */}

        <Button
          onClick={buttonHandlerTwo}
          //   random duration will be fun , I think , may be not
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <Image
              src="/exp2.svg"
              alt="/exp2.svg"
              className="lg:w-32 md:w-20 w-16 hidden md:block lg:block"
              width={20}
              height={20}
            />
            <div className="lg:ms-5">
              <TagLine>{experienceDates[1]}</TagLine>
              <h1 className="text-start text-xl md:text-2xl font-bold mt-3">
                STICK Interactive
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                Contract job. Assitant work to design Retail Management System
                (RMS) for Samsung Electronics USA. Job also included helping
                team to communicatie with people in USA (Translation and
                Interpretation jobs).
              </p>
            </div>
          </div>
        </Button>
        <Drawer open={isSecondOpen} onOpenChange={setIsSecondOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-center text-2xl text-bold"></DrawerTitle>
              <DrawerDescription className="text-start">
                <MovingDiv
                  className={`relative z-1 flex items-center h-[40rem] p-8 overflow-hidden lg:p-20 xl:h-[46rem] border-neutral-200 dark:border-slate-800 `}
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: `calc(1.75rem* 0.96)`,
                  }}
                >
                  <div className="lg:py-12 md:py-12 px-4 xl:px-8 sm:py-0">
                    <TagLine>{experienceDates[1]}</TagLine>
                    <h4 className="h4 mt-3 mb-4">STICK Interactive</h4>
                    <ul className="body-2">
                      {sticksDesc.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start py-4 border-t border-n-6"
                        >
                          <img width={24} height={24} src="/check.svg" />
                          <p className="ml-4">{item}</p>
                        </li>
                      ))}
                    </ul>

                    <ul className="flex items-center justify-between">
                      {sticksIcons.map((item, index) => (
                        <li
                          key={index}
                          className={`rounded-2xl flex items-center justify-center ${
                            index === 2
                              ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                              : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15"
                          }`}
                        >
                          <div
                            className={
                              index === 2
                                ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1.5rem]"
                                : ""
                            }
                          >
                            <img src={item} width={24} height={24} alt={item} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </MovingDiv>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>

        {/* Experience 3 */}
        <Button
          onClick={buttonHandlerThree}
          duration={Math.floor(Math.random() * 10000) + 10000}
          borderRadius="1.75rem"
          style={{
            //   add these two
            //   you can generate the color from here https://cssgradient.io/
            background: "rgb(4,7,29)",
            backgroundColor:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            // add this border radius to make it more rounded so that the moving border is more realistic
            borderRadius: `calc(1.75rem* 0.96)`,
          }}
          // remove bg-white dark:bg-slate-900
          className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
        >
          <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
            <Image
              src="/exp1.svg"
              alt="/exp1.svg"
              className="lg:w-32 md:w-20 w-16 hidden md:block lg:block"
              width={20}
              height={20}
            />
            <div className="lg:ms-5">
              <TagLine>{experienceDates[2]}</TagLine>
              <h1 className="text-start text-xl md:text-2xl font-bold mt-3">
                Ione Property (Internship)
              </h1>
              <p className="text-start text-white-100 mt-3 font-semibold">
                Property management internships. Job was mainly to respond to
                enquiries from customers. Also managing and participated in
                regular inspections.
              </p>
            </div>
          </div>
        </Button>
        <Drawer open={isThirdOpen} onOpenChange={setIsThirdOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle className="text-center text-2xl text-bold"></DrawerTitle>
              <DrawerDescription className="text-start">
                <MovingDiv
                  className={`relative z-1 flex items-center h-[40rem] p-8 overflow-hidden lg:p-20 xl:h-[46rem] border-neutral-200 dark:border-slate-800 `}
                  duration={Math.floor(Math.random() * 10000) + 10000}
                  borderRadius="1.75rem"
                  style={{
                    background: "rgb(4,7,29)",
                    backgroundColor:
                      "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                    borderRadius: `calc(1.75rem* 0.96)`,
                  }}
                >
                  <div className="absolute inset-0">
                    <Image
                      src="/service-2.png"
                      className="h-full w-full object-cover opacity-30"
                      width={630}
                      height={750}
                      alt="robot"
                    />
                  </div>

                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                    <TagLine>{experienceDates[2]}</TagLine>
                    <h4 className="h4 mt-4 mb-4">Ione Property (Internship)</h4>
                    <ul className="body-2">
                      {internDesc.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-start py-4 border-t border-n-6"
                        >
                          <img width={24} height={24} src="/check.svg" />
                          <p className="ml-4">{item}</p>
                        </li>
                      ))}
                    </ul>
                    <p className="body-2 mb-[3rem] text-n-3"></p>

                    <PhotoChatMessage />
                  </div>
                </MovingDiv>
              </DrawerDescription>
            </DrawerHeader>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="flex justify-center mt-10">
        <a
          className="text-xs font-code font-bold tracking-wider uppercase border-b"
          href="#testimonials"
        >
          Move to Next
        </a>
      </div>
    </div>
  );
};

export default Experience;
