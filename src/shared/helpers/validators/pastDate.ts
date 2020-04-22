import dayjs from 'dayjs';

const validatePastDate = (date: string, error: string): string | undefined => {
  if (!date) {
    return undefined;
  }
  const today = new Date();
  const isValid = dayjs(date).startOf('day') >= dayjs(today).startOf('day');
  if (!isValid) {
    return error;
  }
  return undefined;
};

const validatePastDatesFilter = (dates: string, error: string): string | undefined => {
  if (!dates) {
    return undefined;
  }

  const [ startDate, endDate ] = dates.split('-');
  const isInvalidStartDate = validatePastDate(startDate, error);
  const isInvalidEndDate = validatePastDate(endDate, error);
  if (isInvalidStartDate || isInvalidEndDate) {
    return error;
  }
  return undefined;
}; 

export const makePastDateValidator = (error = 'Past day is not allowed') => (date: string) => validatePastDate(date, error);
export const makePastDatesFilterValidator = (error = 'Past day is not allowed') => (dates: string) => validatePastDatesFilter(dates, error);