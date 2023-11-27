'use client'
import { CheckIcon } from '@heroicons/react/20/solid'


const features = [
  {
    name: 'Search Engine Optimization (SEO)',
    description: 'Leveraging data-driven SEO strategies to enhance online visibility and attract organic traffic for lead generation.',
  },
  { name: 'Search Engine Marketing (SEM)', description: 'Utilizing targeted, cost-effective, and conversion-focused paid advertising campaigns to maximize reach and ROI.' },
  {
    name: 'Display Advertising',
    description: 'Employing visually engaging and strategically placed display ads to capture audience attention and optimize performance.',
  },
  {
    name: 'Conversion Rate Optimization (CRO)',
    description: 'Optimizing website user experience to boost conversions through comprehensive CRO services.',
  },
  { name: 'Content Marketing', description: 'Crafting compelling, high-quality content that resonates with the target market, supports SEO objectives, and fosters audience engagement and growth.' },
  { name: 'Web Design and Development', description: 'Designing visually appealing, user-friendly, and responsive websites to effectively represent the brand and drive business growth.' },
]

export function Solutions() {
  return (
  <section className="w-full bg-customDarkBg2 mt-10 mb-10 sm:mt-20 sm:mb-20 md:pt-[0vw]" id="solutions" >
    
      <div className="mt-0 mb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sm:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          <div>
            <p className="mt-2 text-3xl font-bold tracking-tight text-black sm:text-4xl">Comprehensive Digital Marketing Expertise</p>
            <p className="mt-6 leading-7 text-lg text-slate-700">
            Elevate your brand with our digital marketing mastery SEO, SEM, display advertising, and conversion-focused web design to drive traffic, engagement, and growth.
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
