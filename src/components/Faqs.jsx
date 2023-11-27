import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'How do you partner with your clients?',
      answer:
        'We primarily collaborate with enterprise or mid-size businesses to assist them in acquiring new clients. Our approach involves developing information products across various industries to generate organic and paid traffic. We then leverage this traffic to connect potential clients with our partners.',
    },
    {
      question: 'Do you charge retainer fees?',
      answer: 'No, we do not charge any retainer fees. Our business model is based on building websites and mobile apps that provide valuable content to users. By attracting organic traffic, we can subsequently offer this audience to our clients.',
    },
   
    {
      question: 'What verticals do you work with?',
      answer:
        'Currently, we service clients in selective verticals such as finance, loans, health and iGaming. ',
    },
  ],
  [
    {
      question: 'On what terms do you usually brings customers?',
      answer:
        'Our partnership terms can vary, including Cost Per Acquisition (CPA), revenue sharing, or a combination of both.',
    },
    {
      question:
        'What are the requirements to work with WinTech?',
      answer:
        'To partner with us, you should have a well-established business with an affiliate program or other tracking software that enables us to accurately track the clients we refer to you.',
    },
    {
      question:
        'Do you help to set up tracking and analytics?',
      answer:
        'We do not provide services for setting up tracking or analytics. We partner with companies that already have robust tracking and analytics systems in place.',
    },
  ],
  [
    {
      question: 'How fast can you deliver the first customers?',
      answer:
        'For the verticals we specialize in, we have thousands of users visiting our products daily. We can start delivering customers within 14 days after signing the agreement.',
    },
    {
      question: 'How many clients can I expect?',
      answer: 'The number of clients you can expect depends on your Cost Per Thousand Impressions (CPM). We use an automated system to rotate offers and give priority to those with high-performance products, ensuring the best results for our partners.',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute left-1/2 top-0 max-w-none -translate-y-1/4 translate-x-[-30%]"
        src={backgroundImage}
        alt=""
        width={1558}
        height={946}
        unoptimized
      />
      <Container className="relative" id="faq">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faq-title"
            className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg tracking-tight text-slate-700">
          If you can’t find what you’re looking for, please email our support team and we will get back to you as soon as possible.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-slate-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
