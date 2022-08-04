import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'mayusculas'
})
export class mayusculasPipe implements PipeTransform {
    transform(value: string, enMayusculas: boolean = true): string {
        /* if (enMayusculas ) {
            return value.toUpperCase();
        } else {
            console.log(enMayusculas)
            return value.toUpperCase();
        } */
        
        // No entiendo del todo como funiona esto, pero tengo una idea
        return (enMayusculas) ? value.toUpperCase() : value.toLocaleLowerCase();
    }
}
