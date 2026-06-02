---
title: FFmpeg
eleventyNavigation:
  key: FFmpeg
  parent: Guides
---

[FFmpeg](https://www.ffmpeg.org/) provides tools for processing audio or video flows.

As this library requires major processing resources it is not available by default on the Public Cloud.

> [!NOTE]
> If you own a [Private Cloud](/en/docs/admin-billing/billing/private-cloud-prices), contact our [support](https://admin.alwaysdata.com/support/add/). They will install the complete set on the server.


In our example, we use the [SSH access](/en/docs/web-hosting/remote-access/ssh) and consider the following information:

- Account name: `[account]`
- ffmpeg directory: `/home/[account]/ffmpeg/`

> [!NOTE]
> Feel free to adjust according to your needs.

```sh
[account]@ssh:~/ffmpeg$ wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
[account]@ssh:~/ffmpeg$ tar -xJf ffmpeg-release-amd64-static.tar.xz --strip-components=1
[account]@ssh:~/ffmpeg$ rm ffmpeg-release-amd64-static.tar.xz
```

Binary files will be available in the `/home/[account]/ffmpeg/` directory.

Take the [last amd64 stable version available](https://johnvansickle.com/ffmpeg/).
