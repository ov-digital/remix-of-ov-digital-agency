import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description?: string;
}

/**
 * Component for setting page-specific meta tags
 * Updates document title and meta description
 */
export const PageMeta = ({ title, description }: PageMetaProps) => {
  useEffect(() => {
    // Set page title
    const fullTitle = `${title} | OV Digital Agency`;
    document.title = fullTitle;
    
    // Set meta description if provided
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute("content", description);
      }
    }
    
    // Cleanup: restore default title on unmount
    return () => {
      document.title = "OV Digital Agency — разработка сайтов, мобильных приложений и CRM";
    };
  }, [title, description]);

  return null;
};
