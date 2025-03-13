export const getMonthName = (date) => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[date];
};

export const getDay = (date) => {
  const monthNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thurday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  return monthNames[date];
};

export const formatDate = (date) => {
  if (date === 1) {
    return `${date}st`;
  } else if (date === 2) {
    return `${date}nd`;
  } else if (date === 3) {
    return `${date}rd`;
  } else if (date >= 4) {
    return `${date}th`;
  }
};
