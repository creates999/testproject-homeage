import React from 'react';
import { COMPANY_NAME } from '../pages/constants';

const Logo: React.FC = () => {
  return (
    <div className="text-2xl md:text-3xl font-bold text-inherit">
      {COMPANY_NAME}
    </div>
  );
};

export default Logo;