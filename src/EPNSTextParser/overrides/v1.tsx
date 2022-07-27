import { styles } from '../palette';

/**
 * OLD EPNS STNADARD TAGS SUPPORTING COMPONENTS
 */

 type legacyTagProps = {
    children: any;
  };

const EPNSTextU = (props: legacyTagProps) => {
    return (
        <span style={{
        ...styles.primary,
        ...styles.bold,
        ...styles.italics, 
        ...styles.underline,
        ...styles.pointer
        }}>
            {props.children}
        </span>
    )
};

const EPNSTextUB = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.secondary,
            ...styles.bold,
            ...styles.italics,
            ...styles.underline,
            ...styles.pointer
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextUT = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.third,
            ...styles.bold,
            ...styles.italics,
            ...styles.underline,
            ...styles.pointer
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextUP = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.primary,
            ...styles.italics,
            ...styles.underline,
            ...styles.pointer
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextD = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.primary,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextS = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.secondary,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextT = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.third,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextE = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.error,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextB = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextI = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.italics
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextBI = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.bold,
            ...styles.italics
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextW = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.white,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextMG = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.midgray
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextWB = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.white
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextDG = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.darkgray
        }}>
            {props.children}
        </span>
    );
};

const EPNSTextDDG = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.darkergray
        }}>
            {props.children}
        </span>
    );
};

export const V1_OVERRIDES = {
    EPNSTextU: {
        component: EPNSTextU
    },
    EPNSTextUB: {
      component: EPNSTextUB
    },
    EPNSTextUT: {
      component: EPNSTextUT
    },
    EPNSTextUP: {
      component: EPNSTextUP
    },
    EPNSTextD: {
      component: EPNSTextD
    },
    EPNSTextS: {
      component: EPNSTextS
    },
    EPNSTextT: {
      component: EPNSTextT
    },
    EPNSTextE: {
      component: EPNSTextE
    },
    EPNSTextB: {
      component: EPNSTextB
    },
    EPNSTextI: {
      component: EPNSTextI
    },
    EPNSTextBI: {
        component: EPNSTextBI
    },
    EPNSTextW: {
      component: EPNSTextW
    },
    EPNSTextWB: {
      component: EPNSTextWB
    },
    EPNSTextMG: {
      component: EPNSTextMG
    },
    EPNSTextDG: {
      component: EPNSTextDG
    },
    EPNSTextDDG: {
      component: EPNSTextDDG
    },
};