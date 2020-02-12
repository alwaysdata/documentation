+++
title = "Using API"
weight = 5
tags = ["api"]
+++

## Identification

With an ID (profile email and related password):

```
$ curl --basic --user foobar@example.org https://api.alwaysdata.com/v1/account/
```

With your API key:

```
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/account/
```

{{% notice warning %}}
To use your API key, don't forget the colon (`:`) after it, meaning that the password is not needed.
{{% /notice %}}

### Linked resources

If you access resources linked to a user or a specific account, then you will need to specify this with your authentication while specifying one or more parameter(s):

- **account**: this is the account you wish to access. If for example you have a number of accounts but you wish to access a resource in a specific account.
- **customer**: if you have certain permissions on another user, then you need to specify their email address.

For example, accessing the FTP users of your *mycompany* in this way:

```
$ curl --basic --user "APIKEY account=mycompany:" https://api.alwaysdata.com/v1/ftp/
```

## Format

The following formats are handled:

- [JSON](https://www.json.org/) (by default)
- [XML](https://en.wikipedia.org/wiki/XML)
- [HTML](https://en.wikipedia.org/wiki/HTML) (for the answer only)

It may be specified in the URL:

```
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/account/?_format=xml
```

Or via the HTTP header:

```
$ curl --basic --user APIKEY: --header 'Accept: application/xml' https://api.alwaysdata.com/v1/account/
```

## HTTP headers

|HTTP header|Description|Default value|
|--- |--- |--- |
|alwaysdata-synchronous|Request execution in synchronous mode|no|
