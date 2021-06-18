---
title: Awesome two sum
description: Progression solving the classic two sum algorithm challenge
tags: ['javascript', 'algorithm', 'interview']
date: 2021-06-17
---

The first time I solved this challenge, I used the classic nested for loops solution and was stoked when leetcode accepted it. But then it dawns on me my code was slower than 80% of the code submitted with a run time of O(n^2).

```js
// my naive approach

const twoSum = (array, target) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};
```

Had this been an interview, my interviewee would have for sure asked me to optimize my code. So I set out to make my code faster and hacked my way to a solution using recursion, which was 84% faster than all other submissions but still with a high space complexity.

```js
// recursion

const twoSum = (nums, target, round = 0) => {
  if (nums.slice(round).length <= 1) {
    return [];
  }

  let first = nums.slice(round, round + 1);
  let remaining = nums.slice(round + 1);

  for (let i = 0; i < remaining.length; i++) {
    if (first[0] + remaining[i] === target) {
      return [nums.indexOf(first[0]), nums.lastIndexOf(remaining[i])];
    }
  }

  return twoSum(nums, target, round + 1);
};
```

Altho my code was faster it was a hacky solution and not one which would impress any future employer so I kept trying. That's when I remembered the wise words of a Reddit user

> When in doubt, hash map it out

With a hash map, we can iterate through the array and find the complement of each number, and if the complement already exists as a key in the hash map we can just return the corresponding value which is going to be an index along with the current index. In terms of time complexity, we are only looping through the array once so we have a run time of O(n), and since the hash map has constant look-up time we have a space complexity of O(n) too.

```js
// hash map

const twoSum = (nums, target) => {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (hash.hasOwnProperty(nums[i])) {
      return [hash[nums[i]], i];
    }
    hash[complement] = i;
  }

  return [];
};
```

Without a doubt not only was this solution the most optimised version of the three but also the most readable. Trust the process and keep coding everyday.
