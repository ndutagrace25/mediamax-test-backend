# Getting Started with the App (Backend)

## Available Scripts (Ensure Node js is installed)

### In the project directory, you can run:

### `npm install`

Installs nodemodules packages used in the project

### `npm install -g sequelize-cli`

Installs sequealize to your machine. If prevoiusly installed, no need to run the command.

Ensure you have a localserver installed supporting MySQL e.g XAMPP.

Make sure your localserver is started before running the below commands:

### `npx sequelize-cli db:drop`
To drop an existing database

### `npx sequelize-cli db:create`

Creates the database to your localserver

### `npx sequelize-cli db:migrate`

Creates the tables

