import React from 'react';
import { COMPANY_NAME } from '../pages/constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary-dark text-neutral-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p>&copy; {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.</p>
        <p className="text-sm mt-1">Built with Precision & Care.</p>
      </div>
    </footer>
  );
};

export default Footer;