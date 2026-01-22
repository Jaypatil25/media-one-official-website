import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
}

const SEO = ({ 
  title = "Media One - #1 Entertainment PR Agency Mumbai | Movie Promotion Experts",
  description = "Leading entertainment PR agency in Mumbai specializing in Marathi movie promotions, digital marketing, drama promotions, and event coverage. 500+ successful campaigns delivered.",
  keywords = "Media One, entertainment PR agency Mumbai, Marathi movie promotion, digital PR agency, influencer marketing Mumbai, event PR, drama promotion",
  image = "/src/assets/media-one-logo.jpg",
  url = "https://media-one-showcase.vercel.app/"
}: SEOProps) => {
  
  useEffect(() => {
    // Update document title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords);
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute('content', image);
    }
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', url);
    }
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
    
    const twitterImage = document.querySelector('meta[name="twitter:image"]');
    if (twitterImage) {
      twitterImage.setAttribute('content', image);
    }
    
    // Add structured data for current page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": title,
      "description": description,
      "url": url,
      "image": image,
      "publisher": {
        "@type": "Organization",
        "name": "Media One Entertainment PR Agency",
        "logo": {
          "@type": "ImageObject",
          "url": "/src/assets/media-one-logo.jpg"
        }
      }
    };
    
    // Remove existing structured data script
    const existingScript = document.querySelector('script[type="application/ld+json"][data-page]');
    if (existingScript) {
      existingScript.remove();
    }
    
    // Add new structured data script
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-page', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
    
  }, [title, description, keywords, image, url]);
  
  return null;
};

export default SEO;