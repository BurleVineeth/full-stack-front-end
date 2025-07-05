import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const SideNavAnimation = trigger('sideNavAnimation', [
  state('open', style({ transform: 'translateX(0)', opacity: 1 })),
  state('closed', style({ transform: 'translateX(-100%)', opacity: 0 })),
  transition('closed => open', [animate('300ms ease-in')]),
  transition('open => closed', [animate('300ms ease-out')]),
]);

export const DeskModalAnimation = trigger('deskModalAnimation', [
  state(
    'void',
    style({
      transform: 'scaleX(0.05) scaleY(0)',
      opacity: 0,
    }),
  ),
  state(
    '*',
    style({
      transform: 'scaleX(1) scaleY(1)',
      opacity: 1,
    }),
  ),
  transition('void => *', [
    animate('300ms ease-out'), // Open animation
  ]),
  transition('* => void', [
    animate('250ms ease-in'), // Close animation
  ]),
]);
