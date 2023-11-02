+++
title = "Drupal"
layout = "man"
hidden = true
tags = ["cms"]
+++

## Troubleshooting

### CSS/JS files precompression

If you are using a Drupal version prior to **8.9** with CSS and JS files precompression, you will have to [apply this patch](https://www.drupal.org/files/issues/2019-01-02/3023545-mod_brotli.patch) to fix [a bug related to Brotli compression](https://www.drupal.org/project/drupal/issues/2960808).

## Further information

We provide a [specific profile]({{<ref "sites/waf#available-profiles">}}) on our WAF.
