+++
title = "Analytics"
pre = "<i class='fas fa-fw fa-chart-line'></i> "
layout = "man"
weight = 40
tags = ["http", "analytics", "site"]
+++

From the raw HTTP logs (`$HOME/admin/logs/http`) we generate [Matomo](https://fr.matomo.org/) statistics.

## Accessing analytics

Go to the **Web > Analytics** section.

### Segment sites

By default, all of the sites will be on the same Piwik site. You can segment them from the **Manage Piwik sites** menu in this section:

{{< fig "admin-panel_stats.en.png" "Matomo statistics menu" >}}

- Edit the default site to deselect the websites,
- Add a Piwik for every website.
{{< fig "admin-panel_section-sites.en.png" "Segment Matomo sites" >}}

### Adding users

To add users and manage their rights, go to the **Manage Piwik users**.

- [Matomo interface](https://analytics.alwaysdata.com)
- [Matomo assistance]({{< ref "analytics/troubleshooting-matomo" >}})
