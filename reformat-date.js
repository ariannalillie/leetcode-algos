const reformatDate = (date) => {
  const dateArray = date.split(" ");
  let day = dateArray[0].replaceAll(/[a-zA-Z]+/g, "");
  let month = dateArray[1];
  const year = dateArray[2];

  const newDate = new Date(`${day} ${month} ${year}`);
  day = day < 10 ? `0${day}` : day;
  month =
    newDate.getMonth() + 1 < 10
      ? `0${newDate.getMonth() + 1}`
      : newDate.getMonth() + 1;

  return year + "-" + month + "-" + day;
};

const date = "6th Oct 2052";
console.log(reformatDate(date)); // Output: "2052-10-20"
