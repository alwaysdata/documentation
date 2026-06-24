---
title: Joomla
eleventyNavigation:
  key: Joomla
  parent: Marketplace
  order: 2
---

## Troubleshooting

### Error ERR_CONTENT_DECODING_FAILED on static files

The *Gzip Page Compression* option is not compatible with our default Apache configuration, which **already** takes care of compression on the fly. To correct this, all you have to do is delete the last section of the `.htaccess` file at the root of the site.
