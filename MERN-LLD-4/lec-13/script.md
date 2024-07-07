---
title:Agenda
description:
duration: 900
card_type: cue_card
---


1. Hashing Password with Bcrypt




---
title:Hashing Password with Bcrypt
description:
duration: 900
card_type: cue_card
---

This is How our Register Route Looks right now

```js

const router = require('express').Router();
const User = require('../models/userModel');

// Register a user
router.post('/register', async (req, res) => {
  try {
    const userExists = await User.findOne({ email: req.body.email });

    if (userExists) {
      return res.send({
        success: false,
        message: 'User Already Exists'
      });
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.send({ success: true, message: 'Registration Successful, Please login' });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
```

### Explanation of the Current Route and Password Storage

The provided route handles user registration but stores the password in plain text in the database, which is insecure. If an attacker gains access to the database, they can easily read all user passwords. To store passwords securely, we can use a hashing algorithm like bcrypt.

### What is Bcrypt?

Bcrypt is a password hashing function that incorporates a salt to protect against rainbow table attacks. It’s designed to be computationally intensive to slow down brute-force attacks.

### Encryption, Decryption, Hashing, and Salt

**Encryption and Decryption:**
- **Encryption** is a reversible process that transforms data into an unreadable format using a key. Only with the corresponding decryption key can the original data be restored.
- **Decryption** is the process of converting the encrypted data back to its original form using a decryption key.

**Hashing:**
- **Hashing** is a one-way process that converts data into a fixed-length string of characters. It is designed to be irreversible. This is useful for storing passwords because even if the hash is exposed, the original password cannot be easily recovered.

**Salt:**
- **Salt** is a random string added to the password before hashing to ensure that even if two users have the same password, their hashes will be different. It protects against precomputed attacks like rainbow tables.

### Steps to Securely Store Passwords using Bcrypt

1. **Install bcrypt:**
   ```sh
   npm install bcrypt
   ```

2. **Modify the registration route to hash passwords:**

   ```javascript
   const bcrypt = require('bcrypt');
   const router = require('express').Router();
   const User = require('../models/userModel');

   // Register a user
   router.post('/register', async (req, res) => {
     try {
       const userExists = await User.findOne({ email: req.body.email });

       if (userExists) {
         return res.send({
           success: false,
           message: 'User Already Exists'
         });
       }

       // Hash the password
       const saltRounds = 10; // The higher the number, the more secure but slower the hashing process
       const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

       const newUser = new User({
         ...req.body,
         password: hashedPassword // Store the hashed password
       });

       await newUser.save();

       res.send({ success: true, message: 'Registration Successful, Please login' });
     } catch (error) {
       console.log(error);
       res.status(500).send({ success: false, message: 'Server Error' });
     }
   });

   module.exports = router;
   ```

### Detailed Explanation:

1. **Salting and Hashing Password:**
   - `bcrypt.hash(req.body.password, saltRounds)`: This function takes the plain text password and a salt round factor. It generates a random salt and combines it with the password before hashing. The result is a secure, hashed version of the password.

2. **Saving the Hashed Password:**
   - The hashed password is stored in the database instead of the plain text password. This ensures that even if the database is compromised, the actual passwords are not exposed.

### Example of Hash Verification during Login:

To verify the hashed password during login, compare the provided password with the stored hash:

```javascript
const bcrypt = require('bcrypt');
const router = require('express').Router();
const User = require('../models/userModel');

// Login a user
router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    if (!user) {
      return res.send({
        success: false,
        message: 'User Not Found'
      });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.send({
        success: false,
        message: 'Invalid Credentials'
      });
    }

    res.send({ success: true, message: 'Login Successful' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: 'Server Error' });
  }
});

module.exports = router;
```

### Explanation of Login Verification:

1. **Password Comparison:**
   - `bcrypt.compare(req.body.password, user.password)`: This function compares the plain text password provided during login with the stored hashed password. If they match, the login is successful.

By using bcrypt, we ensure that passwords are stored securely and protect user data from potential breaches.

---
title:
description:
duration: 900
card_type: cue_card
---





