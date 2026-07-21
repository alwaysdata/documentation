---
layout: layouts/blog.njk
title: Under the hood
description: Latest updates from the team
date: false
tags: false
pagination:
    data: collections.blogEn
    size: 10
    alias: entries
permalink: "en/blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
