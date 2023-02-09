---
title: Automate API testing with Postman
description: Learn how to automate API testing with Postman
tags: ['postman', 'api-testing', 'api']
date: 2023-01-15
---

All right so today I want to share how we can use postman to create dynamic scripts that will allow us to test an API and run a collection of a whole bunch of different tests in an automated process.

To demonstrate this I am going to use an API for a bug tracker application I built some time back and you can find the repo <a href="https://github.com/suyash-nexxt/bug-tracker" target="_blank">here</a>.

Let's briefly go over the different routes in this application so we can get some context.

1. `'/', authRoutes`

```js
router.post('/signup', registerUser);
router.post('/login', loginUser);
```

- A new user should be able to register / signup
- An existing user should be able to sign in

2. `'/projects', projectRoutes`

```js
router.get('/', auth, getAllProjects);
router.post('/', auth, createProject);
router.put('/:projectId', auth, updateProjectName);
router.delete('/:projectId', auth, deleteProject);
```

- Logged in user should be able to see all the existing projects under their account
- A logged in user should be able to create a new project
- Logged in user who owns the project should be able to update, delete a project

3. `'/members, memberRoutes'`

```js
router.post('/:projectId/members', authChecker, addProjectMembers);
router.delete(
  '/:projectId/members/:memberId',
  authChecker,
  removeProjectMember
);
router.post('/:projectId/members/leave', authChecker, leaveProjectAsMember);
```

- Logged in user who owns the project should be able to add, remove members
- Logged in user who is a member of a project should be able to leave.

4. `'/projects', bugRoutes`

```js
router.get('/:projectId/bugs', authChecker, getBugs);
router.post('/:projectId/bugs', authChecker, createBug);
router.put('/:projectId/bugs/:bugId', authChecker, updateBug);
router.delete('/:projectId/bugs/:bugId', authChecker, deleteBug);
router.post('/:projectId/bugs/:bugId/close', authChecker, closeBug);
router.post('/:projectId/bugs/:bugId/reopen', authChecker, reopenBug);
```

- Logged in user should be able to see all the bugs in a project they are a member of and add, delete, update, open, close the bug

5. `'/projects', noteRoutes`

```js
router.post('/:projectId/bugs/:bugId/notes', authChecker, createNote);
router.put('/:projectId/notes/:noteId', authChecker, updateNote);
router.delete('/:projectId/notes/:noteId', authChecker, deleteNote);
```

- Logged in user should be able to add new notes to a bug
- Logged in user should be able to delete, update the note they created

Ok so now that we have a fairly decent idea of what is going on in the application, we can see while not too complex this API has some level of complexity when testing. We have a few dynamic API routes which when testing with postman without automation will require us to manually keep updating every time we run the test. Another example is when we register a new user, we will have to manually update the body object with a new email else the test will fail. Automation can also allow us to run a collection of endpoints all at once which can save time.

### Adding dynamic variables to body object

#### Manual Approach

![GIF](/sign_up.gif)

#### Automated Approach

![GIF](/sign_up_2.gif)

Manual approach is quite self explanatory, we hit the end point first time and it works but second time round it doesn't as the username already exists in the database and is not unique. Now for the automated approach we hit the end point multiple times and all of them passed. The way we set up automated test -

- First we selected `bug-tracker` environment which not shown but we created and named it that. This is pretty similar to environment variables in node. This allows us to create variables which are only available in bug-tracker environment. There is also a global environment in postman.
- Inside the body object we set the username using a variable

![Setting Variable](/variable.png)

- We can use `Pre-request script` in Postman to execute JavaScript before a request runs. This is where we are defining the username and using the `pm` object assigining it to the environment.

![Pre-request Script](/pre_script.png)

### Adding dynamic params to url

Now let's look at an example where we have dynamic params in the url. In this scenario user creates a new project and wants to add a bug to that project. So we need to get hold of the `:projectID` and add it to the url when creating the bug. The `Tests` tab allows us to do this - set environment variables after the end point has been called - so in this case we can save the `:projectID` to env variables which we can access when calling the endpoint to create a bug. This tab also allows us to make assertions.

![Project](/project.png)
![Bug](/bug.png)

### Running a collection of tests

The Collection Runner enables you to run a collection's requests in a specified sequence. It logs your request test results and can use scripts to pass data between requests and alter the request workflow. Let's apply what we learned in this article and test a scenario where -

- A new user can register
- A new user logging in will get an error
- An existing user can login
- A logged in user can create a new project
- A logged in user can see all their projects
- A logged in user can add a new bug
- A logged in user can add a note to the new bug created
- A logged in user can see bug with note just created

1. Create a new collection
   ![Create Collection](/collection_1.png)

2. Add all endpoints to collection
   ![Add Endpoints](/collection_2.png)

3. Order and run collection (we can also decide the num of iteration over time)
   ![Run collection](/collection_3.png)

4. Check test result
   ![Check test result](/collection_4.png)
