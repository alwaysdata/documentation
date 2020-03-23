+++
title = "Miscellaneous questions"
layout = "faq"
hidden = true
tags = ["account", "technical environment"]
+++

## List accounts

The list of accounts can be visualized in different ways. For all of them, their contents are **not** accessible to others.

## `/tmp` directory

The `/tmp` directory is shared by all users on a server. Although we do not recommend using this, the files created here are, by default, not readable by other users, thanks to `umask`. However, we do not enforce file creation in this directory in a mode that makes it readable to all users.
pa
