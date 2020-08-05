import React from 'react';

export interface ContentMessageProps {
  message: string;
}

export const ContentMessage: React.FC<ContentMessageProps> = ({ message }) => (
  <p style={{ textAlign: 'center' }}>{message}</p>
);
