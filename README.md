# tooltip

Easy-to-use embeddable and customizable html tooltip which allows the display of info text overlays during hover. Tooltips are a handsome solution for cluttered websites without the need of hard-coded html info elements. 


<img src="demo1.gif" alt="drawing" width="400"/>


<img src="demo2.gif" alt="drawing" width="400"/>


## Integration
A little script tag in your html and an `icon` or `img` is everything you need!
Place the following script in the header or source it of and adjust the global parameters to your demands. `Note:`If typing is enabled, the typing speed and randomness (human-like) of the typing is mimicked.
```html
<html>
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="./tooltip.js"></script>
        <script>toolTipHandler(window)</script>
    </head>
    ...
```
## Usage
Set the `tooltip` tag to a prefered place of your page
```html
<tooltip style="height:50px; width:50px">
    This is the Text that will be displayed within the tooltip during mouse hover or touch events.
</tooltip>
```