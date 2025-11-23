import React from 'react';

interface MetaTagsProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  twitterHandle?: string;
}

/**
 * MetaTags Component - Update document head with SEO meta tags
 * Usage in your routes/pages:
 * 
 * <MetaTags
 *   title="Try Ngaji - Quranic Studies at Eluna Academy"
 *   description="Learn Quranic recitation with expert instructors"
 *   image="/try-ngaji.png"
 *   url="https://elunaacademy.com/try-ngaji"
 * />
 */
export const MetaTags: React.FC<MetaTagsProps> = ({
  title = 'Eluna Academy - Islamic Learning Platform | Online & Physical Classes',
  description = 'Comprehensive Islamic education programs including Quranic studies, Memorization, and Arabic language courses.',
  image = 'https://www.elunaacademy.com.my/og-image.jpg',
  url = 'https://www.elunaacademy.com.my/',
  type = 'website',
  twitterHandle = '@elunaacademy',
}) => {
  React.useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector) as HTMLMetaElement;
      
      if (!element) {
        element = document.createElement('meta');
        if (isProperty) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    updateMeta('description', description);
    updateMeta('og:title', title, true);
    updateMeta('og:description', description, true);
    updateMeta('og:image', image, true);
    updateMeta('og:url', url, true);
    updateMeta('og:type', type, true);
    updateMeta('twitter:title', title);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', image);
    updateMeta('twitter:creator', twitterHandle);

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, image, url, type, twitterHandle]);

  return null; // This component only updates the document head
};

export default MetaTags;
