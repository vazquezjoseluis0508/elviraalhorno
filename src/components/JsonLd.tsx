import React from 'react';
import { businessData } from '../data';

const JsonLd: React.FC = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": businessData.name,
    "description": businessData.subtitle,
    "url": "https://elviraalhorno.com",
    "telephone": businessData.contact.phones,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bailén 1127",
      "addressLocality": "Grand Bourg",
      "addressRegion": "Buenos Aires",
      "addressCountry": "AR"
    },
    "openingHours": [
      "Fr-Su 19:30-23:00"
    ],
    "servesCuisine": ["Pizza", "Empanadas"],
    "priceRange": "$$",
    "image": "/hero.jpg",
    "sameAs": [
      "https://wa.me/1160473637",
      "https://wa.me/1165800666"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
