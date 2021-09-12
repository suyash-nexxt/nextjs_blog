---
title: Intro to Redux with React
description: Dive in to the world of redux, redux toolkit with react
tags: ['react', 'redux', 'redux-toolkit']
date: 2021-09-15
---

This tutorial assumes you have experience working with _React_ and at some point have faced the problem of prop drilling. Just in case have a look at the following example to give you some context about prop drilling.

![Prop Drilling](/prop_drilling.png)

Lets assume we have a Parent component which needs to share state with LeftChild3 and RightChild3 components. Without any state management library we will need to pass props down every level till it reaches its final destination. This can get cumbersome as our application continues to grow. State management libraries help us solve this problem where same data is being sent at almost every level due to requirements in the final level component. There are many state management libraries that can help us - _Redux_, _Recoil_, _React Context_ etc. _Redux_ is one of the more popular ones and we'll be working with it in this article.

## Redux

_Redux_ by itself is a realtively small API.

- [createStore](https://redux.js.org/api/createstore)
- [Store](https://redux.js.org/api/store)
- [combineReducers](https://redux.js.org/api/combinereducers)
- [applyMiddleware](https://redux.js.org/api/applymiddleware)
- [bindActionCreators](https://redux.js.org/api/bindactioncreators)
- [compose](https://redux.js.org/api/compose)

To connect it with React we can use either connect() or special hooks from _react-redux_ library. The documentation suggests using React-Redux hooks API as it is simpler and works better with TypeScript.

- Connect
  - [mapStateToProps()](https://react-redux.js.org/api/connect#mapstatetoprops-state-ownprops--object)
  - [mapDispatchToProps()](https://react-redux.js.org/api/connect#mapdispatchtoprops-object--dispatch-ownprops--object)
- React Redux hooks
  - [useSelector()](https://react-redux.js.org/api/hooks#useselector)
  - [useDispatch()](https://react-redux.js.org/api/hooks#usedispatch)
  - [useStore()](https://react-redux.js.org/api/hooks#usestore)

Before we dive into each part of _Redux_ & _react-redux_ it would be nice to get a high level understanding of how they work together. Lets take a real world example where user visits a concert ticket booking website to book tickets. They fill a form with thier details and then submit it to process their purchase. If we were to translate this user interaction into a redux life cycle then it would look something like this.

![Redux Life Cycle](/redux_lifecycle.png)
