import React, { useState, useEffect } from 'react';
import { findColor } from '../../utils';
import {
  reservedWords,
  htmlEncode,
  appWords,
  defaultWords,
  alternateWords,
} from '../../utils';
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import { Parsers } from '../../types';

export interface EditorProps {
  code: string;
  showLineNumbers: boolean;
  codeElem?: string;
  enableCodeElem?: boolean;
  codeStr?: string;
  enableCodeStr?: boolean;
  codeQuote?: string;
  enableCodeQuote?: boolean;
  reserved?: string;
  enableReserved?: boolean;
  appColor?: string;
  enableAppColor?: boolean;
  defaultColor?: string;
  enableDefault?: boolean;
  codeSingle?: string;
  enableCodeSingle?: boolean;
  betweenSingleQuotes?: string;
  enableBetweenSingleQuotes?: boolean;
  parens?: string;
  enableParens?: boolean;
  insideParens?: string;
  enableInsideParens?: boolean;
  alternates?: string;
  enableAlternates?: boolean;
  customReserveWords?: string[];
  customAppWords?: string[];
  customDefaults?: string[];
  customAlternatives?: string[];
  format?: boolean;
  parserType?: Parsers;
}

const Editor: React.FC<EditorProps> = ({
  code,
  showLineNumbers = true,
  codeElem = findColor('code-elem'),
  enableCodeElem = true,
  codeStr = findColor('code-str'),
  enableCodeStr = true,
  codeQuote = findColor('code-quote'),
  enableCodeQuote = true,
  reserved = findColor('reserved'),
  enableReserved = true,
  appColor = findColor('app-color'),
  enableAppColor = true,
  defaultColor = findColor('default-color'),
  enableDefault = true,
  codeSingle = findColor('code-single'),
  enableCodeSingle = true,
  betweenSingleQuotes = findColor('between-single-quotes'),
  enableBetweenSingleQuotes = true,
  parens = findColor('parens'),
  enableParens = true,
  insideParens = findColor('inside-parens'),
  enableInsideParens = true,
  alternates = findColor('alternates'),
  enableAlternates = true,
  customReserveWords = [],
  customAppWords = [],
  customDefaults = [],
  customAlternatives = [],
  parserType = 'babel',
  format = false,
}) => {
  const [lines, setLines] = useState<string[]>([]);

  useEffect(() => {
    const raw = /<|'/g.test(code);
    if (raw) {
      if (format) {
        code = formatCode(code);
      }
      code = htmlEncode(code);
    }
    if (code.length > 0) {
      const lines = code.split('\n');
      setLines(lines);
    }
  }, [code]);

  const formatCode = (code: string): string => {
    try {
      const formatted = prettier.format(code, {
        parser: parserType,
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      });
      return formatted;
    } catch (error) {
      console.error('Could not parse your code using the babel parser');
      return code;
    }
  };

  const replace = (line: string): string => {
    if (enableCodeStr) {
      line = line.replace(
        /&quot;(.*?)&quot;/g,
        `<span style="color:${codeStr}">&quot;$1&quot;</span>`
      );
    }

    if (enableCodeQuote) {
      line = line.replace(
        /&quot;/g,
        `<span style="color:${codeQuote}">&quot;</span>`
      );
    }

    if (enableBetweenSingleQuotes) {
      line = line.replace(
        /&#39;(.*?)&#39;/g,
        `<span style="color:${betweenSingleQuotes}">&#39;$1&#39;</span>`
      );
    }

    if (enableCodeSingle) {
      line = line.replace(
        /&#39;/g,
        `<span style="color:${codeSingle}">&#39;</span>`
      );
    }

    if (enableInsideParens) {
      line = line.replace(
        /\((.*?)\)/g,
        `<span style="color:${insideParens}">($1)</span>`
      );
    }

    if (enableParens) {
      line = line.replace(/\(/g, `<span style="color:${parens}">(</span>`);
      line = line.replace(/\)/g, `<span style="color:${parens}">)</span>`);
    }

    if (enableCodeElem) {
      line = line.replace(
        /&lt;(.*?)&gt;/g,
        `<span style="color:${codeElem}">&lt;$1&gt;</span>`
      );
    }

    if (enableReserved) {
      reservedWords.forEach((word) => {
        const re = new RegExp(word, 'gi');
        line = line.replace(
          re,
          `<span style="color:${reserved}">${word}</span>`
        );
      });
    }

    if (enableAppColor) {
      appWords.forEach((word) => {
        const re = new RegExp(word, 'g');
        line = line.replace(
          re,
          `<span style="color:${appColor}">${word}</span>`
        );
      });
    }

    if (enableDefault) {
      defaultWords.forEach((word) => {
        const re = new RegExp(word, 'g');
        line = line.replace(
          re,
          `<span style="color:${defaultColor}">${word}</span>`
        );
      });
    }

    if (enableAlternates) {
      alternateWords.forEach((word) => {
        const re = new RegExp(word, 'g');
        line = line.replace(
          re,
          `<span style="color: ${alternates}">${word}</span>`
        );
      });
    }

    if (customReserveWords.length > 0) {
      customReserveWords.forEach((word) => {
        if (word.length > 0) {
          const re = new RegExp(word, 'g');
          line = line.replace(
            re,
            `<span style="color:${reserved}">${word}</span>`
          );
        }
      });
    }

    if (customAppWords.length > 0) {
      customAppWords.forEach((word) => {
        if (word.length > 0) {
          const re = new RegExp(word, 'g');
          line = line.replace(
            re,
            `<span style="color:${appColor}">${word}</span>`
          );
        }
      });
    }

    if (customDefaults.length > 0) {
      customDefaults.forEach((word) => {
        if (word.length > 0) {
          const re = new RegExp(word, 'g');
          line = line.replace(
            re,
            `<span style="color:${defaultColor}">${word}</span>`
          );
        }
      });
    }

    if (customAlternatives.length > 0) {
      customAlternatives.forEach((word) => {
        const re = new RegExp(word, 'g');
        line = line.replace(
          re,
          `<span style="color:${alternates}">${word}</span>`
        );
      });
    }

    return line;
  };

  return (
    <code className="code">
      <div className="editor-top-spacer">
        {showLineNumbers ? <div className="line-number"></div> : <div></div>}
        <div className="code-line"></div>
      </div>
      {lines.length === 0 ? (
        <div className="editor-empty-line">
          {showLineNumbers ? <div className="line-number"></div> : <div></div>}
          <div className="code-line">Currently no code to display</div>
        </div>
      ) : (
        <React.Fragment>
          {lines.map((line, i) => (
            <div key={`cl-${i}`} className="code-content">
              {showLineNumbers ? (
                <div className="line-number">
                  {i + 1}
                  {'  '}
                </div>
              ) : (
                <div></div>
              )}
              <div
                className="code-line"
                dangerouslySetInnerHTML={{ __html: replace(line) }}
              ></div>
            </div>
          ))}
        </React.Fragment>
      )}
      <div className="editor-bottom-spacer">
        {showLineNumbers ? <div className="line-number"></div> : <div></div>}
        <div></div>
      </div>
    </code>
  );
};

export default Editor;
