import type { Preview } from "@storybook/react";
import "@pqina/pintura/pintura.css";
import "../src/globals.css"
import "../src/datepicker.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;