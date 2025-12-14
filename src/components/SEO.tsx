import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export default function SEO({ title, description, keywords, ogImage, canonical }: SEOProps) {
  const location = useLocation();
  const baseUrl = 'https://goingductless.ca';
  const fullUrl = canonical || `${baseUrl}${location.pathname}`;
  const defaultImage = `${baseUrl}/logo-nobackground-cyan.webp`;
  const image = ogImage || defaultImage;

  useEffect(() => {
    // Update title
    document.title = `${title} | Going Ductless Ltd.`;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property = false) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    updateMetaTag('description', description);
    if (keywords) updateMetaTag('keywords', keywords);
    
    // Open Graph tags
    updateMetaTag('og:title', `${title} | Going Ductless Ltd.`, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:url', fullUrl, true);
    updateMetaTag('og:image', image, true);
    
    // Twitter tags
    updateMetaTag('twitter:title', `${title} | Going Ductless Ltd.`, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);
    updateMetaTag('twitter:url', fullUrl, true);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullUrl);
  }, [title, description, keywords, image, fullUrl]);

  return null;
}
