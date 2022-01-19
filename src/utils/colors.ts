export type ColorObject = {
  name: string;
  color: string;
};

export type ColorArray = ColorObject[];

export const colors: ColorArray = [
  { name: 'code-elem', color: '#899dd5' },
  { name: 'code-str', color: '#A1E0A1' },
  { name: 'code-quote', color: '#7478E4' },
  { name: 'reserved', color: '#A59548' },
  { name: 'app-color', color: '#1985BD' },
  { name: 'default-color', color: '#6BF1A5' },
  { name: 'code-single', color: '#19E637' },
  { name: 'between-single-quotes', color: '#0DC9F2' },
  { name: 'alternates', color: '#f513c1' },
  { name: 'parens', color: '#B7BE34' },
  { name: 'inside-parens', color: '#B05AD9' },
  { name: 'interface-key', color: '#94B740' },
  { name: 'interface-value', color: '#22B0C0' },
  { name: 'curly-braces', color: '#E19E1F' },
  { name: 'destructured', color: '#57C644' },
  { name: 'operator-color', color: '#396BB7' },
];
