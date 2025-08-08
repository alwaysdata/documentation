+++
title = "Ghost"
layout = "man"
hidden = true
tags = ["cms"]
+++

## Public Cloud and Disk Space Error

`ghost doctor`, which is notably run during installations or updates, performs a non-functional check on our Public Cloud.

Indeed, their [calculation](https://github.com/TryGhost/Ghost-CLI/blob/1c936d2a1a9816635e8202a136c8b9eac4a86dc6/lib/commands/doctor/checks/free-space.js#L9) of `system information` is incorrect and incompatible with our infrastructure. Since it is not possible to disable this check, you need to add the options `--categories --categories` to `ghost install` or `ghost update` commands to bypass the template given to `ghost doctor`.
