
export class Car {

    constructor(public model: string, public color: string, public price: number, public state = 'inactive') { }

    toggleState() {
        console.log("Toggle state" + this.model);
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
    toggleStateInnactive() {
        this.state = 'inactive';
    }
}