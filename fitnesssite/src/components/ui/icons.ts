import { defineComponent, h } from 'vue';

interface IconProps {
  class?: string;
}

export const DumbbellIcon = defineComponent<IconProps>({
  name: 'DumbbellIcon',
  props: {
    class: { type: String, default: '' },
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          class: props.class,
        },
        [
          h('path', { d: 'm6.5 6.5 11 11' }),
          h('path', { d: 'm21 21-1-1' }),
          h('path', { d: 'm3 3 1 1' }),
          h('path', { d: 'm18 22 4-4' }),
          h('path', { d: 'm6 2 4 4' }),
          h('path', { d: 'm3 10 7-7' }),
          h('path', { d: 'm14 21 7-7' }),
        ],
      );
  },
});

export const MenuIcon = defineComponent<IconProps>({
  name: 'MenuIcon',
  props: {
    class: { type: String, default: '' },
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          class: props.class,
        },
        [
          h('line', { x1: '4', y1: '12', x2: '20', y2: '12' }),
          h('line', { x1: '4', y1: '6', x2: '20', y2: '6' }),
          h('line', { x1: '4', y1: '18', x2: '20', y2: '18' }),
        ],
      );
  },
});

export const XIcon = defineComponent<IconProps>({
  name: 'XIcon',
  props: {
    class: { type: String, default: '' },
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: '24',
          height: '24',
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: 'currentColor',
          strokeWidth: '2',
          strokeLinecap: 'round',
          strokeLinejoin: 'round',
          class: props.class,
        },
        [
          h('path', { d: 'M18 6 6 18' }),
          h('path', { d: 'm6 6 12 12' }),
        ],
      );
  },
});
