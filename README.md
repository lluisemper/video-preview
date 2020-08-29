# Video Preview Buffer


The aim with this project is create a preview for a video.


### Features

- This package recieves a file type video and returns an image type Buffer

### Installation

```sh
npm i video-preview-buffer
```

### Usage

```sh
const { screenshot } = require("video-preview-buffer")
```

#### Usage promise chaining

```sh
screenshot("video-url" , "number of seconds in which the preview will be taken").then(previewImage => console.log("My preview as Buffer: ",previewImage))
```

#### Usage async/await

##### Inside of an async funciton

```sh
const previewImage = await screenshot("video-url" , "number of seconds in which the preview will be taken")
console.log("My preview as Buffer: ", previewImage))
```

