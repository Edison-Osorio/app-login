import { Pipe, PipeTransform } from "@angular/core";
import { of } from "rxjs";

@Pipe({
    name:'translate'
})
export  class TranslatePipeMock implements PipeTransform{
    public name = 'translate'

    transform(query:string):any {
        return query;
    }
}
 export class TranslateServiceStub{
    public get(key:any):any{
        return of(key)
    }
     public instant(key:any):any{
        return of(key)
     }
 }