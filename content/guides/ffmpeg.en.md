+++
title = "Installing FFmpeg"
layout = "howto"
hidden = true
+++

[FFmpeg](https://www.ffmpeg.org/) provides tools for processing audio or video flows.

As this library requires major processing resources it is not available by default on the Public Cloud.

{{% notice info %}}
If you own a [Private Cloud](accounts/billing/private-cloud-prices), contact our [support](https://admin.alwaysdata.com/support/add/). They will install the complete set on the server.
{{% /notice %}}

In our example, we use the [SSH access](remote-access/ssh) and consider the following information:

- Account name: `foo`
- ffmpeg directory: `$HOME/ffmpeg/`

```sh
foo@ssh:~/ffmpeg$ wget https://johnvansickle.com/ffmpeg/releases/ffmpeg-release-amd64-static.tar.xz
foo@ssh:~/ffmpeg$ tar -xJf ffmpeg-release-amd64-static.tar.xz --strip-components=1
foo@ssh:~/ffmpeg$ rm ffmpeg-release-amd64-static.tar.xz
```

Binary files will be available in the `$HOME/ffmpeg/` directory.

Take the [last amd64 stable version available](https://johnvansickle.com/ffmpeg/).
