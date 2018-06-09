  const secondHand = document.querySelector('.second');
  const minuteHand = document.querySelector('.minute');
  const hourHand = document.querySelector('.hour');
  function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    const minute = now.getMinutes();
    const minuteDegrees = ((minute / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hour + ":" + minute + ":" + seconds);
    if(hour === 16 && minute === 20 && seconds === 0)alert("It's 4:20. Do you know where your buds are?");
  }
  setInterval(setDate, 1000);
  setDate();