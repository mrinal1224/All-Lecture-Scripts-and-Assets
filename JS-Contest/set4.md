Sure, here are two JavaScript programming questions on objects and promises, including all the required details and boilerplate code.

### Question 1: Working with Objects

**Problem Statement:**
Create a function that takes an array of user objects and returns an object that maps user ids to user names.

**Problem Description:**
You are given an array of user objects, each containing `id`, `name`, and `email` properties. Write a function `mapUserIdsToNames(users)` that returns an object where the keys are user ids and the values are user names.

**Hints:**
1. Use the `reduce` method on the array to create the desired object.
2. Initialize the accumulator as an empty object.
3. For each user object, add a new key-value pair to the accumulator.

**Complete Solutions Approach:**
1. Define the function `mapUserIdsToNames`.
2. Use the `reduce` method on the `users` array.
3. In the reducer function, add a new key-value pair to the accumulator object, where the key is the user's `id` and the value is the user's `name`.
4. Return the accumulator object after the reduction is complete.

**Boilerplate Code:**
```javascript
function mapUserIdsToNames(users) {
  // Your code here
}

// Example usage:
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' },
];

console.log(mapUserIdsToNames(users));
// Expected output: { '1': 'Alice', '2': 'Bob', '3': 'Charlie' }
```

**Complete Solution:**
```javascript
function mapUserIdsToNames(users) {
  return users.reduce((acc, user) => {
    acc[user.id] = user.name;
    return acc;
  }, {});
}
```

---

### Question 2: Working with Promises

**Problem Statement:**
Create a function that fetches user data from an API and processes the response to return user names in uppercase.

**Problem Description:**
Write a function `fetchAndProcessUserNames(url)` that fetches user data from the given API endpoint. The API returns an array of user objects, each containing `id`, `name`, and `email`. The function should return a promise that resolves to an array of user names in uppercase.

**Hints:**
1. Use the `fetch` API to get data from the given URL.
2. Parse the response as JSON.
3. Use `map` to transform the array of user objects into an array of uppercase user names.
4. Handle any errors that may occur during the fetch operation.

**Complete Solutions Approach:**
1. Define the function `fetchAndProcessUserNames`.
2. Use `fetch` to make an HTTP GET request to the given URL.
3. Parse the JSON response.
4. Use `map` to transform the array of user objects to an array of uppercase user names.
5. Return a promise that resolves to this array.
6. Handle errors using `catch`.

**Boilerplate Code:**
```javascript
function fetchAndProcessUserNames(url) {
  // Your code here
}

// Example usage:
fetchAndProcessUserNames('https://api.example.com/users')
  .then(userNames => {
    console.log(userNames);
    // Expected output: ['ALICE', 'BOB', 'CHARLIE']
  })
  .catch(error => {
    console.error('Error fetching user names:', error);
  });
```

**Complete Solution:**
```javascript
function fetchAndProcessUserNames(url) {
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(users => users.map(user => user.name.toUpperCase()))
    .catch(error => {
      console.error('Error fetching user names:', error);
      throw error;
    });
}
```