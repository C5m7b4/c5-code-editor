import React from 'react';
import ColorPickerWrapper, { Color } from 'c5-pick-color';
import ToolTipController from 'c5-tooltips';

interface CodeElementProps {
  enable: boolean;
  variable: Color;
  varSetter: (v: Color) => void;
  enableSetter: (v: boolean) => void;
  label: string;
  tooltip?: string;
}

const CodeElement: React.FC<CodeElementProps> = ({
  enable,
  variable,
  varSetter,
  enableSetter,
  label,
  tooltip,
}) => {
  return (
    <div className="code-elem-control">
      <span>
        <ToolTipController>
          <label tool-tip={tooltip}>{label}</label>
        </ToolTipController>
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
