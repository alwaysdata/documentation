+++
title = "Using Sieve Scripts"
layout = "howto"
hidden = true
tags = ["e-mail"]
+++

[Sieve](http://sieve.info/) is a language for filtering e-mails. It is used to add complex rules that cannot be added via the [filtering rules]({{< ref "e-mails/add-a-filter-rule">}}).

{{< fig "images/admin-panel_mailbox_sieve.en.png" "Administration interface: E-mails - Script Sieve" >}}

The final script is stored in the `$HOME/admin/mail/[domain]/[box]/filter_user.sieve` file in your account. You can read it to help debug your script, but you cannot edit it.

## Extensions supported

|Extension|Description|
|--- |--- |
|body|Checks the presence of one or more character strings in the e-mail message body|
|comparator-i;ascii-numeric|Extracts numbers from the text and compares them to see if it matches|
|copy|Specifies that a copy should be used to perform the action|
|date|Performs actions based on the date/time when an e-mail is sent/received|
|duplicate|Detects whether it is a duplicate|
|editheader|Adds or deletes text in the headers|
|encoded-character|Allows encoding special characters|
|enotify|Sends notifications|
|envelope|Assesses the envelope ("from", "to", etc.)|
|environment|Tests different labeled values in the execution environment|
|fileinto|Delivers the e-mail to the specified folder|
|foreverypart|Allows commands to be run in all MIME parts of the e-mail|
|ihave|Tests whether a Sieve extension is available and, if so, executes its action|
|imap4flags|Adds IMAP indicators and key words to messages|
|include|Used to include a Sieve script in another one|
|index|Used to match specific header fields by index|
|mailbox|Checks whether a specific directory exists|
|mime|Tests the specific MIME parts in the message|
|extracttext|Extracts text from MIME parts|
|regex|Uses regular expressions|
|reject|Refuses message delivery|
|relational|Allows relational comparisons|
|subaddress|Tests bounded elements in the location part of the addresses|
|vacation|Automatic answering|
|variables|Used to add variables|

## Examples

### Add a `<SPAM>` prefix to the subject of an e-mail comprising a key word to define (whether in the subject or in the body text)

```
require ["editheader", "variables", "body"] ;
if allof (
header :contains "subject" "word",
header :matches "Subject" "*"
)
{
deleteheader "Subject";
addheader "Subject" "<SPAM> ${1}";
}
elsif allof (
body :content "text" :contains "word",
header :matches "Subject" "*"
)
{
deleteheader "Subject";
addheader "Subject" "<SPAM> ${1}";
}
```

### Use headers in variables for automatic reponses

```
require ["variables", "vacation"];

# Store subject header in variable
if header :matches "Subject" "*" {
        set "subj" "**${1}**";
}

# Auto-reply
vacation
  :days 1
  :subject "Out-of-office [Was: ${subj}]"
"Hello,
We've received your last message:

${subj}

We're currently out-of-office and will reply soon.";
```

---

## Links

- [RFC 5228](https://tools.ietf.org/html/rfc5228)
