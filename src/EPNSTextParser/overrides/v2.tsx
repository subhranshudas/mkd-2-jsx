/* eslint-disable no-useless-escape */
import { styles } from '../palette';

interface ColorAliasMap {
  [key: string]: string
}

const AVAILABLE_COLOR_ALIAS : ColorAliasMap = {
  primary: styles.primary.color,
  secondary: styles.secondary.color,
  tertiary: styles.third.color
};

const URL_REGXP = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

/**
 * NEW EPNS STNADARD TAGS SUPPORTING COMPONENTS
 */

type cProps = {
  color: string;
  link?: string;
  children: any;
};


const EPNSText = (props: cProps) => {
  let colorProp = props.color || 'black';

  if (AVAILABLE_COLOR_ALIAS[props.color]) {
    colorProp = AVAILABLE_COLOR_ALIAS[props.color];
  }

  // Use the Link component if a valid link is passed
  if (props.link) {
    const isValidLink = URL_REGXP.test(props.link);
    if (isValidLink) {
      return (
        <span style={{
          cursor: 'pointer'
        }}>
          <a
            href={props.link}
            target="_blank"
            rel="noreferrer"
            style={{
              color: colorProp,
              textDecorationColor: colorProp,
            }}
          >
            {props.children}
          </a>
        </span>
      );
    }
  }

  return (
    <span style={{ color: colorProp }}>
        {props.children}
    </span>
  )  
}
  

export const V2_OVERRIDES = {
    EPNSText: {
        component: EPNSText,
    },
};