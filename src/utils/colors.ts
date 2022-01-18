export type ColorObject = {
  name: string;
  color: string;
};

export type ColorArray = ColorObject[];

export const colors: ColorArray = [
  { name: 'code-elem', color: '#899dd5' },
  { name: 'code-str', color: '#A1E0A1' },
  { name: 'code-quote', color: '#CAB42E' },
  { name: 'reserved', color: '#A59548' },
  { name: 'app-color', color: '#1985BD' },
  { name: 'default-color', color: '#E433EF' },
  { name: 'code-single', color: '#19E637' },
  { name: 'between-single-quotes', color: '#0DC9F2' },
  { name: 'alternates', color: '#f513c1' },
  { name: 'parens', color: '#B7BE34' },
  { name: 'inside-parens', color: '#A428D5' },
];
