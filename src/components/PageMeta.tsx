import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
  ogImage?: string;
}

// Default values for restoration
const DEFAULT_TITLE = "OV Digital Agency - создаём сайты и digital-продукты под ключ. Дизайн, разработка, автоматизация.";
const DEFAULT_DESCRIPTION = "Создаём сайты, интернет-магазины, мобильные приложения, CRM и Telegram-боты под ключ. 10+ лет опыта. Дизайн, разработка, автоматизация бизнес-процессов.";
const DEFAULT_OG_IMAGE = "https://ov-digital.ru/og-image.png";

/**
 * Component for setting page-specific meta tags
 * Updates document title, meta description, and Open Graph tags
 */
export const PageMeta = ({ title, description, ogImage }: PageMetaProps) => {
  useEffect(() => {
    // Set page title
    const fullTitle = `${title} | OV Digital Agency`;
    document.title = fullTitle;
    
    // Set meta description if provided
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
    
    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    const ogDesc = document.querySelector('meta[property="og:description"]');
    const ogImg = document.querySelector('meta[property="og:image"]');
    const ogImgAlt = document.querySelector('meta[property="og:image:alt"]');
    
    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    const twitterImg = document.querySelector('meta[name="twitter:image"]');
    
    if (ogTitle) ogTitle.setAttribute("content", fullTitle);
    if (ogDesc && description) ogDesc.setAttribute("content", description);
    if (ogImg && ogImage) ogImg.setAttribute("content", ogImage);
    if (ogImgAlt) ogImgAlt.setAttribute("content", fullTitle);
    
    if (twitterTitle) twitterTitle.setAttribute("content", fullTitle);
    if (twitterDesc && description) twitterDesc.setAttribute("content", description);
    if (twitterImg && ogImage) twitterImg.setAttribute("content", ogImage);
    
    // Cleanup: restore default meta tags on unmount
    return () => {
      document.title = DEFAULT_TITLE;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute("content", DEFAULT_DESCRIPTION);
      
      const ogTitleEl = document.querySelector('meta[property="og:title"]');
      const ogDescEl = document.querySelector('meta[property="og:description"]');
      const ogImgEl = document.querySelector('meta[property="og:image"]');
      const twitterTitleEl = document.querySelector('meta[name="twitter:title"]');
      const twitterDescEl = document.querySelector('meta[name="twitter:description"]');
      const twitterImgEl = document.querySelector('meta[name="twitter:image"]');
      
      if (ogTitleEl) ogTitleEl.setAttribute("content", "OV Digital Agency - создаём сайты и digital-продукты под ключ");
      if (ogDescEl) ogDescEl.setAttribute("content", DEFAULT_DESCRIPTION);
      if (ogImgEl) ogImgEl.setAttribute("content", DEFAULT_OG_IMAGE);
      if (twitterTitleEl) twitterTitleEl.setAttribute("content", "OV Digital Agency - создаём сайты и digital-продукты под ключ");
      if (twitterDescEl) twitterDescEl.setAttribute("content", DEFAULT_DESCRIPTION);
      if (twitterImgEl) twitterImgEl.setAttribute("content", DEFAULT_OG_IMAGE);
    };
  }, [title, description, ogImage]);

  return null;
};
