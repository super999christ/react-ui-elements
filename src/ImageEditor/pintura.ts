// This function is called when the user select an image
import {
  openEditor,
  createDefaultImageReader,
  createDefaultImageWriter,
  markup_editor_defaults,
  plugin_finetune_defaults,
  createDefaultShapePreprocessor,
  locale_en_gb,
  plugin_crop_locale_en_gb,
  plugin_finetune_locale_en_gb,
  plugin_annotate_locale_en_gb,
  markup_editor_locale_en_gb,
  plugin_annotate,
  plugin_crop,
  plugin_finetune,
  setPlugins,
} from "@pqina/pintura";
import { DoneCallback, EditorConfig, OnImageProcess, PinturaImageFile } from "./types";
import { ImageStore } from "./ImageStore";

// This registers the plugins with Pintura Image Editor
setPlugins(plugin_crop, plugin_finetune, plugin_annotate);

// It opens the editor and returns the modified file when done
export const editImage = (
  image: PinturaImageFile,
  done: (dest: DoneCallback) => void,
  store?: ImageStore,
  editorConfig?: EditorConfig,
  token?: string,
  uploadUrl?: string,
  isCircle?: boolean
) => {
  const imageFile = image.pintura ? image.pintura.file : image;
  const imageState = image.pintura ? image.pintura.data : {};

  const editor = openEditor({
    src: imageFile,
    imageState,
    imageReader: createDefaultImageReader(),
    imageWriter: createDefaultImageWriter({
      targetSize: editorConfig?.targetSize,
      quality: editorConfig?.quality ?? 100,
      ...(store && { store: async (state) => store?.init(state, token, uploadUrl) })
    }),

    ...(editorConfig?.aspectRatio && { imageCropAspectRatio: editorConfig.aspectRatio }),
    ...(editorConfig?.imageCropMinSize && { imageCropMinSize: editorConfig.imageCropMinSize }),
    ...(editorConfig?.imageCropMaxSize && { imageCropMaxSize: editorConfig.imageCropMaxSize }),

    // Set Markup Editor defaults
    ...markup_editor_defaults,

    // Set Finetune plugin defaults
    ...plugin_finetune_defaults,

    // This handles complex shapes like arrows / frames
    shapePreprocessor: createDefaultShapePreprocessor(),

    // This will set a square crop aspect ratio

    // Set locale
    locale: {
      ...locale_en_gb,
      ...plugin_crop_locale_en_gb,
      ...plugin_finetune_locale_en_gb,
      ...plugin_annotate_locale_en_gb,
      ...markup_editor_locale_en_gb,
    },
    ...(editorConfig?.aspectRatio === 1 && isCircle && { 
      willRenderCanvas: (shapes, state) => {
        const {
            utilVisibility,
            selectionRect,
            lineColor,
            backgroundColor,
        } = state;

        // Exit if crop utils is not visible
        if (utilVisibility.crop <= 0) return shapes;

        // Get variable shortcuts to the crop selection rect
        const { x, y, width, height } = selectionRect;

        return {
            // Copy all props from current shapes
            ...shapes,

            // Now we add an inverted ellipse shape to the interface shapes array
            interfaceShapes: [
                {
                    x: x + width * 0.5,
                    y: y + height * 0.5,
                    rx: width * 0.5,
                    ry: height * 0.5,
                    opacity: utilVisibility.crop,
                    inverted: true,
                    backgroundColor: [...backgroundColor, 0.5],
                    strokeWidth: 1,
                    strokeColor: [...lineColor],
                },
                // Spread all existing interface shapes onto the array
                ...shapes.interfaceShapes,
            ],
        };
      }
    }),
  });

  editor.on("close", () => {
    // the user cancelled editing the image
  });

  editor.on("process", ({ dest, imageState, src, store }: OnImageProcess) => {
    const result: DoneCallback = Object.assign(dest, {
      pintura: { dest, imageState, src, store },
    });
    done(result);
  });
};
