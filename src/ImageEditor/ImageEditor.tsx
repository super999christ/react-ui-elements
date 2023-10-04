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

interface ImageEditorProps {
  height?: number;
  disabled?: boolean;
  multiple?: boolean;
  store?: ImageStore; // store to upload image
  editorConfig?: EditorConfig;
  token?: string;
  uploadUrl?: string
  initialImages?: string[];
  onImageUpload?: (response: DoneCallback) => void;
}

export default function ImageEditor({
  height,
  disabled,
  multiple,
  store,
  editorConfig,
  token,
  initialImages,
  onImageUpload,
  uploadUrl
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
          console.log(response)
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

  const thumbs = derivedProcessedFiles.map((file, index) => {
    return (
      <div className={styles.thumbnail} key={index}>
        <div className={styles["thumbnail--overlay"]}>
          <span
            className={styles["overlay--button"]}
            onClick={() => removeImage(file)}
          >
            <FontAwesomeIcon icon={faTimes} size="sm" />
          </span>
        </div>
        <img src={file} alt="" />
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

  const dropzoneClasses = clsx(styles.dropzone, {
    [styles["dropzone--disabled"]]: disabled,
  });

  return (
    <div className={styles['dropzone-wrapper']} style={{ height }}>
      {(multiple || (!multiple && processedFiles.length === 0)) && (
        <div className={dropzoneClasses} {...getRootProps()} style={{ height }}>
          <input {...getInputProps()} className={styles['dropzone--input']} />
          Drag and Drop your image or
          <span className={styles['dropzone--underline ']}>Browse</span>
        </div>
      )}
      {processedFiles.length > 0 && (
        <div className={styles['processed-files--wrapper']}>{thumbs}</div>
      )}
    </div>
  );
}
