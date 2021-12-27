import React from "react";
import { Button } from "antd";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
  return <Button>{label}</Button>;
};
