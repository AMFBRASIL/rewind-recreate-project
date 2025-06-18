
import { LucideIcon } from "lucide-react";

interface TimelineEventProps {
  event: {
    date: string;
    event: string;
    icon: LucideIcon;
  };
  index: number;
  isLast: boolean;
}

const TimelineEvent = ({ event, index, isLast }: TimelineEventProps) => {
  const Icon = event.icon;
  
  return (
    <div 
      className="relative flex items-center mb-8 group animate-fade-in"
      style={{
        animationDelay: `${index * 300}ms`
      }}
    >
      {/* Timeline Line */}
      {!isLast && (
        <div className="absolute left-6 top-12 w-0.5 h-16 bg-gradient-to-b from-pink-400 to-purple-400 opacity-50"></div>
      )}
      
      {/* Icon Circle */}
      <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-lg group-hover:shadow-pink-500/50 transition-all duration-300 group-hover:scale-110">
        <Icon className="w-6 h-6 text-white" />
      </div>
      
      {/* Content */}
      <div className="ml-6 bg-white/10 backdrop-blur-lg rounded-xl p-4 border border-white/20 group-hover:border-pink-300/50 transition-all duration-300 flex-1">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-semibold text-white group-hover:text-pink-300 transition-colors duration-300">
              {event.event}
            </h4>
            <p className="text-purple-300 text-sm">{event.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineEvent;
