import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private nStorage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    console.log("Storage initializing...");
    this.nStorage = storage;
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public async set(key: string, value: any) {
    console.log("Storage setting for: ", key);
    return await this.nStorage.set(key, value);
  }

  public async get(key: string): Promise<{ value: any }> {
    console.log("Storage getting for key: ", key);
    console.log("Storage getting for value: ", await this.nStorage.get(key));
    return await this.nStorage.get(key);
  }

  async removeItem(key: string) {
    return await this.nStorage.remove(key);
  }

  async clear() {
    return await this.nStorage.clear();
  }

  async keys(){
    return await this.nStorage.keys();
  }
}
