import { ReactNode } from "react";

interface CinematicTransitionProps {
  children: ReactNode;
  isActive: boolean;
  direction?: "fade" | "zoom" | "slide" | "blur";
}

const CinematicTransition = ({ 
  children, 
  isActive, 
  direction = "fade" 
}: CinematicTransitionProps) => {
  const getTransitionClasses = () => {
    const baseClasses = "transition-all duration-1000 ease-out";
    
    if (!isActive) {
      switch (direction) {
        case "zoom":
          return `${baseClasses} opacity-0 scale-95`;
        case "slide":
          return `${baseClasses} opacity-0 translate-y-8`;
        case "blur":
          return `${baseClasses} opacity-0 blur-sm`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }
    
    return `${baseClasses} opacity-100 scale-100 translate-y-0 blur-0`;
  };

  return (
    <div className={getTransitionClasses()}>
      {children}
    </div>
  );
};

export default CinematicTransition;
