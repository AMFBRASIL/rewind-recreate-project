
export interface MoonPhase {
  name: string;
  icon: string;
  description: string;
  imageUrl: string;
}

export const getMoonPhase = (date: Date): MoonPhase => {
  // Algoritmo simplificado para calcular a fase da lua
  // Baseado no ciclo lunar de aproximadamente 29.53 dias
  const lunarCycle = 29.53;
  const knownNewMoon = new Date('2000-01-06'); // Data conhecida de lua nova
  
  const daysDifference = Math.floor((date.getTime() - knownNewMoon.getTime()) / (1000 * 60 * 60 * 24));
  const lunarAge = daysDifference % lunarCycle;
  
  if (lunarAge < 1.84) {
    return {
      name: 'Lua Nova',
      icon: 'moon',
      description: 'Um novo começo, assim como nossa história.',
      imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb'
    };
  } else if (lunarAge < 5.53) {
    return {
      name: 'Lua Crescente',
      icon: 'moon',
      description: 'Crescendo em luz, como nosso amor.',
      imageUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e'
    };
  } else if (lunarAge < 9.22) {
    return {
      name: 'Quarto Crescente',
      icon: 'moon',
      description: 'Meio caminho andado, muito mais para viver.',
      imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb'
    };
  } else if (lunarAge < 12.91) {
    return {
      name: 'Lua Gibosa Crescente',
      icon: 'moon',
      description: 'Quase completa, como nossa felicidade.',
      imageUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e'
    };
  } else if (lunarAge < 16.61) {
    return {
      name: 'Lua Cheia',
      icon: 'moon-star',
      description: 'Brilhando inteira, iluminando nossos corações.',
      imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb'
    };
  } else if (lunarAge < 20.30) {
    return {
      name: 'Lua Gibosa Minguante',
      icon: 'moon',
      description: 'Ainda brilhante, como nossas lembranças.',
      imageUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e'
    };
  } else if (lunarAge < 23.99) {
    return {
      name: 'Quarto Minguante',
      icon: 'moon',
      description: 'Em transformação, sempre renovando.',
      imageUrl: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb'
    };
  } else {
    return {
      name: 'Lua Minguante',
      icon: 'moon',
      description: 'Preparando o novo ciclo, como nós.',
      imageUrl: 'https://images.unsplash.com/photo-1492321936769-b49830bc1d1e'
    };
  }
};
