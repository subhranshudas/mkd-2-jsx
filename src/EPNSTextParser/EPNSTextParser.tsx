import { preProcessMarkdownText } from './textProcessor';
import { EPNSMarkdown } from './EPNSMarkdown';

export interface IEPNSTextParser {
    text: string;
  }
  
export  const EPNSTextParser = (props: IEPNSTextParser) : JSX.Element => {
  const textProp = preProcessMarkdownText(props?.text)
  return <EPNSMarkdown text={textProp} />;
};
 