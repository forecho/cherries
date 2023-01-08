import siteJson from "./site.json";
import resourcesJson from "./resources.json";
import {DefaultSeoProps} from "next-seo";

export interface Site {
  keywords: string;
  favicon: string;
  seo: DefaultSeoProps;
}
export interface ResourceItem {
  title: string;
  description?: string;
  url: string;
  logo: string;
}
export interface Resource {
  title: string;
  site: ResourceItem[];
  icon: string;
}

export const site = siteJson as Site;
export const resources = resourcesJson as Resource[];
