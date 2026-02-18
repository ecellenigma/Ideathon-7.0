import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

import { FAQS } from "../constants";
import QuestionMark from "../assets/question mark.svg";

const FAQ = () => {
  return (
    <section id="faqs" className="text-white min-h-screen snap-start py-20 px-4">
      <h1 className="mx-auto mt-10 mb-16 text-center text-5xl md:text-7xl font-[900] font-['Outfit'] uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#FF6A2E] to-[#FF9A03]">
        FAQs
      </h1>

      <Accordion
        type="single"
        collapsible
        className="max-w-3xl mx-auto space-y-4"
      >
        {FAQS.map((FAQ, index) => (
          <AccordionItem
            value={`item-${index + 1}`}
            className="border border-[#FF6A2E] rounded-lg overflow-hidden mb-4"
          >
            <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-transparent  hover:bg-[#1a0b0b]">
              <div className="flex items-center space-x-3">
                <div className="h-8 w-8 min-w-[2rem] flex items-center justify-center bg-[#FF6A2E] rounded-full shrink-0">
                  <img
                    src={QuestionMark}
                    alt="Question Mark"
                    className="h-4 w-4"
                  />
                </div>
                <span className="font-semibold">{FAQ.QUESTION}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 py-3 pb-6 bg-[#050201]">
              <p className="text-sm text-gray-300">{FAQ.ANSWER}</p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default FAQ;