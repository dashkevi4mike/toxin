import { IStorage } from './namespace';

class LocalStorage implements IStorage {
  public static checkAvailability() {
    const testKey = '__test__';

    try {
      localStorage.setItem(testKey, '__test-value__');
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      console.warn('Local storage is not available! Some features will be disabled!');
      return false;
    }
  }

  private isLocalStorageAvailable: boolean | null = null;
  private eventHandlers: Record<string, (e: StorageEvent) => void> = {};

  constructor(version: string) {
    this.isLocalStorageAvailable = LocalStorage.checkAvailability();
    this.checkVersion(version);
  }

  public set<T>(key: string, item: T): void {
    if (!this.isLocalStorageAvailable) { return; }

    localStorage.setItem(key, JSON.stringify(item));
  }

  public get<T>(key: string, def: T): T {
    let result: T = def;
    if (!this.isLocalStorageAvailable) { return result; }

    const data = localStorage.getItem(key);
    try {
      result = data ? JSON.parse(data) as T : def;
    } catch (e) {
      console.error(
        `Error while parsing data from localstorage for key: ${key}.
        Error is: ${e.message}, stack is: ${e.stack}`,
      );
    }

    return result;
  }

  public reset() {
    if (this.isLocalStorageAvailable) {
      localStorage.clear();
    }
  }

  public resetItem(key: string) {
    if (this.isLocalStorageAvailable) {
      localStorage.removeItem(key);
    }
  }

  public addListener(key: string, cb: () => void) {
    this.eventHandlers[key] = (event: StorageEvent) => {
      if (event.key === key) {
        cb();
      }
    };
    window.addEventListener('storage', this.eventHandlers[key]);
  }

  public removeListener(key: string) {
    window.removeEventListener('storage', this.eventHandlers[key]);
  }

  private checkVersion(version: string) {
    const currentVersion = this.getVersion();
    if (currentVersion !== version) {
      this.reset();
      this.saveVersion(version);
    }
  }

  private getVersion() {
    return this.get<string | null>('version', null);
  }

  private saveVersion(version: string) {
    this.set('version', version);
  }
}

export default LocalStorage;
