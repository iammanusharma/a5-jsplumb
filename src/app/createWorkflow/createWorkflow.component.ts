import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { NgStyle } from '@angular/common';
import { routerTransition } from '../../../router.animations';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, AbstractControl, FormBuilder, FormArray } from '@angular/forms';
declare var jsPlumb: any;

@Component({
	selector: 'app-createWorkflow',
	templateUrl: './createWorkflow.component.html',
	styleUrls: ['./createWorkflow.component.scss'],
	animations: [routerTransition()]
})

export class CreateWorkflowComponent implements OnInit, AfterViewInit {
	// bar chart
	createWorkflowForm: FormGroup;

	public workflowName: AbstractControl;
	public category: AbstractControl;
	public description: AbstractControl;
	@ViewChild('test') testEl;
	public node =  {
		library_id : 1,
		id : 2,
		name : 'name',
		description : 'desc',
		type : 'type',
		nodeClass : 'nodeClass',
		fields : 'field',
		outputs : '',
		x : 0,
		y : 100,
		icon : '',
		iconImage : '',
		bkgColor : 'red',
		nodeShape : 'rectangle',
	}
	constructor(private router: Router,
		private route: ActivatedRoute,
		private fb: FormBuilder,private element: ElementRef
	) {
		this.createForm();



		
	}

	 

	createWorkflow() {

	}

	ngOnInit() { }

	ngAfterViewInit() {
		debugger;
			jsPlumb.importDefaults({
				PaintStyle: {
						lineWidth: 3,
						strokeStyle: 'rgba(30,144,255)'
				},
				DragOptions: {cursor: "crosshair"},
				Endpoints: [["Dot", {radius: 7}], ["Dot", {radius: 11}]],
				EndpointStyles: [{fillStyle: "#225588"}, {fillStyle: "#558822"}]
		});

		
		let me = this;
		jsPlumb.ready(function () {
			jsPlumb.importDefaults({
				PaintStyle: {
					lineWidth: 3,
					strokeStyle: 'rgba(30,144,255)'
				},
				DragOptions: { cursor: "crosshair" },
				Endpoints: [["Dot", { radius: 7 }], ["Dot", { radius: 11 }]],
				EndpointStyles: [{ fillStyle: "#225588" }, { fillStyle: "#558822" }]
			});
			
			console.log("ready");
			jsPlumb.makeTarget(me.testEl.nativeElement, {
				anchor: 'Continuous',
				maxConnections: 2,
				endpoint: ["Dot", {radius: 1}],
		});
	
		jsPlumb.draggable(me.testEl.nativeElement, {
				// containment: 'parent' // to make the container draggable
		});
			// jsPlumb.addEndpoint(me.testEl.nativeElement);

	// 				jsPlumb.makeTarget(me.testEl.nativeElement, {
	// 		anchor: 'Continuous',
	// 		maxConnections: 2,
	// 		endpoint: ["Dot", {radius: 1}],
	// });
// 	jsPlumb.makeTarget("2", {
// 		anchor: 'Continuous',
// 		maxConnections: 2,
// 		endpoint: ["Dot", {radius: 1}],
// });

// 	jsPlumb.connect({
// 		source:"2",
// 		target:"3",
// 		endpoint:"Rectangle"
// });
// jsPlumb.ready(function() {
// 	jsPlumb.draggable("2");
// });
		});
	}

	private createForm() {
		this.createWorkflowForm = this.fb.group({
			'workflowName': [''],
			'category': [''],
			'description': [''],
		});

		this.workflowName = this.createWorkflowForm.controls['workflowName'];
		this.category = this.createWorkflowForm.controls['category'];
		this.description = this.createWorkflowForm.controls['description'];
	}

}
