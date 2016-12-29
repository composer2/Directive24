import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'searchFilter', pure: false })
export class SearchFilter implements PipeTransform {
    transform(value: any, args: string): any {
        if (args.length === 0) {
            return value;
        }
        let filter = args.toLocaleLowerCase();
        console.log(filter);
        return filter ? value
            .filter(event => event.name.toLocaleLowerCase().indexOf(filter) !== -1) : value;
    }
};
