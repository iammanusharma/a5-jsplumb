import { Directive, ElementRef, OnInit } from '@angular/core';
declare var jsPlumb: any;

@Directive({
  selector: '[plumbItem]'
})
export class PlumbItemDirective implements OnInit {

  constructor(private element: ElementRef) { 
		console.log("directive called +  " + element);
	}

	ngOnInit(): void {
		console.log("directive called");
			jsPlumb.makeTarget(this.element, {
				anchor: 'Continuous',
				maxConnections: 2,
				endpoint: ["Dot", {radius: 1}],
		});
	
		jsPlumb.draggable(this.element, {
				// containment: 'parent' // to make the container draggable
		});
		setTimeout(() => {
			
		}, 1);
	

	// this should actually done by a AngularJS template and subsequently a controller attached to the dbl-click event
	// this.element.bind('dblclick', function (e) {
	// 		//Call method to edit module from the parent controller.

	// 		//check if the node is Kmeans if so call service and get values for variables.
	// 		// scope.$parent.getParametersForNode(this.id);

	// 	//	this.scope.$parent.editModule(this.id);

	// });
	}

}
