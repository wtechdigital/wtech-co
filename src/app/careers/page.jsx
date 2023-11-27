import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Careers() {
  return (
    <>
      <Header />
      <main>
        <Content />
        <Hero />
        <Values />
        <Work />
        <Vacancies />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}

export function Content() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-16 mb-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Careers at WinTech
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Join a supportive and collaborative team passionate about excellence and being industry leaders.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#hero"
                className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Learn more
              </a>
              <a href="#positions" className="text-sm font-semibold leading-6 text-gray-900">
                Open Positions <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </div>
  )
}


const stats = [
  { name: 'Remote', value: '100%' },
  { name: 'Colleagues', value: '50+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Paid time off', value: 'Unlimited' },
]

export function Work() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32" id="work">
      <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-32">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Work with us</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
          Our innovative work environment drives impactful business results as we challenge ourselves and elevate each other to achieve new heights.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse">
                <dt className="text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
const values = [
  {
    name: 'Encourage creativity',
    description:
      'We embrace innovation and out-of-the-box thinking to stay ahead of the curve.',
  },
  {
    name: 'Stay super pumped',
    description:
      'We consistently maintain a high level of excitement and enthusiasm.',
  },
  {
    name: 'Hustle for results',
    description:
      'We are relentless in our pursuit of excellence, working hard to achieve our objectives.',
  },
  {
    name: 'Actionable feedback:',
    description:
      'We continuously provide and seek constructive feedback, learning from our experiences and each other.',
  },
  {
    name: 'Proactive problem-solving',
    description:
      'We identify and address challenges as they arise, always seeking the most effective solutions.',
  },
  {
    name: 'Data-driven decisions',
    description:
      'We make informed decisions based on insights gleaned from comprehensive data analysis.',
  },
]

export function Values() {
  return (
 <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-32 mb-64" id="values">
 <div className="mx-auto max-w-2xl lg:mx-0">
   <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our values</h2>
 </div>
 <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
   {values.map((value) => (
     <div key={value.name}>
       <dt className="font-semibold text-gray-900">{value.name}</dt>
       <dd className="mt-1 text-gray-600">{value.description}</dd>
     </div>
   ))}
 </dl>
</div>
  )
}

export function Vacancies() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8" id="positions">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-blue-600">Careers</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Open positions</h1>
        <p className="mt-6 text-xl leading-8">
          Integrate Ashby plugin here
        </p>
        <p className="text-lg mt-10 text-slate-700">
          All qualified applicants will receive consideration for employment without regard to sex, gender identity, sexual orientation, race, color, religion, national origin, disability, protected veteran status, age, or any other characteristic protected by law.
                      </p>
      </div>
    </div>
  )
}

export function Hero() {
  return (
 <div className="relative isolate -z-10" id="hero">
 <svg
   className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
   aria-hidden="true"
 >
   <defs>
     <pattern
       id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
       width={200}
       height={200}
       x="50%"
       y={-1}
       patternUnits="userSpaceOnUse"
     >
       <path d="M.5 200V.5H200" fill="none" />
     </pattern>
   </defs>
   <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
     <path
       d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
       strokeWidth={0}
     />
   </svg>
   <rect width="100%" height="100%" strokeWidth={0} fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)" />
 </svg>
 <div
   className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
   aria-hidden="true"
 >
   <div
     className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
     style={{
       clipPath:
         'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
     }}
   />
 </div>
 <div className="overflow-hidden">
   <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
     <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
       <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
           Our mission
         </h1>
         <p className="relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
         Driving market innovation with visionary digital marketing, we shape the future of online engagement and brand prosperity.

         </p>
       </div>
       <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
         <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
           <div className="relative">
             <img
               src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
               alt=""
               className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
             />
             <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
           </div>
         </div>
         <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
           <div className="relative">
             <img
               src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
               alt=""
               className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
             />
             <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
           </div>
           <div className="relative">
             <img
               src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
               alt=""
               className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
             />
             <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
           </div>
         </div>
         <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
           <div className="relative">
             <img
               src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
               alt=""
               className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
             />
             <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
           </div>
           <div className="relative">
             <img
               src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
               alt=""
               className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
             />
             <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
  )
}

import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'

const faqs = [
  [
    {
      question: 'What should I do to prepare for interview?',
      answer:
        'As a 100% remote company, we conduct our interviews via online meeting. Please ensure you have a working camera and a reliable internet connection. Before meeting with us, review the job description and prepare examples demonstrating your previous experience in the field.',
    },
    {
      question: 'Can I work from anywhere in the world?',
      answer: 'You can work at WinTech from any location within a 4-hour time difference from London (GMT), provided that you dont require visa sponsorship for your country of residence.',
    },
   
    {
      question: 'What is your contractual arrangement for remote team members?',
      answer:
        'We use contractor agreements through Deel.com. Deel will provide you with an agreement in your language, as well as invoices and any other required documents. It is your responsibility to report and pay your taxes.',
    },
  ],
  [
    {
      question: 'How do you collaborate effectively in a remote work environment?',
      answer:
        'We utilize open-source software for regular team catch-ups and company meetings, while managing tasks in Jira and maintaining documentation in Outline. We continuously engage with Agile Coaching to optimize our operational efficiency in a remote work environment.',
    },
    {
      question:
        'What are your usual working hours?',
      answer:
        'We require all team members to be available between 9 am and 5 pm London time for cross-department meetings.',
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
      question: 'Where is most of your team based?',
      answer:
        'The majority of our team members are located in Europe, but we welcome candidates from all around the world.',
    },
    {
      question: 'What technologies do you use?',
      answer: 'We prefer using open-source software over SaaS, and we write code in the following languages: Kotlin, Flutter, and Xamarin for mobile apps, and React JS/Next.js along with Node.js for web development.',
    },
  ],
]

export function FAQ() {
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
            The Q&A below will help you better prepare for the interview.
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