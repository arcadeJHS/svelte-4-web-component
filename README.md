# Build Custom Elements (Web Components) from a Svelte 4 Components Library

Build Svelte components defined in `src/lib` into framework-agnostic custom elements.

Uses Svelte's Custom Elements API:

https://svelte.dev/docs/custom-elements-api

## How To

1. Create a Svelte component in `src/lib` (e.g., `Counter.svelte`).
   
2. Add the Svelte element on top of the component source code: `<svelte:options customElement="PREFIX-counter" />` (see https://svelte.dev/docs/custom-elements-api).

    > **Note:** The "PREFIX-" prefix allows you to define prefixed custom elements. See the section about `vite.config.js` for further explanations.

3. Inside the file ```vite.build.components``` define the prefix for your components, and list the Svelte components you would like to build as custom elements. For instance:

    ```js
    export const PREFIX = 'stg';

    export const COMPONENTS = [
    { tag: 'counter', entry: 'src/lib/Counter.svelte' },
    { tag: 'counter-added', entry: 'src/lib/CounterAdded.svelte' }
    ];
    ```

4. Run ```npm run build```.

5. Then include in a html page one of the js file generated (see an example inside the DEMO folder):
   
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Components DEMO - mjs</title>
    <style>
        /* Your CSS styles go here */
    </style>
</head>
<body>
    <stg-counter></stg-counter>
    <stg-counter-added></stg-counter-added>

    <!-- 
    Most modern browsers support ES modules. 
    However, there are still some relatively recent browsers that do not support <script type="module">. 
    Here are a few:
        - Internet Explorer 11 and earlier: Internet Explorer does not support ES modules at all.
        - Microsoft Edge (Legacy): The legacy version of Microsoft Edge (before the switch to Chromium) does not support ES modules.
        - Safari 10.1 and earlier: Safari added support for ES modules in version 11.
        - Firefox 59 and earlier: Firefox added support for ES modules in version 60.
        - Chrome 60 and earlier: Chrome added support for ES modules in version 61.
    -->
    
    <!-- Load ES module scripts - if supported by the web browser -->
    <script type="module" src="stg-counter.m.js"></script>
    <script type="module" src="stg-counter-added.m.js"></script>
    
    <!-- Fallback for older browsers - if the browser does not support script type="module" and es files -->
    <script nomodule src="stg-counter.umd.js"></script>
    <script nomodule src="stg-counter-added.umd.js"></script>
</body>
</html>
```

## Develop

Run:

```bash
npm run dev
```

## Build for Production

Run:

```bash
npm run build
```

## How It Works

The setup doesn't use SvelteKit, but instead implements a Vite + Svelte template (https://svelte.dev/docs/introduction#start-a-new-project-alternatives-to-sveltekit).

The main files involved are:

### package.json

It defines two scripts to develop and build for production:     

```json
{
  "scripts": {
    "build": "node vite.build.js build",
    "dev": "node vite.build.js dev"
  }
}
```

### vite.build.components.js

This file defines the prefix for your components, and list the Svelte components you would like to build as custom elements. For instance:

```js
/**
 * Prefix your custom elements.
 * For instance, given a tag "counter", 
 * the prefix 'stg' will build an element "stg-counter", 
 * to use in your HTML file as "<stg-counter></stg-counter>"
 */
export const PREFIX = 'stg';

/**
 * Here you can list the Svelte components you want to build as custom elements.
 * "tag" is the tag name you want to use (without prefix)
 */
export const COMPONENTS = [
    { tag: 'counter', entry: 'src/lib/Counter.svelte' },
    { tag: 'counter-added', entry: 'src/lib/CounterAdded.svelte' }
];
```

### vite.build.js

`vite.build.js` will take each item defined in `vite.build.components.js` and run a build step, calling `vite.config.js` with parameters to build the Svelte component into a custom element.

### vite.config.js

This is a parameterized version of a vite.config.js file.

It is called by the vite.build.js script to generate each defined element.

In the `build.lib` section, note:

```javascript
fileName: (format) => {
    if (format === 'es') {
        return `${libraryPrefix}${componentTag}.m.js`;
    }
    if (format === 'umd') {
        return `${libraryPrefix}${componentTag}.umd.js`;
    }
}
```

This will create a `<component-tag>.m.js` file for **ES** files, and a `<component-tag>.umd.js` file for the **UMD** version.

Also note the use of the "@rollup/plugin-replace" plugin:

```javascript
replace({
    preventAssignment: true,
    'PREFIX-': libraryPrefix ?? '',
}),
```

This is related to Svelte's `<svelte:options customElement="PREFIX-counter" />` element definition and helps define an element/library prefix.

### svelte.config.js

Svelte comiler configuration.

In the contest of custom elements, this is required:

```js
compilerOptions: { 
    customElement: true 
}
```

# Svelte + Vite

This template should help get you started developing with Svelte in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode).

## Need an official Svelte framework?

Check out [SvelteKit](https://github.com/sveltejs/kit#readme), which is also powered by Vite. Deploy anywhere with its serverless-first approach and adapt to various platforms, with out of the box support for TypeScript, SCSS, and Less, and easily-added support for mdsvex, GraphQL, PostCSS, Tailwind CSS, and more.

## Technical considerations

**Why use this over SvelteKit?**

- It brings its own routing solution which might not be preferable for some users.
- It is first and foremost a framework that just happens to use Vite under the hood, not a Vite app.

This template contains as little as possible to get started with Vite + Svelte, while taking into account the developer experience with regards to HMR and intellisense. It demonstrates capabilities on par with the other `create-vite` templates and is a good starting point for beginners dipping their toes into a Vite + Svelte project.

Should you later need the extended capabilities and extensibility provided by SvelteKit, the template has been structured similarly to SvelteKit so that it is easy to migrate.

**Why `global.d.ts` instead of `compilerOptions.types` inside `jsconfig.json` or `tsconfig.json`?**

Setting `compilerOptions.types` shuts out all other types not explicitly listed in the configuration. Using triple-slash references keeps the default TypeScript setting of accepting type information from the entire workspace, while also adding `svelte` and `vite/client` type information.

**Why include `.vscode/extensions.json`?**

Other templates indirectly recommend extensions via the README, but this file allows VS Code to prompt the user to install the recommended extension upon opening the project.

**Why enable `checkJs` in the JS template?**

It is likely that most cases of changing variable types in runtime are likely to be accidental, rather than deliberate. This provides advanced typechecking out of the box. Should you like to take advantage of the dynamically-typed nature of JavaScript, it is trivial to change the configuration.

**Why is HMR not preserving my local component state?**

HMR state preservation comes with a number of gotchas! It has been disabled by default in both `svelte-hmr` and `@sveltejs/vite-plugin-svelte` due to its often surprising behavior. You can read the details [here](https://github.com/sveltejs/svelte-hmr/tree/master/packages/svelte-hmr#preservation-of-local-state).

If you have state that's important to retain within a component, consider creating an external store which would not be replaced by HMR.

```js
// store.js
// An extremely simple external store
import { writable } from 'svelte/store'
export default writable(0)
```
