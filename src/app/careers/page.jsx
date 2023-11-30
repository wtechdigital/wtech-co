'use client'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-faqs.jpg'
import { Header } from '@/components/Header'
import { CalendarDaysIcon, ClockIcon, ComputerDesktopIcon, GlobeAltIcon, XMarkIcon, FolderOpenIcon } from '@heroicons/react/24/outline'
import { CheckIcon } from '@heroicons/react/20/solid'
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon, ChevronUpIcon} from '@heroicons/react/24/outline'
import React, { useState, useEffect } from 'react';


export default function Careers() {
  return (
    <>
      <Header page="careers" />
      <main>
        <Hero />
        <Mission />
        <Values />
        <WorkWithUs />
        <Jorney />
        <Vacancies />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}



const perks = [
  {
    name: 'Remote working environment',
    description:
      'Enjoy the freedom to work from anywhere, providing a better work-life balance.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Flexible working hours',
    description:
      'We promote a flexible work environment with main meetings from 11:30 am to 5:00 pm London time, giving you autonomy to set your own work hours.',
    icon: ClockIcon,
  },
  {
    name: 'Open Source Software',
    description:
      'We prefer open-source technologies for their innovative, flexible nature, and because they let us customize our infrastructure without the constraints of SaaS solutions.',
    icon: FolderOpenIcon,
  },
  {
    name: 'Company-provided MacBook',
    description:
      'Enjoy productivity with a company-provided MacBook.',
    icon: ComputerDesktopIcon,
  },
]

export function WorkWithUs() {
  return (
    <section className="w-full bg-customDarkBg2 mt-20  sm:mt-20 md:pt-[0vw]" id="workwithus" >
    
      <div className="">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-tight text-slate-900 md:text-left text-center sm:text-4xl">Work with us</p>
            <p className="mt-4 text-lg tracking-tight md:text-left text-center  text-slate-700">
            Our innovative work environment drives impactful business results as we challenge ourselves and elevate each other to achieve new heights.
            </p>
            
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-lgleading-7 text-customGrayText sm:grid-cols-2 lg:gap-y-16">
          {perks.map((feature) => (
              <div key={feature.name}>
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex ">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
  )
}







export function Hero() {
  return (
    <div className="relative isolate w-full h-screen px-6 pt-14 lg:px-8">
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
        <div className="mx-auto max-w-3xl py-16 mb-16">
          <div className="text-center">
            <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
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
        </span>{' '} at WinTech
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Join our mission to excel and lead in our industry. We seek hardworking visionaries committed to excellence and eager to contribute to a team that sets the standard.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#mission"
                className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600"
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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Work with us
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-600">
            Our innovative work environment drives impactful business results as we challenge ourselves and elevate each other to achieve new heights.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-0.5 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-gray-400/5 p-8">
                <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
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




export  function Mission() {
  return (
    <div className="relative isolate  -z-10" id="mission">
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
            <div className="mx-auto max-w-7xl px-6 pb-0 pt-0 sm:pt-0 lg:px-8 lg:pt-0">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h2 className="font-display text-3xl md:text-left text-center  tracking-tight text-slate-900 sm:text-4xl">
                  Our mission
                  </h2>
                  <p className="mt-4 text-lg tracking-tight md:text-left text-center  text-slate-700">
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


const steps = [
  {
    name: 'Recruitment Screen',
    description:
      'Upon acceptance of your application, our recruiting team will be in touch with job specifics, guide you through the following stages, and offer you a chance to highlight your previous experience.',
    date: 'Step 1',
  },
  {
    name: 'Technical interview',
    description:
      "In this round, we'll focus more on technical aspects, so please be ready to discuss the specifics and showcase your expertise!",
    date: 'Step 2',
  },
  {
    name: 'Management Interview',
    description:
      "You will engage in a discussion with your potential future manager. This conversation is an opportunity for you to gain insights into our company culture and values, ensuring that we are the perfect match for your career aspirations.",
    date: 'Step 3',
  },
  {
    name: 'Offer stage',
    description:
      "If everything proceeds smoothly, you can expect to receive an offer from us soon. Get ready to join our team and prepare for an exciting welcome aboard!",
    date: 'Step 4',
  },
]

export  function Jorney() {
  return (

    
    <div className="relative isolate overflow-hidden  py-0 mt-20 sm:mb-10 sm:mt-10 sm:py-20">
      
      <div className=" ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="font-display text-3xl mb-10 tracking-tight text-black sm:text-4xl">
            
            Our recruitment journey
            </h2>
            
          </div>
        <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {steps.map((item) => (
            <div key={item.name}>
              <time
                dateTime={item.dateTime}
                className="flex items-center text-sm font-semibold leading-6 text-blue-600"
              >
                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                  <circle cx={2} cy={2} r={2} fill="currentColor" />
                </svg>
                {item.date}
                <div
                  className="absolute -ml-2 h-px w-screen -translate-x-full bg-blue-600 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                  aria-hidden="true"
                />
              </time>
              <p className="mt-6 text-lg font-semibold">{item.name}</p>
              <p className="mt-1 text-m text-slate-700">{item.description}</p>
            </div>
          ))}
          </dl>
          
        </div>
      </div>
    </div>
    </div>
  )
}


const features = [
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
  <section className="w-full bg-customDarkBg2 mt-10 mb-10 sm:mt-20 sm:mb-20 md:pt-[0vw]" id="values" >
    
      <div className="mt-0 mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="font-display text-3xl tracking-tight text-slate-900 md:text-left text-center  sm:text-4xl">Our values</p>
            <p className="mt-4 text-lg tracking-tight md:text-left text-center  text-slate-700">
            We are a group of like-minded people who share the same core values.
            </p>
            
          </div>
          <dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-10 text-lgleading-7 text-customGrayText sm:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-9">
                <dt className="font-semibold text-black">
                  <CheckIcon className="absolute left-0 top-1 h-5 w-5 text-blue-600" aria-hidden="true" />
                  <p className='text-lg'>{feature.name}</p>
                </dt>
                <dd className="mt-2 text-lg text-slate-700">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  </section>
)
}

async function fetchJobsData() {
  const url = 'https://api.ashbyhq.com/posting-api/job-board/wintech';
  
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Failed to fetch job data');
  }
 
  return response.json();
}

function groupByDepartment(jobs) {
  return jobs.reduce((acc, job) => {
    const { department } = job;
    if (!acc[department]) {
      acc[department] = [];
    }
    acc[department].push(job);
    return acc;
  }, {});
}

export function Vacancies() {
  const [jobsByDepartment, setJobsByDepartment] = useState({});

  useEffect(() => {
    async function loadData() {
      try {
        const jobData = await fetchJobsData();
        const groupedJobs = groupByDepartment(jobData.jobs);
        setJobsByDepartment(groupedJobs);
      } catch (error) {
        console.error('Error loading job data:', error);
        // Handle the error state as appropriate here
      }
    }

    loadData();
  }, []);
  return (
    <section className="w-full bg-customDarkBg2  mb-0  sm:mb-20 md:pt-[0vw]" id="positions" >
     <div className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-20 sm:py-20 lg:px-8 lg:py-10">
        <div className="mx-auto max-w-4xl ">
          <h2 className="font-display text-3xl  text-center  tracking-tight text-slate-900 sm:text-4xl">
          <span className="relative whitespace-nowrap text-blue-600">
          <svg
            aria-hidden="true"
            viewBox="0 0 318 42"
            className="absolute left-0 top-2/3 h-[0.58em] w-full fill-blue-300/70"
            preserveAspectRatio="none"
          >
            <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
          </svg>
          <span className="relative">
            Open Positions
            </span>
            </span>
            </h2>
          <dl className="mt-10 space-y-6 ">
              {Object.entries(jobsByDepartment).map(([department, jobs]) => (
                  <Disclosure as="div" key={department} className="mt-4 first:mt-0">
                  {({ open }) => (
                    <>
                      <dt className={`${open ? 'bg-gray-50' : 'bg-gray-50'} rounded-lg p-5`}>
                        <Disclosure.Button className="flex w-full items-center justify-between text-left space-x-2">
                          <span className={`font-display text-2xl text-center tracking-tight sm:text-2xl leading-7 text-gray-900 ${open ? 'border-b-2 border-blue-300 pb-1' : ''}`}>{department}</span>
                          <span className="flex-shrink-0 flex h-7 items-center">
                            {open ? (
                              <ChevronUpIcon className="h-6 w-6" aria-hidden="true" />
                            ) : (
                              <ChevronDownIcon className="h-6 w-6" aria-hidden="true" />
                            )}
                          </span>
                        </Disclosure.Button>
                        <Disclosure.Panel className={`transition-[max-height] duration-500 ease-in-out overflow-hidden ${open ? 'max-h-[2000px]' : 'max-h-0'}`}>
                          {jobs.map((job) => (
                            <div key={job.title} className="flex justify-between items-center py-4">
                              <div>
                                <div className="font-bold">{job.title}</div>
                                <div className="text-sm text-gray-600">{job.employmentType} • {job.address.postalAddress.addressCountry} • {job.location}  </div>
                              </div>
                              <a
                                href={job.jobUrl}
                                className="rounded-md bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                target="_blank" rel="noopener noreferrer">
                                Apply
                              </a>
                            </div>
                          ))}
                        </Disclosure.Panel>
                        </dt>
                      </>
                    )}
                  </Disclosure>
                ))}
          </dl>
          <p className="mt-4 text-sm tracking-tight md:text-left text-left  text-slate-700">
            All qualified applicants will receive consideration for employment without regard to sex, gender identity, sexual orientation, race, color, religion, national origin, disability, protected veteran status, age, or any other characteristic protected by law.
            </p>
        </div>
        
      </div>
    </div>
    </section>
  )
}



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