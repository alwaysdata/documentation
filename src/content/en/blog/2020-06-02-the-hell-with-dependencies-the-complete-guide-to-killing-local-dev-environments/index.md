---
title: "The Hell With Dependencies: The Complete Guide to Killing Local Dev Environments"
date: 2020-06-02
authors: ["Matthias Dugué"]
---

Have you ever dealt with a long term project, involving the embedding of a lot of (circular) dependencies, that ends up taking a full day to install locally, only to debug a small feature? Of course you have! We all know the awkward situation when you delay starting the debugging session simply because you don't want to run it locally.

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTUwZ2V5YnEzNnp0OHZyM3BmYmc5ZDBldHhuMWRreDczdjM4MWtxeCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/9PTaAhwri56V2/giphy.gif)

Well, here's the good news: you don't have to do that. Thanks to *remote debugging*, you can run your environment on your staging servers[^1] and work on it from your IDE! Let's look at how.

Web Development ecosystems have evolved a lot over the last few years. Not only frameworks and tooling, but often whole environments. The most visible change over the last 4 years has been the massive adoption of [VSCode](https://code.visualstudio.com/) as the main IDE used by most of Web Developers. Using Electron, based on JavaScript, sustained by [Microsoft Open Source teams](https://github.com/Microsoft/vscode), with improved stability and a real performance peak, and backed by a large community providing *a lot* of extensions, it's probably the best bet for your day-to-day tool.

A really cool tool provided by the Microsoft Dev team is a [set of extensions allowing you to work on remote machines](https://code.visualstudio.com/docs/remote/remote-overview) using various protocols, like the venerable SSH! Thanks to our platform, which gives you [SSH access by default](https://www.alwaysdata.com/en/services/ssh-sftp/), you can exploit these extensions easily.

Start your engines! Here's the complete guide!

## Pre-requisites

First, you need [VSCode](https://code.visualstudio.com/) (of course). Please note that the Remote Extensions can only work with the [official release](https://code.visualstudio.com/Download), not the OSS edition as this uses non-free components. Install this using your regular package manager (on Linux), or download the correct version for your OS.

You also need to enable key-based SSH access on your alwaysdata account. You can refer to the [official documentation on *Using SSH Keys*](https://help.alwaysdata.com/en/remote-access/ssh/use-keys/) if you're not comfortable with the process.

We recommend you rely on the SSH config file to declare your hosts, which will be easier to use inside VSCode. On your local machine, create a `$HOME/.ssh/config` file with the following content:

```
Host alwaysdata
    User [alwaysdata-account]
    HostName ssh-[alwaysdata-account].alwaysdata.net
    IdentityFile ~/.ssh/id_ed25519
```

Replace the `[alwaysdata-account]` with your alwaysdata's account name, and set the path to your SSH private key according to your local setup.

On Windows, you may have to [refer to this `config` file](https://code.visualstudio.com/docs/remote/ssh#_remember-hosts-and-advanced-settings) in the extension setup.

Ensure your SSH connection is ready by running `$ ssh alwaysdata` in your terminal. If you're logged onto alwaysdata's servers, you're ready!

![](https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzNnYml4emt0aWMyNGRvMXFwNHVld3pod25mZmp4bjE2bnQ4ZGc3diZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/LcfBYS8BKhCvK/giphy.gif)

## On the Server From Your Couch

Launch VSCode and go to the *Extensions Panel* (`Ctrl`+`Shift`+`X`) and install the [Remote - SSH](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) and [Remote - SSH: Editing Configuration Files](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh-edit).

Now, using the *Remote Explorer Panel*, or the *Command Palette > Remote-SSH: Connect to Host…* (`F1`), activate the connection to the `alwaysdata` host. After a while[^2], you will be connected to the remote alwaysdata server. You can see it in the *Status Bar* with the green notification `SSH: alwaysdata`. Let's do a test and try to *File > Open…* a file or folder: your Palette explorer should now display your remote environment! You can also see that the console (`Ctrl`+`` ` ``) is set to your remote environment too.

Congratulations! You're now remotely working from your local IDE to your remote alwaysdata account, without any differences! Now begins the real journey on *How to Remotely Full-Stack Debugging Your App*.

---

A quick note before diving in: when you're working remotely on our servers with the *Remote - SSH Extension*, VSCode considers the remote folder you've opened as the current workspace (as it does with local projects). In order to do this, it saves its config files in the usual `.vscode` hidden directory at the root of your remote project. We really recommend ignoring this folder in your versioning tool (like `.gitignore`) and not removing it from your remote environment.

In this guide, when we refer to some settings, they're workspace related, so are saved in this remote folder. Thanks to VSCode internals, the *Remote Explorer Panel* memorizes your remote workspaces, allowing you to reopen them quickly when you wish to start a new remote debugging session.

## JavaScript: One Language to Rule Them All

To illustrate this guide, we choose to focus on one language for both the backend and frontend. This is for example purposes only, and you can work on any kind of architecture you want. Just install the right debugger in VSCode, and you'll be fine. Keep in mind that alwaysdata supports [any kind of language you want](/en/docs/web-hosting/languages/), so feel free to pick the best choice for your needs!

Thanks to our [marketplace](https://www.alwaysdata.com/en/marketplace/), you can deploy a boilerplate of a large range of backend Web frameworks right from your account. In your administration panel, go to the *Web > Sites* section, click the *Install an application* button, pick up *Express.js* by clicking the gear wheel, and follow the installer instructions.

Now you have an [Express.js](https://expressjs.com/) app! Click on your URL to open a new window pointing to your brand new site, you should see the famous `Hello World!` welcome message! Now let's work on it from our local IDE.

A first thing to notice is how the same codebase will be used in different contexts: *development* and *production*. The site you've just accessed is a *production* version. We will work on the same codebase but run it from the SSH access, in *development* mode. This means every change we'll make won't be up on the *production* version until you restart your site from your administration panel.

This difference *production* vs *development* is only valid for persistent process languages, like Node.js, Python, Ruby... Transient state languages, like PHP, are systematically re-run on every request, so your changes will be applied immediately, without the need to restart your site.

In VSCode, open your remote workspace by activating the `alwaysdata` connection and open the folder just created by the marketplace installer. You're ready to dev!

To be able to run our app in development mode, let's first add a debug runner. Open the `package.json` file and add a `debug` script:

```json
{
  /* ... */
  "scripts": {
    "debug": "NODE_ENV=development node app.js"
  }
  /* ... */
}
```

As our app [expects the PORT environment variable](/en/docs/web-hosting/languages/nodejs/configuration/#environment) to know which port to listen to, let's try running it from the VSCode integrated terminal: `PORT=3000 npm run debug`. You should see a message that your app is ready. But you can't access the remote port from your local machine!

Fortunately, VSCode *Remote Extension* allows you to declare local port to forward[^3]. We at alwaysdata disable this for security reasons, but we've fortunately found a way to run VSCode Port Forwarding without compromising security issues!) to your remote environment. In the *Remote Explorer Panel*, add a new port to the *Forwarded Ports* section. Enter `3000`. Now, you should be able to point your browser to http://localhost:3000, and access your remote app in debug mode!

To avoid entering the forwarded ports each time you start a session, in the **local users' preferences**, tick the *Remote: Restore Forwarded Ports* option (or enter `"remote.restoreForwardedPorts": true` into your local `User/settings.json` file).

Fine, we're now able to run our app from VSCode and access it locally through forwarded ports. Now let's see how to really work and debug it!

## Run, Fail, Then Run Again

### See Behind the Code

Let's run our app attached to the VSCode debugger. It allows you to set breakpoints, and inspect your call stack, even remotely! Install the [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) extension. We will also edit our `debug` script to run it with inspect mode enabled:

```json
"debug": "NODE_ENV=development node --inspect=9321 app.js"
```

We run the inspector on an uncommon port to avoid any conflicts, especially with the final part of this guide. Feel free to ignore it right now however.

Now we need a debug task that will run our app and attach the debugger to it. Go to the *Run and Debug Panel* (`Ctrl`+`Shift`+`D`). The panel is actually empty. Click the *create a launch.json* link, and select *Node.js* in the opened Palette. The action will create a new `.vscode/launch.json` file in your remote environment (you can see it from your *Explorer Panel*). Fill it with the following configuration:

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Server Debug Mode",
            "runtimeExecutable": "npm",
            "runtimeArgs": [
                "--scripts-prepend-node-path=true",
                "run-script",
                "debug"
            ],
            "port": 9321,
            "env": {
                "PORT": "3000"
            },
            "skipFiles": [
                "<node_internals>/**"
            ]
        }
    ]
}
```

Here are some interesting settings:

- `runtimeExecutable`: we run the app through `npm`
- `runtimeArgs`: here's our `debug` script; we also add the `script-prepend-node-path` to avoid warnings due to the node binary path in the filesystem, which is specific to the alwaysdata architecture
- `port`: the port we previously choose to attach our node's inspector to
- `env`: the expected environment variables, here the port the Express.js app want to listen to

We're now ready to run our app with the debugger. Launch the Debugger with the green arrow in the *Run Panel* (or hit `F5`). Your *npm debug script* is run by VSCode, and you can still access your app in your browser.

Now open the `app.js` file, and put a breakpoint on the `res.send` line (6) by clicking the gutter (or hit `F9` when highlighting the line). Reload your browser. Your app should pause just before executing the `res.send` instruction and you can analyze and debug your app from the *Run and Debug Panel*!

### Lazy Times for Overbooked Developers

Sadly, having to re-run your app each time you edit the files is more than a bit tedious. Let's configure hot reloading on the server-side:

1. Install [Nodemon](https://www.npmjs.com/package/nodemon) on your project from the integrated terminal: `npm install --save-dev nodemon`
2. Edit the `debug` script in the `package.json` file to run the app with `nodemon`: `NODE_ENV=development nodemon --inspect=9321 --exitcrash app.js`
3. Edit the debugger configuration in the `launch.json` file by adding the `"restart": true` option, allowing the debugger to re-attach each time nodemon restarts the app

```json
"name": "Server Debug Mode",
"restart": true
```

Now run the debugger configuration again and reload your browser: you should be able to reach the app. Edit the Hello World! string and save the file. Your app is automatically reloaded and the debugger re-attached. Reload your browser: you've got the new message!

![](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdGs0bWZpNnAzanh4bDV3dXZsY2dsbGZ1NWV1N3NrZTg5cTc4cGdyZiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/l41lUJ1YoZB1lHVPG/giphy.gif)

As developers, we're often lazy: let's configure the browser to reload itself when the server app is reloaded too:

1. Install [livereload](https://www.npmjs.com/package/livereload) in your project: `npm install --save-dev livereload connect-livereload`
2. The livereload injector needs you to serve a valid HTML page to be able to inject the livereload script. Let's add [Pug](https://www.npmjs.com/package/pug) as a template engine, and [Helmet](https://www.npmjs.com/package/helmet) to manage security headers for our served pages: `npm install --save pug helmet`
3. Configure your app to render Pug templates, and enable LiveReload in *development* mode:

```js
const path = require('path')
const livereload = require('livereload')
const connectLivereload = require('connect-livereload')
const helmet = require('helmet')

const LIVERELOAD_PORT=35729
const app = express()

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", `localhost:${LIVERELOAD_PORT}`, "'unsafe-inline'", "'unsafe-eval'"],
    connectSrc: ["'self'", `ws://localhost:${LIVERELOAD_PORT}`]
  }
}))

if (process.env.NODE_ENV
&&  process.env.NODE_ENV === "development") {
  var livereloadServer = livereload.createServer()
  app.use(connectLivereload({
    port: LIVERELOAD_PORT
  }))
  livereloadServer.server.once('connection', () => {
    setTimeout( () => livereloadServer.refresh('/'), 100 )
  })
}
app.set('view engine', 'pug')
app.get('/', (req, res) => {
  res.render('index', {
    title: "Hello World!",
    message: "Hello World 😊 !"
  })
})
```

4. Create a `views/index.pug` file at the root of your project:

```pug
html
head
    title= title

body
    h1= message
```

5. In the *Remote Explorer Panel > Forwarded Ports Section*, add a new port to forward: `35729`, allowing your browser to access the livereload server.

Now run the debugger configuration again. Reload your browser, it should enable the LiveReload mode (visible as a *WebSocket* request in the *Network Panel*). Edit the message sent to the template. At the save, the app will be restarted, the debugger reattached to it, and your browser reloaded without any actions from your side!

## Debugger on Every Floor

### All in One

VSCode offers a large choice of extensions, giving you a fully integrated experience. So why not run and control our testing browser from our IDE directly? It's time to install the [Browser preview](https://marketplace.visualstudio.com/items?itemName=auchenberg.vscode-browser-preview) Extension.

Let's create a debugger configuration ready to run the *Browser Preview*. In your `launch.json` file, add a new configuration after the *Server Debug Mode* one:

```json
{
    "type": "browser-preview",
    "request": "launch",
    "name": "Browser Preview: Launch",
    "url": "http://localhost:3000"
}
```

Obviously running the Browser Preview without running the app in the background is perfectly useless. So let's create a *Compound* that will run both from our debugger. Still in the `launch.json` file, add a `compounds` entry right after the `configurations` one:

```json
"compounds": [
    {
        "name": "Client/Server",
        "configurations": ["Server Debug Mode", "Browser Preview: Launch"],
    }
]
```

Now in your *Run and Debug Panel*, select the `Client/Server` configuration, and run it. Your app is started in development mode with *Nodemon* and attached to the debugger, and a *Browser Preview Panel* should open, pointing to the app address[^4].

### Run, Forest!

We've got a Browser Preview, attached to the internal debugger. Let's see what we can do with it!

1. Create a `static/js/main.js` file at your project root level, with the following content:

```js
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('h1')
    .addEventListener('click', () => {
      alert("You didn't say the magic word!")
    })
})
```

2. Update our `index.pug`, load a `main.js` script into the page:

```pug
html
    head
        script(src="/js/main.js" defer)
