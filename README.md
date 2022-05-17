zToaster is a vanilla javascript library that provides an easy way to show toast notifications.

It's lightweight and easily customizable.

[Project web, documentation & support](https://www.oxterisk.com/projects/ztoaster/)

## Basic usage

Place the stylesheet link into the head before all other stylesheets to load the CSS.

```HTML
<link href="ztoaster.min.css" rel="stylesheet">
```

Place the script near the end of your pages, right before the closing body tag.

```HTML
<script src="ztoaster.min.js"></script>
```

Create your first toast!

```HTML
ztoast("Here we go!");
```

## Parameters

```HTML
ztoast(content, options);
```
**content** is a string and **options** is a JSON.

## Options

Key | Description | Values
--- | --- | --- |
type | Notification style. | success, info, warning, error, dark<br>Default: success
title | Notification title. |
position | Position relative to the viewport. | top-right, top-left, top-center, top-full, bottom-right, bottom-left, bottom-center,  bottom-full<br>Default: top-right
width | Width of the toast. | Any accepted size format.<br>Default: 350px
duration | Time in microseconds.<br>3000 = 3 seconds | 0 or any number equal or bigger than 1000<br>0 = toast stays forever<br>Default: 3000
showIcon | Show / Hide icon. | true, false<br>Default: true
icon | Icon to be displayed. Will override the icon of the selected type. | [HTML Unicode Symbols](https://www.w3schools.com/charsets/ref_utf_symbols.asp)
showClose | Show / Hide close button. | true, false<br>Default: true
textColor | Text color. Will override the styles of the selected type. | Any accepted color format.
backgroundColor | Background colour. Will override the styles of the selected type. | Any accepted color format.
newerOnTop | Newer notification will be displayed on top. | true, false<br>Default: true

## Examples

Different types of notifications.

```HTML
ztoast("Here we go!", {type:"success"});
ztoast("Here we go!", {type:"info"});
ztoast("Here we go!", {type:"warning"});
ztoast("Here we go!", {type:"error"});
ztoast("Here we go!", {type:"dark"});
```

With title

```HTML
ztoast("Here we go!", {type:"info", title:"Hello toast"});
```

Changing position

```HTML
ztoast("Here we go!", {type:"info", title:"Hello toast", position:"bottom-center"});
```

Creating a custom pink notification

```HTML
let title = "I'm a pink toast!";
let content = `Lorem ipsum dolor sit amet, consectetur adipisicing elit.`;

ztoast(content, {
    title,
    type:"info",
    position:"top-center",
    textColor: "#666",
    backgroundColor: "pink",
    icon: "&#9850;",
    showClose: false
});

```

[Demo and examples](https://resources.oxterisk.com/ztoaster/)