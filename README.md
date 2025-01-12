# Basic Informational Site

This is a basic Node.js project that serves a simple informational website with four pages: Home, About, Contact Me, and a custom 404 error page. The goal of this project is to demonstrate the creation of a basic web server using Node.js to serve different HTML files based on the requested URL.

## Project Structure

The project consists of the following files:

- `index.html`: The homepage.
- `about.html`: The about page.
- `contact-me.html`: The contact page.
- `404.html`: The custom 404 error page.
- `index.js`: The Node.js server file that serves the appropriate HTML file based on the user's request.

## Features

- **Homepage**: Accessed at `http://localhost:8080/`
- **About Page**: Accessed at `http://localhost:8080/about`
- **Contact Page**: Accessed at `http://localhost:8080/contact-me`
- **404 Page**: Displayed when the user tries to access any URL not listed above.

## How to Run

1. Clone the repository or download the project files.
2. Navigate to the project directory in your terminal.
3. Run the following command to start the server:

   ```bash
   node index.js
4. Open a browser and go to `http://localhost:8080` to view the site.

## Demo

You can try out a live demo of this project hosted on Replit:

[Demo](https://replit.com/@TonyFred-code/project-basic-information-site)

## License

This project is open source and available under the [MIT License](./LICENSE).
