+++
title = "Private Cloud pricing"
layout = "man"
hidden = true
tags = ["billing", "dedicated server", "gold server", "vps"]
+++

This page lists the prices (VAT excluded) of the Private Cloud configurations. To have more information and a custom configuration contact our [sales team](https://www.alwaysdata.com/en/private-cloud/).

For any Private Cloud configuration order, the installation of the server is done after validation of the contracts and payment of the first invoice. There are no installation fees.

{{% notice note %}}
*Private Cloud* is a fully managed and operated servers offer. Our team handles the installation, configuration, and deployment of the platforms. You don't have to manage the systems administation part.
{{% /notice %}}

## Managed VPS servers

* Guaranteed Response Time (GRT): 30mins
* Mean Time To Repair (MTTR): 2hr
* Availability rate: 99.8%

|                            | VPS A            | VPS B            |
|----------------------------|------------------|------------------|
| CPU                        | 2 vCPUs (3.5GHz) | 4 vCPUs (3.5GHz) |
| RAM                        | 4GB ECC          | 8GB ECC          |
| Disks                      | 100GB SSD        | 200GB SSD        |
| Network                    | 1Gbps            | 1Gbps            |
| Traffic/month              | 1TB              | 1TB              |
| Annual payment             | 139 €/mo            | 189 €/mo            |
| Monthly payment            | 159 €/mo            | 209 €/mo            |

## Managed Dedicated servers

* Guaranteed Response Time (GRT): 15mins
* Mean Time To Repair (MTTR): 1hr
* Availability rate: 99.9%

| Base configuration    |                                    | Annual payment | Monthly payment |
| --------------------- | ---------------------------------- | -------------------------- | ------------------------- |
| **CPU**               | 8 cores • AMD EPYC 7232P • 3.1 GHz |                            |                           |
| **Disks**             | SSD 1TB NVMe • RAID1               |                            |                           |
| **RAM**               | 16GB                               |                            |                           |
| **Traffic/month**     | 3TB (1 Gbps)                       |                            |                           |
| **Total**             |                                    | 369 €/mo                      | 409 €/mo                    |

---

| Options                             | Price                      |
| ----------------------------------- | -------------------------- |
| **CPU**                             |                            |
| 16 cores • AMD EPYC 7302P • 3 GHz   | + 60 €/mo                     |
| 32 cores • AMD EPYC 7502P • 2.5 GHz | + 300 €/mo                    |
| 64 cores • AMD EPYC 7702P • 2 GHz   | + 600 €/mo                    |
| **Disks**                           |                            |
| SSD 1.9TB NVMe • RAID1                | + 30 €/mo                     |
| SSD 3.8TB NVMe • RAID1                | + 70 €/mo                    |
| SSD 7.6TB NVMe • RAID1                | + 150 €/mo                    |
| SSD 15TB NVMe • RAID1                | + 320 €/mo                    |
| **RAM**                             |                            |
| 16GB [^1]                           | + 10 €/mo                     |
| **Traffic/month**                   |                            |
| 1TB (1Gbps) [^2]                    | + 10 €/mo                     |

In the case of a monthly commitment, the first invoice covers the first three months. If the customer does not want this commitment, a 20% surcharge is to be expected for these three months.

If the dedicated server was taken before [March 2020](https://blog.alwaysdata.com/en/2020/03/03/harderware-better-faster-stronger/), go in the page [Options prices - old configurations]({{< ref "accounts/billing/prices-options-old-configurations" >}}).

## Managed Gold servers

Dedicated server redunded[^3] in another datacenter.

* Guaranteed Response Time (GRT): 15mins
* Mean Time To Repair (MTTR): 1hr
* Availability rate: 99.95%

| Base configuration    |                                    | Annual payment | Monthly payment |
| --------------------- | ---------------------------------- | -------------------------- | ------------------------- |
| **CPU**               | 8 cores • AMD EPYC 7232P • 3.1 GHz |                            |                           |
| **Disks**             | SSD 1TB NVMe • RAID1             |                            |                           |
| **RAM**               | 16GB                               |                            |                           |
| **Traffic/month**     | 3TB (1Gbps)                        |                            |                           |
| **Total**             |                                    | 949 €/mo                   | 1039 €/mo                |

---

| Options                             | Price                      |
| ----------------------------------- | -------------------------- |
| **CPU**                             |                            |
| 16 cores • AMD EPYC 7302P • 3 GHz   | + 120 €/mo                    |
| 32 cores • AMD EPYC 7502P • 2.5 GHz | + 600 €/mo                    |
| 64 cores • AMD EPYC 7702P • 2 GHz   | + 1200 €/mo                   |
| **Disks**                           |                            |
| SSD 1.9TB NVMe • RAID1                | + 60 €/mo                    |
| SSD 3.8TB NVMe • RAID1                | + 140 €/mo                    |
| SSD 7.6TB NVMe • RAID1                | + 300 €/mo                    |
| SSD 15TB NVMe • RAID1                | + 640 €/mo                    |
| **RAM**                             |        	                   |
| 16GB [^1]                           | + 20 €/mo	                   |
| **Traffic/month**                   |      		               |
| 1TB (1Gbps) [^2]                    | + 20 €/mo                     |

In the case of a monthly commitment, the first invoice covers the first three months. If the customer does not want this commitment, a 20% surcharge is to be expected for these three months.

{{% notice info %}}
Adding/change of configuration operations prices are available in the [servers interventions page]({{< ref "accounts/billing/servers-interventions" >}}). Contact the [support](https://admin.alwaysdata.com/support/add/) for more information and plan the intervention.
{{% /notice %}}

[^1]: RAM is added per slot of 16GB.
[^2]: Traffic is added per slot of 1TB.
[^3]: Real time replication.
