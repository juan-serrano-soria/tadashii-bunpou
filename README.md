# 正しい文法 - Grammar Correction App

App that let's you input a sentence in English and get a correction. It also displays a history of the corrections made.

## Technologies used
- [Monaca](https://ja.monaca.io/)
- [Capacitor](https://capacitorjs.com/)
- [React](https://react.dev/)
- [Material UI for React](https://mui.com/material-ui/getting-started/)
- [Hugging Face T5 Base Grammar Correction Model](https://huggingface.co/vennify/t5-base-grammar-correction)


## Setup
You have to setup environment variables for the project to work. Add an `env.js` file inside of `/js` with the following content.
``` javascript
const env = {
  "HUGGING_FACE_API_TOKEN": "...",
}

export { env }
```
For the `HUGGING_FACE_API_TOKEN` , [create a Hugging Face account](https://huggingface.co/join), log in and [create a new token with read role](https://huggingface.co/settings/tokens?new_token=true).


## How to run
To run the application in web mode, use `monaca preview`. You can check how to install Monaca cli [here](https://en.docs.monaca.io/tutorials/monaca_cli).

Alternatively, you can run `yarn dev`

To run on mobile phone you can use Monaca Cloud to build the app.

Alternatively, to do it locally, you need to install Android Studio and/or Xcode, and then run the following commands:

`yarn cap add ios` or `yarn cap add android`

`yarn cap sync`

And finally you can open the project and run normally in your device / simulator with:

`yarn cap open ios` or `yarn cap open android`

## Blog Post
You can read more about this project and how it was developed [here](https://cat-bounce.com/). TODO: UPDATE WITH ACTUAL LINK!

## Demo

https://github.com/juan-serrano-soria/tadashii-bunpou/assets/54719300/9a96db0a-07f9-492a-9c82-8dc75e60897c

