import type { Plugin } from "vue";
import { useNanoDevtools } from "./devtools/devtools";
import { NanoInstance } from "./instance";

declare module "vue" {
  interface ComponentCustomProperties {
    $nano: typeof NanoInstance;
  }
}

export const NanoPlugin: Plugin = {
  install(app) {
    app.config.globalProperties.$nano = NanoInstance;

    // if dev, check
    useNanoDevtools(app);
  },
};
