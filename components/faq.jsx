"use client";

import { useState } from "react";
import Image from "next/image";
import bg from "@/app/assets/faq_bg.svg";
import { MdExpandLess, MdExpandMore } from "react-icons/md";

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
    answer: "Applications close March 15th.",
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
      <div className="w-full rounded-xl border border-white bg-[var(--pink-light)] transition-all duration-500">
        {/* Question */}
        <button
          onClick={onClick}
          className="flex w-full items-center justify-between px-4 py-3 text-left text-white font-semibold font-montserrat text-sm sm:text-base focus:outline-none"
        >
          <span>{question}</span>
          {isOpen ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
        </button>

        {/* Divider */}
        {isOpen && <div className="border-t-2 mx-4 border-white" />}

        {/* Answer */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 py-3 md:px-5 md:py-4 text-white font-medium text-sm sm:text-base text-left leading-relaxed">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative w-full -translate-y-[105%] md:-translate-y-[80%] lg:-translate-y-[84%]">
      {/* Background */}
      <div className="relative w-full">
        <Image src={bg} alt="FAQ background" className="w-full h-auto block" />
        {/* Fallback background color for mobile */}
        <div className="absolute top-[98%] left-0 w-full h-[50vh] bg-[#A1D4F2] -z-10" />
      </div>

      {/* FAQ content */}
      <div
        className="
          absolute bottom-0 left-0 w-full
          px-6 md:px-12 lg:px-20
          pb-24 md:pb-36 lg:pb-44
          translate-y-[60%] lg:translate-y-[-65%]
          z-10
        "
      >
        <div className="w-full md:w-2/3">
          <h2
            id="faq"
            className="scroll-mt-20 md:scroll-mt-24 mb-6 text-[var(--blue-dark)] font-montserrat font-extrabold text-3xl sm:text-4xl md:text-5xl text-left drop-shadow-[0_6px_16px_rgba(0,0,0,0.25)]"
          >
            FAQs
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
