
import { SlideData } from '../types/slideTypes';

interface SlideBackgroundProps {
  slide: SlideData;
}

const SlideBackground = ({ slide }: SlideBackgroundProps) => {
  return (
    <div className="absolute inset-0 transition-all duration-1000 ease-in-out">
      {slide.type === 'image' ? (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
          style={{
            backgroundImage: `url(${slide.backgroundImage})`
          }}
        />
      ) : (
        <div className="absolute inset-0 bg-black">
          <video
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={slide.videoUrl} type="video/mp4" />
          </video>
        </div>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-transparent to-pink-900/30" />
    </div>
  );
};

export default SlideBackground;
