# Toaster

> Transforms CSS styles to JSON styles

Toaster aims to simplify the transformation of CSS styles (what we call **_bread_**) to JSON styles (what we call **_toast_**).

## Supported Styles

Bread Types [Input Styles]  | Toast Types [Output Styles]
------------ | -------------
CSS | JSON

## CLI Usage

### With NPX

```sh
> npx @koltong/toaster <bread> <toast>
```

### With Global Install

Verify if you have [node](http://nodejs.org/) and [npm](https://www.npmjs.org/) installed.

Install package globally.

```sh
> npm install -g @koltong/toaster
```

Command line argument.

```sh
> toaster <bread> <toast>
```

#### Command Line Arguments

Param  | Description
------------ | -------------
bread | File path of the .css file. Ex: `./test.css`
toast | File path for the outputted .json file. Ex: `./test.json`
