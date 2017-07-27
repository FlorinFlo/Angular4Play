import { Injectable } from '@angular/core';


@Injectable()
export class Logger {
    log(msg: any) { console.log(msg + " Logger Log"); }
    error(msg: any) { console.error(msg + " Logger Error"); }
    warn(msg: any) { console.warn(msg + " Logger warn"); }

}