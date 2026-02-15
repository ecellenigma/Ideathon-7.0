import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";

import { FAQS } from "../constants";
import Faqs from "../assets/faqs.svg";
import QuestionMark from "../assets/question mark.svg"; 

const FAQ = () => {
return (
  <section id="faqs" className="p-10 text-white snap-start">
  <img 
    src={Faqs}
    alt="FAQs Section"
    className="mx-auto my-10"
  />

  <Accordion
      type="single" 
      collapsible 
      className="max-w-3xl mx-auto space-y-4"
  >
      {FAQS.map((FAQ, index) => (
        <AccordionItem
        value={`item-${index + 1}`}
        className="border border-[#212325] rounded-lg overflow-hidden"
        >
        <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-transparent  hover:bg-[#0a0808]">
            <div className="flex items-center space-x-3">
            <div className="h-8 w-8 flex items-center justify-center bg-[#1E2A3E] rounded-full">
                <img
                  src={QuestionMark}
                  alt="Question Mark"
                  className="h-4 w-4"
                />
              </div>
            <span className="font-semibold">{FAQ.QUESTION}</span>
            </div>
        </AccordionTrigger>
        <AccordionContent className="px-4 py-3 bg-[#0a0808]">
            <p className="text-sm text-gray-300">{FAQ.ANSWER}</p>
        </AccordionContent>
        </AccordionItem>  
      ))}
  </Accordion>
  </section>
)
}

export default FAQ;