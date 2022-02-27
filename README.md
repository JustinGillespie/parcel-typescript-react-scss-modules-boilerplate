# Parcel React Typescript SCSS Modules Boilerplate

### What is this?

Boilerplate configuration for a Parcel.js + Typescript + SCSS Modules + React

### But Why?

I struggled for days trying to get a simple Parcel configuration that works with the latest versions of react and typescript. This repo is the way I was able to get everything working smoothly.

It came down a combination of the right configs for typescript and parcel along with including the type defs for each SCSS Module.

### How?

Big things to note are the configuration files and the inclusion of `src/components/button/button.module.scss.d.ts`. Make sure you have a .d.ts somewhere for each module.

An Example of loading in a component with some styles included in `src/components/button`. That directory will show the necessary files needed for parcel to pick everything up correctly.

[typed-scss-modules](https://github.com/skovy/typed-scss-modules) will generate them for you. 👍

#### tsconfig.json

    {
      "compilerOptions": {
        "jsx": "react",
        "baseUrl": ".",
        "paths": {
          "~_": ["./_"]
        }
      }
    }

#### .parcelrc

    {
      "extends": "@parcel/config-default",
      "validators": {
        "*.{ts,tsx}": [
          "@parcel/validator-typescript"
        ]
      }
    }

## Gotchas

Here are a few things that tripped me up:

The typescript import syntax is very specific. Especially when it comes to parcel and loading scss stylesheets. This is what ended up working (note the \* as):

    import * as style from "./button.module.scss";
    // style["btn"] is now available. (or whatever you named the css class)
