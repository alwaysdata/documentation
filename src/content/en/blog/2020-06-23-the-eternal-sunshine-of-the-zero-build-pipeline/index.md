---
title: "The Eternal Sunshine of the Zero Build Pipeline"
description: "Serve frontend dependencies without an intermediate build"
date: 2020-06-23
authors: ["Matthias Dugué"]
---

So, you're involved in Web Dev Frontend. We reckon you've probably gotten mad over the last few years, as well as facing *JavaScript Fatigue* phenomenon because of the rapidly growing frontend ecosystem.

If so, then hang on the edge of your seat: in terms of frontend development the future is already here, and it's shiny 🤩!

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMTBlYjhnb2xoZnF4cHJ5OG5zdzNkaTJwbWQycWhuazAxdThvaXpxNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6Mbn3J84dYw00DVm/giphy.gif)

## In the Early Ages Came JavaScript…

… and then everything went faster and faster. With the arrival of Node.js, JS has become the new game-changer. Being able to run JavaScript on both backend and frontend sides meant being able to develop many new tools, new (small) libraries and new environments. Supported by the *NPM Registry*, it rapidly grew and is now the *de facto* language for any frontend dev tools, as well as for distributing dependencies.

Then came the reactive frontend frameworks, like *React*, *Vue.js*, or *Svelte*. With their brilliant patterns and separation of concerns, they constitute the fastest UI libraries available to develop complex interfaces in the browser.

Finally, the PWA Era. We now develop Web apps using Web technologies, but not necessarily related to Web sites. They are apps, like any other. Installable, they run in *chromeless* browsers like Electron or WebViews, and are indistinguishable from native examples.

So now it's 2020, and we're thinking outside the browser: JavaScript runs anywhere, we develop apps using web technologies, and we apply the same patterns as in native developments. All with the same caveats: as the JS ecosystem grew, the dependencies in our apps grew as well. We're now *compiling for the Web*. Like in native developments.

But there's a small, but significant, difference: we stream our apps. When you serve a PWA, you still rely on web principles. Your server sends an HTML page that requests its assets (images, JS bundled chunks, fonts, CSS, and so on). We serve tons of *Gb* each day to our users' browsers, and it's time to stop that flow!

## The Original Sin: the Packing

During the first days of the Web apps we had a new pattern to distribute chunks of JavaScript across projects as small libs: *CommonJS*. It was so useful it became the standard for distributing modules in the Node.js environment. The main problem was the inability of our browser VM to understand and exploit this format.

So we started to develop *loaders*, capable of loading and injecting CommonJS modules inside our main views source code. But this rapidly led to another flaw: we started to serve too many dependencies to the browser, bloating the connection.

