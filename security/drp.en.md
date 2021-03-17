+++
title = "Disaster Recovery Plan"
layout = "faq"
weight = 50
tags = ["security", "recovery", "backup"]
+++

Our architecture is designed to provide you with the maximum guarantees on data protection, especially in case of a major incident on our production units.

These guarantees *are not* optional: they are embedded by default in the platform and all our offers benefit from them.

## Data & Backups

### Is there a backup of my data?

Your account data is automatically backup every day, without any action on your part. Backups are retained for a rolling 30-day period.

### What data is concerned?

All the data in your user account is covered by the backup:

- files
- databases
- e-mails
- configurations

### Where are these backups located?

These backups are hosted in a datacenter located more than ten kilometers from the production units. It is operated by Illiad, while the production datacenters are managed by Equinix.

### How can you guarantee access to backups from the user account file system?

Backups are accessible from your user account file system (via [SSH]({{< ref "remote-access/ssh" >}}), [SFTP]({{< ref "remote-access/sftp" >}})...) thanks to the NFS protocol, which allows us to mount read-only access to your backups over the network.

### How can I recover these backups?

You can make a copy of your backups from your user account file system (via [SSH]({{< ref "remote-access/ssh" >}}), [SFTP]({{< ref "remote-access/sftp" >}})...) by copying the directories located in `$HOME/admin/backups/`.

The `latest` directory is a shortcut to the last available backup.

### How do I restore these backups?

To restore your backups, please have a look at the [available documentation]({{< ref "backups" >}}).

## Network

### How is network access guaranteed?

Each server has two network connections in fallback. If the primary link fails, the secondary link is activated to keep the connection active.

We operate the network ourselves in the datacenters.

### How is Internet access guaranteed?

Our Internet access is guaranteed by four independent service providers.

## Hardware infrastructure

### How are the server racks distributed?

Our production servers are spread across several datacenters, storage racks, and datahalls.

### What happens in the event of a power outage?

Each server has two power supplies, allowing it to remain powered in the event of a hardware failure.

Our datacenters are also powered by backup generators capable of providing several hours of power to the infrastructure in the event of a global failure.

### How is service restored in the event of hardware damage?

Additional servers are available for backup, allowing us to quickly switch your services over. In the event of an emergency, we can also switch over to a partner hosting by redeploying a backup infrastructure with your latest data.

### Are the servers redundant?

The data on each server is duplicated on two disks in RAID1 mode, to mitigate a hardware storage failure.

We also have a [Gold offer]({{< ref "accounts/billing/catalyst-prices" >}}#managed-gold-servers) providing synchronized redundancy of the servers in separate datacenters to guarantee continuity of service.

### Is access to the servers secure?

Our datacenters are managed by partners who apply very strict standards for access to equipment, based on access permissions and biometric authentication.

### What are the data center guarantees?

Our production units are hosted by [Equinix](https://www.equinix.com/data-centers/colocation/), the global leader in International Business Exchange™ (IBX®) infrastructure colocation. These datacenters are [certified by different standards](https://www.equinix.com/data-centers/design/standards-compliance/) for quality and security.
