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
            className="mb-6 text-left"
            key={acc.head}
            aria-label={`Accordion ${i + 1}`}
            title={<h3 className="text-2xl font-bold">{acc.head}</h3>}
          >
            <>
              <p className="text-xl font-bold mb-3">{acc.title}</p>
              {acc.messages.map((msg) => (
                <p key={msg} className="[text-wrap:balance] mb-2">{msg}</p>
              ))}
            </>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}

export default Information;
