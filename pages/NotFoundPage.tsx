
import React from 'react';
import { Link } from 'react-router-dom';
import SectionLayout from '../components/SectionLayout';

const NotFoundPage: React.FC = () => {
  return (
    <SectionLayout className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-10rem)]">
      <h1 className="text-6xl font-bold text-brand-primary mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-brand-text-secondary mb-6">Page Not Found</h2>
      <p className="text-lg text-brand-text-secondary mb-8">
        Oops! The page you are looking for does not exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-brand-primary text-white font-semibold py-3 px-6 rounded-md hover:bg-brand-primary-dark transition duration-300"
      >
        Go Back to Homepage
      </Link>
    </SectionLayout>
  );
};

export default NotFoundPage;
