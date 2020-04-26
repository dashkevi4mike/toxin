export type ErrorType = 'APP' | 'API' | 'VIEW';

export class AppError extends Error {
  public type: ErrorType;
  public cause?: string;
  public code?: string;

  constructor(msg?: string, type?: ErrorType) {
    super(msg);
    this.type = type || 'APP';
  }
}
