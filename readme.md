## register http://localhost:5000/api/auth/register

`{
  "username":"brian",
  "email":"brian@gmail.com",
  "password":"1234"
}`

## login http://localhost:5000/api/auth/login

`{
  "username":"brian",
  "password":"1234"
}`

### get users http://localhost:5000/api/users

## PUT to update user http://localhost:5000/api/users/userId

`{
"username":"peterupdated",
"email":"user@gmail.com",
"isAdmin": true,
"password":"1234"

}`

### get users statistics http://localhost:5000/api/users/stats

### add product http://localhost:5000/api/products

`{
  "title": "Sample Product",
  "desc": "A sample product description.",
  "img": "sample-product.jpg",
  "categories": ["Category1", "Category2"],
  "size": "Medium",
  "color": "Blue",
  "price": 19.99
}`

### get all orders http://localhost:5000/api/orders

### POST create order http://localhost:5000/api/orders

`{
  "userId": "654442e0c44b02a0d4bdeec8e",
  "products": [
    {
      "productId": "",
      "quantity": 2
    },
    {
      "productId": "654448fc9f7a46cc18fdd1df",
      "quantity": 3
    }
  ],
  "amount": 100.0,
  "address": {
    "street": "123 Main Street",
    "city": "Exampleville",
    "zipcode": "12345"
  }
}
`

### get all carts http://localhost:5000/api/carts

### POST create cart http://localhost:5000/api/carts

`{
"userId": "654442e0c44b02a0d4bdeec8e",
"products": [
{
"productId": "",
"quantity": 2
},
{
"productId": "654448fc9f7a46cc18fdd1df",
"quantity": 3
}
]

}
`
