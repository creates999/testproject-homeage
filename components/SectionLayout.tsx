
import React from 'react';

interface SectionLayoutProps {
  title?: string;
  children: React.ReactNode;
  className?: string;
  titleClassName?: string;
  containerClassName?: string;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ title, children, className = "py-12 md:py-16", titleClassName = "text-3xl font-bold text-brand-primary mb-8 text-center", containerClassName = "container mx-auto px-4 sm:px-6 lg:px-8" }) => {
  return (
    <section className={className}>
      <div className={containerClassName}>
        {title && (
          <h2 className={titleClassName}>
            {title}
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;
