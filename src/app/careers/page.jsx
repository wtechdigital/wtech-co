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
        <Values />
        <Work />
        <Vacancies />
        <Mission />
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
                href="#values"
                className="rounded-md bg-blue-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Learn more <span aria-hidden="true">→</span>
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
 <div className="mx-auto mt-32 pt-32 max-w-7xl px-6 sm:mt-40 lg:px-32 mb-32" id="values">
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

export function Mission() {
  return (
 <div className="mt-32 overflow-hidden sm:mt-40 pb-32">
 <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
   <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
     <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
       <p className="mt-6 text-xl leading-8 text-gray-600">
       Driving market innovation with visionary digital marketing, we shape the future of online engagement and brand prosperity.
       </p>
     </div>
     <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
       <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
         <img
           src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
           alt=""
           className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
         />
       </div>
       <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
         <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
           <img
             src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
             alt=""
             className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
           />
         </div>
         <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
           <img
             src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
             alt=""
             className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
           />
         </div>
         <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
           <img
             src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
             alt=""
             className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
           />
         </div>
       </div>
     </div>
   </div>
 </div>
</div>
  )
}


export function Vacancies() {
  return (
    <div className="bg-white px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <p className="text-base font-semibold leading-7 text-blue-600">Careers</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Open positions</h1>
        <p className="mt-6 text-xl leading-8">
          Integrate Ashby plugin here
        </p>
      </div>
    </div>
  )
}
