
import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="py-8 bg-brand-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl font-bold text-brand-primary tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 text-xl text-brand-text-secondary">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageTitle;
