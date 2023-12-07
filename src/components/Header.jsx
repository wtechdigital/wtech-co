'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import TweeterLogo from '@/public/tweeter_card.webp'


function MobileNavLink({ href, children }) {
  return (
    <Popover.Button as={Link} href={href} className="block w-full p-2">
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation({ page }) {
  const links = pageLinksMobile[page] || pageLinksMobile.main; // Fallback to main if page type is not defined

  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            {links.map((link, index) => (
            <MobileNavLink key={index} href={link.href}>{link.text}</MobileNavLink>
              ))}

          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}
const pageLinks = {
  main: [
    { href: "/", text: "Home" },
    { href: "/#service", text: "Service" },
    { href: "/#expertise", text: "Expertise" },
    { href: "/#faq", text: "FAQ" },
    // ... other links for main page
  ],
  careers: [
    { href: "/", text: "Home" },
    { href: "/careers#mission", text: "Mission" },
    { href: "/careers#values", text: "Values" },
    { href: "/careers#workwithus", text: "Work with Us" },
    // ... other links for careers page
  ],
  contact: [
    // ... other links for careers page
  ]
};

const pageLinksMobile = {
  main: [
    { href: "/", text: "Home" },
    { href: "/#service", text: "Service" },
    { href: "/#expertise", text: "Expertise" },
    { href: "/#faq", text: "FAQ" },
    { href: "/contact", text: "Contact Us" },
    // ... other links for main page
  ],
  careers: [
    { href: "/", text: "Home" },
    { href: "/careers#mission", text: "Mission" },
    { href: "/careers#values", text: "Values" },
    { href: "/careers#workwithus", text: "Work with Us" },
    { href: "/contact", text: "Contact Us" },
    // ... other links for careers page
  ],
  contact: [
    // ... other links for careers page
  ]
};

const pageButtons = {
  main: { href: "/careers", text: "Careers" },
  careers: { href: "/careers#positions", text: "Vacancies" },
  // Add other pages as needed
};


export function Header({ page }) {
  const links = pageLinks[page] || pageLinks.main; // Fallback to main if page type is not defined
  const buttonConfig = pageButtons[page] || pageButtons.main; // Fallback to main button config if page type is not defined
  const showButton = page === 'main' || (page !== 'careers' && page !== true);
  return (
    
    <header className="py-10 ">
      
       {page === 'main' && (
        
          <><link rel="canonical" href="https://wtech.co" />
          <title>WinTech - Digital Marketing Growth-Driven Solutions</title>
          <meta name="description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed."></meta>
          <meta property="og:title" content="WinTech - Digital Marketing Growth-Driven Solutions" />
		      <meta property="og:description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed." />
		      <meta property="og:url" content="https://wtech.co" />
          <link rel="alternate" hrefLang="en-us" href="https://wtech.co" />
          <meta name="robots" content="index,follow" />
          <meta property="og:image" content={TweeterLogo.src} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="WinTech - Digital Marketing Growth-Driven Solutions" />
          <meta name="twitter:description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed." />
          <meta name="twitter:image" content={TweeterLogo.src}  />
          <meta name="twitter:site" content="https://wtech.co" />
          </>
        
      )}
        {page === 'careers' && (
        
        <><link rel="canonical" href="https://wtech.co/careers" />
        <title>Careers at WinTech - Join the team of professionals</title>
        <meta name="description" content="We seek hardworking visionaries committed to excellence and eager to contribute to a team that sets the standard."></meta>
        <meta property="og:title" content="Careers at WinTech - Join the team of professionals" />
        <meta name="robots" content="index,follow" />
        <link rel="alternate" hrefLang="en-us" href="https://wtech.co" />
		    <meta property="og:description" content="We seek hardworking visionaries committed to excellence and eager to contribute to a team that sets the standard." />
		    <meta property="og:url" content={"https://wtech.co/careers"} />
        <meta property="og:image" content={TweeterLogo.src} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://wtech.co" />
        <meta name="twitter:title" content="Careers at WinTech - Join the team of professionals" />
        <meta name="twitter:description" content="We seek hardworking visionaries committed to excellence and eager to contribute to a team that sets the standard." />
        <meta name="twitter:image" content={TweeterLogo.src}  />
        </>
      
    )}
         {page === 'contact' && (
        
        <><link rel="canonical" href="https://wtech.co/contact" />
        <title>WinTech - Contact Us</title>
        <meta name="description" content="Let's discuss your business needs and how Wintech can help! Write us a message and we will get back to you shortly!"></meta>
        <meta property="og:title" content="WinTech - Contact Us" />
        <link rel="alternate" hrefLang="en-us" href="https://wtech.co" />
        <meta name="robots" content="index,follow" />
		    <meta property="og:description" content="Let's discuss your business needs and how Wintech can help! Write us a message and we will get back to you shortly! " />
		    <meta property="og:url" content={"https://wtech.co/contact"} />
        <meta property="og:image" content={TweeterLogo.src} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://wtech.co" />
        <meta name="twitter:title" content="WinTech - Contact Us" />
        <meta name="twitter:description" content="Let's discuss your business needs and how Wintech can help! Write us a message and we will get back to you shortly!" />
        <meta name="twitter:image" content={TweeterLogo.src}  />
        </>
      
    )}
     {page === 'terms' && (
        
        <><link rel="canonical" href="https://wtech.co/terms" />
        <title>WinTech Digital - Terms & Conditions</title>
        <meta name="description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed."></meta>
        <meta property="og:title" content="WinTech Digital - Terms & Conditions" />
        <link rel="alternate" hrefLang="en-us" href="https://wtech.co" />
        <meta name="robots" content="index,follow" />
		    <meta property="og:description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed." />
		    <meta property="og:url" content={"https://wtech.co/terms"} />
        <meta property="og:image" content={TweeterLogo.src} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://wtech.co" />
        <meta name="twitter:title" content="WinTech Digital - Terms & Conditions" />
        <meta name="twitter:description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed." />
        <meta name="twitter:image" content={TweeterLogo.src}  />
        </>
      
    )}
    {page === 'privacy' && (
        
        <><link rel="canonical" href="https://wtech.co/terms" />
        <title>WinTech Digital - Privacy Policy</title>
        <meta name="description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed."></meta>
        <meta property="og:title" content="WinTech Digital - Privacy Policy" />
        <meta name="robots" content="index,follow" />
		    <meta property="og:description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed." />
		    <meta property="og:url" content={"https://wtech.co/terms"} />
        <link rel="alternate" hrefLang="en-us" href="https://wtech.co" />
        <meta property="og:image" content={TweeterLogo.src} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://wtech.co" />
        <meta name="twitter:title" content="WinTech Digital - Privacy Policy" />
        <meta name="twitter:description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed." />
        <meta name="twitter:image" content={TweeterLogo.src}  />
        </>
      
    )}
    {page === 'cookie' && (
        
        <><link rel="canonical" href="https://wtech.co/terms" />
        <title>WinTech Digital - Cookie Policy</title>
        <meta name="description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed."></meta>
        <meta property="og:title" content="WinTech Digital - Cookie Policy" />
        <link rel="alternate" hrefLang="en-us" href="https://wtech.co" />
        <meta name="robots" content="index,follow" />
		    <meta property="og:description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed." />
		    <meta property="og:url" content={"https://wtech.co/terms"} />
        <meta property="og:image" content={TweeterLogo.src} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://wtech.co" />
        <meta name="twitter:title" content="WinTech Digital - Cookie Policy" />
        <meta name="twitter:description" content="End-to-end marketing and growth services, leveraging our expert team's innovative strategies and industry insights to help clients succeed." />
        <meta name="twitter:image" content={TweeterLogo.src}  />
        </>
      
    )}
      <Container>
      
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            
            <Link href="/" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
             {links.map((link, index) => (
            <NavLink key={index} href={link.href}>{link.text}</NavLink>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
          {showButton && (
            <Button
          href={buttonConfig.href}
          variant="outline"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" className="h-5 w-5 flex-none fill-blue-600 group-active:fill-current">
  <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd" />
  <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z" />
</svg>

          <span className="ml-3">{buttonConfig.text}</span>
        </Button>
        )}
        <div className="hidden md:block">
            <Button href="/contact" color="blue">
              <span>
                Contact Us
              </span>
            </Button>
            </div>
            <div className="-mr-1 md:hidden">
              <MobileNavigation page={page} />
            </div>
          </div>
        </nav>
      </Container>
    </header>
    
  )
}
