# image-resize-nn-loader

Scale up images while loading them through webpack. Uses nearest-neighbor
scaling. Very specific purpose but maybe others will find it useful.

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var url = require("file!image-resize-nn-loader?resize=4!./file.png");
// => emits file.png as file in the output directory and returns the public url
// => returns i. e. "/public-path/0dcbbaa701328a3c262cfd45869e351f.png"
// => the image will be resized up by a factor of 4 while preserving its pixeliness.
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)
