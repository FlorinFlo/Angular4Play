
export class Car {

    constructor(private model: string, private color: string, private price: number, public state = 'inactive') { }

    toggleState() {
        console.log("Toggle state" + this.model);
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
    toggleStateInnactive() {
        this.state = 'inactive';
    }
}