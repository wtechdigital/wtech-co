import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Cookie() {
  return (
    <>
      <Header />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  )
}


export function Content() {
  return (
    <div className="bg-white px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-4xl text-base leading-7 text-black">
        <h1 className="mt-2 text-3xl font-bold text-center tracking-tight text-gray-900 sm:text-4xl">Cookie Policy</h1>
        <p className="mt-6">This cookie policy explains how and why cookies and other similar technologies may be stored on and accessed from your device when you use or visit: https://wtech.co</p>
        <p className="mt-6">(Hereinafter referred to as “WinTech”).</p>
        <p className="mt-6">The information collected through cookies will be under responsibility and in charge of:</p>
        <p className="mt-6">WinTech.</p>
        <p className="mt-6">Contact us at https://wtech.co</p>
        <p className="mt-6">This cookie policy should be read together with our privacy policy and our terms and conditions.</p>
        <p className="mt-6">By using the website, you accept the use of cookies by WinTech, in the terms contained in this policy.</p>
        <div class="mt-6">
          <h2 class="font-bold text-lg">1. GENERAL INFORMATION</h2>
          <p className="mt-6">
              If you do not want cookies to be dropped on your device, you can adjust the setting of your Internet browser to reject the setting of all or some cookies and to alert you when a cookie is placed on your device. For further information about how to do so, please refer to your browser ‘help’, ‘tool’, or ‘edit’ section.
            </p>
            <p className="mt-6">
              Please note that if you use your browser settings to block all cookies, including strictly necessary cookies, you may not be able to access or use all or parts of the functionalities of WinTech.
            </p>
            <p className="mt-6">
              If you want to remove previously-stored cookies, you can manually delete the cookies at any time. However, this will not prevent WinTech from placing further cookies on your device unless and until you adjust your Internet browser setting as described above.
            </p>

            <ul className="list-disc pl-5 mt-6">
              <li>
                We provide the links for the management and blocking of cookies depending on the browser you use:
                <ul className="list-disc pl-5 mt-4">
                  <li>Microsoft Edge: <a href="https://support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?ui=en-us&rs=en-us&ad=us" className="text-blue-600 hover:text-blue-800">https://support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge</a></li>
                  <li>Firefox: <a href="https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox" className="text-blue-600 hover:text-blue-800">https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox</a></li>
                  <li>Chrome: <a href="https://support.google.com/chrome/answer/95647?hl=en" className="text-blue-600 hover:text-blue-800">https://support.google.com/chrome/answer/95647</a></li>
                  <li>Safari: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-blue-600 hover:text-blue-800">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></li>
                  <li>Opera: <a href="https://help.opera.com/en/latest/web-preferences/" className="text-blue-600 hover:text-blue-800">https://help.opera.com/en/latest/web-preferences/</a></li>
                </ul>
              </li>
              <li>
                In cases where you access the website through an iOS or Android mobile device, please follow the instructions below to delete or block cookies on your device:
                <ul className="list-disc pl-5 mt-4">
                  <li>Android: <a href="https://support.google.com/answer/32050" className="text-blue-600 hover:text-blue-800">https://support.google.com/answer/32050</a></li>
                  <li>iOS: <a href="https://support.apple.com/en-us/HT201265" className="text-blue-600 hover:text-blue-800">https://support.apple.com/en-us/HT201265</a></li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="mt-6">
          <h2 class="font-bold text-lg">3. COOKIES WE USE</h2>
          <p className="mt-6">We use the following cookies on our website:</p>

            <ul>
              <li>
                <p>Cookie: swipepages_user</p>
                <p>Domain: www.wtech.co</p>
                <p>Duration: session</p>
                <p>Type: Other</p>
              </li>
              <li className="mt-6">
                <p>Cookie: 645e330a9b2ca90010853851</p>
                <p>Domain: www.wtech.co</p>
                <p>Duration: session</p>
                <p>Type: Other</p>
              </li>
            </ul>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">4. PURPOSES OF OUR COOKIES</h2>
          <p className="mt-6">
              Strictly Necessary: These cookies are essential for WinTech to perform its basic functions.
            </p>
            <p className="mt-6">
              Security: We use these cookies to help identify and prevent potential security risks.
            </p>
            <p className="mt-6">
              Analytics and Performance: Performance cookies collect information on how users interact with our website, including what pages are visited most, as well as other analytical data. We use these details to improve how our website functions and to understand how users interact with them.
            </p>
            <p className="mt-6">
              GOOGLE Analytics. We use Google Analytics provided by Google, Inc., USA (“Google”). These tools and technologies collect and analyze certain types of information, including IP addresses, device and software identifiers, referring and exit URLs, feature use metrics and statistics, usage and purchase history, media access control address (MAC Address), mobile unique device identifiers, and other similar information via the use of cookies. The information generated by Google Analytics (including your IP address) may be transmitted to and stored by Google on servers in the United States. We use the GOOGLE Analytics collection of data to enhance the website and improve our service.
            </p>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">5. CONTACT US</h2>
            <p className="mt-6">
            If you have questions or concerns about this cookie policy and the handling and security of your data, please contact us through our contact forms or by using the contact information below:
          </p>
          <p className="mt-6">
            Contact form at https://wtech.co
          </p>
          </div>

        </div>
    </div>
  )
}
