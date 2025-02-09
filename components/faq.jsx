"use client"

import { useState } from "react"
import { MdExpandLess, MdExpandMore } from "react-icons/md"

const faqs = [
  {
    question: "Why Community & Connection?",
    answer:
      "We are passionate about technology that brings people together. We believe that technology is not just about innovation, but about using it as a powerful tool to foster collective social wellbeing, empower communities, and create meaningful connections. By harnessing the potential of technology, we aim to create solutions that positively impact people's lives and strengthen the bonds within communities.",
  },
  {
    question: "Do I need any coding experience?",
    answer:
      "youCode aims to provide an equal opportunity to beginner and advanced level students to engage with their technical abilities. This is an environment for learning, growth, and proper experience. We offer a beginner stream and advanced stream for students with corresponding levels of experience and relevant coursework. If you have little to no experience, please consider registering as a participant in the beginner stream. ",
  },
  {
    question: "Who can participate?",
    answer:
      "We welcome participants of any gender from all majors and faculties at UBC. You must present a valid UBC student ID to participate at youCode.  ",
  },
  { question: "How do I register?", answer: "Keep your eye out for registration details to come in March!   " },
  {
    question: "Do I have to register with a team?",
    answer:
      "All interested youCode participants must register individually. You will be notified by email if you were selected to participate at youCode. After your participation is confirmed, you will be able to form teams.   ",
  },
  {
    question: "Who will be on the judging panel?  ",
    answer:
      "The judging panel will consist of representatives of our Gold and Platinum sponsors. Please refer to our sponsors list at the bottom of this page for more information.  ",
  },
  {
    question: "How will this event be held?  ",
    answer:
      "This event is entirely in-person on the UBC Vancouver campus and will be held across two days. Participants will not be required to stay overnight as everyone will reconvene the morning of Day 2 of the hackathon.  ",
  },
  {
    question: "Have more questions?  ",
    answer:
      "For more participant enquiries and partnership opportunities, please refer to our social media below or email us at ubcyoucode@gmail.com! Participants, feel free to reach out to us with your questions.  ",
  },
]

const FaqItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="mb-2 md:mb-4 flex flex-col">
      <button
        onClick={onClick}
        className="text-xs md:text-sm lg:text-base flex justify-between items-center w-full px-3 py-2 md:px-4 md:py-3 lg:px-5 lg:py-4 text-left text-white font-semibold bg-accent-magenta/[0.7] rounded-xl hover:bg-accent-magenta/[0.9] transition-all duration-300 focus:outline-none "
      >
        {question}
        <span>{isOpen ? <MdExpandLess className="text-lg" /> : <MdExpandMore className="text-lg" />}</span>
      </button>
      {isOpen && (
        <div className="mt-2  p-3 md:p-4 text-xs md:text-sm text-accent-magenta rounded-2xl  bg-white/10">
          {answer}
        </div>
      )}
    </div>
  )
}

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const handleItemClick = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  const third = Math.ceil(faqs.length / 3)
  const firstThirdFaqs = faqs.slice(0, third)
  const secondThirdFaqs = faqs.slice(third, 2 * third)
  const lastThirdFaqs = faqs.slice(2 * third)

  return (
    <div className="p-4 md:p-8 lg:p-16 my-10 mx-auto max-w-7xl lg:mt-40" id="faq">
      
     
      <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-8 lg:gap-12">
        <div className="flex-1 md:w-1/3 flex items-center justify-center">
          <h2 className="text-center text-3xl md:text-4xl lg:text-8xl font-bold text-white relative">
            <span className="relative z-10">FAQs</span>
          </h2>
        </div>

        <div className="flex-1 md:w-1/3">
          {firstThirdFaqs.map((faq, index) => (
            <FaqItem key={index} {...faq} isOpen={openIndex === index} onClick={() => handleItemClick(index)} />
          ))}
        </div>
        <div className="flex-1 md:w-1/3">
          {secondThirdFaqs.map((faq, index) => (
            <FaqItem
              key={index + third}
              {...faq}
              isOpen={openIndex === index + third}
              onClick={() => handleItemClick(index + third)}
            />
          ))}
        </div>
        

      </div>
    </div>
  )
}

export default FaqSection

