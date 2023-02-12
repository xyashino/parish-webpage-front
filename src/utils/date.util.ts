const getLocalMonthName = (date: Date): string =>
  new Intl.DateTimeFormat("pl", {
    month: "long",
    locale: "pl",
  } as Intl.DateTimeFormatOptions)
    .format(date)
    .replace(/^\w/, (c) => c.toUpperCase());

export const createDateRange = (
  start: string | null | Date,
  end: string | null | Date
): string => {
  if (!start || !end) return "";

  const startDate = new Date(start);
  const endDate = new Date(end);

  if (startDate.getMonth() === endDate.getDate()) {
    const localeMonth = getLocalMonthName(startDate);
    return `${localeMonth} ${startDate.getDay()}-${endDate.getDate()}`;
  }

  return `${startDate.getDay()} ${getLocalMonthName(
    startDate
  )} - ${endDate.getDate()} ${getLocalMonthName(endDate)}`;
};

export const getDayAndMonth = (date: string | null | Date): string => {
  if (!date) return "";
  const tempDate = new Date(date);
  const month = tempDate.getMonth() + 1;
  const day = tempDate.getDate();
  return ` ${day < 10 ? `0${day}` : day}.${month < 10 ? `0${month}` : month}`;
};
