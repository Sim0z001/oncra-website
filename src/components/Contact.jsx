import React, { useRef, useState } from 'react';
import { Mail, Instagram, Facebook } from 'lucide-react';
import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
emailjs.init('EXAfqnO87yylueGnA');

const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorDetails, setErrorDetails] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorDetails('');

    emailjs.sendForm(
      'service_r34zwjq',     // Your service ID
      'template_7idrp1e',    // Updated template ID
      form.current,
      'EXAfqnO87yylueGnA'    // Your public key
    )
      .then((result) => {
        console.log('SUCCESS!', result.text);
        setSubmitStatus('success');
        form.current.reset();
      }, (error) => {
        console.error('FAILED...', error);
        
        // More detailed error logging
        setErrorDetails(error.text || JSON.stringify(error));
        setSubmitStatus('error');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-light mb-8 text-center text-gray-900">Let's Connect</h2>
        
        <p className="text-gray-600 text-center text-lg mb-12">
          Whether you're interested in purchasing one of our pieces, discussing a custom project, 
          or just want to learn more about our work, we'd love to hear from you. Every piece we 
          create starts with a conversation about bringing your vision to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-light mb-6 text-gray-900">Get in Touch</h3>
              
              <div className="space-y-4">
                <a 
                  href="mailto:oncra.sc@gmail.com" 
                  className="flex items-center space-x-3 text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Mail className="h-5 w-5" />
                  <span>oncra.sc@gmail.com</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-light mb-6 text-gray-900">Follow Our Journey</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/oncra__/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a 
                  href="https://www.facebook.com/profile.php?id=61573489436892" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-light mb-6 text-gray-900">Send Us a Message</h3>
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  name="user_name"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  name="user_email"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea 
                  rows={4}
                  name="message"
                  required
                  className="w-full p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-transparent"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition-colors disabled:bg-gray-400"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-center">
                  Thank you for your message! We'll get back to you soon.
                </p>
              )}
              {submitStatus === 'error' && (
                <div className="text-red-600 text-center">
                  <p>Sorry, there was an error sending your message. Please try again.</p>
                  {errorDetails && (
                    <p className="text-xs mt-2">Error details: {errorDetails}</p>
                  )}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;