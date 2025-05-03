export const PASSWORD_MIN_LENGTH = 5;
export const PASSWORD_REGEX = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/);
export const PASSWORD_REGEX_ERROR =
  "Passwords must contain at least one UPPERCASE, lowercase, and number";
