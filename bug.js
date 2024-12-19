The Firebase SDK might throw an error if you try to access a property of a document snapshot before the data has fully loaded. This is often caused by asynchronous operations where you attempt to access the data in a callback function before the `onSnapshot` or `get()` promise has resolved.  For example:

```javascript
const unsub = docRef.onSnapshot(doc => {
  console.log(doc.data().name); // Error if data isn't yet loaded
});
```

The problem is that the `doc.data()` might be `undefined`  or null if the data hasn't finished downloading from the server. 