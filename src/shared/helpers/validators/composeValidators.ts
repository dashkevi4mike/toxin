type Validator = (value: string, allValues?: object) =>
string | undefined;

export function composeValidators(validators: Validator[]) {
  return (value: string, allValues?: object) => validators.reduce(
    (error, validator) => error || validator(value, allValues),
    undefined,
  );
}
