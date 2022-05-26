const formatTime = (timeInSeconds) => {
  const date = new Date(0);
  date.setSeconds(timeInSeconds);
  let formattedTime;

  if (timeInSeconds >= 3600) {
    formattedTime = date.toISOString().substring(11, 19);
  } else {
    formattedTime = date.toISOString().substring(14, 19);
  }
  return formattedTime;
};

//   console.log(formatTime(500))
console.log(formatTime(4000));

// ideas
// if time is below and hour substring at a different place
