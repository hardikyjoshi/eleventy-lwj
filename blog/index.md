---
title: Welcome to the Blog
layout: layout.liquid
tags: no
permalink: /
---

{% for blog in collections.blog %}

- [{{blog.data.title}}]({{blog.url}})

{% endfor %}

You should be able to read it!

