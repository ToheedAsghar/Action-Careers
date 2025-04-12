import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import { NextPage } from 'next';
import Head from 'next/head';

const Terms: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Terms of Service | Action Staffing</title>
        <meta name="description" content="Terms of Service for Action Staffing - Understanding our conditions of use" />
      </Head>
      <div className="bg-gray-50 py-16 md:py-24">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-6 md:p-10"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-deep-navy mb-6">Terms of Service</h1>
            <p className="text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Introduction</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms and conditions outline the rules and regulations for the use of Action Staffing's website and services. By accessing this website and using our services, we assume you accept these terms and conditions in full. Do not continue to use Action Staffing's website and services if you do not accept all of the terms and conditions stated on this page.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Definitions</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li><span className="font-medium">"Client," "You," and "Your"</span> refers to you, the person accessing this website and accepting the Company's terms and conditions.</li>
                  <li><span className="font-medium">"The Company," "Ourselves," "We," "Our," and "Us,"</span> refers to Action Staffing.</li>
                  <li><span className="font-medium">"Party," "Parties," or "Us,"</span> refers to both the Client and ourselves, or either the Client or ourselves.</li>
                  <li><span className="font-medium">"Services"</span> refers to the recruitment and job placement services provided by Action Staffing.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Website Use</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  The content of the pages of this website is for your general information and use only. It is subject to change without notice.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered on this website for any particular purpose.</li>
                  <li>You acknowledge that such information and materials may contain inaccuracies or errors and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.</li>
                  <li>Your use of any information or materials on this website is entirely at your own risk, for which we shall not be liable.</li>
                  <li>This website contains material which is owned by or licensed to us. This material includes, but is not limited to, the design, layout, look, appearance and graphics. Reproduction is prohibited other than in accordance with the copyright notice.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Service Terms</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  By using our recruitment services, you agree to the following terms:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>All information provided by you for your profile must be accurate, complete, and not misleading.</li>
                  <li>Action Staffing acts as an intermediary between job seekers and employers, and does not guarantee employment.</li>
                  <li>We reserve the right to refuse service to anyone for any reason at any time.</li>
                  <li>We may use your submitted information to match you with potential employers and to contact you regarding potential job opportunities.</li>
                  <li>Employers are solely responsible for their hiring decisions and the terms of any employment offers.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">User Conduct</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When using our services, you agree not to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Use our services for any unlawful purpose or in violation of these Terms.</li>
                  <li>Post or submit any inaccurate, false, or incomplete information.</li>
                  <li>Impersonate any person or entity or misrepresent your affiliation with a person or entity.</li>
                  <li>Interfere with or disrupt the services or servers or networks connected to the services.</li>
                  <li>Attempt to gain unauthorized access to our systems or user accounts.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  To the maximum extent permitted by applicable law, Action Staffing shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the services.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These terms shall be governed and construed in accordance with the laws of the United Kingdom, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these terms will not be considered a waiver of those rights.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Contact Us</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
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

export default Terms; 