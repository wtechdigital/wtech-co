import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function Privacy() {
  return (
    <>
      <Header page="privacy"  />
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
        <h1 className="mt-2 text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl">Privacy Policy</h1>
        <p className="mt-6">WinTech values your privacy and the protection of your personal data. This privacy policy describes what information we collect from you, how we collect it, how we use it, how we obtain your consent, how long we keep it in our databases and, if necessary, with whom we share it.</p>
        <p className="mt-6">By using the website and services, you are accepting the practices described in this privacy policy. Use of the website and services is also subject to our terms and conditions. In this privacy policy, the words &quot;website&quot; refers to the WinTech website, &quot;we&quot;, &quot;us&quot;, &quot;our&quot; and &quot;WinTech&quot; refers to WinTech and &quot;you&quot; &quot;client&quot; and &quot;user&quot; refers to you, the WinTech user or client.</p>
        <p className="mt-6">
        This privacy policy may change from time to time. Your continued use of the website and services after we make changes is deemed to be acceptance of those changes, so please check the policy periodically for updates. This Privacy Policy has been prepared and is maintained in accordance with all applicable national and international laws and regulations and specifically with the California Consumer Privacy Act (CCPA) and the General Data Protection Regulation (GDPR).
        </p>
        <div class="mt-6">
          <h2 class="font-bold text-lg">1. GENERAL INFORMATION</h2>
            <p className="mt-6">
            The personal data of the users that are collected and processed through the website: https://wtech.co
          </p>
          <p className="mt-6">
          Will be under responsibility and in charge of:
          </p>
          <p className="mt-6">WinTech</p>
          <p className="mt-6">Contact us at https://wtech.co</p>
          </div>

          <div class="mt-6">
          <h2 class="font-bold text-lg">2. TYPES OF INFORMATION GATHERED</h2>
          <p className="mt-6">
              The information we collect from our clients/users helps us to personalize and continually improve your website experience and provide our services. Here are the types of information we gather:
          </p>

          <p className="mt-6">
              <strong>Information You Give Us.</strong> You provide information when you use our website, contract our services, provide information through our services, apply for our job openings (careers) and/or communicate with us through our contact information or our contact forms. As a result of those actions, you might supply us with the following information:
          </p>
          <ul className="list-disc pl-5 mt-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Any additional information relating to you that you provide to us directly or indirectly through our website and services.</li>
          </ul>
          <p className="mt-6">
              WinTech will not collect any personally identifiable information about you, unless you provide it.
          </p>

          <p className="mt-6">
              <strong>Information Collected Automatically:</strong> By accessing and using the website you automatically provide us with the following information:
          </p>
          <ul className="list-disc pl-5 mt-2">
              <li>Your IP address</li>
              <li>Referring URLs</li>
          </ul>

          <p className="mt-6">
              If you access the website through a mobile phone, we will collect the following information:
          </p>
          <ul className="list-disc pl-5 mt-2">
              <li>Mobile device ID</li>
              <li>IP address</li>
          </ul>

          <p className="mt-6">
              <strong>GOOGLE Analytics.</strong> We use Google Analytics provided by Google, Inc., USA (&quot;Google&quot;). These tool and technologies collect and analyze certain types of information, including IP addresses, device and software identifiers, referring and exit URLs, feature use metrics and statistics, usage history, media access control address (MAC Address), mobile unique device identifiers, and other similar information via the use of cookies. The information generated by Google Analytics (including your IP address) may be transmitted to and stored by Google on servers in the United States. We use the GOOGLE Analytics collection of data to enhance the website and improve our service.
          </p>
          <p className="mt-6">
              Please consult Google&apos;s privacy policy here:
          </p>
          <ul className="list-disc pl-5 mt-2">
              <li><a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800">https://policies.google.com/privacy</a></li>
          </ul>

          <p className="mt-6">
              <strong>Social Media:</strong> On our website you will find links and functions linked to different social networks, in which you can share your information. It is advisable to consult the privacy policy and data protection of each social network used on our website.
          </p>
          <ul className="list-disc pl-5 mt-2">
              <li><a href="https://www.linkedin.com/legal/privacy-policy" className="text-blue-600 hover:text-blue-800">Linkedin: https://www.linkedin.com/legal/privacy-policy</a></li>
          </ul>

          <p className="mt-6">
              We may access some personal information about the user, such as name and email address, when the user or any third party communicates with us through our contact information. Personal information provided through our contact information is not stored on any WinTech server and will be stored on the respective server of our email service.
          </p>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">3. HOW LONG WE KEEP YOUR DATA</h2>
          <p className="mt-6">
          Personal data provided by users through the website and services will be retained for the time necessary to provide the services, conduct our job interviews or until the user or client requests the deletion of their data. WinTech may be allowed to retain personal data for a longer period whenever the user has given consent to such processing, as long as such consent is not withdrawn. Furthermore, WinTech may be obliged to retain personal data for a longer period whenever required to do so for the performance of a legal obligation or upon order of an authority. Once the retention period expires, personal data shall be deleted. Therefore, the right to access, the right to erasure, the right to rectification and the right to data portability cannot be enforced after expiration of the retention period.
          </p>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">4. HOW WE USE YOUR INFORMATION. </h2>
          <p className="mt-6">
              In general, we use the information we collect primarily to provide, maintain, protect and improve our current website and services. We use personal information collected through our website as described below:</p>

                <ul className="list-disc pl-5 space-y-2">
                  <li>Identify you as a user in our system.</li>

                  <li>Provide the services.</li>

                  <li>Send invoices for services to clients.</li>

                  <li>Apply to our available job vacancies.</li>

                  <li>Conduct job interviews.</li>

                  <li>Understand and enhance your experience using our website and services.</li>

                  <li>Respond to your comments or questions through our support team.</li>

                  <li>Send you related information, including confirmations, invoices, technical notices, updates, security alerts, and support and administrative messages.</li>

                  <li>Communicate with you about upcoming events, offers and news about services offered by WinTech and our selected partners.</li>

                  <li>Marketing purposes of WinTech.</li>

                  <li>Link or combine your information with other information we get from third parties to help understand your needs and provide you with better service.</li>

                  <li>Protect, investigate, and deter against fraudulent, unauthorized, or illegal activity.</li>
                </ul>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">5. HOW DO YOU GET MY CONSENT?</h2>
          <p className="mt-6">
          By engaging our services, providing information through our services, applying for our job openings, contacting us through our contact forms or our contact information, and providing personal information to us so that we may contact you, you consent to our collection, storage and use of your information on the terms contained in this privacy policy. You may withdraw your consent by sending us your request via the contact information or the contact page.
          </p>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">6. HOW WE SHARE YOUR INFORMATION</h2>
          <p className="mt-6">
            The personal information of our clients and users is an important and fundamental part of our business. Under no circumstances will we sell or share information with third parties that has not been previously authorized by the user, client or owner of the personal data. We share user and client information only and exclusively as described below.
          </p>

          <p className="mt-6">
            <strong>Third-Party Service Providers.</strong> We use third-party services to perform functions on our website. Examples include: creating and hosting the website, sending emails, analyzing data (Google Analytics), conducting job interviews (Google Meets), creating ads, providing marketing services and providing search results.
          </p>
          <ul>
            <li>These third-party services and tools may have access to personal information needed to perform their functions, but may not use that information for other purposes.</li>
            <li>Information shared with these third-party services will be treated and stored in accordance with their respective privacy policies and our privacy policy. Please refer to the privacy policy of these third-party services.</li>
          </ul>

          <p className="mt-6">
            <strong>Email marketing:</strong> We use the information provided by users to conduct marketing campaigns and send relevant information to our users. By providing us with your email address, you authorize us to use your information for email marketing. We will use third party services to conduct email marketing, so we may share certain information with some of these third parties for the sole and exclusive purpose of sending emails through email marketing and in accordance with our privacy policy.
          </p>

          <p className="mt-6">
            <strong>Business Transfers.</strong> In the event that WinTech creates, merges with, or is acquired by another entity or company, your information will likely be transferred. WinTech will send you an email or post a prominent notice on our platform before your information becomes subject to another privacy policy and the transfer and handling of your private information will comply with all applicable requirements.
          </p>

          <p className="mt-6">
            <strong>Protection of WinTech and others.</strong> We release personal information when we believe release is appropriate to comply with the law, enforce or apply our Terms and conditions and other agreements, or protect the rights, property, or safety of WinTech, our users or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.
          </p>

          <p className="mt-6">
            <strong>With Your Consent.</strong> Other than as set out above, you will receive notice when personally identifiable information about you might go to third parties, and you will have an opportunity to choose not to share the information.
          </p>

          <p className="mt-6">
            <strong>Anonymous Information.</strong> WinTech uses the anonymous browsing information collected automatically by our servers primarily to help us administer and improve the Website. We may also use aggregated anonymous information to provide information about the Website to potential business partners and other unaffiliated entities. This information is not personally identifiable.
          </p>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">7. PROTECTING YOUR INFORMATION</h2>
          <p className="mt-6">
          We work to protect the security of your information during transmission by using Secure Sockets Layer (SSL) software, which encrypts information you provide through the website. We restrict authorized access to your personal information to those persons who have a legitimate purpose to know that information and to those persons you have authorized to have access to that information. WinTech follows generally accepted industry standards to protect the personal information submitted to us, both during transmission and once WinTech receives it. No method of transmission over the Internet, or method of electronic storage, is 100% secure. Therefore, while WinTech strives to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security. We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so.
          </p>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">8. RIGHTS</h2>
          <p className="mt-6">The personal information of our clients and users is an important and fundamental part of our business. Under no circumstances will we sell or share information with third parties that has not been previously authorized by the user, client or owner of the personal data. We share user and client information only and exclusively as described below.</p>

            <p className="mt-6">Third-Party Service Providers. We use third-party services to perform functions on our website. Examples include: creating and hosting the website, sending emails, analyzing data (Google Analytics), conducting job interviews (Google Meets), creating ads, providing marketing services and providing search results.</p>

            <ul>
              <li className="mt-6">These third-party services and tools may have access to personal information needed to perform their functions, but may not use that information for other purposes.</li>
              <li className="mt-6">Information shared with these third-party services will be treated and stored in accordance with their respective privacy policies and our privacy policy. Please refer to the privacy policy of these third-party services.</li>
            </ul>

            <p className="mt-6">Email marketing: We use the information provided by users to conduct marketing campaigns and send relevant information to our users. By providing us with your email address, you authorize us to use your information for email marketing. We will use third party services to conduct email marketing, so we may share certain information with some of these third parties for the sole and exclusive purpose of sending emails through email marketing and in accordance with our privacy policy.</p>

            <p className="mt-6">Business Transfers. In the event that WinTech creates, merges with, or is acquired by another entity or company, your information will likely be transferred. WinTech will send you an email or post a prominent notice on our platform before your information becomes subject to another privacy policy and the transfer and handling of your private information will comply with all applicable requirements.</p>

            <p className="mt-6">Protection of WinTech and others. We release personal information when we believe release is appropriate to comply with the law, enforce or apply our Terms and conditions and other agreements, or protect the rights, property, or safety of WinTech, our users or others. This includes exchanging information with other companies and organizations for fraud protection and credit risk reduction.</p>

            <p className="mt-6">With Your Consent. Other than as set out above, you will receive notice when personally identifiable information about you might go to third parties, and you will have an opportunity to choose not to share the information.</p>

            <p className="mt-6">Anonymous Information.  WinTech uses the anonymous browsing information collected automatically by our servers primarily to help us administer and improve the Website. We may also use aggregated anonymous information to provide information about the Website to potential business partners and other unaffiliated entities. This information is not personally identifiable.</p>
          
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">9. CHILDREN&apos;S ONLINE PRIVACY PROTECTION</h2>
          <p className="mt-6">
          We comply with national and international regulations regarding the protection of children&apos;s personal information. We do not collect information from children under the age of 13. If we learn that a child under 13 has provided us with personal information, we will take immediate steps to delete that information.
          </p>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">10. THIRD PARTIES</h2>
          <p className="mt-6">
          Except as otherwise expressly included in this privacy policy, this document addresses only the use and disclosure of information WinTech collects from you. If you disclose your information to others, whether other users or suppliers on WinTech, different rules may apply to their use or disclosure of the information you disclose to them. WinTech does not control the privacy policies of third parties, and you are subject to the privacy policies of those third parties where applicable. WinTech is not responsible for the privacy or security practices of other websites on the Internet, even those linked to or from the WinTech website. WinTech encourages you to ask questions before you disclose your personal information to others.
          </p>
          </div>
          <div class="mt-6">
          <h2 class="font-bold text-lg">11. CONTACT US </h2>
          <p className="mt-6">
          If you have questions or concerns about this privacy policy and the handling and security of your data, please contact us through our contact forms or by using the contact information below:
          </p>
          <p className="mt-6">
          Contact form at https://wtech.co
          </p>
          </div>
        </div>
    </div>
  )
}
