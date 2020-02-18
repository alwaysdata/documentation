+++
title = "Using a SAN Certificate (multi-domains)"
layout = "howto"
hidden = true
tags = ["https", "security", "ssl"]
+++

By default, a multi-domains certificate is not returned for most addresses. It needs to be explicitly selected from the alwaysdata administration interface. This can be done in two ways,

From **Web > Sites > Modify** for the relevant site and **> Configure** opposite the address:

{{< fig "images/admin-panel_site.en.png" "Administration interface: via sites">}}

Or from **Domains > Details** for the relevant domain **> Subdomains**:

{{< fig "images/admin-panel_subdomain-list.en.png" "Administration interface: via domains" >}}

This will lead you to the following menu:

{{< fig "images/admin-panel_subdomain-menu.en.png" "Administration interface: manage a subdomain" >}}
