# TechTinkers

MERN directory structure 

Root -> TechTinkers
    frontend (UI components, .env files where environment variables using server and help secret port number and database name and secret keys)
    backend (Server connection, database connection, controls data, and rest APIs)


Server directory
    backend -> 
      	config (The directory contains the configuration files of the backend application)
      	controller (controllers of the application)
      	mail
      	middlewares
      	models (models of the application)
      	routes (routes of the application)
      	utils
      	views
      	file - > server.js (entry point of the backend application)


Client directory
    frontend ->
    	node_modules
    	public (contains the HTML file that is displayed in the browser)
    	src -> (src code of the frontend application)
        		app
        		components (component of the application)
        		features
        		hook
        		images
        		pages
        		utils -> files
              			App.css
              			App.js (main file of the frontend application that renders the components)
              			index.css
              			index.js (entry point of the front-end application)
