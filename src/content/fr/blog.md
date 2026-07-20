---
layout: layouts/blog.njk
title: Sous le capot
description: Dernières nouvelles de l'équipe
date: false
tags: false
pagination:
    data: collections.blogFr
    size: 10
    alias: entries
permalink: "fr/blog/{% if pagination.pageNumber > 0 %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html"
---
