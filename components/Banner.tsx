
import React from 'react';
import { Link } from 'react-router-dom';

interface BannerProps {
  imageUrl: string;
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  overlayOpacity?: number; // 0 to 1
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title, subtitle, ctaText, ctaLink, overlayOpacity = 0.5 }) => {
  const overlayStyle = {
    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity})`
  };

  return (
    <div
      className="relative bg-cover bg-center text-white py-24 md:py-32 lg:py-48"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0" style={overlayStyle}></div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
        {ctaText && ctaLink && (
          <div className="mt-10">
            <Link
              to={ctaLink}
              className="inline-block bg-brand-primary hover:bg-opacity-80 text-white font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
