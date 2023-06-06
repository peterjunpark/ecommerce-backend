# Ecommerce Backend

## Description
### What is this?
A simple backend system for an ecommerce business that performs CRUD operations on a MySQL database — to help you store, organize, and establish relationships between an ecommerce store's products, their categories, and product tags.

### How does it work?
This Ecommerce Backend uses a Sequelize to model tables and operate on a MySQL relational database. Routing is done using Express.js, following RESTful practices.

## Installation and Usage
1. Install the necessary dependencies: Node.js, MySQL.
2. Clone the repository onto your local machine.
3. Use `npm install` to get the required packages.
4. Set up your environment variables and database connection.
5. Create the database by sourcing schema located in the `db` directory.
6. Run `npm run seed` to create the required tables and seed them with (development) data.
7. Run `npm run start` to start the server.
8. Use your preferred HTTP client to perform GET, POST, PUT, and DELETE operations on the data. 
   1. GET: Get a list of all categories
   2. GET: Get a category
   3. POST: Add a new category
   4. PUT: Update a category's name
   5. DELETE: Delete a category
   6. GET: Get a list of all tags
   7. GET: Get a tag
   8. POST: Add a new tag
   9. PUT: Update a tag's name
   10. DELETE: Delete a tag
   11. GET: Get a list of all products
   12. GET: Get a product
   13. POST: Add a new product
   14. PUT: Update a product's name
   15. DELETE: Delete a product

### [Video walkthrough](https://www.youtube.com/watch?v=TNQP5aitmnY) of CRUD operations

## Contributing
N/A

## License
See LICENSE in repo.

## Questions
If you have any additional questions, please reach out to me via email at [peterjpark@pm.me](mailto:peterjpark@pm.me).
To see more of my work, check out my GitHub profile: [qkr0wns](https://github.com/qkr0wns).
