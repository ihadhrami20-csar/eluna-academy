import React from 'react';

interface StructuredDataProps {
  schema: Record<string, unknown>;
}

/**
 * StructuredData Component - Add JSON-LD structured data for rich snippets
 * 
 * Usage:
 * <StructuredData
 *   schema={{
 *     "@context": "https://schema.org",
 *     "@type": "Course",
 *     "name": "Try Ngaji - Quranic Studies",
 *     "description": "Learn Quranic recitation",
 *     "provider": {
 *       "@type": "Organization",
 *       "name": "Eluna Academy"
 *     }
 *   }}
 * />
 */
export const StructuredData: React.FC<StructuredDataProps> = ({ schema }) => {
  React.useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [schema]);

  return null;
};

/**
 * Organization Schema for Eluna Academy
 */
export const OrganizationSchema: React.FC = () => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Eluna Academy',
    url: 'https://www.elunaacademy.com.my',
    logo: 'https://www.elunaacademy.com.my/favicon.ico',
    description: 'Islamic Learning Platform offering Quranic studies, Memorization, and Arabic language courses',
    sameAs: [
      'https://www.facebook.com/share/1EEbqJjNfr/?mibextid=wwXIfr',
      'https://www.instagram.com/eluna.academy?igsh=MWV1bG0wNDRqNjI4Mg==',
      'https://www.tiktok.com/@eluna.academy?_t=ZS-90aXXkzh3Mu&_r=1',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+601111676050',
      contactType: 'Customer Service',
      email: 'elunaacademy@gmail.com',
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
    },
  };

  return <StructuredData schema={schema} />;
};

/**
 * Course Schema for a specific course
 */
interface CourseSchemaProps {
  name: string;
  description: string;
  image: string;
  courseCount: number;
}

export const CourseSchema: React.FC<CourseSchemaProps> = ({
  name,
  description,
  image,
  courseCount,
}) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: name,
    description: description,
    image: image,
    provider: {
      '@type': 'Organization',
      name: 'Eluna Academy',
      url: 'https://elunaacademy.com',
    },
    courseCount: courseCount,
    educationLevel: 'Beginner to Advanced',
    inLanguage: 'ms',
  };

  return <StructuredData schema={schema} />;
};

/**
 * Breadcrumb Schema for navigation
 */
interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbSchema: React.FC<BreadcrumbSchemaProps> = ({ items }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <StructuredData schema={schema} />;
};

export default StructuredData;
