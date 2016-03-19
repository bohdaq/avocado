import {Directive, ElementRef, OnInit, AfterContentChecked} from "angular2/core";

@Directive({
    selector: '[myType]',
    inputs: ['type:myType']
})
export class TypeDirective implements OnInit, AfterContentChecked {
    private _defaultType: string = 'text';
    type: string;

    constructor(private _elRef: ElementRef){}


    ngOnInit():any {
        if(this.type === "datepicker"){
            this._elRef.nativeElement.dataset.provide = "datepicker";
            return;
        }
        this._elRef.nativeElement.type = this.type || this._defaultType;
    }

    ngAfterContentChecked() {
        if(this.type === "datepicker"){
            this._elRef.nativeElement.dataset.provide = "datepicker";
            console.log(this._elRef.nativeElement.value);
            return;
        }
    }

}