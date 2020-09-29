## :art: What is Redux Asynchronous Actions?

Javascript as a popular language is single threaded. This denotes that it has single call stack and memory heap. This triggers it to execute code in order and must finish executing a piece code before moving onto the next. It's synchronous.

Redux asynchronous actions also known as Redux async actions is a step away from the traditional action in Redux which is Synchronous (One action is executed first before moving to the next). This is to say that by default, Redux actions are dispatched synchronously. Dispatching actions synchronously might not be beneficial when creating a robust application that needs to fetch some data or connect to an external API as a lot of time will be wasted while retrieving data either from the Database or from the any API. 

In order to dispatch actions asynchronously (Start some actions now and finish later), we can use the Thunk Middleware  which checks the type of an action. That is,  if the action is a function, it goes ahead to execute that action. This is robust as now we can create actions not just as object but also as functions.  Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.



## :art: What is Thunk?

Thunks  are mainly used to delay a calculation (async) until its result is needed, or to insert operations at the beginning or end of the other subroutine.


-----------------------------------------------------------------------------------------------------------------------------------------------------------------


## :art: Brief Summary

This article takes a critical took at Redux Asynchronous actions, thunk, including axios. 
Actions describes what is to be done. Reducers put the actions into work and the Store binds both the action and reducer together to present the new state. 
Spread operator was utilized in making an extra copy of our initialState, this way we won't interfere with the application's default state. 

The createStore takes in three arguments of which the preloadedState/initialState is optional.
The Thunk Middleware was applied to createStore method as the last argument. 
The Thunk Middleware allowed us to return actions as functions and not as plain objects. 
This is really robust as now we can make API calls and perform some advance logic. We then used store.dispatch() method to trigger the necessary action. 
Why performing other logic is left for the store.subscribe() method to handle.


## :rocket: Read Full Article

https://joint-access-programmer.com/redux-asynchronous-actions-thunk-custom-middleware/

