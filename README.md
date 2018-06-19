# Hdwireless
This project is a code test for the company H&D Wireless. You can view the page at [https://phek.github.io/hdwireless/](https://phek.github.io/hdwireless/)

## Code test specifications
You can find the instructions, design guidelines and color specifications at [https://github.com/phek/hdwireless/tree/master/instructions](https://github.com/phek/hdwireless/tree/master/instructions)

## Information
The application uses:
* AngularJS 6
* Angular CLI
* Sass
* Ngx-scrollbar

I chose to not use any templating framework such as Bootstrap. The application is however still 100% responsive and costumizable. Feel free to change the variables in the variable.sass files.

I did not implement any fancy login system or variable state syncing since this was not specified in the instructions. In a real life application the state should be handled with for example Redux (ngrx/store).

All API calls are injected with the logged in authentication token in the headers. This is done via [jtw.injector.ts](https://github.com/phek/hdwireless/blob/master/src/app/helpers/jwt.interceptor.ts).

I designed the application with customization of data and design in mind. It is therefore possible to change things such as sizes, menu items, colors and api through config files.
