import React, { useEffect } from 'react';

const Bookings = () => {
  useEffect(() => {
    window.location.href = "https://calendar.app.google/ZYKNFNLSxqpYE2gVA";
  }, []);

  return (
    <div>
      <p>If you are not redirected, <a href="https://calendar.app.google/ZYKNFNLSxqpYE2gVA">click here</a>.</p>
    </div>
  );
};

export default Bookings;
