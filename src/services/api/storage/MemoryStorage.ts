import EventEmitter from 'events';
import { IStorage } from './namespace';

class MemoryStorage implements IStorage {
  private data: { [key: string]: string } = {};
  private emitter = new EventEmitter();
  private eventHandlers: Record<string, (e: StorageEvent) => void> = {};

  public set<T>(key: string, item: T): void {
    this.data[key] = JSON.stringify(item);
    this.emitter.emit('memoryStorage', {
      key,
      newValue: JSON.stringify(item),
      oldValue: this.data[key],
    } as StorageEvent);
  }

  public get<T>(key: string, def: T): T {
    const result = this.data[key] || null;
    this.emitter.emit('memoryStorage', {
      key,
      newValue: result,
      oldValue: this.data[key],
    } as StorageEvent);
    const parsed = result ? JSON.parse(result) as T : def;

    return parsed;
  }

  public reset() {
    this.data = {};
    this.emitter.emit('memoryStorage', {
      newValue: null,
      oldValue: JSON.stringify(this.data),
    } as StorageEvent);
  }

  public resetItem(key: string) {
    this.emitter.emit('memoryStorage', {
      key,
      oldValue: JSON.stringify(this.data[key]),
    } as StorageEvent);
    delete this.data[key];
  }

  public addListener(key: string, cb: () => void) {
    this.eventHandlers[key] = (event: StorageEvent) => {
      if (event.key === key) {
        cb();
      }
    };
    this.emitter.on('memoryStorage', this.eventHandlers[key]);
  }

  public removeListener(key: string) {
    this.emitter.removeListener('memoryStorage', this.eventHandlers[key]);
  }
}

export default MemoryStorage;
