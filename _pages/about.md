---
layout: about
title: About
permalink: /
subtitle: Graduate Research Assistant,  <a href="https://www.csee.umbc.edu/" target="_blank">University of Maryland Baltimore County</a>.

profile:
  align: right
  image: sarwar.png
  image_circular: true # crops the image to make it circular
  more_info: >
    <!--
    <p>555 your office number</p>
    <p>123 your address street</p>
    <p>Your City, State 12345</p>
    -->

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

I am a second-year Ph.D. student in the <a href="https://huggingface.co/umbc-nlp" target="_blank">Language Understanding Lab</a> at the <a href="https://www.csee.umbc.edu/" target="_blank">University of Maryland, Baltimore County</a>, advised by Prof. <a href="https://userpages.cs.umbc.edu/ferraro/" target="_blank">Francis Ferraro</a>.

My research focuses on **Trustworthy Foundation Models**, including **reasoning**, **privacy-preserving LLMs**, **unlearning**, and **robustness**. My work appears at <a href="https://arxiv.org/abs/2509.14275" target="_blank">**GenAI4Health@NeurIPS 2025**</a> and <a href="https://arxiv.org/abs/2502.18536" target="_blank">**T2FMs@ICCV 2025**</a>. In reasoning, I develop methods that evaluate scientific claims with LLMs by coupling targeted retrieval with structured inference. This coupling makes the inference chain explicit and anchors conclusions in feasible evidence. A second thrust of my work develops privacy-aware and robust learning for distributed settings, focusing on federated language models and Differential Privacy for sensitive data.

Previously, I earned my MS in Computer Science from the <a href="https://www.utrgv.edu/cecs/departments/csci/" target="_blank">University of Texas Rio Grande Valley</a>, where I worked on privacy-preserving federated learning for biometrics and differential privacy, contributing to projects that received NSF funding.

<div style="background-color: rgba(181, 9, 172, 0.12); border-radius: 20px; padding: 6px 10px; display: flex; align-items: center; justify-content: center; line-height: 1.6; text-align: center; color: var(--global-text-color);">
  <i class="fa-solid fa-handshake" aria-hidden="true" style="margin-right: 8px; color: #000;"></i>
  <span>
    Actively exploring <b>Summer Internship</b> in NLP, CV and/or ML. Please <a href="mailto:smsarwar96@gmail.com" target="_blank" style="color: var(--global-theme-color); font-weight: 500; text-decoration: none;">contact me</a> if you have relevant opportunities.
  </span>
</div>

<div style="margin-top:5px;"></div>

## Research News

{% include news.liquid %}

## Publications Spotlight

Full publication list on [Google Scholar →](https://scholar.google.com/citations?user=7gRgh7QAAAAJ)

{% include selected_papers.liquid %}
