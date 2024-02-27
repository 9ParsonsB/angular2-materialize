export {
  MaterializeDirective,
  MaterializeAction,
} from "./materialize-directive";
export { MaterializeModule } from "./materialize-module";

if (!("M" in window)) {
  throw new Error(
    "Couldn't find Materialize object on window. It is created by the materialize-css library. Please import materialize-css before importing angular2-materialize."
  );
}