---
layout: layouts/indexed.njk
title: Mailing Lists
eleventyNavigation:
  key: Mailing Lists
  parent: E-mails
  order: 6
---

Mailing lists allow you to define a *pool* of email addresses to which to send a message. They are distinguished in their use by their broadcasting capabilities:

- only the "administrator" addresses are able to send content to the registered recipient addresses (e.g. a newsletter).
- all participants can send messages to the list to enable a conversation (e.g. members of a workgroup).

**alwaysdata** allows you to define mailing lists of your choice, attached to the domain(s) of your choice. They use the open-source software [Mailman](https://docs.mailman3.org/projects/mailman/en/latest/) and their configuration is based on the [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/) interface. You can refer to these documentations for their daily use.

## Connection

The creation/modification/deletion of mailing lists is done from the administration panel: [https://admin.alwaysdata.com/mailinglist/](https://admin.alwaysdata.com/mailinglist/).

The internal management of the mailing lists (members, permissions, etc) is done from the Postorius administration interface: [https://mailman.alwaysdata.com/](https://mailman.alwaysdata.com/).
