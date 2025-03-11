+++
title = "Create a Mailing List"
layout = "man"
hidden = true
tags = ["e-mail", "mailing list"]
+++

To create a mailing list, login to the administration interface, menu **Emails > Mailing-lists**.

## User management

{{% notice info %}}
You must define at least one administrator user to manage your mailing list.
{{% /notice %}}

To define a new user to manage your mailing lists, go to the **User management** section, then **Add User**.

If mailing lists have already been defined, you can already associate permissions to these lists to this new user.

{{% notice tip %}}
User email address does not need to belong to the same domain as the mailing list. For example, you can define a user `foo@bar.com` as the administrator of the list `baz@example.org`.
{{% /notice %}}

## Managing Mailing Lists

To define a new mailing list, go to **Add a mailing list**.

Define:

- a name for your mailing list that will be the local part of the list's email address (for example, for a mailing list behind the email address `foo@example.org`, the list name will be `foo`),
- the domain to which the list is attached. This domain must be available in the [list of domains](domains) for which you have administrative permissions,
- the permissions attached to the users you have defined in the *User Management* section.
