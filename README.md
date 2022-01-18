# c5-code-editor

This is a small utility that allows displaying source code nicely in a react app.

To install:

```js
  npm install c5-code-editor
```

Sample usage:

```js
import React, { useState } from 'react';
import Editor, { findColor } from 'c5-code-editor';

const App = () => {
  const [code, setCode] = useState(`import React from 'react'
  const App = (a) => {
    return (
      <div className="main-div">
        <h2>Hello world</h2>
      </div>
    )
  }`);

  return <Editor code={code} />;
};
```

Props:
| Prop Name | optional | type | description |
| :---------- | :-------- | :-------- | :---------- |
| code | [required] | string | the code you want displayed |
| showLineNumbers | [✔] | boolean | show line numbers or not. Defaults to true. |
| codeElem | [✔] | string | color for the code elements |
| enableCodeElem | [✔] | boolean | color code elements or not. Defaults to true. |
| codeStr | [✔] | string | color of strings inside double quotes |
| enableCodeStr | [✔] | boolean | color code string or not. Defaults to true. |
| codeQuote | [✔] | string | color of quotation marks |
| enableCodeQuote | [✔] | boolean | color quotation marks or not. Defaults to true. |
| reserved | [✔] | string | color of reserved words |
| enableReserved | [✔] | boolean | color reserved words or not. Defaults to true. |
| appColor | [✔] | string | color of app like words |
| enableAppColor | [✔] | boolean | color app like words or not. Defaults to true. |
| defaultColor | [✔] | string | color of default like words |
| enableDefaultColor | [✔] | boolean | color default like words or not |
| codeSingle | [✔] | string | color of single quotes |
| enableCodeSingle | [✔] | boolean | color single quotes or not. Defaults to true. |
| betweenSingleQuotes | [✔] | string | color of contents between single quotes |
| enableBetweenSingleQuotes | [✔] | boolean | color contents between single quotes or not. Defaults to true. |
| parens | [✔] | string | color of parenthesis |
| enableParens | [✔] | boolean | color parenthesis or not. Defaults to true. |
| insideParens | [✔] | string | color of contents inside of parenthesis |
| enableInsideParens | [✔] | boolean | color contents inside of parenthesis or not. Defaults to true. |
| alternates | [✔] | string | color of alternate words |
| enableAlternates | [✔] | boolean | color alternate words or not. Defaults to true. |
| customReserveWords | [✔] | array of strings | an array of words that you would like to include in the coloring of reserve words. defaults to empty array |
| customAppWords | [✔] | array of strings | an array of words that you would like to include in the coloring of app words. defaults to empty array |
| customDefaults | [✔] | array of strings | an array of words that you would like to include in the coloring of default words. defaults to empty array |
| customAlternatives | [✔] | array of strings | an array of words that you would like to include in the coloring of alternative words. defaults to empty array |
| parserType | [✔] | string | type of parser to use with Prettier to format the code string. Defaults to 'babel' |
| format | [✔] | boolean | format code or not. defaults to true

words list:

```js
export const reservedWords: string[] = [
  'id',
  'className',
  'class',
  'if',
  'then',
  'json',
  'application',
  'method',
  'async',
  'await',
  'for',
];

export const defaultWords: string[] = [
  'return',
  'import',
  'console',
  'log',
  'from',
];

export const appWords: string[] = [
  'React',
  'Axios',
  'const',
  'function',
  'let',
  'var',
  'avion',
];

export const alternateWords: string[] = ['url', 'params', 'data', 'cors'];
```

Parser Types:

```js
export type Parsers =
  | 'babel'
  | 'css'
  | 'json'
  | 'flow'
  | 'babel-flow'
  | 'babel-ts'
  | 'typescript'
  | 'json'
  | 'markdown'
  | 'html';
```
