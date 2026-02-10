+++
title = "Bug Bounty"
layout = "man"
hidden = true
tags = [""]
+++

> **[Bug tracking interface](https://security.alwaysdata.com/)**

## Rules

We believe that no technology is perfect and that working with skilled security researchers is crucial to identify weaknesses in our technology. If you believe you’ve found a security bug in our service, we are happy to work with you to resolve the issue promptly and ensure you are fairly rewarded for your discovery.

Let us know as soon as possible upon discovery of a potential security issue, and we’ll make every effort to quickly resolve the issue. Provide us a reasonable amount of time to resolve the issue before any disclosure to the public or a third-party.

Test vulnerabilities only against accounts that you own or accounts that you have permission from the account holder to test against.

Never use a finding to compromise/ex-filtrate data or pivot to other systems. Use a proof of concept only to demonstrate an issue.

If sensitive information — such as personal information, credentials, etc. — is accessed as part of a vulnerability, it must not be saved, stored, transferred, or otherwise accessed after initial discovery. All sensitive information must be returned to *alwaysdata* and any copies of such information must not be retained.

**Any type of denial of service (DDoS) attacks is strictly prohibited, as well as any interference with network equipment and *alwaysdata* infrastructure.**

Do not try to over exploit the bug and access internal data for further vulnerabilities. We will determine the severity and reward accordingly.

If you find the same vulnerability several times, please create only one report and eventually use comments. You’ll be rewarded accordingly to your findings.

**Violation of any of these rules can result in ineligibility for a bounty and/or removal from the program.**

### Legal considerations

We will not pursue civil action or initiate a complaint to law enforcement for accidental, good faith violations of this policy. We consider activities conducted consistent with this policy to constitute “authorized” conduct. We will not bring a claim against you for circumventing the technological measures we have used to protect the applications in scope of this program.

If legal action is initiated by a third party against you and you have complied with this security policy, we will take steps to make it known that your actions were conducted in compliance with this policy.

It is also important to note, we will not take legal action against you simply for providing us with a proof of concept of the security vulnerability. Please follow the guidelines listed in the [Proof of concepts](#proof-of-concepts) section below to ensure that your proof of concept is detailed enough to demonstrate the issue and still follows the guideline listed above.

## Scope and testing

The research scope only includes following addresses:

```txt
- https://www.alwaysdata.com
- https://admin.alwaysdata.com
- https://webmail.alwaysdata.com
- https://api.alwaysdata.com
- ssh://ssh-[accountid].alwaysdata.net
- https://webdav-[accountid].alwaysdata.net
- ftp://ftp-[accountid].alwaysdata.net
```

Vulnerabilities reported on other services or applications will not be addressed.

Once processed, the reports are *public*. Any private information can be transmitted via a support ticket on [our administration interface](https://admin.alwaysdata.com/).

When testing for a bug, please keep in mind:

* Use test accounts so as not to inadvertently compromise the privacy of our users.
* When attempting to demonstrate root permissions with the following primitives in a vulnerable process please use the following commands:
	- Read: `cat /proc/1/maps`
	- Write: `touch /root/<accountid>`
	- Execute: `id, hostname, pwd`

**Minimize the mayhem.** Adhere to program rules at all times. Do not use automated scanners/tools — these tools include payloads that could trigger state changes or damage production systems and/or data.

**Before causing damage or potential damage: stop, report what you’ve found and request additional testing permission.**

Reports about vulnerabilities are examined by our security analysts. Reports **must** be submitted using our **[bug tracking interface](https://security.alwaysdata.com/)**.

*Any report sent by email or through our support interface will be rejected.*

Our analysis is always based on worst case exploitation of the vulnerability, as is the reward we pay.

We are continuously working to evolve our bug bounty program. We aim to respond to incoming submissions as quickly as possible and make every effort to have bugs fixed within 10 days of being triaged. Rewards will be paid when patch is applied.

## Rewards

We provide cash rewards.

The following is merely an indicator of rewards, but does not reflect what the final decision might be. *We value quality reports and proofs of concepts.*

Qualification|Examples of vulnerabilities (non-comprehensive list)|Score CVSS|Bounty
---|---|---|---
None||N/A|No Bounty
Low|Accessing restricted parts of third-party elements or their plugins (blog, forum, etc.)|0.1 - 3.9|Up to €50
Medium|Accessing permissions/config on users account w/o accessing their content|4.0 - 6.9|Up to €200
High|Accessing customers data/information|7.0 - 8.9|Up to €350
Critical|Accessing in read or read-write mode to the core platform architecture|9.0 - 10.0|Up to €500

### Eligibility

We are happy to thank everyone who submits valid reports which help us improve the security of *alwaysdata*. However, only those that meet the following eligibility requirements may receive a monetary reward:

- You must be the first reporter of a vulnerability.
- The vulnerability must be a qualifying vulnerability.
- Any vulnerability found must be reported no later than 24 hours after discovery and exclusively through our ticketing solution.
- You must send a clear textual description of the report along with steps to reproduce the issue using standard Linux tools. We may ask you to send a proof of concept that reproduces the vulnerability (e.g. a shell script).
- You must avoid tests that could cause degradation or interruption of our service (refrain from using automated tools, and limit yourself about requests per second).
- You must not leak, manipulate, or destroy any user data.
- You must not be a former (1 year) or current employee of *alwaysdata*, or one of its contractor.

No vulnerability disclosure, including partial, is allowed before the patch is applied and we agree the publication.

## Proof of concepts

- XSS: For XSS, a simple `alert(document.domain)` should suffice.
- RCE: Please only execute harmless code. Please refer to the [Testing](#scope-and-testing) section.
- SQLi: Report it as soon as you have a SQL error that indicates SQL injection or you are able to disclose the SQL server’s version number.
- Unvalidated redirect: Set the redirect endpoint to `http://example.org` *if possible*.
- CSRF: Either attach a file to demonstrate the issue or paste the code in a code block in your report.
- SSRF: Do not go playing around on any internal networks. Report as soon as you believe that you have a potential SSRF issue and we will look into it for you.
- LFI: The same applies here — please do not go against the guideline listed in the [Program Rules](#rules) section. We will investigate LFI reports in a development environment to make sure it is valid.

## Qualifying vulnerabilities

- SQL Injection.
- Finding unwanted numeric user id (even yours) in views, that allow you to forge requests.
- Exposure of Sensitive members information[^1].
- Exposure of internal tools.
- Exposure of configuration files or secrets.
- Directory Traversal Issues.
- Local files access and manipulation (LFI, RFI, XXE, SSRF, XSPA).
- Local File Disclosure (LFD).
- Code injections (HTML, JS, SQL, PHP, …).
- Cross-Site Scripting (XSS).
- Cross-Site Requests Forgery (CSRF) with real security impact.
- Server-Side Request Forgery (SSRF).
- Open redirect.
- Remote Code Execution (RCE).
- Broken authentication & session management.
- Insecure direct object references.
- CORS with real security impact.
- Missing “secure” flags on authentication cookies.
- Access Control Issues.
- Horizontal and vertical privilege escalation.


## Invalid reports

The following list includes vulnerability reports not accepted by our services:


- Any hypothetical flaw or best practices without exploitable POC.
- Login, logout, unauthenticated or low-value CSRF.
- Missing security-related HTTP headers which do not lead directly to a vulnerability.
- Presence/absence of SPF/DMARC records.
- Reports of insecure SSL/TLS ciphers (unless you have a working proof of concept).
- Brute force / password reuse attacks.
- User enumeration attacks.
- Premium phone numbers attacks.
- Disclosure of known public files or directories, (e.g. robots.txt).
- Massive automated actions on the platform through robots/crawling (except if it gathers sensitive information from members).
- “Self” XSS.
- Missing cookie flags.
- SSL/TLS best practices.
- Mixed content warnings.
- Denial of Service attacks.
- “HTTP Host Header” XSS.
- Clickjacking/UI redressing.
- Software version disclosure.
- Stack traces or path disclosure.
- Physical or social engineering attempts.
- Recently disclosed 0-day vulnerabilities.
- Presence of autocomplete attribute on web forms.
- Vulnerabilities affecting outdated browsers or platforms.
- Issues that require physical access to a victim’s computer/device/interface (for example if the victim left it open or if the attacker is the victim).
- Logout and other instances of low-severity Cross-Site Request Forgery.
- Reports from automated web vulnerability scanners (Acunetix, Vega, etc.) that have not been validated.
- Reports about third-party applications we provide to our customers but aren’t part of our system directly (phpMyAdmin, Roundcube Webmail, etc.), if the vulnerability doesn’t directly exposes customers data and/or metadatas.
- Reports on third-party applications that we provide to our customers but are not directly part of our system (phpMyAdmin, Webmail Roundcube, etc.), unless the vulnerability that exposes user data and/or metadata is fixed for more than a month in the upstream version and we are not up to date.
- Reports about know vulnerabilities in sub-component parts (e.g. OpenSSH) that are just being disclosed. We aim to apply security patches in 30 days or less, so reports that concern to recent disclosed vulnerabilities are not relevant.
- Reports about sites or applications hosted by our customer, except if the vulnerability is due to our platform in conjunction with the customer application.
- Reports about vulnerabilities from third-party applications that we use that are either unknown, unfixed or fixed in unreleased versions.

Note that:
* the name of the accounts is accessible [in many different ways](remote-access/misc#list-accounts);
* addresses in `.alwaysdata.net` are linked to our customers' accounts. Their flaws are beyond our control;
	* in particular if they disclose their connection details;
* The `/tmp` directory is a [shared directory](remote-access/misc#tmp-directory);
* “https://files.alwaysdata.com” and “https://share.alwaysdata.com” features public files;
* the password reset link expires after 3 days or upon the next login to the administration interface; 
* a user may reuse an old password. This is not a [NIST-listed best practice](https://pages.nist.gov/800-63-3/sp800-63-3.html);
* email verification (whether during registration, profile information modification, or otherwise) is simply a best practice, not a vulnerability;
* HTML and XSS injections in the administration interface would only target the attacker and therefore cannot be flaws;
* we do not use CDN, and our IPs are public;
* the version number of the software we use [cannot be critical](security/security-upgrades).

[^1]: lastname, phone number, email, physical address, physical id copy
