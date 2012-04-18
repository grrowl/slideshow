# slideshow

Basic jQuery slideshow. Can be applied to anything, and it will fade out the current item and show the next.

```css
ul#bannerImage {
	margin: 0; padding: 0;
	position: relative;
}
ul#bannerImage li {
	position: absolute;
	top: 0px;
	left: 0px;
}
ul#bannerItems {
	margin: 0; padding: 0;
	list-style: none;
	cursor: pointer;
}
ul#bannerItems li {
	width: 19px;
	height: 19px;
	background: url('../images/content/slider_items.png') center top no-repeat;
	margin-right: 4px;
	float: left;
}
ul#bannerItems li:hover {
	background-position: center center;
}
ul#bannerItems li.active {
	background-position: center bottom;
}
```
