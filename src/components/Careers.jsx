'use client'
import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'

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

export function Careers() {
  return (
    <section id="careers">
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-32 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl">
        
          <h2 className="mb-10 text-4xl font-bold tracking-tight text-blue sm:text-5xl text-center">
          <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 318 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">Careers</span>
        </span>{' '}
            </h2>
          <p className="text-lg text-slate-700">
                      At WinTech Digital, you&apos;ll join a supportive and collaborative team passionate about excellence and being industry leaders. Our innovative work environment drives impactful business results as we challenge ourselves and elevate each other to achieve new heights.
                      </p>
                      <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4  leading-6 text-customGrayText sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon className="h-6 w-5 text-blue-600" aria-hidden="true" />
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
          <p className="text-lg mt-10 text-slate-700">
          All qualified applicants will receive consideration for employment without regard to sex, gender identity, sexual orientation, race, color, religion, national origin, disability, protected veteran status, age, or any other characteristic protected by law.
                      </p>
          <Button className="px-7 mt-10 py-2.5 text-lg" variant="solid" color="blue" href="https://www.linkedin.com/jobs/wintech-digital-jobs-worldwide?f_C=94245531&trk=top-card_top-card-primary-button-top-card-primary-cta&position=1&pageNum=0">Explore Open Roles</Button>
        </div>
      </div>
    </div>
    </section>
  )
}
