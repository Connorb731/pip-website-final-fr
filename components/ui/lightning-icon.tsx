interface LightningIconProps {
  className?: string;
  color?: string;
  size?: number;
}

export const LightningIcon = ({ className = "", color = "currentColor", size = 24 }: LightningIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke={color}
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={`lucide lucide-zap ${className}`}
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
};

export const LightningBoltIcon = ({ className = "", color = "currentColor", size = 24 }: LightningIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
    >
      <path 
        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z" 
        fill={color} 
        stroke={color} 
        strokeWidth="0.5"
      />
    </svg>
  );
};

export const CircleLightningIcon = ({ className = "", color = "currentColor", size = 24 }: LightningIconProps) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" fill="white" stroke={color} strokeWidth="1"/>
      <path 
        d="M9.5 18L14.5 11.5L11.5 9.5L14.5 6L9.5 12.5L12.5 14.5L9.5 18Z" 
        fill={color} 
        stroke={color} 
        strokeWidth="0.2"
      />
    </svg>
  );
};