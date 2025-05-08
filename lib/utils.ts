export const formatToTimeAgo = (date: string): string => {
  const time = new Date(date).getTime();
  const now = new Date().getTime();
  const diffInMs = time - now;

  const MINUTE_IN_MS = 1000 * 60;
  const HOUR_IN_MS = MINUTE_IN_MS * 60;
  const DAY_IN_MS = HOUR_IN_MS * 24;

  const absDiffInMs = Math.abs(diffInMs);

  if (absDiffInMs < HOUR_IN_MS) {
    // Less than 1 hour
    const minutes = Math.floor(absDiffInMs / MINUTE_IN_MS);
    return `${minutes}m`;
  } else if (absDiffInMs < DAY_IN_MS) {
    // Less than 24 hours
    const hours = Math.floor(absDiffInMs / HOUR_IN_MS);
    return `${hours}h`;
  } else {
    // More than or equal to 24 hours, show "Month Day"
    const originalDate = new Date(date);
    const currentYear = new Date().getFullYear();
    const dateYear = originalDate.getFullYear();

    const options: Intl.DateTimeFormatOptions = {
      month: "long",
      day: "numeric",
    };
    if (dateYear !== currentYear) {
      options.year = "numeric";
    }
    const dateFormatter = new Intl.DateTimeFormat("en", options);
    return dateFormatter.format(originalDate);
  }
};

export const formatToDateTime = (date: Date): string => {
  const timeFormatter = new Intl.DateTimeFormat("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const timeString = timeFormatter.format(date);
  const dateString = dateFormatter.format(date);

  return `${timeString} · ${dateString}`;
};
