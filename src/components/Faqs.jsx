'use client'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'

const faqs = [
  {
    "question": "What should I do to prepare for interview?",
    "answer":
      "As a 100% remote company, we conduct our interviews via Google Meets. Please ensure you have a working camera and a reliable internet connection. Before meeting with us, review the job description and prepare examples demonstrating your previous experience in the field."
  },
  {
    "question": "What is your interview process?",
    "answer":
      "Our interview process typically consists of the following steps:\n1. 30-minute video call with our in-house recruiter\n2. Skills assessment: technical interview with the hiring manager and/or task assignment, depending on the role\n3. Final interview: meet a member of the senior leadership team and bring any questions you'd like answered\n4. Offer and welcome to the team."
  },
  {
    "question": "Can I work from anywhere in the world?",
    "answer":
      "You can work at WinTech from any location within a 4-hour time difference from London (GMT), provided that you don't require visa sponsorship for your country of residence."
  },
  {
    "question": "What is your contractual arrangement for remote team members?",
    "answer":
      "We provide regular employment or contractor agreements via Deel.com, depending on your location."
  },
  {
    "question": "How do you collaborate effectively in a remote work environment?",
    "answer":
      "We utilize Slack and Google Meets for regular team catch-ups and company meetings, while managing tasks in Jira and maintaining documentation in Confluence. We continuously engage with Agile Coaching and Scrum Masters to optimize our operational efficiency in a remote work environment."
  },
  {
    "question": "What are your usual working hours?",
    "answer":
      "We require all team members to be available between 11 am and 5 pm London time for cross-department meetings. Outside of this time frame, you are free to plan your schedule and work productively. All full-time contracts are for 40 hours per week."
  },
  {
    "question": "Where is most of your team based?",
    "answer":
      "The majority of our team members are located in Europe, but we welcome candidates from all around the world."
  },
  // More questions...
]

const includedFeatures = [
  'Flexible, remote working environment',
  'Unlimited paid holidays',
  'Apple laptop and equipment for your needs',
  'High talent density',
]

export function Faqs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-3xl font-bold tracking-tight text-black sm:text-5xl text-center">Careers</h2>
          <p className="text-lg text-slate-700">
                      At WinTech Digital, you&apos;ll join a supportive and collaborative team passionate about excellence and being industry leaders. Our innovative work environment drives impactful business results as we challenge ourselves and elevate each other to achieve new heights.
                      </p>
                      <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4  leading-6 text-customGrayText sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 text-indigo-600" aria-hidden="true" />
                 <p className='text-lg text-slate-700'>{feature}</p> 
                </li>
              ))}
            </ul>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-lg font-semibold leading-7 ">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-lg leading-7 text-gray-600">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
