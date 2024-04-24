import React from "react";
import {Popover} from "antd";
import {SketchPicker} from "react-color";

import styled from "styled-components";
import type {ColorResult} from "react-color";

export const Warp = styled.div`
  .theme-input {
    border: 1px solid rgb(229, 230, 235);
    box-sizing: border-box;
    display: flex;
    height: 32px;
    padding: 3px;
    width: 100%;
    cursor: pointer;

    .theme-color {
      height: 24px;
      margin-right: 10px;
      min-width: 100px;
    }
  }
`;
const presetColors = [
  "#409EFF",
  "#DAA96E",
  "#00cf74",
  "#009688",
  "#27ae60",
  "#ff5c93",
  "#e53935",
  "#d81b60",
  "#14c9c9",
  "#e74c3c",
  "#fd726d",
  "#f39c12",
  "#9b59b6"];
type Props = {
  currentColor?: string
  onChange(value: ColorResult): void;
}
const ColorPicker = ({onChange, currentColor = "#9b59b6", ...args}: Props) => {
  const handleChange = (value: ColorResult, e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value);
  };
  return (
    <Warp>
      <Popover
        overlayInnerStyle={{padding: "0"}}
        trigger="click"
        content={
          <SketchPicker
            presetColors={presetColors}
            onChange={handleChange}
            {...args}
          />
        }
        placement={"bottom"}
      >
        <div className="theme-input">
          <div className="theme-color"
               style={{
                 background: currentColor,
               }}
          ></div>
          <span>{currentColor}</span>
        </div>

      </Popover>
    </Warp>
  );
};
export default ColorPicker;
