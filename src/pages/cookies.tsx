import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';

const Cookies: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Cookie Policy | Action Careers</title>
        <meta name="description" content="Cookie Policy for Action Careers - Learn how we use cookies on our website" />
      </Head>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">Cookie Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">What Are Cookies</h2>
                <p className="text-gray-600 leading-relaxed">
                  Cookies are small pieces of text sent by your web browser by a website you visit. A cookie file is stored in your web browser and allows the website or a third-party to recognize you and make your next visit easier and the website more useful to you.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">How We Use Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you use and access our website, we may place a number of cookie files in your web browser. We use cookies for the following purposes:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><span className="font-medium">Essential cookies:</span> These are cookies that are required for the operation of our website. They include, for example, cookies that enable you to log into secure areas of our website.</li>
                  <li><span className="font-medium">Analytical/performance cookies:</span> They allow us to recognize and count the number of visitors and to see how visitors move around our website when they are using it. This helps us to improve the way our website works, for example, by ensuring that users are finding what they are looking for easily.</li>
                  <li><span className="font-medium">Functionality cookies:</span> These are used to recognize you when you return to our website. This enables us to personalize our content for you and remember your preferences.</li>
                  <li><span className="font-medium">Targeting cookies:</span> These cookies record your visit to our website, the pages you have visited and the links you have followed. We will use this information to make our website and the advertising displayed on it more relevant to your interests.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-deep-navy mb-2">Session Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We use session cookies to operate our website. These are temporary and expire once you close your browser.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-deep-navy mb-2">Persistent Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We use persistent cookies to remember your preferences and various settings. These remain on your computer until you delete them.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-medium text-deep-navy mb-2">Third-Party Cookies</h3>
                    <p className="text-gray-600 leading-relaxed">
                      We also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                    </p>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2 mt-2">
                      <li>This site uses Google Analytics which is one of the most widespread and trusted analytics solutions on the web for helping us to understand how you use the site and ways that we can improve your experience.</li>
                      <li>We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work, social media sites including Facebook, Twitter, and LinkedIn, will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes.</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">How to Control Cookies</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Most web browsers allow some control of most cookies through the browser settings. To find out more about cookies, including how to see what cookies have been set, visit <a href="https://www.aboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-green hover:underline">www.aboutcookies.org</a>.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Changes to Our Cookie Policy</h2>
                <p className="text-gray-600 leading-relaxed">
                  We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page. You are advised to review this Cookie Policy periodically for any changes.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about our Cookie Policy, please contact us at:
                  <br /><br />
                  Email: info@action-careers.co.uk<br />
                  Phone: +44 7428 606908<br />
                  Address: Office 4505 182-184 High Street North, East Ham, London E6 2JA, United Kingdom
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Cookies; 