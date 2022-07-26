import Markdown from 'markdown-to-jsx';
import { overrides } from './overrides';

export interface IEPNSMarkdown {
  text: string;
}

export const EPNSMarkdown = (props: any) => {
    return (
        <Markdown
            children={props.text}
            options={{
                overrides: overrides
            }}
        /> 
    );
};
