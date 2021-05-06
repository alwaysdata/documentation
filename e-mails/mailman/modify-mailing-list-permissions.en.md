+++
title = "Modify Mailing List Permissions"
layout = "man"
hidden = true
tags = ["email", "mailing list"]
+++

To modify the broadcasting permissions of a list, you must use the Postorius management interface: https://mailman.alwaysdata.com/. Connect using an administration email address that you defined at the [creation of your mailing list]({{< relref "create-a-mailing-list" >}}).

Once identified, go to the management section of the concerned mailing list by clicking on its name.

## Content moderation

To modify the broadcasting rules, go to **Settings → Message Acceptance**. There you can define several broadcast rules:

- *Hold for moderation*: messages must be accepted by an administrator or moderator to be broadcast to members. This is an *a priori* moderation.
- *Reject*: messages are deleted and administrators are notified of the rejection.
- *Discard*: messages are deleted, without notification.
- *Accept immediately*: no action is required and members will receive the message.

These rules can be applied to two types of senders:

- *Members*: action to be taken when the message is sent by a list member.
- *Non-members* : action to be taken when the message is sent from an address external to the list.

## Examples

To define an **open mailing list**, set all permissions to *Accept immediately* : anyone can send a message to the members (in the case of a support list for example).

To define a **newsletter**, set all permissions to *Discard* : only administrators can send a message to members.

To define a **workgroup** address, set the members' permissions to *Accept* and the non-members' permissions to *Hold for moderation* : members can exchange messages without moderation, and users outside the group can request to send messages by having them validated *a priori*.
