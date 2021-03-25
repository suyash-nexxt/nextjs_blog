---
title: Javascript Execution
description: Understanding call stack, web API, and event queue.
tags: ['javascript']
date: 2021-03-13
---

As a beginner learning to code one very popular interview question which kept coming up was - what would the output of the code block below be.

```js
const array = [10, 11, 12, 13];
for (var i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('Item: ' + array[i] + '- index: ' + i);
  }, 3000);
}
```

Now most of us know the bug and how to fix it. So did I but for the longest time I had no clue why exactly the code was behaving the way it did. I think I understand it better now and will try to explain it in this post.

First the output of above code block.

```console
>>
Item undefined - index 4
Item undefined - index 4
Item undefined - index 4
Item undefined - index 4
```

Second the why behind the output. This is where the understanding of call stack, web API, and event queue helps.

- JavaScript is single-threaded, meaning it can only run one command at a time so we know commands are not run in parallel.
- Once the code is run the interpreter starts to read the code line by line to push them into the call stack.
- If any asynchronous code i.e. Web API like setTimeout is present then it is removed from the call stack and forwarded to the event table which is responsible for moving the asynchronous code to the event queue.
- The event loop is responsible for checking both the call stack and the event queue continuously.
- Only after all synchronous statements execute i.e call stack is empty, then asynchronous ones will execute i.e. event loop pops the commands from the event queue and pushes them into the call stack for execution.

Now lets take this theory and apply it to the code above to see why we got that output. Since now we know all synchronous statements execute first, the for loop in the call stack will get executed and only then the setTimeout function callback will be triggered. However since setTimeout is a an asynchronous web API, the command enters the event queue, after which the next loop iteration occurs. Now once all loop iterations occur, all four setTimeout commands will move from the event queue to the call stack and execute. Now setTimeout creates a function (closure) that has access to the iterator i in the loop outside. By this point the loop has already run and the last store value of i is 4 and since array[4] does not exist it returns undefined.

Solution

1. The new ES6 way - Switching 'var' to 'let' creates a new binding for each loop iteration preserving the value of i. Previously using var, a single binding was created for each i, hence returning the same value.

```js
const array = [10, 11, 12, 13];
for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log('Item: ' + array[i] + '- index: ' + i);
  }, 3000);
}
```

2. The old ES5 way - Using an Immediately Invoked Function Expression. We pass an arguement to the callback and then call that function immediately passing in the value of i.

```js
const array = [10, 11, 12, 13];
for (var i = 0; i < array.length; i++) {
  setTimeout(
    (function (local_i) {
      return function () {
        console.log('Item: ' + array[i] + '- index: ' + i);
      };
    })(i),
    3000
  );
}
```
