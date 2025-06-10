
import React from 'react';
import { ServiceItem } from '../types';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  service: ServiceItem;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 h-full flex flex-col">
      <img src={service.imageUrl} alt={service.title} className="w-full h-48 object-cover" />
      <div className="p-6 flex-grow flex flex-col">
        {service.icon && <div className="text-brand-primary mb-3 h-8 w-8">{service.icon}</div>}
        <h3 className="text-xl font-semibold text-brand-primary mb-2">{service.title}</h3>
        <p className="text-brand-text-secondary text-sm mb-4 flex-grow">{service.description}</p>
        <Link 
            to="/contact" 
            className="mt-auto inline-block text-sm text-brand-primary hover:text-brand-primary-dark font-semibold transition-colors duration-200 self-start"
        >
            Learn More &rarr;
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
