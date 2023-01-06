import React from 'react';

export interface IProps {
  variant?: 'stretch' | 'space-around';
  width?: number;
  direction?: 'row' | 'column' | 'row-reverse';
  children: React.ReactNode;
  justifyContent?: 'center' | 'space-between';
  alignItems?: 'center';
  mb?: number;
  mt?: number;
  mr?: number;
  ml?: number;
  m?: number;
  p?: number;
  pb?: number;
  pd?: number;
  pr?: number;
  pl?: number;
}
