import React, { useState, useEffect } from 'react';
import { Editor, findColor } from '../../src';
import { Color } from 'c5-pick-color';
import CodeElement from './components/CodeElement';
import { snippets, SnippetType } from './snippets';
import { Parsers } from '../../src';
import './Demo.css';

const parsers: Parsers[] = [
  'babel',
  'css',
  'json',
  'flow',
  'babel-flow',
  'babel-ts',
  'typescript',
  'json',
  'markdown',
  'html',
];

const Demo: React.FC = () => {
  const [showLineNumbers, setShowLineNumbers] = useState(true);
  const [codeString, setCodeString] = useState('App');
  const [codeElemColor, setCodeElemColor] = useState<Color>(
    findColor('code-elem')
  );
  const [enableCodeElemColor, setEnableCodeElemColor] = useState(true);
  const [codeStr, setCodeStr] = useState<Color>(findColor('code-str'));
  const [enableCodeStrColor, setEnableCodeStrColor] = useState(true);
  const [codeQuote, setCodeQuote] = useState<Color>(findColor('code-quote'));
  const [enableCodeQuote, setEnableCodeQuote] = useState(true);
  const [reserved, setReserved] = useState<Color>(findColor('reserved'));
  const [enableReserved, setEnableReserved] = useState(true);
  const [appColor, setAppColor] = useState<Color>(findColor('app-color'));
  const [enableAppColor, setEnableAppColor] = useState(true);
  const [defaultColor, setDefaultColor] = useState<Color>(
    findColor('default-color')
  );
  const [enableDefault, setEnableDefault] = useState(true);
  const [codeSingle, setCodeSingle] = useState<Color>(findColor('code-single'));
  const [enableCodeSingle, setEnableCodeSingle] = useState(true);
  const [betweenSingleQuotes, setBetweenSingleQuotes] = useState<Color>(
    findColor('between-single-quotes')
  );
  const [enableBetweenSingleQuotes, setEnableBetweenSingleQuotes] =
    useState(true);
  const [alternates, setAlternates] = useState<Color>(findColor('alternates'));
  const [enableAlternates, setEnableAlternates] = useState(true);
  const [customReserveWords, setCustomReserveWords] = useState([
    'headers',
    'users/list',
  ]);
  const [customAppWords, setCustomAppWords] = useState([
    'apikey',
    'searchPhrase',
  ]);
  const [customDefaults, setCustomDefaults] = useState(['Content-Type']);
  const [format, setFormat] = useState(true);
  const [parser, setParser] = useState<Parsers>('babel');

  useEffect(() => {}, [showLineNumbers]);

  const addReserveWord = (words: string) => {
    const stringArray = words.split(',');
    setCustomReserveWords(stringArray);
  };

  const addAppWord = (words: string) => {
    const stringArray = words.split(',');
    setCustomAppWords(stringArray);
  };

  const addCustomDefault = (words: string) => {
    const stringArray = words.split(',');
    setCustomDefaults(stringArray);
  };
  return (
    <div className="main-content">
      <h2>Welcome to our Code editor</h2>
      <div>
        <Editor
          showLineNumbers={showLineNumbers}
          enableCodeElem={enableCodeElemColor}
          code={codeString}
          codeElem={codeElemColor as string}
          codeStr={codeStr as string}
          enableCodeStr={enableCodeStrColor}
          codeQuote={codeQuote as string}
          enableCodeQuote={enableCodeQuote}
          reserved={reserved as string}
          enableReserved={enableReserved}
          appColor={appColor as string}
          enableAppColor={enableAppColor}
          defaultColor={defaultColor as string}
          enableDefault={enableDefault}
          codeSingle={codeSingle as string}
          enableCodeSingle={enableCodeSingle}
          betweenSingleQuotes={betweenSingleQuotes as string}
          enableBetweenSingleQuotes={enableBetweenSingleQuotes}
          alternates={alternates as string}
          enableAlternates={enableAlternates}
          customReserveWords={customReserveWords}
          customAppWords={customAppWords}
          customDefaults={customDefaults}
          format={true}
        />
      </div>
      <div className="controls">
        <div className="snippets">
          <span>
            <select
              value={codeString}
              onChange={(e) => setCodeString(e.target.value)}
            >
              {snippets.map((snippet: SnippetType, i: number) => (
                <option key={`snippet-${i}`} value={snippet.contents}>
                  {snippet.name}
                </option>
              ))}
            </select>
          </span>
          <span className="formatter">
            <select
              value={parser}
              onChange={(e) => setParser(e.target.value as Parsers)}
            >
              {parsers.map((p, i) => (
                <option key={`parser-${i}`} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </span>
        </div>
        <div className="show-line-number">
          <span>
            <label htmlFor="ln">Show Line Number</label>
            <input
              type="checkbox"
              name="ln"
              checked={showLineNumbers}
              onChange={(e) => setShowLineNumbers(e.target.checked)}
            />
          </span>
          <span className="format">
            <label>Format</label>
            <input
              type="checkbox"
              checked={format === true}
              onChange={(e) => setFormat(e.target.checked)}
            />
          </span>
        </div>

        <div className="two-controls">
          <CodeElement
            label={'Code Elem Color'}
            variable={codeElemColor}
            varSetter={setCodeElemColor}
            enable={enableCodeElemColor}
            enableSetter={setEnableCodeElemColor}
          />
          <CodeElement
            label={'String color'}
            variable={codeStr}
            varSetter={setCodeStr}
            enable={enableCodeStrColor}
            enableSetter={setEnableCodeStrColor}
          />
          <div className="two-controls">
            <CodeElement
              label={'Quote color'}
              variable={codeQuote}
              varSetter={setCodeQuote}
              enable={enableCodeQuote}
              enableSetter={setEnableCodeQuote}
            />
          </div>
        </div>

        <div className="two-controls">
          <CodeElement
            label={'Reserved color'}
            variable={reserved}
            varSetter={setReserved}
            enable={enableReserved}
            enableSetter={setEnableReserved}
          />
          <CodeElement
            label="App color"
            variable={appColor}
            varSetter={setAppColor}
            enable={enableAppColor}
            enableSetter={setEnableAppColor}
          />
          <div className="two-controls">
            <CodeElement
              label={'Default Color'}
              variable={defaultColor}
              varSetter={setDefaultColor}
              enable={enableDefault}
              enableSetter={setEnableDefault}
            />
          </div>
        </div>

        <div className="two-controls">
          <CodeElement
            label={'Single Quotes'}
            variable={codeSingle}
            varSetter={setCodeSingle}
            enable={enableCodeSingle}
            enableSetter={setEnableCodeSingle}
          />
          <CodeElement
            label={'Between quotes'}
            variable={betweenSingleQuotes}
            varSetter={setBetweenSingleQuotes}
            enable={enableBetweenSingleQuotes}
            enableSetter={setEnableBetweenSingleQuotes}
          />
          <div className="two-controls">
            <CodeElement
              label="Alternates"
              variable={alternates}
              varSetter={setAlternates}
              enable={enableAlternates}
              enableSetter={setEnableAlternates}
            />
          </div>
        </div>
        <div className="customs">
          <label>Custom Reserved words</label>
          <input
            type="text"
            value={customReserveWords}
            spellCheck={false}
            onChange={(e) => addReserveWord(e.target.value)}
          />
        </div>
        <div className="customs">
          <label>Custom App words</label>
          <input
            type="text"
            value={customAppWords}
            spellCheck={false}
            onChange={(e) => addAppWord(e.target.value)}
          />
        </div>
        <div className="customs">
          <label>Custom Default words</label>
          <input
            type="text"
            value={customDefaults}
            spellCheck={false}
            onChange={(e) => addCustomDefault(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default Demo;
