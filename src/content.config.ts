import { defineCollection } from "astro:content";
import { docsLoader } from "@astrojs/starlight/loaders";
import { docsSchema } from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({ schema: docsSchema(), loader: docsLoader() }),
  //i18n: defineCollection({ schema: i18nSchema(), loader: i18nLoader() }),
};
