export function getRandomDateMessage(): string {
  const today = new Date();

  const randomDays = Math.floor(Math.random() * 8);

  if (randomDays === 0) {
    return "Only Today!";
  }

  const futureDate = new Date();
  futureDate.setDate(today.getDate() + randomDays);

  const options: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
  };
  const formattedDate = futureDate.toLocaleDateString("en-US", options);

  return `Until ${formattedDate}`;
}
