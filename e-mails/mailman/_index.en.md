+++
title = "Mailing Lists"
weight = 50
layout = "man"
tags = ["email", "mailing list"]
+++

Mailing lists allow you to define a *pool* of email addresses to which to send a message. They are distinguished in their use by their broadcasting capabilities:

- only the "administrator" addresses are able to send content to the registered recipient addresses (e.g. a newsletter).
- all participants can send messages to the list to enable a conversation (e.g. members of a workgroup).

**alwaysdata** allows you to define mailing lists of your choice, attached to the domain(s) of your choice. They use the open-source software [mailman](https://docs.mailman3.org/projects/mailman/en/latest/README.html) and their configuration is based on the [Postorius](https://docs.mailman3.org/projects/postorius/en/latest/) interface. You can refer to these documentations for their daily use.

## Connection

The creation/modification/deletion of mailing lists is done from the administration panel: https://admin.alwaysdata.com/mailinglist/.

The internal management of the mailing lists (members, permissions, etc) is done from the Postorius administration interface: https://mailman.alwaysdata.com/.

***

- [Create a mailing list]({{< relref "create-a-mailing-list" >}})
- [Add members manually to a list]({{< relref "add-members-to-a-mailing-list" >}})
- [Modify mailing permissions]({{< relref "modify-mailing-list-permissions" >}})
- [Add footer with unsubscribe link]({{< relref "add-a-mailing-list-footer" >}})
