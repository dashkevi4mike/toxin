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

const validateDatePeriod = (dates: string, error: string): string | undefined => {
  if (!dates) {
    return undefined;
  }
  
  const [ startDate, endDate ] = dates.split('-');
  const isInvalidStartDate = validateDate(startDate, error);
  const isInvalidEndDate = validateDate(endDate, error);
  if (isInvalidStartDate || isInvalidEndDate) {
    return error;
  }
  return undefined;
};

export const makeDateValidator = (error = 'Invalid date') => (date: string) => validateDate(date, error);
export const makeDatePeriodValidator = (error = 'Invalid period') => (dates: string) => validateDatePeriod(dates, error);