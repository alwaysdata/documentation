+++
title = "Add a PHP Library"
hidden = true
layout = "howto"
tags = ["php"]
+++

Editing a file in `/etc/ld.so.conf.d` changes the overall system configuration, which is not compatible with the alwaysdata infrastructure.

There are two solutions:

- set the environment variable `LD_LIBRARY_PATH`, which would then be set to `/home/[account]/[library]`[^1]. It can be complex to ensure that it is defined in all cases.

- modify directly in the `.so` file the path of the rpath, with the command :

```sh
$ chrpath -r /home/[account]/[library]/ ~/[library]/[library].so
```

Each time this file is loaded, the `/home/[account]/[library]/` directory will be used to resolve dependencies.

It only remains to add the path to the `.so` in the `php.ini` via the **Environment** menu (or in **Web > Sites** in the case of a custom php.ini).


[^1]: [account] and [library] to be replace by their names.
