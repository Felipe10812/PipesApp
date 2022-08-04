import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'vuela'
})
export class vuelaPipe implements PipeTransform{
    transform(value: boolean): string {
        // Tengo una idea de porque se escriben las palabras 
        return (value) ? 'vuela' : 'no vuela';
    }
}