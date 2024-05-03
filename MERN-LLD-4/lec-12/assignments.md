
1. What is the Zero Trust Model?
   A) A security model that trusts users by default
   B) A security model that verifies every request regardless of location
   C) A security model that only trusts requests from known IP addresses
   D) A security model that trusts requests based on user roles

   **Correct Answer:** B) A security model that verifies every request regardless of location

   **Explanation:** The Zero Trust Model is a security concept that requires all users, both inside and outside the network, to be authenticated, authorized, and continuously validated before being granted access to applications and data.

2. Which principle advocates for providing users with the minimum level of access required to perform their job functions?
   A) Zero Trust Model
   B) Principle of Least Privilege
   C) Reduce Attack Surface
   D) Password Hashing

   **Correct Answer:** B) Principle of Least Privilege

   **Explanation:** The Principle of Least Privilege (PoLP) states that users should be given the minimum level of access or permissions necessary to perform their job functions, reducing the potential impact of accidental or malicious actions.

3. What does "Reduce Attack Surface" refer to?
   A) Decreasing the number of vulnerabilities in a system
   B) Limiting the ways in which a system can be attacked
   C) Removing all security measures from a system
   D) Increasing the complexity of a system

   **Correct Answer:** B) Limiting the ways in which a system can be attacked

   **Explanation:** Reducing the attack surface involves minimizing the number of entry points and opportunities for attackers to exploit vulnerabilities in a system.

4. Which of the following is an effective way to reduce the attack surface of a web application?
   A) Using strong passwords
   B) Regularly updating software
   C) Allowing all users administrative privileges
   D) Using outdated libraries

   **Correct Answer:** B) Regularly updating software

   **Explanation:** Regularly updating software helps to patch known vulnerabilities, reducing the attack surface of a web application.

5. What is password hashing?
   A) Storing passwords in plaintext
   B) Encrypting passwords using a reversible algorithm
   C) Converting passwords into a fixed-length string of characters
   D) Creating a unique string representation of a password

   **Correct Answer:** D) Creating a unique string representation of a password

   **Explanation:** Password hashing is the process of converting a password into a fixed-length string of characters, which is then stored in a database. Hashing is a one-way process, meaning it cannot be reversed to obtain the original password.

6. Why is salting used in password hashing?
   A) To add flavor to passwords
   B) To increase the length of passwords
   C) To protect against rainbow table attacks
   D) To simplify the hashing process

   **Correct Answer:** C) To protect against rainbow table attacks

   **Explanation:** Salting involves adding a unique, random value to each password before hashing, which helps protect against precomputed attacks like rainbow tables, where attackers attempt to crack multiple passwords at once.

7. How does Node.js handle password hashing and salting?
   A) Node.js has built-in functions for password hashing and salting
   B) Node.js relies on external libraries for password hashing and salting
   C) Node.js does not support password hashing and salting
   D) Node.js uses the native crypto module for password hashing and salting

   **Correct Answer:** A) Node.js has built-in functions for password hashing and salting

   **Explanation:** Node.js provides built-in modules like `crypto` for password hashing and salting.

8. Which of the following is a benefit of using bcrypt for password hashing in Node.js?
   A) It is faster than other hashing algorithms
   B) It is more secure than other hashing algorithms
   C) It does not require salting
   D) It is a built-in feature of Node.js

   **Correct Answer:** B) It is more secure than other hashing algorithms

   **Explanation:** bcrypt is designed to be slower and more computationally intensive than other hashing algorithms, making it more resistant to brute-force attacks.

9. In a Node.js application, where should password hashing and salting typically be performed?
   A) In the client-side code
   B) In the database
   C) In the server-side code
   D) In a separate microservice

   **Correct Answer:** C) In the server-side code

   **Explanation:** Password hashing and salting should be performed on the server-side to ensure that passwords are not exposed in transit or in the client-side code.

10. How does React contribute to the security of a web application?
    A) By handling authentication and authorization
    B) By automatically updating software dependencies
    C) By providing a secure runtime environment
    D) By helping to prevent cross-site scripting (XSS) attacks

    **Correct Answer:** D) By helping to prevent cross-site scripting (XSS) attacks

    **Explanation:** React helps prevent XSS attacks by automatically escaping user input, reducing the risk of malicious scripts being injected into web pages.