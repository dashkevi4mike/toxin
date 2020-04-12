export function makeRequired(errorMsg = 'Field is required') {
  return (value: string) => (!value ? errorMsg : undefined);
}
