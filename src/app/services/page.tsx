import { ServicesPage } from '@/components/Services/ServicesPages';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Services",
};
const service = () => {
  return (
    <div>
    <ServicesPage/>
      
    </div>
  );
};

export default service;