import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
  } from "@/components/ui/accordion"

import { FAQS } from "../constants";
  
export default function FAQ() {
return (
    <div className="p-10 bg-[#0A0E16] text-white">
    <img 
      src="src/assets/faqs.svg"
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
          className="border border-[#1E2A3E] rounded-lg overflow-hidden"
          >
          <AccordionTrigger className="flex items-center justify-between px-4 py-3 bg-[#141E2F] hover:bg-[#1a2537]">
              <div className="flex items-center space-x-3">
              <div className="h-8 w-8 flex items-center justify-center bg-[#1E2A3E] rounded-full">
                  <img
                    src="src/assets/question mark.svg"
                    alt="Question Mark"
                    className="h-4 w-4"
                  />
                </div>
              <span className="font-semibold">{FAQ.QUESTION}</span>
              </div>
          </AccordionTrigger>
          <AccordionContent className="px-4 py-3 bg-[#192238]">
              <p className="text-sm text-gray-300">{FAQ.ANSWER}</p>
          </AccordionContent>
          </AccordionItem>  
        ))}
    </Accordion>
    </div>
)
}
