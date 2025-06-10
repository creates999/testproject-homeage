import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../components/Banner';
import SectionLayout from '../components/SectionLayout';
import { COMPANY_NAME } from './constants';
import { ServiceItem } from '../types';
import ServiceCard from '../components/ServiceCard';

const BuildingIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 6.75zM9 12.75h6.375a.375.375 0 01.375.375v1.5a.375.375 0 01-.375.375H9a.375.375 0 01-.375-.375v-1.5A.375.375 0 019 12.75z" />
  </svg>
);

const WrenchScrewdriverIcon: React.FC = () => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.926-2.185.926-3.417A4.5 4.5 0 0011.25 4.5H8.25A2.25 2.25 0 006 6.75v1.5a2.25 2.25 0 002.25 2.25H9.75z" />
</svg>
);


const FEATURED_SERVICES: ServiceItem[] = [
  { id: 'fs1', title: 'Residential Construction', description: 'Building dream homes with quality craftsmanship and modern designs, tailored to your lifestyle.', imageUrl: 'https://picsum.photos/seed/home-residential/800/600', icon: <BuildingIcon/> },
  { id: 'fs2', title: 'Commercial Projects', description: 'Delivering innovative and functional commercial spaces, from office buildings to retail centers.', imageUrl: 'https://picsum.photos/seed/home-commercial/800/600', icon: <BuildingIcon/> },
  { id: 'fs3', title: 'Renovations & Remodeling', description: 'Transforming existing structures into beautiful, efficient spaces that meet contemporary needs.', imageUrl: 'https://picsum.photos/seed/home-renovation/800/600', icon: <WrenchScrewdriverIcon/> },
];

const HomePage: React.FC = () => {
  return (
    <>
      <Banner
        imageUrl="https://picsum.photos/seed/hero-construction/1600/900"
        title={`Welcome to ${COMPANY_NAME}`}
        subtitle="Building the Future, Responsibly. We specialize in innovative construction solutions, delivering projects with precision, quality, and integrity."
        ctaText="Explore Our Services"
        ctaLink="/services"
        overlayOpacity={0.6}
      />

      <SectionLayout title="Who We Are">
        <div className="max-w-3xl mx-auto text-center text-lg text-brand-text-secondary space-y-4">
          <p>
            {COMPANY_NAME} is a leader in the construction industry, known for our commitment to excellence, sustainable practices, and client satisfaction. With decades of combined experience, our team brings expertise to projects of all scales, from residential homes to large commercial developments.
          </p>
          <p>
            We believe in building more than just structures; we build lasting relationships based on trust and transparency.
          </p>
          <div className="pt-4">
            <Link
                to="/about"
                className="inline-block bg-brand-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-primary-dark transition duration-300"
              >
                Learn More About Us
            </Link>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout title="Our Core Services" className="bg-brand-secondary py-16 md:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_SERVICES.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="text-center mt-12">
            <Link
                to="/services"
                className="inline-block bg-brand-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-primary-dark transition duration-300"
              >
                View All Services
            </Link>
        </div>
      </SectionLayout>

      <SectionLayout title="Why Choose Us?">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md border border-stone-100">
            <h3 className="text-2xl font-semibold text-brand-primary mb-3">Quality Craftsmanship</h3>
            <p className="text-brand-text-secondary">We are dedicated to the highest standards of quality in every nail driven and every beam placed. Our attention to detail ensures lasting value.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-stone-100">
            <h3 className="text-2xl font-semibold text-brand-primary mb-3">Experienced Team</h3>
            <p className="text-brand-text-secondary">Our team comprises seasoned professionals, engineers, and project managers passionate about construction and innovation.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-stone-100">
            <h3 className="text-2xl font-semibold text-brand-primary mb-3">Client-Centric Approach</h3>
            <p className="text-brand-text-secondary">Your vision is our blueprint. We collaborate closely with you from concept to completion, ensuring your needs are met every step of the way.</p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default HomePage;