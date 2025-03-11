+++
url = "/fr/emails/lire-la-source-dun-email/"
title = "Comment lire la source d'un email"
layout = "howto"
hidden = true
tags = ["email"]
+++

La source d'un email va afficher son contenu réel, le code brut du message avant interprétation. Son inspection peut servir à :

- analyser la délivrabilité de l'email,
- avoir un certain nombre d'informations sur l'expéditeur et le chemin effectué par le message.

Vous pouvez la récupérer via n'importe quel client mail. Par exemple, via le [webmail](https://webmail.alwaysdata.com), vous la retrouverez dans **... Plus > Afficher la source**

{{< fig "images/roundcube-source-menu.fr.png" "Roundcube : afficher la source" >}}

La source du mail est composée :

-   du chemin effectué par le message :
	```
	Return-Path: <test@alwaysdata.net>
	Delivered-To: test@alwaysdata.net
	Received: from smtpin1.paris1.alwaysdata.com ([2a00:b6e0:1:42:1::1])
		(using TLSv1.2 with cipher ECDHE-RSA-AES128-GCM-SHA256 (128/128 bits))
		by imap1.paris1.alwaysdata.com (Dovecot) with LMTP id CmIDBvaxwl1rVwAA37iJ7g
		for <test@alwaysdata.net>; Wed, 06 Nov 2019 12:43:50 +0100
	Return-path: <test@alwaysdata.net>
	Envelope-to: test@alwaysdata.net
	Delivery-date: Wed, 06 Nov 2019 12:43:50 +0100
	Received: from r0.smtpout1.paris1.alwaysdata.com ([2a00:b6e0:1:40:1:0:10:1])
		by smtpin1.paris1.alwaysdata.com with esmtps (TLS1.2:ECDHE_RSA_AES_128_GCM_SHA256:128)
		(Exim 4.89)
		(envelope-from <test@alwaysdata.net>)
		id 1iSJj3-0002iV-Ih
		for test@alwaysdata.net; Wed, 06 Nov 2019 12:43:49 +0100
	DKIM-Signature: v=1; a=rsa-sha256; q=dns/txt; c=relaxed/relaxed;
		d=alwaysdata.net; s=default; h=Message-ID:Subject:To:From:Date:
		Content-Transfer-Encoding:Content-Type:MIME-Version:Sender:Reply-To:Cc:
		Content-ID:Content-Description:Resent-Date:Resent-From:Resent-Sender:
		Resent-To:Resent-Cc:Resent-Message-ID:In-Reply-To:References:List-Id:
		List-Help:List-Unsubscribe:List-Subscribe:List-Post:List-Owner:List-Archive;
		 bh=YQoEy7AqzMBW43UhSGwdwOMGy0oQSsXVrnHBfRPYaBI=; b=c2XgGNOxBOho5IeU+hJUcZ+Q1
		LFBY4TpRTM/3R49CQAOWbwA/Mcc+8YZrorRAleKJU9oiyWa4ZeMWsffkyxNAUtI9YIM6ZNAsTIQBB
		BxOvey3PSQ6S49c+H25IVoIRdpp35yiOslrIFTvTtbCNwMbydk3XAJB+V+n2g2eq1NMN4=;
	Received: from ad.alwaysdata.net
		([2a00:b6e0:1:210:1::1] helo=ad-roundcube.alwaysdata.net ident=ad-roundcube)
		by smtpout1.paris1.alwaysdata.com with esmtpsa (TLS1.2:ECDHE_RSA_AES_128_GCM_SHA256:128)
		(Exim 4.89)
		(envelope-from <test@alwaysdata.net>)
		id 1iSJj2-0002F2-Fq
		for test@alwaysdata.net; Wed, 06 Nov 2019 12:43:48 +0100
	Received: from overlord-core.paris1.alwaysdata.com (2a00:b6e0:1:84:1::1)
	 by ad-roundcube.alwaysdata.net
	```
	Le mail est passé par plusieurs de nos serveurs pour arriver dans le serveur de destination _imap1.paris1.alwaysdata.com_. La clé publique DKIM est indiquée.

-   de différentes informations concernant le message en lui-même et l'agent utilisateur.
	```
	with HTTP (HTTP/1.1 POST); Wed, 06 Nov 2019 12:43:48 +0100
	MIME-Version: 1.0
	Content-Type: text/plain; charset=US-ASCII;
	 format=flowed
	Content-Transfer-Encoding: 7bit
	Date: Wed, 06 Nov 2019 12:43:48 +0100
	From: test@alwaysdata.net
	To: test@alwaysdata.net
	Subject: Test sources
	Message-ID: <8a6782ecf30c333f037193c7bdfc546c@alwaysdata.net>
	X-Sender: test@alwaysdata.net
	User-Agent: Roundcube Webmail/1.3.10
	```

-   d'éléments liés aux antivirus, antispams :

	```
	X-alwaysdata-Spam-Report:
	0.00 TO_EQ_FROM - To address matches the From address
	0.00 TO_DN_NONE - None of the recipients have display names
	0.00 RCVD_VIA_SMTP_AUTH - Authenticated hand-off was seen in Received headers
	0.00 RCVD_TLS_LAST - Last hop used encrypted transports
	0.00 RCVD_COUNT_THREE [3] - Message has 3-5 Received headers
	0.00 RCPT_COUNT_ONE [1] - One recipient
	0.00 MIME_TRACE [0:+]
	0.00 MID_RHS_MATCH_FROM - Message-ID RHS matches From domain
	0.00 FROM_NO_DN - From header does not have a display name
	0.00 ARC_NA - ARC signature absent
	-0.10 MIME_GOOD [text/plain] - Known content-type
	-1.00 NEURAL_HAM [-0.998] - Neural network ham
	X-alwaysdata-Spam-Score: -1.10
	```

	Le mail ne contient pas de virus détecté par [ClamAV](https://www.clamav.net/) et [Rspamd](https://rspamd.com/) donne une note basse permettant l'envoi du message.

----

- [Delivrabilité des emails : bonnes pratiques](e-mails/delivery)
