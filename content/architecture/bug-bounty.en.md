+++
url = "/en/architecture/bug-bounty"
title = "Bug Bounty"
layout = "man"
hidden = true
tags = [""]
+++

**[Presentation and rules of the programm](https://www.alwaysdata.com/en/bug-bounty/)**

The research scope only include following addresses:

```txt
- https://www.alwaysdata.com
- https://admin.alwaysdata.com
- https://webmail.alwaysdata.com
- https://api.alwaysdata.com
- ssh://ssh-[accountid].alwaysdata.net
- https://webdav-[accountid].alwaysdata.net
- ftp://ftp-[accountid].alwaysdata.net
```

Any type of denial of service (DDoS) attacks is strictly prohibited, as well as any interference with network equipment and alwaysdata infrastructure.

## Invalid reports

The following list includes vulnerability reports not accepted by our services and the reason:

* the name of the accounts is accessible [in many different ways]({{< ref "remote-access/misc#list-accounts" >}});
* addresses in `.alwaysdata.net` are linked to our customers' accounts. Their flaws are beyond our control;
	* in particular if they disclose their connection details;
* The `/tmp` directory is a [shared directory]({{< ref "remote-access/misc#tmp-directory" >}});
* “https://files.alwaysdata.com” and “https://share.alwaysdata.com” features public files;
* the password reset link expires after 3 days or upon the next login to the administration interface; 
* a user may reuse an old password. This is not a [NIST-listed best practice](https://pages.nist.gov/800-63-3/sp800-63-3.html);
* email verification (whether during registration, profile information modification, or otherwise) is simply a best practice, not a vulnerability;
* HTML and XSS injections in the administration interface would only target the attacker and therefore cannot be flaws;
* we do not use CDN, and our IPs are public;
* the version number of the software we use [cannot be critical]({{< ref "security/security-upgrades" >}}).

The following reports are also rejected:

- if the attacker is the victim;
- if the attacker takes control of the victim's interface because the victim left it open.
