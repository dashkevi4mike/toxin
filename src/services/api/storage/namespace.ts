export interface IStorage {
  set<T>(key: string, item: T): void;
  get<T>(key: string, def: T): T;
  reset(): void;
  resetItem(key: string): void;
  addListener(key: string, cb: () => void): void;
  removeListener(key: string): void;
}
