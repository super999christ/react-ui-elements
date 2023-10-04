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
      `${this._config.uploadUrl}`,
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
    token?: string,
    uploadUrl?: string
  ): Promise<ImageWriterStoreState> {
    if (token) this._config.token = token
    if (uploadUrl) this._config.uploadUrl = uploadUrl

    if (!this._config.token) {
      console.error("Missing user token in upload request. Provide it through the store or as props in ImageEditor component.")
      throw new Error("Missing user token in request.")
    }

    if (!this._config.uploadUrl) {
      console.error("Missing upload URL to obtain presigned S3 upload URL. Provide it in store or as prop in ImageEditor component.")
      throw new Error("Missing upload URL in config.")
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
