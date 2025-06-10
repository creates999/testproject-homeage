import React from 'react';
import PageTitle from '../components/PageTitle';
import SectionLayout from '../components/SectionLayout';
import ContactFormComponent from '../components/ContactFormComponent';
import { COMPANY_NAME } from './constants';

const ContactPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Get In Touch" subtitle="We're here to help and answer any question you might have." />
      <SectionLayout>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-2xl font-semibold text-brand-primary mb-6">Send Us a Message</h2>
            <ContactFormComponent />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-xl border border-stone-200">
            <h2 className="text-2xl font-semibold text-brand-primary mb-6">Contact Information</h2>
            <div className="space-y-4 text-brand-text-secondary">
              <div>
                <h3 className="font-semibold text-brand-primary">Address:</h3>
                <p>123 Construction Ave, Building City, BC 12345, Japan</p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-primary">Phone:</h3>
                <p><a href="tel:+81312345678" className="hover:text-brand-primary transition-colors">+81 (0)3-1234-5678</a></p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-primary">Email:</h3>
                <p><a href="mailto:info@kensetsuinnovations.example.com" className="hover:text-brand-primary transition-colors">info@kensetsuinnovations.example.com</a></p>
              </div>
              <div>
                <h3 className="font-semibold text-brand-primary">Business Hours:</h3>
                <p>Monday - Friday: 9:00 AM - 6:00 PM (JST)</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="font-semibold text-brand-primary mb-2">Find Us:</h3>
              {/* Placeholder for map. In a real app, an embedded map would go here. */}
              <div className="aspect-w-16 aspect-h-9 bg-stone-200 rounded-md overflow-hidden">
                <img 
                  src="https://picsum.photos/seed/map-location/600/350" 
                  alt="Map placeholder showing company location" 
                  className="w-full h-full object-cover"
                />
              </div>
               <p className="text-xs text-brand-text-secondary mt-2">Map representation. Actual location services not integrated.</p>
            </div>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default ContactPage;