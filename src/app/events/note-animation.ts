import { trigger, style, state, transition, animate, keyframes } from '@angular/core';

export const noteAnimation =
    trigger('note', [
        state('inactive', style({
            opacity: '0'
        })),
        state('active', style({
            opacity: '1',
        })),
        transition('inactive => active', [
            animate(600, keyframes([
                style({ opacity: '0', transform: 'translateY(0)', offset: '0' }),
                style({ opacity: '1', transform: 'translateY(-15px)', offset: '0.6' }),
                style({ opacity: '1', transform: 'translateY(0)', offset: '1' })
            ]))
        ]),
        transition('active => inactive', [
            animate(600, keyframes([
                style({ opacity: '1', transform: 'translateY(0)', offset: '0' }),
                style({ opacity: '1', transform: 'translateY(-15px)', offset: '0.7' }),
                style({ opacity: '0', transform: 'translateY(100%)', offset: '1' })
            ]))
        ])
    ]);
