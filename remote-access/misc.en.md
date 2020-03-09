+++
title = "Miscellaneous questions"
layout = "faq"
hidden = true
tags = ["account", "technical environment"]
+++

## List accounts
The accounts list is viewable in several ways. Their contents are NOT reachable.

## `/tmp` directory

The `/tmp` directory is a shared by all users of a server. Although it is not recommended to use it, the files created on it are, by default, not readable by other users (thanks to `umask`). However, nothing prevents a program from creating a file in this directory and making it readable to all users.
