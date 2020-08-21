# Web Component

Web component is the way to create custom element to make you faster in dovelopment.

- Reusable component
- Easly to use, just copy and paste
- If you need more customization, you just add it on component `.js` file

### Installation

Install the dependencies and devDependencies and start the server.

```sh
$ git clone https://github.com/nukumalik/web-components.git
$ cd web-components
$ npm i -g browserify && npm i
```

For bundle your component

```sh
$ browserify -p tinyify ./components/index.js > ./dist/bundle.min.js
```

### How To Use

To use your custom web component, just copy your bundle file into your html script.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Web Component</title>
  </head>
  <body>
    <!-- Custom component -->
    <my-button label="Save" />

    <script src="./dist/bundle.min.js"></script>
  </body>
</html>
```
