+++
title = "Redirecting HTTP Traffic to HTTPS"
layout = "howto"
weight = 1
tags = ["https", "security", "ssl"]
+++

Go to the **Web > Sites > Modify the [site] - ⚙️ > SSL** section in your alwaysdata interface. Check the *Force HTTPS* box:

{{< fig "images/admin-panel_add-site-ssl.en.png" "Modify a site: SSL" >}} 

Redirection will take place at our proxy level - ahead of the HTTP server.

Depending on the HTTP server used, it is also possible to do this at its level. To do so, refer to its documentation.
