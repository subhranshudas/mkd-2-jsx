import { styles } from '../palette';

/**
 * NEW EPNS STNADARD TAGS SUPPORTING COMPONENTS
 */

 type cProps = {
    color: string;
    children: any;
    primary?: boolean;
    secondary?: boolean;
    tertiary?: boolean;
  };
  
  const EPNSText = (props: cProps) => {
    let color = props.color || 'black';
  
    if (props.primary) {
      color = styles.primary.color
    } else if (props.secondary) {
      color = styles.secondary.color
    } else if (props.tertiary) {
      color = styles.third.color
    }
  
    return (
      <span style={{ color: color }}>
         {props.children}
      </span>
    )
  }
  

export const V2_OVERRIDES = {
    EPNSText: {
        component: EPNSText,
    },
};