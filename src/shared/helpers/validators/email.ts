const validateEmail = (email: string, error: string): string | undefined => {
  if (!email) {
    return undefined;
  }
  // tslint:disable-next-line:max-line-length
  const re = /^(([^<>()\\.,;:\s@"]+(\.[^<>()\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isValid = re.test(String(email).toLowerCase());
  if (!isValid) {
    return error;
  }
  return undefined;
};

export const makeEmailValidator = (error = 'Invalid email') => (email: string) => validateEmail(email, error);
