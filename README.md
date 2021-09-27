# Post Grid Sample Application

This application fetches post from `jsonplaceholder` API and renders them as `10x10` grid, each item in
a separate component.


## The Structure

```text
/src
|--- /app
|------- /core
|------- /modules
|------------ /module-1
|------------------ /components
|------------------ /pages
|------------ /module-2
|------------------ /components
|------------------ /pages
|
|...
```

The application is created with `--routing` flag and uses lazy-loading to be modular and avoid long loading times.

### Core
In the `core` directory, you can find the elements that are used application-wide, such as types, services, pipes, dumb components etc. 

### Modules
The main module(s) are placed under the directory `app/modules`. (For this instance, there's only 1 module named `home`)

Each module has a `components` and a `pages` directory.

`pages` directory is for the components that is being accessed with routes. 

`components` 
directory is for the _routeless_ components that is being called by other components (in the template or by dynamic loading)

## Components
There are 2 components used in this application to render the posts fetched.
`PostGrid` and `PostItem` components.

`PostGrid` component has an input property which gets the posts and renders `PostItem` components in a loop.
 It has a `display: grid` style calculations for grid-based styling properties.

`PostItem` component is the component where the details of a single post is being rendered.

## Styling
The application uses LESS pre-processor. You can find mixins that is being used in component styling in `/src/styles/mixins.less` file


***
## Running The Application
In order to get the application running, you need `npm` installed on your computer.

Then you can simply run the following commands:

```shell
npm install
ng serve
```

