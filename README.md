# URL Shortener Backend

This is a simple URL Shortener backend built with:

- Node.js
- Express.js
- TypeScript
- Sequelize ORM
- MySQL
- JWT-based Authentication (for future steps)
- Click Tracking (to be added)

---

## Project Structure

src/
├── config/ # DB configuration
├── controllers/ # API Controllers
├── middlewares/ # Middleware (Auth, Validation)
├── models/ # Sequelize Models
├── routes/ # Route Definitions
├── utils/ # Helper functions (ex: generate shortCode)
├── server.ts # Main server entrypoint
├── app.ts # Express app

## install dependencies
npm install

## setup environment varible
PORT=3000

# MySQL Database
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=url_shortener

## Run in Development
npm run dev
Runs the server with ts-node-dev

Default URL: http://localhost:3000
