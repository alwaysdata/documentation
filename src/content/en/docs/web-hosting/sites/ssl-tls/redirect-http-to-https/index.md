---
title: Redirecting HTTP Traffic to HTTPS
eleventyNavigation:
  key: Redirecting HTTP to HTTPS
  parent: Websites
---

Go to the **Web > Sites > Modify the [site] - ⚙️ > SSL** section in your alwaysdata interface. Check the *Force HTTPS* box:

![Modify a site: SSL ](images/admin-panel_add-site-ssl.png)

Redirection will take place at our proxy level - ahead of the HTTP server.

Depending on the HTTP server used, it is also possible to do this at its level. To do so, refer to its documentation.
