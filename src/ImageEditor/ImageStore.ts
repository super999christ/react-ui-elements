import {
  PinturaDefaultImageWriterStoreState,
} from "@pqina/pintura";

export interface ImageStoreConfig {
  token?: string;
  bucketPath: string;
}

export abstract class ImageStore {
  protected _config: ImageStoreConfig;

  protected constructor(config: ImageStoreConfig) {
    this._config = config;
  }

  abstract _upload(file: File): Promise<any>;

  abstract init(state: PinturaDefaultImageWriterStoreState, token?: string): Promise<any>;
}
