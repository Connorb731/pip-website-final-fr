import { useState } from 'react';
import { openCalendly } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { CalendarDays, Store, Megaphone } from 'lucide-react';

interface CalendlyButtonProps {
  eventType?: 'venue' | 'advertiser';
  label?: string;
  className?: string;
  icon?: boolean;
}

const CalendlyButton = ({ 
  eventType = 'venue', 
  label, 
  className,
  icon = true
}: CalendlyButtonProps) => {
  const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);

  const handleOpenCalendly = (e: React.MouseEvent) => {
    e.preventDefault();
    const result = openCalendly(eventType);
    setIsCalendlyLoaded(result);
    console.log("Calendly button clicked for", eventType);
  };

  const defaultLabel = eventType === 'venue' 
    ? 'Schedule Free Setup Call' 
    : 'Schedule Free Consultation';

  const IconComponent = eventType === 'venue' ? Store : Megaphone;

  return (
    <div>
      <Button 
        className={`w-full bg-primary hover:bg-[#0284c7] text-white font-semibold px-6 py-6 rounded-xl transition shadow-md hover:shadow-lg ${className || ''}`}
        onClick={handleOpenCalendly}
      >
        {icon && <IconComponent className="mr-2 h-5 w-5" />} {label || defaultLabel}
      </Button>

    </div>
  );
};

export default CalendlyButton;
