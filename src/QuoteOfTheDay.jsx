import React, { useState, useEffect } from 'react';

function QuoteOfTheDay() {
  const weeklyQuotes = [
    "Pazar: Yeni haftaya hazırlan, bugün dinlenme zamanı. 🌤️",        // 0
    "Pazartesi: Yeni bir başlangıç, hedeflerine odaklan! 🚀",         // 1
    "Salı: İvmeni koru, güzel işler yoldadır. 🔄",                    // 2
    "Çarşamba: Haftanın ortası, pes etme! 💪",                        // 3
    "Perşembe: Emeklerinin karşılığı geliyor. 🔥",                    // 4
    "Cuma: Harika bir hafta geçirdin, kutla kendini. 🎉",             // 5
    "Cumartesi: Kendine zaman ayır, hayat sadece iş değil. 🌿"        // 6
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const dayOfWeek = new Date().getDay(); // 0–6
    setQuote(weeklyQuotes[dayOfWeek]);
  }, []);

  return (
    <div className='quote-container'>
      <p className='quote-text'>📝 {quote}</p>
    </div>
  );
}

export default QuoteOfTheDay;