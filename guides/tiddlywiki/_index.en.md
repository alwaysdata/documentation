+++
title = "Installing TiddlyWiki"
layout = "howto"
hidden = true
tags = ["marketplace", "tiddlywiki"]
+++

[TiddlyWiki](https://tiddlywiki.com/) is a "non-linear web notebook". It is dedicated to organizing snippets of information (such as *notes*, *images*, and more) by saving them and smartly link them. It can be served as a static HTML file or using a [Node.js]({{<ref "languages/nodejs">}}) site.

## Install Using the [Marketplace]({{<ref "marketplace">}})

Our Marketplace offers a script to install TiddlyWiki automatically. In your administration panel, go to the **Web > Sites** section, click on the *Install an application* button, and select the *TiddlyWiki* entry by clicking on the cogwheel.

Fill in the fields according to your preference, and run the installer.

## Manually

### Use a Static File and WebDAV

You can simply use the WebDAV remote access to edit your TiddlyWiki and serve it publicly in read-only mode using the *static* site type:

1. Get the latest empty TiddlyWiki at [the download page](https://tiddlywiki.com/#GettingStarted)
2. Using [FTP]({{<ref "remote-access/ftp">}}) or [SFTP]({{<ref "remote-access/sftp">}}), upload the file to your account (e.g. `$HOME/notes/wiki/index.html`)
3. Open your browser and point it to `https://webdav-[account].alwaysdata.net/[path/from/HOME]/[filename].html` (e.g. `https://webdav-[account].alwaysdata.net/notes/wiki/index.html`), and use your *account username* and *account password* credentials to authenticate on the basic auth window (you can also create a dedicated [WebDAV user]({{<ref "remote-access/webdav/create-a-webdav-user">}}) to do so)

You can now edit you TiddlyWiki, the *saving* action will pass through the WebDAV protocol to update the remote HTML file.

If you want to access it from a public URL in a read-only mode (without auth), create a new [static site]({{<ref "sites/static-files">}}) in your **Web > Sites** section. Use the directory you uploaded your file to as the `Root directory` directive.

### Use the Node.js Server Version

If you want to use more advanced features, like authentication, you can use the Node.js version:

1. Login through [SSH]({{<ref "remote-access/ssh">}})

2. Install globally the TiddlyWiki package *via* npm:

    ```sh
    $ npm install --global tiddlywiki
    ```

3. Create a new repository for your notebook:

    ```sh
    $ tiddlywiki $HOME/[path/to/repository] --init server
    ```

4. Create a new [Node.js]({{<ref "languages/nodejs">}}) site:
   - Node.js version: min. *10.x*
   - Command: `~/.npm-packages/bin/tiddlywiki . --listen host=$IP port=$PORT`
   - Working directory: `[path/to/repository]`

## Authentication

You can add a basic auth layer on your TiddlyWiki served by Node.js:

1. In your notebook repository (where the `tiddlywiki.info` file is located), create a `users.csv` file with the following content:

    ```csv
    username,password
    [user1],[pwd1]
    [user2],[pwd2]
    ...
    ```

2. Edit the `Command` field in the *Site* configuration, and add `credentials=users.csv "readers=(authenticated)" "writers=user1,user2"`

    - replace `(authenticated)` by `(anon)` to allow a public read-only access
    - users login can be used as well as `readers` as `writers` to set fine-grained access permissions
