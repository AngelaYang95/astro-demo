import { style } from '@vanilla-extract/css';

export const base = style({
  padding: '0.5rem 1rem',
  borderRadius: '8px',
  cursor: 'pointer',
});

export const primary = style([base, {
  color: 'white',
  background: '#333'
}]);

export const secondary = style([base, {
  color: '#333',
  background: 'white',
  border: '1px solid black',
}]);