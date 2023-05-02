/// <reference types="vite/client" />
declare module "*.svg" {
  import { ComponentType } from "react";

  const content: ComponentType<React.SVGProps<SVGSVGElement>>;
  export default content;
}
