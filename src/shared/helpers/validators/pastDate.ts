import dayjs from 'dayjs';

const validatePastDate = (date: string, error: string): string | undefined => {
  if (!date) {
    return undefined;
  }
  const today = new Date();
  const isValid = dayjs(today).isBefore(date);
  if (!isValid) {
    return error;
  }
  return undefined;
};

export const makePastDateValidator = (error = 'Past day is not allowed') => (date: string) => validatePastDate(date, error);