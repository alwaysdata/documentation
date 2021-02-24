+++
title = "PHP Troubleshooting"
layout = "man"
hidden = true
tags = ["troubleshooting", "php"]
+++

## Blocked sessions

Every time a PHP session is started, a file is created (`session.save_path`) comprising all of its information and allocating it an ID. When a user returns, they provide this ID so that `session_start()` can retrieve the session data. Every time `session_start()` is started, the session file is locked using `flock`.

This may cause problems when two PHP processes attempt to simultaneously access the same PHP session: the second has to wait until the first one ends before it can run to avoid competitive incidents. Consequently, this causes slowdowns or unavailabilities.

The analysis of your HTTP processes returns:

```sh
$ strace -f -p1821543 -p1822026 
Process 1821543 attached
Process 1822026 attached
[pid 1821543] flock(8, LOCK_EX <unfinished ...>
[pid 1822026] flock(8, LOCK_EX
```

This [documentation](https://ma.ttias.be/php-session-locking-prevent-sessions-blocking-in-requests/) will provide you with more information and solutions for correcting these problem sessions.

## Error messages

### Fatal error: Allowed memory size of 268435456 bytes exhausted

You have reached the 256 Mbyte limit, the default value for `memory_limit` in PHP. You can increase this value in **Environment > PHP** or from the site itself in **Web > Sites > Details** for the relevant site.

## Use several versions in SSH

To use in SSH another PHP version and/or configuration than the one indicated in **Environment > PHP**, it is possible to use the following commands:

```sh
$ export PHP_VERSION=<version>
$ export PHPRC=/path/to/php.ini
```

or else for the `php.ini`:

```sh
$ php -c /path/to/php.ini
```
