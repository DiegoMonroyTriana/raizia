'use client'

import { AccordionItem, Accordion } from "@nextui-org/react";

interface Content {
  head: string;
  title: string;
  messages: string[];
}

function Information({ accordion }: { accordion: Content[] | undefined }) {
  return accordion && (
    <Accordion variant="splitted">
      {
        accordion.map((acc, i) => (
          <AccordionItem
            className="lg:mb-6 text-left"
            key={acc.head}
            aria-label={`Accordion ${i + 1}`}
            title={<h3 className="lg:text-2xl text-base font-bold">{acc.head}</h3>}
          >
            <>
              <p className="lg:text-xl text-sm font-bold lg:mb-3">{acc.title}</p>
              {acc.messages.map((msg) => (
                <p key={msg} className="[text-wrap:balance] lg:mb-2 text-xs lg:text-base">{msg}</p>
              ))}
            </>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}

export default Information;
