# JWT
JWT example flow made with node and express js

### register flow :
- validate request body
- create mongoDB UserModel
- Do password encryption
- Save data in MongoDB
- return response to the client

### login flow:

- Check user using email.
- compare password.
- create JWT token.
- send response to client.
