export function makeMinCharactersValidator<T>(minCharacters: number, errorMsg: T) {
  return (validatedValue: string) => {
    if (validatedValue.length && validatedValue.length < minCharacters) {
      return errorMsg;
    }
    return undefined;
  };
}
