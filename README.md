# Angular2 Materialize

[![NPM](https://nodei.co/npm/angular2-materialize.png?downloads=true)](https://www.npmjs.com/package/angular2-materialize)
[![NPM](https://nodei.co/npm-dl/angular2-materialize.png?height=2&months=12)](https://www.npmjs.com/package/angular2-materialize)

Angular 2 support for Materialize CSS framework [http://materializecss.com/](http://materializecss.com/)

To use the library you need to import it once per project and then use its MaterializeDirective directive for binding it to any component that needs a dynamic behavior, like collapsible panels, tooltips, etc.

## Using angular2-materialize

Start by following the Angular CLI or webpack instructions below to add the required dependencies to your project.

Add the MaterializeModule to your NgModule:
```js
import { MaterializeModule } from "angular2-materialize";

@NgModule({
  imports: [
    //...
    MaterializeModule,
  ],
  //...
})
```

In your component, use it for dynamic behavior. For example, for collapsible panels:
```js
@Component({
    selector: "my-component",
    template: `
        <ul materialize="collapsible" class="collapsible" data-collapsible="accordion">
          <li>
            <div class="collapsible-header"><i class="material-icons">filter_drama</i>First</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">place</i>Second</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
          <li>
            <div class="collapsible-header"><i class="material-icons">whatshot</i>Third</div>
            <div class="collapsible-body"><p>Lorem ipsum dolor sit amet.</p></div>
          </li>
        </ul>

```

Apply an empty [MaterializeDirective](https://github.com/9parsonsb/angular2-materialize/blob/master/src/materialize-directive.ts) attribute directive for top level components, like forms:
```html
<form materialize class="col s12">
  <div class="row">
    <div class="input-field col s6">
      <input placeholder="Placeholder" id="first_name" type="text" class="validate">
      <label for="first_name">First Name</label>
    </div>
  </div>
</form>
```

The [MaterializeDirective](https://github.com/9parsonsb/angular2-materialize/blob/master/src/materialize-directive.ts) attribute directive (**materialize**) accepts any MaterializeCSS initialization call to apply to the element. The list of supported functions are provided by MaterializeCSS. Examples: collapsible, modal, tooltip, dropdown, tabs, material_select, sideNav, etc.

For example, to apply tooltip:
```html
<a materialize="tooltip" class="btn tooltipped" data-position="bottom" data-delay="50" data-tooltip="I am tooltip">Hover me!</a>
```

The [Materialize](https://github.com/9parsonsb/angular2-materialize/blob/master/src/materialize.ts) attribute directive also allows specifying parameters to be passed to the function, but providing a **materializeParams** attribute returning an array of params. Use it with a function call or even by inlining the params in the HTML.

Another useful option is emitting actions on an element. You may want to do that for calling Materialize functions, like closing a modal dialog or triggering a toast. You can do that by setting the **materializeActions** attribute, which accepts an [EventEmitter](https://angular.io/docs/ts/latest/api/core/index/EventEmitter-class.html). The emitted events can either be a "string" type action (Materialize function call) or a structure with action and parameters:

The example below shows how you'd create a modal dialog and use the actions to open or close it.
```html
<!-- Modal Trigger -->
<a class="waves-effect waves-light btn modal-trigger" (click)="openModal()">Modal</a>

<!-- Modal Structure -->
<div id="modal1" class="modal bottom-sheet" materialize="modal" [materializeParams]="[{dismissible: false}]" [materializeActions]="modalActions">
  <div class="modal-content">
    <h4>Modal Header</h4>
    <p>A bunch of text</p>
  </div>
  <div class="modal-footer">
    <a class="waves-effect waves-green btn-flat" (click)="closeModal()">Close</a>
    <a class="modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
  </div>
</div>
```
```js
  import {MaterializeAction} from 'angular2-materialize';
  //...
  modalActions = new EventEmitter<string|MaterializeAction>();
  openModal() {
    this.modalActions.emit({action:"modal",params:['open']});
  }
  closeModal() {
    this.modalActions.emit({action:"modal",params:['close']});
  }
```

For dynamic select elements apply the **materializeSelectOptions** directive to trigger element updates when the options list changes:
```html
<select materialize="material_select" [materializeSelectOptions]="selectOptions">
  <option *ngFor="let option of selectOptions" [value]="option.value">{{option.name}}</option>
</select>
```

## Installing & configuring angular2-materialize in projects created with the Angular CLI

Install MaterializeCSS and angular2-materialize from npm

Edit the angular-cli.json :
* Go to section apps and find styles array inside it (with only styles.css value by default), add the following line inside array before any styles:

```
  "../node_modules/materialize-css/dist/css/materialize.css"
```

* Go to section apps and find scripts array inside it, and add the following lines inside array

```
  "../node_modules/materialize-css/dist/js/materialize.js"
```

Add to the top of app.module.ts

```
import { MaterializeModule } from 'angular2-materialize';

```

Add MaterializeModule inside imports array of @NgModule decorator in app.module.ts

Add this line to header of index.html
```
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Installing and configuring angular2-materialize with webpack

Install MaterializeCSS and angular2-materialize from npm
```sh
npm install materialize-css --save
npm install angular2-materialize --save
```

Add the Google MD fonts to your index.html:
```html
<link href="http://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

Import materialize-css styles:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.2/css/materialize.min.css">
```

Import MaterializeCSS programatically, in the same place where you import angular2-materialize module (usually in your main module, or shared module):
```js
import 'materialize-css';
import { MaterializeModule } from 'angular2-materialize';
```
