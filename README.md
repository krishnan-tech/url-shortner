# url-shortner

# TODO/Functionalities

- Free - Opensource

- Private (your links only) or Public (everybody can create short links, fine for an intranet)

- Bookmarks/Stars, Tracking Links

- Free API - Unlimited

- Custom Link support

- Set Passwords for Link

- Expiration Time for Link

- View, Edit, Delete Link

# How to start it

## Server

1. yarn watch
2. yarn dev

### server #todo

1. CRUD Link - MongoDB
   - create POST /create {payload: {alias (optional), link}} -> localhost:8080/thisislink
   - read GET - redirect GET localhost:8080/thisislink -> google.com
   - update PUT - /update {payload: {ObjectId(id), link, new alias}} -> updated data
   - delete DELETE = /delete {payload: {ObjectId(id)}} -> boolean

# mongodb

- user login collection
```
  - _id -> objectId
  - username -> string
  - email -> string
  - password -> string
  - ip -> array/object
  - createdAt -> string
  - updatedAt -> string
  - isVerified -> boolean
```

- url collection
```
  - _id
  - user_id (ref) -> (Nullable)
  - original_url
  - alias 
  - url_password
```

- analytics
```
  - _id
  - url (ref)
  - clicks [         -> location, time, OS
    {
      country: "IN",
      time: [
        {
          10:00: [
            {location, os},
            {location, os},
          ],
          10:01: [
            {location, os},
            {location, os},
          ]
        },
      ],
    },
  ]
```

## Client

1. yarn dev

### client #todo

1. Homepage

   - input = original url, alias
   - navbar
     - signup, signin/signout (if not logged in)
     - Features/about (page)
     - Privacy Policy (page)
     - Source Code

2. About Page
3. Privacy Policy
