const validateCard = (card: string, error: string): string | undefined => {
    if (!card) {
      return error;
    }
    // tslint:disable-next-line:max-line-length
    const re = /\d\d\d\d \d\d\d\d \d\d\d\d \d\d\d\d/;
    const isValid = re.test(String(card).toLowerCase());
    if (!isValid) {
      return error;
    }
    return undefined;
  };
  
  export const makeCardValidator = (error = 'Invalid card') => (card: string) => validateCard(card, error);
  