So we created *bundlers*, like [Webpack](https://webpack.js.org/). They were in charge of collecting all your app dependencies and modules and outputting a single JS file your browser would be able to run. These quickly became packers, allowing you to apply changes and optimizations to your builds, and add mechanisms to import way more than just JS dependencies, including all other asset types!

Then we added pre-processors and transpilers, to write from new languages to JavaScript (like CoffeeScript, or TypeScript) followed by new tools for further optimizations, splitting assets into smaller chunks and serving them only when requested. Because performance matters a lot…

Our dev stack is now more complicated than it has ever been. We're in an endless race to add new tools that allow us to deal with the performance bucket. We did this because we needed tools, but our toolchain is now a horrible bloated process, which is extremely complex to understand and one that takes an eternity to start and compile each time you run a project or save a file.

Is this situation even still legitimate?

## Welcome to 2020: the Zero Build Pipeline

So, let's go through the list. What do we have nowadays in our toolbox?

1. *Native ES6 Modules*: so long to the CommonJS format, but its descendant, the *ES6 Module*, is way more efficient. It's supported natively by both [Node.js](https://nodejs.org/api/esm.html) and [browsers](https://caniuse.com/#feat=es6-module). No reasons to avoid it anymore.
2. *Pre-built libs*: [TypeScript](https://www.typescriptlang.org/) is in the course now[^1], and we've got a lot of new libraries that are developed with it. Even when built with VanillaJS, these modules can be optimized outside of our toolchain and distributed as is. No need to handle this on our project.
3. *A large ecosystem*: *NPM* is one of the largest and most used dependency registries. The entire JavaScript/TypeScript universe is full of great tools, useful libs, and pretty helpers, ready to be used without the need to embed them.
4. *HTTP/2*: Version 2 of the protocol is widely available and supported, and it shrinks a high number of requests. Indeed, it's probably more efficient to serve a bunch of small files with HTTP/2 rather than a big bundled one, thanks to its optimizations. And it will improve caching policies.
5. All our tools, from Unix to frontend dedicated utilities, offer a *CLI*, which allows the building of advanced pipelines.

So, this toolbox is rich in possibilities. It genuinely leads us to the **Bare Modules Devtools**. Here are the simple ideas behind the concept:

1. We use modules as they are distributed, in their ES6 Module format, without packing or bundling them anymore,
2. We rely on HTTP/2 to serve assets efficiently to keep a high-performance rate,
3. We keep to 0ms to start dev environment, by only serving raw files and modules and not modifying them in a *development* context,
4. We pre/post-process our source files using CLI directly (or with native tool capabilities) to avoid building complex new toolchains.

[Snowpack v2 just released](https://www.snowpack.dev/#get-started) in an early stage on May 5, and it's exactly what we needed to implement our concept! This new tool is both a dev tool, allowing you to run your apps in dev mode with no startup time, no bundling and fast updates, and a build tool where you can define and pipe tools to prepare your assets for production if needed.

## You Know Nothing

![](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2Fid2ZheWNtZ290ZDE3c2dzeTk1emZpZmZpenc5bjU1Mjd5MzFjNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o6ozsTeR2bs1hjBU4/giphy.gif)

Start by installing *Snowpack* as a dev dependency for your project:

```shell
$ cd my-frontend-project
$ npm install --save-dev snowpack@next
```

And that's all! It's now ready to handle your development process.

### Devtools

Snowpack will parse your project, looking for import statements, and then copy from the project's `node_modules` directory, or install them directly, to a `web_modules` directory.

From here, you can serve your web module assets and import them into your page:

```html
<html lang="en">
  <body>
    <canvas id="canvas"></canvas>
    <script type="module">
      import confetti from '/web_modules/canvas-confetti.js';
      confetti.create(document.getElementById('canvas'))({
        particleCount: 200,
        spread: 200
      })
    </script>
  </body>
</html>
```

Your scripts need to be declared in the HTML with the `type=module` attribute to enable the ES6 Module mode. And your assets are imported from the `web_modules` directory.

Simply run snowpack install from your project directory, and see how your `web_modules` is populated with your dependencies. You can also manage them [from your package.json file](https://www.snowpack.dev/#webdependencies) and with the [snowpack config entries](https://www.snowpack.dev/#config-files).

In *development mode*, this configuration allows you to declare useful features, like mount directives. They act like mountable points, allowing you to serve all your wanted assets from the built-in development server:

```json
{
  "snowpack": {
    "scripts": {
      "mount:public": "mount public --to /",
      "mount:web_modules": "mount web_modules"
    }
  }
}
```

Then simply run snowpack dev to get a full development server up and running, serving your assets, and refreshing at saving. With the `snowpack dev` command, there's no need to update the paths yourself: simply rely on the common `import * as React from 'react'` in your JS files, and Snowpack will convert the import path for you.

During the build phase, Snowpack simply copies your assets in a static format, allowing you to deploy them any way you want. It also adds a `--bundle` flag, allowing you to pass your source files to Parcel and optimize your production build using the existing toolchains.

You can also define your own *snowpack scripts*, to customize your build pipelines, like:

```json
{
  "scripts": {
    /* Build JS and JSX files with Babel */
    "build:js,jsx": "babel --filename $FILE",
    /* Pass CSS to PostCSS */
    "build:css": "postcss"
  }
}
```

---

The old model doesn't work anymore. Thanks to our new and powerful technologies, we don't need to pack and bundle our apps with their dependencies. Instead, we can focus on development rather than tooling.

This approach presents a good philosophy: it relies on existing tools to keep to a cross-compatible effort (like working with Parcel, Rollup, Babel… under the hood), it has zero lock-ins and you can fall back to any other build tool when you need, and it's fast to dev and run.

Snowpack is the first contender in this new universe, with many cool features including `import-maps`, proxying requests, *HMR*, etc. No doubt we will see other alternatives quickly[^2], and it's a good time to jump in the train of the *Bare Modules Development*!

[^1]: Did you know that you can run TypeScript on alwaysdata servers directly thanks to [Deno](/en/docs/web-hosting/languages/deno/)?
[^2]: Vue.js has already started to work on their own tool for Vue.js: [Vite](https://medium.com/@wearethreebears/getting-started-with-vite-a-no-bundler-dev-environment-for-vue-js-217a6eb7c9d0).
