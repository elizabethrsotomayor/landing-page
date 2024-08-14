# Landing Page Project

## Description

Udacity FEND ND program project that features demonstration of JavaScript DOM skills such as event delegation, event listeners, browser events, and document fragments. The page is fully responsive across all devices.

## Approach

My approach consisted of first adding a fourth section, then populating the `<ul>` element with the corresponding `<section>`s using `document.createDocumentFragment()` to dynamically create the navbar. For each section, I created an `<li>` element to append to the Fragment which was then appended to the `<ul>`. Next I added an active state when the corresponding section was in the viewport. The `setClassActive()` function loops through each section and if the section is in the viewport, it applies the active class and also applies the highlight effect to the link in the navbar using `addHighlight()`. For the `scrollToID()` function, the event target ID is first obtained using event delegation in `getEventTarget()` to find the closest target to the `.menu__link`, then the target's inner text is passed to the function to scroll to the corresponding section using the position obtained from `getBoundingClientRect()`. Finally, I added mobile styling that changes the width and alignment of the navbar items on mobile for a fully responsive UX.

## Resources used

- [StackOverflow for loop for HTMLCollection elements](https://stackoverflow.com/questions/22754315/for-loop-for-htmlcollection-elements)
- [StackOverflow data attribute on dynamically created elements](https://stackoverflow.com/questions/43696733/data-attribute-on-dynamically-created-elements)
- [Github Gist to check if element is in viewport](https://gist.github.com/jjmu15/8646226)
- [MDN scrollTo method](https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo)
