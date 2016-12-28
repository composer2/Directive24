import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'initCapLetter' })
export class InitCapsPipe implements PipeTransform {
    transform(value: string) { // , args?: any[]) {
        return value.replace(/(&)?([a-z])([a-z]{2,})(;)?/ig,
            function (all, prefix, letter, word, suffix) {
                if (prefix && suffix) {
                    return all;
                }

                return letter.toUpperCase() + word.toLowerCase();
            });
    }
};