```

3. Now edit our `app.js` to serve static files:

```js
app.use(express.static(path.join(__dirname, 'static')))
```

If you run the app right now, you should be able to click on the title and see the alert box popping in the VSCode notifications. But you can't access the files in the debugger, because it needs to be aware of the location of the files.

Edit the `Browser Preview: Launch` Configuration in `launch.json` file and add the mapping to the files:

```json
{
    "type": "browser-preview",
    "request": "launch",
    "name": "Browser Preview: Launch",
    "url": "http://localhost:3000",
    "pathMapping": {
        "/js/": "${workspaceRoot}/static/js/"
    }
}
```

Now run the debugger task again. Add a breakpoint in the `main.js` file. Click the title. Your script is paused and you can inspect the call stack from the integrated debugger inspector!

Let's finish by enabling live reloading of frontend assets too. Update the `app.js` file by adding the LiveReload `watch` instruction after creating the `livereloadServer`:

```js
var livereloadServer = livereload.createServer()
livereloadServer.watch(path.join(__dirname, 'static'))
```

You can now edit the `main.js` file and have your browser reloaded automatically!

![](https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2VvMnFteXBsb2g0MmRmeDRybGVyaDVsZnBjbHNpMGtmempkc2djaSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/GKrVGCgcUuKC4/giphy.gif)

This was a long journey and a long article just to give you some of the basics of **Full-Stack Remote Debugging**. What's incredibly useful is the possibility of keeping your codebase in your alwaysdata account, freeing your local environment of the complex stack to maintain.

You can run your code remotely in *development mode*, attach the backend to the local debugger, run your Web app in a Browser container, and run a second debugger in parallel, attached to this preview!

This gives you the ability to test and debug in a production-like environment with all the modern tooling you may expect. Even more fun: when your debugging session is done, you just have to restart your *Site* from your alwaysdata administration panel and your changes are online!

As previously mentioned, thanks to the VSCode ecosystem, debuggers are available for many modern backend languages like Python, Ruby, PHP, and more. No need to stick to JS, you can use this guide with any kind of language you host on your account.

We hope this will help you to improve your daily workflow. Want to know more about advanced use-cases of your alwaysdata account? Let us know in comments about how we can help you reach new levels in your everyday tasks!

[^1]: Maybe provisioned by your teammates DevOps
[^2]: During which VSCode installs the needed components remotely and starts a remote development server in the background.
[^3]: SCode relies on Port Forwarding and needs the SSH Server to have [AllowTCPForwarding](https://github.com/microsoft/vscode-remote-release/issues/92) enabled. We at alwaysdata disable this for security reasons, but we’ve fortunately found a way to run VSCode Port Forwarding without compromising security issues!
[^4]: Due to the way compounds are run, the Browser Preview may point to about:blank page instead of http://localhost:3000. There’s a workaround related to the ability to run pre-tasks (see [the issue](https://github.com/auchenberg/vscode-browser-preview/issues/114)). While waiting for the fix, you can manually update the address to load your app in the Preview Panel.
