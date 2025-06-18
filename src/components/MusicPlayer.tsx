
import { useState } from "react";
import { Play, Pause, Heart, Volume2 } from "lucide-react";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(45);
  const totalTime = 180;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const progressPercentage = (currentTime / totalTime) * 100;

  return (
    <div className="max-w-md mx-auto bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-pink-300/50 transition-all duration-300">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-white mb-1">Nossa Música</h3>
        <p className="text-purple-300 text-sm">A música que define nosso amor</p>
      </div>
      
      <div className="bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-xl p-4 mb-4">
        <div className="flex items-center space-x-3 mb-3">
          <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-white font-medium">Perfect - Ed Sheeran</h4>
            <p className="text-purple-300 text-sm">Nossa canção especial</p>
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="relative bg-white/20 rounded-full h-2 mb-2">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-400 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        
        <div className="flex justify-between text-sm text-purple-300">
          <span>0:45</span>
          <span>3:00</span>
        </div>
      </div>
      
      <div className="flex items-center justify-center space-x-4">
        <button className="text-purple-300 hover:text-white transition-colors duration-200">
          <Volume2 size={20} />
        </button>
        
        <button 
          onClick={togglePlay}
          className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 w-12 h-12 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-105"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        
        <button className="text-purple-300 hover:text-white transition-colors duration-200">
          <Heart size={20} />
        </button>
      </div>
    </div>
  );
};

export default MusicPlayer;
