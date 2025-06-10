import React from 'react';
import PageTitle from '../components/PageTitle';
import SectionLayout from '../components/SectionLayout';
import JobPostingCard from '../components/JobPostingCard';
import { JobPosting } from '../types';
import { COMPANY_NAME } from './constants';

const JOB_POSTINGS: JobPosting[] = [
  { id: 'jp1', title: 'Senior Project Manager', location: 'Tokyo Head Office', type: 'Full-time', description: 'Lead complex construction projects from planning to completion, ensuring quality, budget, and timeline adherence. Requires 10+ years experience.' },
  { id: 'jp2', title: 'Civil Engineer', location: 'Osaka Branch', type: 'Full-time', description: 'Design and oversee infrastructure projects, including roads, bridges, and drainage systems. Bachelor\'s in Civil Engineering required.' },
  { id: 'jp3', title: 'Site Supervisor', location: 'Various Sites (Kanto Region)', type: 'Contract', description: 'Manage day-to-day operations on construction sites, ensuring safety and productivity. Strong leadership and communication skills needed.' },
  { id: 'jp4', title: 'Architectural Designer', location: 'Tokyo Head Office', type: 'Full-time', description: 'Develop innovative and sustainable architectural designs for residential and commercial projects. Proficiency in CAD software essential.' },
];

const CareersPage: React.FC = () => {
  return (
    <>
      <PageTitle title="Join Our Team" subtitle={`Build Your Future with ${COMPANY_NAME}`} />
      <SectionLayout>
        <div className="max-w-3xl mx-auto text-center text-lg text-brand-text-secondary mb-12 space-y-4">
          <p>
            At {COMPANY_NAME}, we believe our people are our greatest asset. We are always looking for talented, passionate, and dedicated individuals to join our dynamic team.
          </p>
          <p>
            We offer a collaborative work environment, opportunities for professional growth, and the chance to contribute to exciting and impactful construction projects. If you are ready to build a rewarding career, explore our current openings below.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {JOB_POSTINGS.map(job => (
            <JobPostingCard key={job.id} job={job} />
          ))}
        </div>
        {JOB_POSTINGS.length === 0 && (
          <p className="text-center text-brand-text-secondary mt-8">
            There are currently no open positions. Please check back later or send us your resume for future consideration.
          </p>
        )}
      </SectionLayout>

       <SectionLayout title="Why Work With Us?" className="bg-brand-secondary">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-primary mb-2">Growth Opportunities</h3>
            <p className="text-sm text-brand-text-secondary">We invest in our employees' development through training and mentorship programs.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-primary mb-2">Innovative Projects</h3>
            <p className="text-sm text-brand-text-secondary">Work on diverse and challenging projects that shape our communities.</p>
          </div>
           <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-brand-primary mb-2">Supportive Culture</h3>
            <p className="text-sm text-brand-text-secondary">Join a team that values collaboration, respect, and a shared commitment to excellence.</p>
          </div>
        </div>
      </SectionLayout>
    </>
  );
};

export default CareersPage;