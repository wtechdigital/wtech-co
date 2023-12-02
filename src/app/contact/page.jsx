'use client'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { useState, useCallback } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/20/solid'

export default function Cookie() {
  return (
    <>
      <Header page="contact" />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export function Contact() {

    const [captchaValue, setCaptchaValue] = useState(null);

    const onCaptchaChange = useCallback(token => {
        setCaptchaValue(token);
      }, []);

      
    
    const [agreed, setAgreed] = useState(false)

    const [formState, setFormState] = useState({
      status: '',
      message: '',
    })
    const [ attemptedSubmit, setAttemptedSubmit ] = useState(false);
    const [showBanner, setShowBanner] = useState(false);



    const handleSubmit = async (event) => {
        setAttemptedSubmit(true);
        event.preventDefault(); // Prevent default form submission
  
       

      // Validate form
      const form = event.target
      if (!form.checkValidity()) {
        event.stopPropagation()
        setFormState({ status: 'invalid', message: 'Please fill out all required fields correctly.' })
        return
      }

        if (!captchaValue) {
            setFormState({ status: 'invalid', message: 'Please solve the CAPTCHA to proceed.'});
            return;
        }
  
      // Prepare form data for submission
      const formData = new FormData(form);
        const object = {};
        formData.forEach((value, key) => {
        if (key !== 'g-recaptcha-response') { // Make sure that the reCAPTCHA response isn't included
            object[key] = value;
        }
        });
        const json = JSON.stringify(object);
  
      // Reset form state
      setFormState({ status: 'submitting', message: 'Please wait...' })
      setAttemptedSubmit(false);
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: json,
        })
  
        const result = await response.json()
        if (response.ok) {
          // Handle successful submission
          setFormState({ status: 'success', message: "Message received, we'll be in touch with you shortly!" })
          form.reset() // Reset the form after successful submission
          setShowBanner(true);
          setTimeout(() => {
            setShowBanner(false); // Automatically hide the banner after 5 seconds
          }, 15000);
        } else {
          // Handle errors
          setFormState({ status: 'error', message: result.message })
        }
      } catch (error) {
        // Handle network errors
        setFormState({ status: 'error', message: "Something went wrong! Please try again." })
        console.error('Form submission error', error)
      }
    }

    return (
      <div className="isolate bg-white px-6 py-10 sm:py-10 mb-10 lg:px-8">
        <div
          className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Let&apos;s discuss your business needs and how Wintech can help!
          </p>
        </div>
        <form onSubmit={handleSubmit}  noValidate className="mx-auto mt-16 max-w-xl sm:mt-20">
        <input type="hidden" name="access_key" value="aa9e6de9-23e1-4597-9b4b-7dac41eedf84" />
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name"  className="block text-sm font-semibold leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${attemptedSubmit && 'invalid:ring-red-500 invalid:border-red-500 invalid:text-red-600'}`}
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  required
                  name="email"
                  id="email"
                  autoComplete="email"
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${attemptedSubmit && 'invalid:ring-red-500 invalid:border-red-500 invalid:text-red-600'}`}
                />
              </div>
            </div>
            
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  required
                  id="message"
                  rows={4}
                  className={`block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 ${attemptedSubmit && 'invalid:ring-red-500 invalid:border-red-500 invalid:text-red-600'}`}
                  defaultValue={''}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <Switch
                  checked={agreed}
                  onChange={setAgreed}
                  className={classNames(
                    agreed ? 'bg-blue-600' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'
                  )}
                >
                  <span className="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    className={classNames(
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                    )}
                  />
                </Switch>
              </div>
              <Switch.Label className="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our{' '}
                <a href="/privacy" className="font-semibold text-blue-600">
                  privacy&nbsp;policy
                </a>
                .
              </Switch.Label>
            </Switch.Group>
          </div>
          <ReCAPTCHA className="mt-10"
              sitekey="6LeaTCQpAAAAAFYJL5OjezFTZ9TCcnvWpCZUFoBU"
              onChange={onCaptchaChange}
            />
          {showBanner && (
        <div className="pointer-events-auto fixed inset-x-0 bottom-0 z-50 sm:flex sm:justify-center sm:px-6">
          <div className="flex w-full max-w-2xl items-center justify-between gap-x-6 bg-blue-600 px-6 py-2.5 sm:rounded-xl sm:py-3 sm:pl-4 sm:pr-3.5">
            <p className="text-sm leading-6 text-white">
              <strong className="font-semibold">{formState.message}</strong>
              {/* Other elements in the banner */}
            </p>
          </div>
        </div>
      )}
          <div className="mt-10">
            <button
              disabled={!agreed || !captchaValue}
              type="submit"
              className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                agreed && captchaValue
                  ? "bg-blue-600 hover:bg-blue-500 focus-visible:outline-blue-600" 
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
        
      </div>
    )
  }
