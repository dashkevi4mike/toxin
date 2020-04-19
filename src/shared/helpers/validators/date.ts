import dayjs from 'dayjs';

const validateDate = (date: string, error: string): string | undefined => {
  if (!date) {
    return undefined;
  }
  
  const isValid = dayjs(date).isValid()
  if (!isValid) {
    return error;
  }
  return undefined;
};

export const makeDateValidator = (error = 'Invalid date') => (date: string) => validateDate(date, error);