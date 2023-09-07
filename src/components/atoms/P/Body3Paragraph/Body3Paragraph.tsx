import React from 'react';
import Body3ParagraphStyle from './Body3ParagrpahStyle';

function Body3Paragraph({ content, color }: { content: string; color: string }): JSX.Element {
  return <Body3ParagraphStyle style={{ color }}>{content}</Body3ParagraphStyle>;
}

export default Body3Paragraph;
