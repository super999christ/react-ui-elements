import { PinturaDefaultImageWriterStoreState } from "@pqina/pintura";

export interface DoneCallback extends File {
  pintura: OnImageProcess
}


export interface PinturaImageFile extends File {
  pintura?: {
    file: any;
    data: any;
  };
}

export interface EditorConfig {
  aspectRatio?: number;
  quality?: number
  targetSize?: {
    width?: number;
    height?: number;
  };
  imageCropMinSize?: {
    width: number;
    height: number;
  };
  imageCropMaxSize?: {
    width: number;
    height: number;
  };
}

export interface FileType extends File {
  preview: string;
}

export interface StoreResponse {
  uploadURL?: string;
  status: number;
}

export interface OnImageProcess extends PinturaDefaultImageWriterStoreState {
  store: StoreResponse;
}
