import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Form submission handler for contact form
export async function submitContactForm(formData: {
  name: string;
  email: string;
  phone: string;
  business: string;
  message?: string;
}) {
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    return await response.json();
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

// Open Calendly popup with event type options
export function openCalendly(eventType: 'venue' | 'advertiser' = 'venue') {
  const url = eventType === 'venue'
    ? 'https://calendly.com/connorbriggs-pluginpromotions/free-setup-call'
    : 'https://calendly.com/connorbriggs-pluginpromotions/30min';
    
  // If Calendly is not loaded yet, load it directly
  if (typeof window !== 'undefined') {
    // Open in new tab instead of popup to avoid scrolling issues
    window.open(url, '_blank');
    return true;
  }
  return false;
}

// Scroll to element with offset for header
export function scrollToElement(id: string) {
  const element = document.getElementById(id);
  if (element) {
    const headerOffset = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}
