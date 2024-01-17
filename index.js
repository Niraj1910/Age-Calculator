const button = document.querySelector("button");
const date = new Date();

button.addEventListener("click", function () {
  const ptag = document.querySelector("p");
  const data = document.querySelector("input").value;

  const inputYear = parseInt(data.substring(0, 4));
  const inputMonth = parseInt(data.substring(5, 7));
  const inputDay = parseInt(data.substring(8, 10));

  let years = date.getFullYear() - inputYear;
  let months = date.getMonth() + 1 - inputMonth;
  let days = date.getDate() - inputDay;

  if (years < 0) {
    alert("Please enter a valid date.");
    return;
  }

  if (days < 0) {
    // Borrow a month from months
    days += new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    months--;
  }

  if (months < 0) {
    // Borrow a year from years
    months += 12;
    years--;
  }

  if (years === 0 && months === 0 && days === 0) {
    ptag.innerHTML = `You were born today!`;
  } else if (years === 0 && months === 0) {
    ptag.innerHTML = `You are ${days} days old.`;
  } else if (years === 0) {
    ptag.innerHTML = `You are ${months} months ${days} days old.`;
  } else {
    ptag.innerHTML = `You are ${years} years ${months} months ${days} days old.`;
  }
});
