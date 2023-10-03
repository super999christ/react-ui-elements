import {
  PinturaDefaultImageWriterStoreState,
} from "@pqina/pintura";
import { ImageStore, ImageStoreConfig } from "./ImageStore";
import { StoreResponse } from "./types";

interface ImageWriterStoreState extends PinturaDefaultImageWriterStoreState {
  store?: any;
}

class PickleballS3ImageStore extends ImageStore {
  constructor(config: ImageStoreConfig) {
    super(config);
  }

  async _getPresignedUrl(key: string, contentType: string) {
    const psUrl = await fetch(
      "https://images-uploader.pickleballdev.net/request",
      {
        method: "POST",
        body: JSON.stringify({
          key,
          contentType,
        }),
        headers: {
          "Content-Type": "application/json",
          "PB-USER-TOKEN": `${this._config.token}` 
        },
      }
    );

    const result: { presignedURL: string } = await psUrl.json();

    return result.presignedURL;
  }

  async _upload(file: File): Promise<StoreResponse> {
    try {
      const key = `${this._config.bucketPath}/${Date.now()}/${
        file.name
      }`.replace(/\s/g, "");
      const contentType = file.type;
      const presignedURL = await this._getPresignedUrl(key, contentType);
      const response = await fetch(presignedURL, {
        method: "PUT",
        body: file,
        headers: {
          "Content-Type": contentType,
        },
      });
      if (response.status === 200) {
        return {
          uploadURL: `https://images.pickleball.com/${key}`,
          status: 200,
        };
      } else {
        console.log(
          "Something wrong happened and we were not able to process the image."
        );
        return {
          status: 500,
        };
      }
    } catch (e) {
      console.log("Could not upload image.");
      return { status: 500 };
    }
  }

  async init(
    state: PinturaDefaultImageWriterStoreState,
    token: string
  ): Promise<ImageWriterStoreState> {
    if (token) this._config.token = token

    if (!this._config.token) {
      throw new Error("Missing user token in request.")
    }

    const { dest } = state;
    const storeResponse = await this._upload(dest);

    return {
      ...state,
      store: storeResponse,
    };
  }

  getConfig() {
    return this._config;
  }
}

export const createS3ImageStore = (config: ImageStoreConfig) =>
  new PickleballS3ImageStore(config);
