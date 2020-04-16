const validateDate = (date: string, error: string): string | undefined => {
    if (!date) {
      return error;
    }
    // tslint:disable-next-line:max-line-length
    const re = /\d\d.\d\d.\d\d\d\d/;
    const isValid = re.test(String(date).toLowerCase());
    if (!isValid) {
      return error;
    }
    return undefined;
  };
  
  export const makeDateValidator = (error = 'Invalid date') => (date: string) => validateDate(date, error);
  