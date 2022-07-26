import { styles } from '../palette';

/**
 * OLD EPNS STNADARD TAGS SUPPORTING COMPONENTS
 */

 type legacyTagProps = {
    children: any;
  };

const TextU = (props: legacyTagProps) => {
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

const TextUB = (props: legacyTagProps) => {
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

const TextUT = (props: legacyTagProps) => {
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

const TextUP = (props: legacyTagProps) => {
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

const TextD = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.primary,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const TextS = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.secondary,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const TextT = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.third,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const TextE = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.error,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const TextB = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const TextI = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.italics
        }}>
            {props.children}
        </span>
    );
};

const TextBI = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.bold,
            ...styles.italics
        }}>
            {props.children}
        </span>
    );
};

const TextW = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.white,
            ...styles.bold
        }}>
            {props.children}
        </span>
    );
};

const TextMG = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.midgray
        }}>
            {props.children}
        </span>
    );
};

const TextWB = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.white
        }}>
            {props.children}
        </span>
    );
};

const TextDG = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.darkgray
        }}>
            {props.children}
        </span>
    );
};

const TextDDG = (props: legacyTagProps) => {
    return (
        <span style={{
            ...styles.darkergray
        }}>
            {props.children}
        </span>
    );
};

export const V1_OVERRIDES = {
    TextU: {
        component: TextU
    },
    TextUB: {
      component: TextUB
    },
    TextUT: {
      component: TextUT
    },
    TextUP: {
      component: TextUP
    },
    TextD: {
      component: TextD
    },
    TextS: {
      component: TextS
    },
    TextT: {
      component: TextT
    },
    TextE: {
      component: TextE
    },
    TextB: {
      component: TextB
    },
    TextI: {
      component: TextI
    },
    TextBI: {
        component: TextBI
    },
    TextW: {
      component: TextW
    },
    TextWB: {
      component: TextWB
    },
    TextMG: {
      component: TextMG
    },
    TextDG: {
      component: TextDG
    },
    TextDDG: {
      component: TextDDG
    },
};