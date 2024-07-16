import { GLOBAL_COMPONENTS } from "@/components/global-components";
import type { App } from "vue";

export const GLOBAL_COMPONENTS_PLUGIN = {
  install(app: App<Element>) {
    for (const key in GLOBAL_COMPONENTS) {
      app.component(key, (GLOBAL_COMPONENTS as { [key: string]: any })[key]);
    }
  },
};
