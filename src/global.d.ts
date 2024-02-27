import { M } from "@materializecss/materialize";

declare global {
  interface Window {
    M: M;
    $: JQueryStatic;
  }
}
