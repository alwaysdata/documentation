+++
title = "Add a footer to a mailing list"
layout = "man"
hidden = true
tags = ["email", "mailing list"]
+++

To add a footer to a mailing list, you must use the [Postorius management interface](https://mailman.alwaysdata.com/). Connect using an administration email address that you will have defined at the [creation of your mailing list]({{< relref "create-a-mailing-list" >}}).

Once identified, go to the management section of the concerned mailing list by clicking on its name.

## Using *Templates*

The *Templates* allow you to define portions of content that can be injected or used in the automatic messages of the list.

To define them, go to the *Templates → New template* section. The list of customizable templates appears, along with their associated context. You then define the content of the template in the input field.

## Add a footer with an unsubscribe link

By default, messages sent to members do not contain an unsubscribe link. You can add this link by setting an automatic footer.

Add a template of type `[list:member:regular:footer]`, with the following content:

```txt
--
Unsubscribe: <mailto:$short_listname-unsubscribe@$domain>
```

Each message broadcast to the list will have a footer added as a signature, containing the unsubscribe email address generated from the *placeholders* (e.g. `foo-unsubscribe@example.org`).
