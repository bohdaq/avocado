import {Directive, ElementRef, OnInit, AfterContentChecked, Output, EventEmitter} from "angular2/core";

@Directive({
    selector: '[myType]',
    inputs: ['type:myType']
})
export class TypeDirective implements OnInit {
    private _defaultType: string = 'text';
    type: string;

    @Output() datepickerUpdates = new EventEmitter();

    constructor(private _elRef: ElementRef){}


    ngOnInit():any {
        console.log(this.type);
        if(this.type === "datepicker"){
            console.log("inside")
            this._elRef.nativeElement.dataset.provide = "datepicker";
            setInterval(() => this.datepickerUpdates.emit(this._elRef.nativeElement.value), 1000);
            return;
        }
        this._elRef.nativeElement.type = this.type || this._defaultType;
    }

    // updateDatepickerValue(): any {
    //     console.log(this._elRef.nativeElement.value);
    //
    // }


}