'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <AccordionPrimitive.Root type="single" collapsible>
      {items.map((item, i) => (
        <AccordionPrimitive.Item
          key={i}
          value={`faq-${i}`}
          style={{
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <AccordionPrimitive.Header asChild>
            <h3 style={{ margin: 0 }}>
              <AccordionPrimitive.Trigger
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '20px 0',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'var(--font-body)',
                  fontSize: 16,
                  fontWeight: 600,
                  color: 'var(--text-heading)',
                  textAlign: 'left',
                  gap: 16,
                  minHeight: 48,
                }}
              >
                {item.question}
                <ChevronDown
                  size={18}
                  style={{
                    flexShrink: 0,
                    color: 'var(--text-muted)',
                    transition: 'transform 0.2s',
                  }}
                  className="accordion-chevron"
                />
              </AccordionPrimitive.Trigger>
            </h3>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content
            style={{
              overflow: 'hidden',
            }}
            className="accordion-content"
          >
            <p style={{
              padding: '0 0 20px 0',
              color: 'var(--text-body)',
              fontSize: 15,
              lineHeight: 1.7,
              margin: 0,
            }}>
              {item.answer}
            </p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
