export default function isNetworkError(error: Error) {
  return error.message === 'Network Error';
}
