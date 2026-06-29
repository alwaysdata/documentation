---
title: Using CardDAV and CalDAV
eleventyNavigation:
  key: CardDAV / CalDAV
  parent: Third-Party Software
  order: 1
---
 
Each email address has its own address book and calendar. Users can access and manage them from the software of their choice and on multiple software simultaneously.
 
|Service|Hostname|
|---|---|
|CardDAV (address book)|carddav-[account].alwaysdata.net|
|CalDAV (calendar)|caldav-[account].alwaysdata.net|
||Identifier: **email address** and its **password**|
 
Sharing is *not* available.
 
## Webmail
 
The address book is directly accessible via the **Contacts** menu and the calendar in the **Calendar** menu.
 
The groups created are transformed by the system as independent vCards ensuring simple synchronization with other CardDAV clients.
 
 
### Import your address book
 
Roundcube allows importing addresses from [CSV](https://fr.wikipedia.org/wiki/Comma-separated_values) or [vCard](https://en.wikipedia.org/wiki/VCard) files. Go to **Contacts > Import**.
 
![](images/roundcube_contact_import.png)
 
## Implementation on various applications
 
### Mozilla Thunderbird
 
#### Address Book
 
Go to **Address Book > Create a new address book > Add a new CardDAV address book**
 
![](images/thunderbird_carddav.png)
 
#### Calendar
 
Go to **Calendar > New Calendar... > On the Network > Find Calendars**
 
![](images/thunderbird_caldav.png)
 
### DAVx5 (Android application)
 
Go to **Add an account ➕​ > Generic login (Login with URL and user name)**
 
![](images/davx5.png)
