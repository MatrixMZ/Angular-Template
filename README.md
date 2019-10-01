# AngularTemplate
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.4.

## Project structure

* app
	> Contains the main app module that declarates the parts of application that can be used in whole application all of those declarated files you can find in `core` folder. 
	>The app module only imports the `shared` module.
	>
	> App routing keeps the other modules that you can find in a `modules` folder as the router's paths to the other modules using **lazy loading**.
	- core
	  > The `core` folder keeps the functionalities that can be only declared in app module, they determinate the hidden functionality that helps to cope with API.
	  >
	  > The excetion is `layouts` folder that keeps the main components containers for the other views in the application, the layouts have to be declared in `app` module instead in `shared`.
		- extensions
			> Here we are keeping the helper functions.
		- guards
		- http
		    > We store here constants with **API Endpoints**.
		- interceptors 
		- layouts
			> Contains the components that become the containers for the different modules.
		- services
		  > **Services** here have the **globally range**.
	- modules
		- (example-module)
			- components
			    > Component's that are used only in this module.
			- services
				> Services that access has only this module.
				> **You have to declare them as `module's providers`**.
			- views
				> Components that are defined in module's router.
			- models
			  > It's very important to store the maximum of possible interfaces that belongs only to the one module.
	- shared
	  > Here you can finde all of the **parts of application** that can be used **globally**.
		- components
			> If your component can be used in many modules is better to place it here.
		- directives
		- pipes
    - models
      > **Keep here only these models that are required to be used globally!**
* assets
	* sass
	  > All of the styles that are used many times in application such as buttons or constants color variables.
	  > **It's good to keep the [BEM](http://getbem.com) standart when styling.**
	* img


