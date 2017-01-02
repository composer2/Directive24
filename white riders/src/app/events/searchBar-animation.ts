import { trigger, style, state, transition, animate } from '@angular/core';

export const searchBarAnimation =
    trigger('focusSearchPanel', [
        state('inactive', style({
            transform: 'scale(1)'
        })),
        state('active', style({
            transform: 'scale(1.04)'
        })),
        transition('inactive => active', animate('500ms ease-in')),
        transition('active => inactive', animate('500ms ease-out'))
    ]);
