---
title: Coding Post
description: Coding is such a blissful activity.
tags: ['#React', '#coding']
date: 2021-02-11
---

```jsx
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  links;
  loading = false;
  text = '';

  constructor(private http: HttpClient) {}

  handleSubmit(evt) {
    evt.preventDefault();

    this.loading = true;

    this.http.post(
      'http://localhost:5000/fireship-lessons/us-central1/scraper',
      JSON.stringify({ text: this.text })
    )
    .subscribe(res => {
      this.links = res;
      this.loading = false;
    });


  }

  handleChange(evt) {
    this.text = evt.target.value;
  }

}

```

The Big Oxmox advised her not to do so, because there were thousands of bad
Commas, wild Question Marks and devious Semikoli, but the Little Blind Text
didn’t listen. She packed her seven versalia, put her initial into the belt and
made herself on the way.

```jsx

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

```
