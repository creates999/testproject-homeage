
import React from 'react';
import { JobPosting } from '../types';

interface JobPostingCardProps {
  job: JobPosting;
}

const JobPostingCard: React.FC<JobPostingCardProps> = ({ job }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg border border-stone-200 hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold text-brand-primary mb-2">{job.title}</h3>
      <div className="text-sm text-brand-text-secondary mb-1">
        <span className="font-medium">Location:</span> {job.location}
      </div>
      <div className="text-sm text-brand-text-secondary mb-3">
        <span className="font-medium">Type:</span> {job.type}
      </div>
      <p className="text-brand-text-secondary text-sm mb-4">{job.description}</p>
      <button 
        className="bg-brand-primary text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-primary-dark transition duration-300 text-sm"
        onClick={() => alert(`Applying for ${job.title}... (Feature not implemented)`)}
      >
        Apply Now
      </button>
    </div>
  );
};

export default JobPostingCard;
