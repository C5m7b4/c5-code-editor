import React from 'react';
import ColorPickerWrapper, { Color } from 'c5-pick-color';

interface CodeElementProps {
  enable: boolean;
  variable: Color;
  varSetter: (v: Color) => void;
  enableSetter: (v: boolean) => void;
  label: string;
}

const CodeElement: React.FC<CodeElementProps> = ({
  enable,
  variable,
  varSetter,
  enableSetter,
  label,
}) => {
  return (
    <div className="code-elem-control">
      <span>
        <label>{label}</label>
      </span>
      <div className="code-elements">
        <span>
          <ColorPickerWrapper
            color={variable}
            onChange={(color) => varSetter(color)}
          />
        </span>
        <span>
          <input
            type="checkbox"
            checked={enable}
            onChange={(e) => enableSetter(e.target.checked)}
          />
          <label style={{ marginLeft: '8px' }}>Enable</label>
        </span>
      </div>
    </div>
  );
};

export default CodeElement;
