'use client';
import React, { useState } from 'react';
import { 
  Shield, 
  Lock, 
  FileText,
  Send
} from 'lucide-react';
import { Footer, Navbar } from '../../components';

const LegalPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#13131A] overflow-hidden">
      {/* Gradient Backgrounds */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-l from-violet-600/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-cyan-600/30 to-transparent rounded-full blur-3xl" />
      
      <Navbar />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="space-y-16">
          {/* Terms & Conditions */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-violet-600 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <FileText className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Terms & Conditions</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/60">Last updated: November 11, 2024</p>
              <div className="space-y-6 text-white/80">
                <p>Welcome to SimplyBudget. Please carefully review these Terms of Use before accessing or using our SimplyBudget application, website, or other related services (collectively referred to as "SimplyBudget" or the "Service"). By accessing or using SimplyBudget, you agree to these Terms of Use and our Privacy Policy. If you do not agree with these terms, please refrain from using the Service.</p>

                <h3 className="text-xl font-medium text-white/90">Introduction to SimplyBudget</h3>
                <p>SimplyBudget is a software application designed to help users track and manage their finances through budgeting tools, expense categorization, and financial insights. SimplyBudget is not a bank, financial institution, or credit union and does not provide financial, banking, or investment services. We do not issue credit, accept deposits, or offer loans or any other financial products. SimplyBudget is solely intended to provide tools that assist users in making personal financial decisions. It is not a substitute for financial advice from a licensed advisor.</p>

                <h3 className="text-xl font-medium text-white/90">Eligibility</h3>
                <p>To use SimplyBudget, you must be at least 13 years old. By accessing or using SimplyBudget, you confirm that you meet this age requirement and that any information you provide is accurate, truthful, and current.</p>

                <h3 className="text-xl font-medium text-white/90">Account Security</h3>
                <p>You are responsible for safeguarding your SimplyBudget account credentials. If you suspect any unauthorized use of your account or other security breaches, you agree to notify us immediately. SimplyBudget is not responsible for any losses or damages resulting from your failure to protect your account information.</p>

                <h3 className="text-xl font-medium text-white/90">Data Security and Privacy</h3>
                <p>SimplyBudget values and respects your privacy. We take appropriate steps to protect your personal data, as outlined in our Privacy Policy. SimplyBudget may allow you to link to external financial accounts through third-party services, such as Plaid. All sensitive data, including credit or debit card details, are stored securely on your device or through Plaid's secure servers, which meet industry-standard security protocols. SimplyBudget does not store any card information on its own servers.</p>

                <h3 className="text-xl font-medium text-white/90">User Responsibilities</h3>
                <p>SimplyBudget provides budgeting and expense-tracking tools to assist users with personal finance management. Users are solely responsible for any financial decisions or actions taken based on the insights provided by SimplyBudget. SimplyBudget is not liable for any losses or damages arising from financial decisions made by users based on information provided within the app.</p>

                <h3 className="text-xl font-medium text-white/90">Acceptable Use</h3>
                <p>You agree to use SimplyBudget only for lawful purposes and to comply with these Terms of Use. You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use the Service in a manner that violates any applicable laws or regulations.</li>
                  <li>Attempt to defraud or misrepresent yourself in any way while using the Service.</li>
                  <li>Interfere with the normal operation of SimplyBudget or another user's experience.</li>
                  <li>Access or attempt to access any part of the Service that you are not authorized to access.</li>
                  <li>Use any automated system, including bots or spiders, to interact with SimplyBudget without prior authorization.</li>
                </ul>

                <h3 className="text-xl font-medium text-white/90">Third-Party Integrations</h3>
                <p>SimplyBudget integrates with third-party services, such as Plaid, to offer users additional functionalities, such as connecting financial accounts. SimplyBudget does not control third-party services and is not responsible for their actions, policies, or data security practices. By using these third-party services, you also agree to abide by their respective terms and policies.</p>

                <h3 className="text-xl font-medium text-white/90">No Professional Financial Advice</h3>
                <p>SimplyBudget is designed to assist users with personal financial management and budgeting; it does not provide professional financial, tax, or investment advice. Users are encouraged to consult a qualified financial advisor for guidance tailored to their individual financial needs and circumstances. SimplyBudget is not liable for any reliance placed on the Service as a source of financial or legal advice.</p>

                <h3 className="text-xl font-medium text-white/90">Intellectual Property Rights</h3>
                <p>All content, including trademarks, logos, icons, graphics, and other assets associated with SimplyBudget, are intended to be the exclusive property of SimplyBudget Canada or its future licensors. These assets will be protected by applicable intellectual property laws upon registration, and users may not duplicate, modify, or redistribute any part of SimplyBudget without prior written consent.</p>

                <h3 className="text-xl font-medium text-white/90">Termination of Use</h3>
                <p>SimplyBudget reserves the right to terminate or suspend your access to the Service at its sole discretion, with or without notice, for violations of these Terms of Use or any inappropriate or unlawful activity.</p>

                <h3 className="text-xl font-medium text-white/90">Disclaimers</h3>
                <p>SimplyBudget is provided on an "as is" and "as available" basis, without warranties of any kind, express or implied. SimplyBudget makes no representations or warranties regarding the accuracy, reliability, or completeness of any content made available through the Service, nor do we guarantee uninterrupted or error-free functionality. SimplyBudget is not liable for any technical issues, outages, or interruptions that may affect the user experience.</p>

                <h3 className="text-xl font-medium text-white/90">Limitation of Liability</h3>
                <p>To the fullest extent permitted by law, SimplyBudget, along with its affiliates, employees, agents, and contractors, shall not be liable for any indirect, incidental, consequential, punitive, or special damages, including but not limited to loss of profits, loss of data, or loss of goodwill, arising from or in connection with your use or inability to use the Service, even if we have been advised of the possibility of such damages.</p>

                <h3 className="text-xl font-medium text-white/90">Changes to the Terms</h3>
                <p>SimplyBudget reserves the right to modify these Terms of Use periodically. When updates are made, the "Effective Date" at the top of the Terms will be revised. Continued use of SimplyBudget after changes are posted signifies your acceptance of the updated Terms of Use.</p>

                <h3 className="text-xl font-medium text-white/90">Contact Us</h3>
                <p>If you have any questions, comments, or concerns regarding these Terms of Use, please reach out to SimplyBudget support at zain@simplybudget.ca.</p>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-violet-600 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Lock className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Privacy Policy</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none">
              <p className="text-white/60">Last updated: November 11, 2024</p>
              <div className="space-y-6 text-white/80">
                <p>Welcome to SimplyBudget! At SimplyBudget, we are committed to protecting your privacy and handling your personal information with care. This Privacy Policy explains how we collect, use, and protect your information when you use SimplyBudget (the "Service"). By using SimplyBudget, you agree to the terms outlined in this Privacy Policy. If you do not agree, please discontinue use of the Service.</p>

                <h3 className="text-xl font-medium text-white/90">1. Information We Collect</h3>
                <p>SimplyBudget collects limited personal information to provide you with a personalized budgeting experience. Specifically, we may collect:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Name</strong>: Used to personalize your SimplyBudget account.</li>
                  <li><strong>Age</strong>: Used for age verification and to tailor SimplyBudget's content.</li>
                  <li><strong>Email Address</strong>: Used for account setup, communication, and security-related notifications.</li>
                </ul>
                <p>SimplyBudget does not collect or store sensitive financial information, such as bank account numbers or transaction details. <strong>Plaid</strong> securely handles all financial data, including account connections and transaction details, on its secure platform. SimplyBudget cannot directly access or store your financial data. For more information on how Plaid handles your financial information, please review Plaid's Privacy Policy.</p>

                <h3 className="text-xl font-medium text-white/90">2. How We Use Your Information</h3>
                <p>SimplyBudget uses your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personalize your experience on the app.</li>
                  <li>Verify user eligibility to ensure compliance with age restrictions.</li>
                  <li>Send essential communications regarding your account or service updates.</li>
                </ul>
                <p>SimplyBudget does not sell, rent, or share your personal information with third parties for marketing purposes.</p>

                <h3 className="text-xl font-medium text-white/90">3. Data Security</h3>
                <p>We take data security seriously and implement reasonable administrative, technical, and physical measures to protect the information we collect. While no digital security measure can be guaranteed as 100% secure, we strive to maintain high standards of security to protect your data from unauthorized access or misuse.</p>

                <h3 className="text-xl font-medium text-white/90">4. Third-Party Integrations</h3>
                <p>SimplyBudget uses <strong>Plaid</strong> to allow you to connect and view external financial accounts within the app. <strong>Plaid securely handles all sensitive financial data</strong>, and SimplyBudget only interacts with the information necessary to support its features. SimplyBudget does not store any bank or financial account information on its servers, and Plaid is solely responsible for the security and management of this data.</p>

                <h3 className="text-xl font-medium text-white/90">5. Age Restrictions and Children's Privacy</h3>
                <p>SimplyBudget is intended for users who are 13 years of age or older. We do not knowingly collect or store information from children under the age of 13. If we become aware that we have inadvertently collected information from a child under 13, we will take immediate steps to delete the information from our records. If you are a parent or guardian and believe your child under 13 has provided us with personal information, please contact us at zain@simplybudget.ca.</p>

                <h3 className="text-xl font-medium text-white/90">6. Changes to Our Privacy Policy</h3>
                <p>SimplyBudget reserves the right to modify this Privacy Policy periodically. When updates are made, we will revise the "Effective Date" at the top of this policy. Continued use of SimplyBudget after changes are posted signifies your acceptance of the updated Privacy Policy.</p>

                <h3 className="text-xl font-medium text-white/90">7. Contact Us</h3>
                <p>If you have any questions, concerns, or requests regarding your personal information or this Privacy Policy, please contact us at zain@simplybudget.ca. Thank you for trusting SimplyBudget with your budgeting needs. We are committed to maintaining your privacy and security.</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-gradient-to-br from-violet-600 to-cyan-600 w-12 h-12 rounded-xl flex items-center justify-center">
                <Send className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-white">Contact Us</h2>
            </div>

            
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/90 focus:outline-none focus:ring-2 focus:ring-violet-600"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white/90 text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/90 focus:outline-none focus:ring-2 focus:ring-violet-600"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Type of Inquiry</label>
                <select
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/90 focus:outline-none focus:ring-2 focus:ring-violet-600"
                >
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="privacy">Privacy Concern</option>
                  <option value="billing">Billing Question</option>
                </select>
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/90 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  required
                />
              </div>

              <div>
                <label className="block text-white/90 text-sm font-medium mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white/90 focus:outline-none focus:ring-2 focus:ring-violet-600"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LegalPage;