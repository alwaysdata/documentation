+++
title = "Using API"
weight = 5
tags = ["api"]
+++

## Identification

```
$ curl --basic --user APIKEY: https://api.alwaysdata.com/v1/account/
```

{{% notice warning %}}
To use your API key, don't forget the colon (`:`) after it, meaning that the password is not needed.
{{% /notice %}}

{{% notice info %}}
A rate limit is applied on API requests. See [here](#rate-limit) for more details.
{{% /notice %}}

### Linked resources

If you access resources linked to a user or a specific account, then you will need to specify this with your authentication while specifying one or more parameter(s):

- **account**: this is the account you wish to access. If for example you have a number of accounts but you wish to access a resource in a specific account.
- **customer**: if you have certain permissions on another user, then you need to specify their e-mail address.

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

## Rate-limit

A limit of actions per minute (i.e. rate limit) is set on these interfaces:

- 10 *rpm* per minute
- 50 *rpm* for sticky connections
- 250 *rpm* for *safe* methods like `GET`
