const FloatingKidsElements = () => {
  return (
    <>
      {/* Balões coloridos */}
      <div className="absolute top-20 left-10 animate-float-up" style={{ animationDuration: '8s', animationDelay: '0s' }}>
        <div className="text-6xl">🎈</div>
      </div>
      <div className="absolute top-40 right-20 animate-float-up" style={{ animationDuration: '10s', animationDelay: '2s' }}>
        <div className="text-5xl">🎈</div>
      </div>
      <div className="absolute bottom-40 left-1/4 animate-float-up" style={{ animationDuration: '12s', animationDelay: '4s' }}>
        <div className="text-7xl">🎈</div>
      </div>

      {/* Estrelas e sparkles */}
      <div className="absolute top-1/4 left-1/3 animate-twinkle" style={{ animationDelay: '1s' }}>
        <div className="text-4xl">⭐</div>
      </div>
      <div className="absolute top-1/3 right-1/4 animate-twinkle" style={{ animationDelay: '2s' }}>
        <div className="text-5xl">✨</div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-twinkle" style={{ animationDelay: '3s' }}>
        <div className="text-4xl">🌟</div>
      </div>

      {/* Confetes */}
      <div className="absolute top-10 right-1/3 animate-float" style={{ animationDuration: '5s' }}>
        <div className="text-3xl">🎉</div>
      </div>
      <div className="absolute bottom-1/3 right-10 animate-float" style={{ animationDuration: '6s', animationDelay: '1s' }}>
        <div className="text-3xl">🎊</div>
      </div>

      {/* Nuvens */}
      <div className="absolute top-32 left-1/2 animate-float-slow" style={{ animationDuration: '20s' }}>
        <div className="text-6xl opacity-30">☁️</div>
      </div>
      <div className="absolute top-20 right-1/3 animate-float-slow" style={{ animationDuration: '25s', animationDelay: '5s' }}>
        <div className="text-7xl opacity-20">☁️</div>
      </div>

      {/* Corações */}
      <div className="absolute top-1/2 left-20 animate-float" style={{ animationDuration: '7s', animationDelay: '2s' }}>
        <div className="text-4xl">💖</div>
      </div>
      <div className="absolute bottom-1/4 right-1/3 animate-float" style={{ animationDuration: '8s', animationDelay: '3s' }}>
        <div className="text-5xl">💕</div>
      </div>

      {/* Arco-íris e sol */}
      <div className="absolute top-10 left-1/4 animate-pulse" style={{ animationDuration: '3s' }}>
        <div className="text-5xl">🌈</div>
      </div>
      <div className="absolute top-5 right-10 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }}>
        <div className="text-6xl">☀️</div>
      </div>

      {/* Pipas */}
      <div className="absolute top-1/3 left-10 animate-float" style={{ animationDuration: '10s' }}>
        <div className="text-4xl">🪁</div>
      </div>

      {/* Borboletas */}
      <div className="absolute top-2/3 right-1/4 animate-fly-diagonal" style={{ animationDuration: '15s', animationDelay: '2s' }}>
        <div className="text-4xl">🦋</div>
      </div>
      <div className="absolute bottom-1/2 left-1/3 animate-fly-diagonal" style={{ animationDuration: '18s', animationDelay: '5s' }}>
        <div className="text-3xl">🦋</div>
      </div>
    </>
  );
};

export default FloatingKidsElements;
