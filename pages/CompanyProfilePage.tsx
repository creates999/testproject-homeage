import React from 'react';
import PageTitle from '../components/PageTitle';
import SectionLayout from '../components/SectionLayout';
import { COMPANY_NAME } from './constants';
import { CompanyProfileData } from '../types';

const PROFILE_DATA: CompanyProfileData = {
  "Official Company Name": `${COMPANY_NAME} Co., Ltd.`,
  "Established": "January 15, 2005",
  "Head Office": "123 Construction Ave, Building City, BC 12345",
  "CEO / Representative Director": "Mr. Kenji Tanaka",
  "Capital": "¥50,000,000 JPY",
  "Main Business Areas": "General Construction, Residential and Commercial Building, Civil Engineering, Project Management, Renovations",
  "Number of Employees": "150 (as of March 2024)",
  "Primary Bankers": "Sumitomo Mitsui Banking Corporation, Mizuho Bank",
  "Certifications": "ISO 9001 (Quality Management), ISO 14001 (Environmental Management)",
  "Company Philosophy": "Building a sustainable future through quality construction and innovative solutions."
};

const CompanyProfilePage: React.FC = () => {
  return (
    <>
      <PageTitle title="Company Profile" subtitle={`Key Information about ${COMPANY_NAME}`} />
      <SectionLayout>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-10 rounded-lg shadow-xl border border-stone-200">
          <div className="space-y-6">
            {Object.entries(PROFILE_DATA).map(([key, value]) => (
              <div key={key} className="flex flex-col sm:flex-row sm:items-start border-b border-stone-200 pb-4 last:border-b-0 last:pb-0">
                <dt className="w-full sm:w-1/3 font-semibold text-brand-primary text-md mb-1 sm:mb-0">{key}:</dt>
                <dd className="w-full sm:w-2/3 text-brand-text-secondary text-md">{value}</dd>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
             <img src="https://picsum.photos/seed/company-office/800/450" alt="Company office or major project" className="rounded-lg shadow-lg mx-auto"/>
             <p className="text-sm text-brand-text-secondary mt-4">Our commitment to excellence is reflected in every project.</p>
        </div>
      </SectionLayout>
    </>
  );
};

export default CompanyProfilePage;