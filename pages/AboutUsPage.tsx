import React from 'react';
import PageTitle from '../components/PageTitle';
import SectionLayout from '../components/SectionLayout';
import { COMPANY_NAME } from './constants';

const AboutUsPage: React.FC = () => {
  return (
    <>
      <PageTitle title={`About ${COMPANY_NAME}`} subtitle="Building Trust, Crafting Excellence" />
      
      <SectionLayout title="Our Story">
        <div className="max-w-3xl mx-auto text-lg text-brand-text-secondary space-y-6">
          <p>
            Founded on the principles of integrity, quality, and innovation, {COMPANY_NAME} has grown from a passionate vision into a leading construction firm. For over [Number] years, we have been dedicated to shaping skylines and communities, delivering projects that stand the test of time.
          </p>
          <p>
            Our journey began with a small team of dedicated professionals who believed in a different kind of construction company – one that prioritizes client relationships, embraces new technologies, and is committed to sustainable practices. Today, that ethos remains at the core of everything we do.
          </p>
          <img src="https://picsum.photos/seed/about-team/1000/400" alt="Company history collage" className="rounded-lg shadow-lg my-8"/>
        </div>
      </SectionLayout>

      <SectionLayout title="Mission & Vision" className="bg-brand-secondary">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-brand-primary mb-3">Our Mission</h3>
            <p className="text-brand-text-secondary">
              To deliver superior construction services through innovative solutions, unwavering commitment to quality, and a client-centric approach, fostering sustainable growth for our communities and stakeholders.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold text-brand-primary mb-3">Our Vision</h3>
            <p className="text-brand-text-secondary">
              To be the most trusted and sought-after construction partner, recognized for our excellence in project delivery, our dedication to innovation, and our positive impact on the built environment.
            </p>
          </div>
        </div>
      </SectionLayout>

      <SectionLayout title="Our Core Values">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-center">
          {[
            { title: "Integrity", description: "Conducting our business with the highest ethical standards." },
            { title: "Quality", description: "Committing to excellence in every aspect of our work." },
            { title: "Innovation", description: "Embracing new technologies and methods to enhance efficiency." },
            { title: "Safety", description: "Prioritizing the well-being of our team and partners." }
          ].map(value => (
            <div key={value.title} className="bg-white p-6 rounded-lg shadow-md border border-stone-100">
              <h4 className="text-xl font-semibold text-brand-primary mb-2">{value.title}</h4>
              <p className="text-sm text-brand-text-secondary">{value.description}</p>
            </div>
          ))}
        </div>
      </SectionLayout>
    </>
  );
};

export default AboutUsPage;