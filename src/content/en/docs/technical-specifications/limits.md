---
title: Limits
eleventyNavigation:
  key: Limits
  parent: Technical Specifications
  order: 12
---

|Item|Limit|
|---|---|
|**HTTP**||
|Request duration|None|
|Request and response size|None|
|Simultaneous connections|None|
|Simultaneous instances of a site|1, including during a restart|
|[Idle time](/en/docs/web-hosting/sites/misc/#idle-time) before a site is stopped|30 minutes by default, configurable|
|**Processes**||
|Delay between `SIGTERM` and `SIGKILL`|30 seconds|
|Outgoing connection ports|No filtering|
|**[Scheduled tasks](/en/docs/web-hosting/tasks/)**||
|Minimum interval|1 minute|
|Execution duration|None|
|Simultaneous executions of the same task|1|

Resources (CPU, memory, disk space) depend on the plan: [Public Cloud](/en/docs/admin-billing/billing/public-cloud-prices/), [Private Cloud](/en/docs/technical-specifications/system-resources-alerts-and-limitations/).

- [Execution environment](/en/docs/technical-specifications/execution-environment/)
