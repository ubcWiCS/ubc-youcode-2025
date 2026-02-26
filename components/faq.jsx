"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import bg from "@/app/assets/faq_bg.svg";
import { MdExpandMore } from "react-icons/md";

const faqs = [
  {
    question: "What is youCode?",
    answer:
      "youCode is more than a hackathon. It’s a student-run community built around inclusivity, collaboration, and growth. We bring together students of all experience levels to learn, build, and collaborate on meaningful projects, whether it’s your first time coding or your tenth hackathon!",
  },
  {
    question: "Who can participate?",
    answer:
      "We welcome participants of any gender from all majors and faculties at UBC. You must present a valid UBC student ID to participate at youCode.",
  },
  {
    question: "Do I need any coding experience?",
    answer:
      "youCode aims to provide an equal opportunity to beginner and advanced level students to engage with their technical abilities. Beginner and advanced streams are available for students with different experience levels.",
  },
  {
    question: "How do I register?",
    answer: (
      <>
        Applications close March 15th.{" "}
        <Link
          href="https://linktr.ee/youcode"
          className="underline font-semibold hover:opacity-80"
          target="_blank"
        >
          Apply here
        </Link>
      </>
    ),
  },
  {
    question: "Do I have to register with a team?",
    answer:
      "All interested youCode participants must register individually. Teams are formed after confirmation.",
  },
  {
    question: "How will this event be held?",
    answer:
      "This event is entirely in-person on the UBC Vancouver campus and spans two days. Participants will not be required to stay overnight.",
  },
];

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="w-full">
      <div
        className={`w-full rounded-xl border border-white bg-[var(--pink-light)] transition-all duration-300 ease-in-out ${
          isOpen ? "shadow-md" : ""
        }`}
      >
        {/* Question */}
        <button
          onClick={onClick}
          className="flex w-full items-center justify-between
                    px-3 py-3 sm:px-4 sm:py-4
                    text-left text-white font-semibold font-montserrat
                    text-sm sm:text-base lg:text-lg
                    focus:outline-none"
        >
          <span className="pr-4">{question}</span>
          <div
            className={`transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          >
            <MdExpandMore size={24} />
          </div>
        </button>

        {/* Container */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            {/* Divider */}
            <div className="mx-4 border-t border-white/50" />

            <div className="px-4 py-4 md:px-5 text-white font-medium text-sm sm:text-base lg:text-lg text-left leading-relaxed">
              {answer}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full z-20">
      {/* Background Image Container */}
      <div className="absolute inset-0 -z-10 w-full h-full">
        {/* Image only on medium screens and up */}
        <div className="hidden md:block w-full h-full">
          <Image
            src={bg}
            alt=""
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Background color for mobile */}
        <div className="block md:hidden w-full h-full bg-[#A1D4F2]" />
      </div>

      {/* FAQ content */}
      <div className="max-w-7xl px-6 md:px-12 lg:px-20 pb-24 md:pb-36 mt-[-100px] sm:mt-[-100px] lg:mt-[-230px] flex flex-col items-start justify-start">
        <div className="w-full md:w-11/12 lg:w-11/12 flex flex-col items-start justify-start">
          <h2
            id="faq"
            className="scroll-mt-20 md:scroll-mt-24 mb-10 text-[var(--blue-dark)] font-dm italic text-3xl sm:text-4xl md:text-5xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.1)]"
          >
            FAQs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                {...faq}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
