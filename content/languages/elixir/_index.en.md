+++
title = "Elixir"
chapter = true
tags = ["elixir"]
+++

# Elixir

The way [Elixir](https://elixir-lang.org/) works at alwaysdata is very standard. If you are used to using Elixir on a Unix system, e.g. Linux, then you already know almost everything you need.

- the [provisioned versions]({{< ref "languages/elixir/configuration">}}#supported-versions) range from 1.13 to 1.18,
- the [environment configuration]({{< ref "languages/elixir/configuration" >}}#environment) is easy to set up.

Our marketplace provides the installation of the [Phoenix](https://www.phoenixframework.org/) framework[^1].

- [API resource](https://api.alwaysdata.com/v1/environment/elixir/doc/)

[^1]: Phoenix 1.6 is not compatible with our infrastructure as it needs Elixir 1.12 which depends on Erlang 22. This ill be upgraded during the next software infrastructure [migration]({{< ref "advanced/migrations" >}}).
