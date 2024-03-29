# slideshow

Basic jQuery slideshow. Can be applied to anything, and it will fade out the current item and show the next.

```javascript
$('#bannerImages').slideshow({
	timeout: 4500, 				/* time betweens slide transitions */
	animDuration: 400,			/* crossfade duration */
	startIndex:	0,				/* index of first slide */
	itemList: '#bannerItems',
	nextItem: 'a#bannerNext',	/* selector or element to move to "next" when clicked */
	prevItem: 'a#bannerPrev'	/* as above, but in reverse */
});
```

If itemList is set, it will append an ```<li>``` for each child of #bannerImages, include ```<span>(number)</span>``` and set the class "active" to the index matching the active banner image.

```css
ul#bannerImages {
	margin: 0; padding: 0;
	position: relative;
}
ul#bannerImages li {
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
}
ul#bannerItems li.active {
	background-position: center bottom;	/* show the 'active' state in the spritesheet */
}
```
