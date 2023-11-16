import React from "react";
import { useState, useEffect, useCallback } from "react";

import styles from "./ImageEditor.module.css";

// React Dropzone
import { useDropzone } from "react-dropzone";

import clsx from "clsx";
import { DoneCallback, EditorConfig, FileType } from "./types";
import { editImage } from "./pintura";
import { ImageStore } from "./ImageStore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/pro-light-svg-icons";

export type ClearIndicatorPositionType = 'center' | 'top-right';

interface ImageEditorProps {
  children?: React.ReactNode;
  disabled?: boolean;
  editorConfig?: EditorConfig;
  isCircle?: boolean;
  width?: number;
  height?: number;
  initialImages?: string[];
  multiple?: boolean;
  store?: ImageStore; // store to upload image
  token?: string;
  uploadUrl?: string;
  onImageUpload?: (response: DoneCallback) => void;
  onClearImage?: () => void;
  clearIndicatorPosition?: ClearIndicatorPositionType;
}

export default function ImageEditor({
  children,
  isCircle,
  width,
  height,
  disabled,
  multiple,
  store,
  editorConfig,
  token,
  initialImages,
  onImageUpload,
  uploadUrl,
  onClearImage,
  clearIndicatorPosition = 'center',
}: ImageEditorProps) {
  const [files, setFiles] = useState<FileType[]>([]);
  const [processedFiles, setProcessedFiles] = useState<string[]>(() => {
    if (initialImages) {
      return initialImages;
    }

    return [];
  });
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    multiple,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  useEffect(() => {
    if (files && files.length > 0) {
      editImage(
        files[0],
        (response) => {
          if (onImageUpload) {
            onImageUpload(response);
          }
          if (response.pintura.store && response.pintura.store.uploadURL) {
            setProcessedFiles([
              ...processedFiles,
              response.pintura.store.uploadURL,
            ]);
          } else {
            setProcessedFiles([
              ...processedFiles,
              URL.createObjectURL(response.pintura.dest),
            ]);
          }
        },
        store,
        editorConfig,
        token,
        uploadUrl
      );
    }
  }, [files, token, uploadUrl]);

  const derivedProcessedFiles = processedFiles || initialImages;

  const removeImage = useCallback(
    (fileName: string) => {
      setProcessedFiles(processedFiles.filter((item) => item !== fileName));
    },
    [processedFiles]
  );

  const thumbnailOverlayClasses = clsx(styles["thumbnail--overlay"], {
    [styles['thumbnail--overlay-top-right']]: clearIndicatorPosition === 'top-right',
  });

  const imgClasses = clsx({
    [styles["img-circle"]]: isCircle,
  });

  const thumbs = derivedProcessedFiles.map((file, index) => {
    return (
      <div className={styles.thumbnail} key={index}>
        <div className={thumbnailOverlayClasses}>
          <span
            className={styles["overlay--button"]}
            onClick={() => {
              if (onClearImage) {
                onClearImage();
              }
              removeImage(file);
            }}
          >
            <FontAwesomeIcon icon={faTimes} size="sm" />
          </span>
        </div>
        <img className={imgClasses} src={file} alt="" />
      </div>
    );
  });

  useEffect(
    () => () => {
      // Make sure to revoke the Object URL to avoid memory leaks
      processedFiles.forEach((file) => URL.revokeObjectURL(file));
    },
    [processedFiles]
  );

  useEffect(
    () => () => {
      // Make sure to revoke the Object URL to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );

  const wrapperClasses = clsx(styles["dropzone-wrapper"]);

  const dropzoneClasses = clsx(styles.dropzone, {
    [styles["dropzone--disabled"]]: disabled,
    [styles["circle-wrapper"]]: isCircle,
  });

  const processedFileClasses = clsx(styles["processed-files--wrapper"]);

  return (
    <div className={wrapperClasses} style={{ width, height, ...(isCircle ? { flexShrink: 0 } : {}) }}>
      {(multiple || (!multiple && processedFiles.length === 0)) && (
        <div className={dropzoneClasses} {...getRootProps()} style={{ height }}>
          <input {...getInputProps()} className={styles["dropzone--input"]} />
          {children ? (
            children
          ) : (
            <>
              Drag and Drop your image or
              <span className={styles["dropzone--underline "]}>Browse</span>
            </>
          )}
        </div>
      )}
      {processedFiles.length > 0 && (
        <div className={processedFileClasses}>{thumbs}</div>
      )}
    </div>
  );
}
