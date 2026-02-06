import { useState, useEffect } from "react";

const CounterWidget = () => {
  const [time, setTime] = useState({
    years: 1,
    months: 0,
    days: 0,
    hours: 15,
    minutes: 34,
    seconds: 48,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let { years, months, days, hours, minutes, seconds } = prev;
        seconds++;
        if (seconds >= 60) { seconds = 0; minutes++; }
        if (minutes >= 60) { minutes = 0; hours++; }
        if (hours >= 24) { hours = 0; days++; }
        if (days >= 30) { days = 0; months++; }
        if (months >= 12) { months = 0; years++; }
        return { years, months, days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full bg-[#1e2433] rounded-xl p-4 flex flex-col items-center justify-center">
      <span className="text-zinc-400 text-xs uppercase tracking-widest mb-2">
        JUNTOS HÁ
      </span>
      <span className="text-white font-semibold text-lg">
        {time.years} anos, {time.months} meses, {time.days} dias
      </span>
      <span className="text-zinc-300 text-sm mt-1">
        {time.hours} horas, {time.minutes} minutos, {time.seconds} segundos
      </span>
    </div>
  );
};

export default CounterWidget;
