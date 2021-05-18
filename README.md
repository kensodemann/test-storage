# TestStorage

This repo contains a simple Angular library called `foo-bar`
It also contains a simple Angular application called `my-app` that consumes a component from `foo-bar`

The point here is to show using `@ionic/storage` in both the library AND the application but only providing it in the application. Angular's dependency injection engine will inject it into the component from the library when it is used in the application.

First, get the code and install the deps:

- clone the repo
- `cd test-storage`
- `npm i`


Next, build the library and link it so it can be used by the `my-app` application:

- `npm run build`
- `cd dist/foo-bar`
- `npm link`
- `cd ../..`
- `npm link foo-bar`

Finally, serve the `my-app` application:

- `npm start`

When first launched, there should be no data. Press the "Save Data" button. When you refresh the data, you will get the data that was saved the last time the button was pressed.

The library is saving the data, the application is reading the data.

