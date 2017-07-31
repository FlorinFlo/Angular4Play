
export class Car {

    constructor(public id:number,public model: string, public color: string, public price: number, public state = 'inactive') { }

    toggleState() {       
        this.state = (this.state === 'active' ? 'inactive' : 'active');
    }
    toggleStateInnactive() {
        this.state = 'inactive';
    }
}