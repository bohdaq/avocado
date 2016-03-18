import {Directive, ElementRef, OnInit} from "angular2/core";

@Directive({
    selector: '[ngType]'
})
export class TypeDirective implements OnInit {
    private _defaultType: string = 'text';

    constructor(private _elRef: ElementRef){}


    ngOnInit():any {
        this._elRef.nativeElement.type = this._defaultType;
        // this._elRef.nativeElement.dataset.provide = "datepicker";
    }
}