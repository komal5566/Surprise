import './my-element';
import './index.css';

document.addEventListener('DOMContentLoaded', () => {
	// If the page doesn't already include the element, insert it so the hero is visible.
	if (!document.querySelector('my-hero')) {
		const hero = document.createElement('my-hero');
		// prepend so it appears at the top; change to appendChild if you prefer.
		document.body.prepend(hero);
	}
});
