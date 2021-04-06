+++
title = "Implement HSTS"
layout = "howto"
hidden = true
tags = ["https", "security", "ssl"]
+++

The [HTTP Strict Transport Security](https://en.wikipedia.org/wiki/HTTP_Strict_Transport_Security) policy allows to protect users by declaring that they must interact with the webserver using a secure connection.

It is implemented by adding `headers`.

## Apache

- Add it fo all Apache websites of the account via global directives (menu **Web > Configuration > Apache**):

```txt
Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
```

- Or for each website by adding at the start of a `.htaccess` created at the root of the websites:

```txt
<IfModule mod_headers.c>

Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"

</IfModule>
```

## uWSGI

Add in uWSGI additional settings (menu **Web > Site > Modify _website in question_ > Advanced Settings**):

```txt
plugins = router_redirect
route-if-not = equal:${HTTPS};on redirect-permanent:https://${HTTP_HOST}${REQUEST_URI}
route-if = equal:${HTTPS};on addheader:Strict-Transport-Security: max-age=31536000
```

- [Documentation](https://uwsgi-docs.readthedocs.io/en/latest/Snippets.html)

## Node.js

To put before any other controller:

```txt
app.use(function(req, res, next) {
  if (req.secure) {
    res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains') // 2 years
  }
  next()
})
```

Other method using the `helmet` NPM package:

```txt
var helmet = require('helmet')
    ... 
    app.use(helmet.hsts({
          maxAge: 31536000000,
          includeSubdomains: true,
          force: true
    }));
```

## Directives

* `max-age` defines the period of application of a given HSTS policy by browsers (31536000 = for one year),
* `includeSubDomains` allows to apply HSTS to both domain and subdomains,
* `preload` allows to add the site in the preloaded HSTS lists.

`max-age` is required unlike the other ones.

---
- [RFC 6797](https://tools.ietf.org/html/rfc6797)
- Verify its HSTS configuration via [HSTS preload](https://hstspreload.org/)
