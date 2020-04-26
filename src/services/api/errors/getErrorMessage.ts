import { isApiError } from './ApiError';

/**
 * @summary
 * Checks error, caught in try/catch block and returns correct error representation of that
 */
function getErrorMessage(error: any): string {
  if (isApiError(error)) {
    return error.code || error.cause || error.name;
  }

  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
}

export default getErrorMessage;
