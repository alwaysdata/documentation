+++
title = "Creating an E-mail Address"
layout = "howto"
weight = 1
tags = ["e-mail"]
+++

From the administration **Emails > Addresses** section, you can create email boxes (so long as you added a [domain name]({{< ref "/domains">}})).

{{< fig "images/admin-panel_mailbox-list.en.png" "Administration interface: List of email boxes" >}}

Then there will be a series of fields to fill-in. Here are the details.

## Required information

{{< fig "images/admin-panel_create-mailbox_required-infos.en.png" "Administration interface: Emails - required information" >}}

- *Domain*: the domain name for the address to create,
- *Local part*: the part to the left of the email address _@_ (_e.g._ if you wish to create `contact@example.fr`, the local part will be `contact`). You can also create a [catch-all address]({{< ref "e-mails/catch-all" >}}).
- *Password*: the password needed to connect to this email address.

## Antispam

The antispam used to filter out undesired email advertising (*spam*) is the open-source software [SpamAssassin](http://spamassassin.apache.org/).

{{< fig "images/admin-panel_mailbox_antispam.en.png" "Administration interface: Emails - Antispam" >}}

- *Score*: the antispam software assigns every message a score based on the probability of it being spam. Messages that exceed this score will be saved in a folder. The lower the score, the more likely an email will be marked out as spam, so it is preferable to leave the default value.
- *Folder*: the folder that spam is moved to. To specify the trash, enter `Trash`.
- *Score for spam to delete*: messages that exceed this score will be deleted immediately, without even being saved in the spam folder. Unless you are sure of what you are doing, leave the default value.

## Antivirus

The antivirus used to filter potentially infected email is the open-source software [ClamAV](http://www.clamav.net/).

{{< fig "images/admin-panel_mailbox_antivirus.en.png" "Administration interface: Emails - Antivirus" >}}

- *Folder*: if the antivirus software has deemed the message infected, then it is moved to this folder. To specify the trash, enter `Trash`.

## Purge folders

{{< fig "images/admin-panel_mailbox_purge.en.png" "Administration interface: Emails - Purge folders" >}}

- *Retain duration*: after this time, the messages will be definitively deleted.
- *Folders*: list of folders to purge (separated by a space).

{{% notice note %}}
This function is relevant when using the antispam and/or antivirus software: it is up to you to empty the folders regularly.
{{% /notice %}}

## Redirect

{{< fig "images/admin-panel_mailbox_redirection.en.png" "Administration interface: Emails - Redirection" >}}

- *Addresses*: addresses that the emails will be redirected to separated by a space).
- *Local copy*: by checking this box, all redirected emails will also be copied to this email box. If not, the emails will not be stored, simply redirected.

{{% notice note %}}
If you use the antivirus and/or the antispam software, emails considered to be fraudulent are never redirected to avoid passing on these bad messages to outside vendors.
{{% /notice %}}

## Auto-reply

{{< fig "images/admin-panel_mailbox_responder.en.png" "Administration interface: Emails - Automatic answer" >}}

- *Repeat frequency*: only one automatic message per address will be send for the entire duration of the period (in days).
- *Subject*: the automatic message subject.
- *Message*: the automatic message body text.

## Quota

{{< fig "images/admin-panel_mailbox_quota.en.png" "Administration interface: Emails - Quota" >}}

- *Size*: the maximum size of the email box, in *Mb* (if this quota is reached, new messages will be rejected).

{{% notice note %}}
If no maximum size is specified for an email box, then the space available in the pack will represent the ceiling.
{{% /notice %}}

## Script Sieve

{{< fig "images/admin-panel_mailbox_sieve.en.png" "Administration interface: Emails - Script Sieve" >}}

This technology is used to perform [more precise operations]({{< ref "e-mails/use-sieve-scripts" >}}) when your messages are received. If you activate the Sieve script, then it will be run after all of the operations configured on the form creating your email box.
