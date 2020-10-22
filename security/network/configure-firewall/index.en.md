+++
title = "Configuring the Firewall on Dedicated and VPS Servers"
layout = "faq"
hidden = true
tags = ["security", "dedicated", "vps"]
+++

The firewall is managed from the server's **Firewall** menu.

## Rules

Use this menu to find, create and adjust your firewall rules.

{{< fig "images/admin-panel_list-rules.en.png" "Administration interface: list of active firewall rules" >}}

If you have a number of rules, the rule placed highest will take precedence over the others.

- [API resource](https://api.alwaysdata.com/v1/firewall/doc/)

### Adding a rule

To add a rule, choose:

- the protocol: [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) or [TCP](https://en.wikipedia.org/wiki/Transmission_Control_Protocol),

- the type of rule: ACCEPT, DROP (reject without informing the sender) or REJECT,
- the direction: in our out,
- the relevant IP/hosts,
- the ports,
- The IP version.

Not putting anything in Hosts and Ports will enable the rule for all unless a higher rule states the opposite.

{{< fig "images/admin-panel_add-rule.en.png" "Administration interface: adding a rule" >}}

To allow your own IP address to never be blocked on any port you can create the following rules:

|Title|Value|
|--- |--- |
|Protocol|UDP/TCP|
|Type|ACCEPT|
|Direction|Input|
|Hosts|<your IP>|
|Ports|<specify nothing>|
|IP version|IPv4, IPv6 or IPv4/IPv6 (depending on the stated IPs)|

{{< fig "images/rule-example.en.png" "Example" >}}

## Bans

Here you will see the IP addresses currently banned and the services that they are banned from.

{{< fig "images/admin-panel_list-bans.en.png" "Administration interface: list of current bans" >}}

If you end up banned from a service, check this menu and delete your IP if it is banned and add the necessary rule.

{{% notice tip %}}
A ban lasts for 30 minutes by default and takes place after some ten connection failures.
{{% /notice %}}
