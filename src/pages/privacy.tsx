import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';

const Privacy: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Privacy Policy | Action Staffing</title>
        <meta name="description" content="Privacy Policy for Action Staffing - Learn how we protect your personal information" />
      </Head>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">Privacy Policy</h1>
            <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  At Action Staffing, we respect your privacy and are committed to protecting your personal data. This privacy policy will inform you how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">The Data We Collect About You</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><span className="font-medium">Identity Data</span> includes first name, last name, username or similar identifier, title, date of birth and gender.</li>
                  <li><span className="font-medium">Contact Data</span> includes email address, telephone numbers and postal address.</li>
                  <li><span className="font-medium">Professional Data</span> includes your CV, work history, education, skills, and other information related to your professional profile.</li>
                  <li><span className="font-medium">Technical Data</span> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
                  <li><span className="font-medium">Usage Data</span> includes information about how you use our website, products and services.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">How We Use Your Personal Data</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>To provide you with job matching and recruitment services.</li>
                  <li>To register you as a new candidate or client.</li>
                  <li>To manage our relationship with you.</li>
                  <li>To enable you to participate in features of our service.</li>
                  <li>To administer and protect our business and this website.</li>
                  <li>To deliver relevant website content and advertisements to you.</li>
                  <li>To use data analytics to improve our website, products/services, marketing, customer relationships and experiences.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Data Security</h2>
                <p className="text-gray-600 leading-relaxed">
                  We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Your Legal Rights</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-4">
                  If you wish to exercise any of the rights set out above, please contact us at info@actionstaffing.co.uk.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                  <br /><br />
                  Email: info@actionstaffing.co.uk<br />
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

export default Privacy; 