
import React from 'react';
import PageTitle from '../components/PageTitle';
import SectionLayout from '../components/SectionLayout';
import ServiceCard from '../components/ServiceCard';
import { ServiceItem } from '../types';

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
const ClipboardDocumentListIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-full h-full">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM10.5 16.5h.008v.008h-.008V16.5zm0 0h.008v.008h-.008V16.5zm0 0h.008v.008h-.008V16.5zm0 0h.008v.008h-.008V16.5z" />
  </svg>
);


const SERVICES_LIST: ServiceItem[] = [
  { id: 's1', title: 'Residential Construction', description: 'Custom home building, multi-family units, and luxury estates. We bring your vision for a perfect home to life with meticulous planning and execution.', imageUrl: 'https://picsum.photos/seed/service-residential/800/600', icon: <BuildingIcon/> },
  { id: 's2', title: 'Commercial Development', description: 'Office buildings, retail spaces, industrial facilities, and mixed-use developments. Our expertise ensures projects are on time and budget.', imageUrl: 'https://picsum.photos/seed/service-commercial/800/600', icon: <BuildingIcon/> },
  { id: 's3', title: 'Renovations & Remodeling', description: 'Modernizing and upgrading existing structures, from interior refurbishments to complete building overhauls.', imageUrl: 'https://picsum.photos/seed/service-renovation/800/600', icon: <WrenchScrewdriverIcon/> },
  { id: 's4', title: 'Infrastructure Projects', description: 'Roads, bridges, and utility systems. We contribute to community growth with robust and sustainable infrastructure solutions.', imageUrl: 'https://picsum.photos/seed/service-infra/800/600', icon: <WrenchScrewdriverIcon/> },
  { id: 's5', title: 'Project Management', description: 'Comprehensive oversight from inception to completion, ensuring quality, safety, and efficiency throughout the project lifecycle.', imageUrl: 'https://picsum.photos/seed/service-pm/800/600', icon: <ClipboardDocumentListIcon/> },
  { id: 's6', title: 'Sustainable Building', description: 'Implementing green building practices and materials to create environmentally friendly and energy-efficient structures.', imageUrl: 'https://picsum.photos/seed/service-green/800/600', icon: <BuildingIcon/> },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Our Construction Services" subtitle="Delivering Excellence in Every Project" />
      <SectionLayout>
        <p className="text-center text-lg text-brand-text-secondary mb-12 max-w-3xl mx-auto">
          At Kensetsu Innovations, we offer a comprehensive range of construction services tailored to meet the diverse needs of our clients. Our commitment to quality, innovation, and sustainability is evident in every project we undertake.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_LIST.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default ServicesPage;
