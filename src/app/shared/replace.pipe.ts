import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'replace'
})
export class ReplacePipe implements PipeTransform {

    transform(value: any, character: string, replacementCharacter: string): string {
        return value.replace(character, replacementCharacter);
    }

}