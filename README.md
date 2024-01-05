# Underhive

## Introduction

Underhive ushers in a new way of web development, where React applications can be edited visually, akin to working within Figma or similar design tools. Our tool allows designers and developers to directly manipulate their application's UI elements in a visual editor, merging the convenience of design software with the robust framework of React.

## Features

- Visual editing in a Figma-like environment within your React app.
- A CLI tool to serve a proxy server for live code updates.
- Designed for use in a development environment to ensure safety.

## Installation

To install Underhive, run the following command in your project directory:

```bash
npm install underhive
```

## Setup

Import Underhive in your main React file:

```javascript
import { attachEditor, detachEditor } from 'underhive';
```

Use `attachEditor` to enable the visual editing environment:

```javascript
if (process.env.NODE_ENV === 'development') {
  attachEditor();
}
```

Invoke `detachEditor` to disable the visual editor:

```javascript
detachEditor();
```

Make sure these functions are used within a development environment check.

## Usage

Initialize Underhive in your project with:

```bash
npx ucli init
```

This will set up Underhive and modify your `package.json` to include the Underhive server command using `concurrently`. This ensures that your existing start script and the Underhive server will run simultaneously.

To start your project with Underhive, use:

```bash
npm start
```

## Tribute
This project wouldn't be possible without the original efforts of the creators of [ProjectVisBug](https://github.com/GoogleChromeLabs/ProjectVisBug).
 