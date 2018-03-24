import { Directive, ElementRef } from '@angular/core';

@Directive({
	selector: '[appHighlight]'
})
export class PlumbConnectDirective {

	constructor(el: ElementRef) {
		el.nativeElement.style.backgroundColor = 'yellow';
 }

}
