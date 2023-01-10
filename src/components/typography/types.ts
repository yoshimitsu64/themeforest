import React, { CSSProperties } from 'react';

export interface IProps {
  type: 'headLine' | 'paragraph';
  variant: 'extraBold' | 'bold' | 'semiBold' | 'medium' | 'regular';
  size: 0 | 1 | 2 | 3;
  children: React.ReactNode;
  element?: 'span';
  color?: string;
  mt?: number;
  mb?: number;
  ml?: number;
  mr?: number;
  m?: number;
  width?: number;
  textAlign?: CSSProperties['textAlign'];
}