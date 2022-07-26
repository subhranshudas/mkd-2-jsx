/**
 * OLD EPNS TAGS PATTERNS
 * !!these patterns are only there to support old tags, so don't add anymore!!
 * basically these will convert the old tags to a TAG understood by markdown-to-jsx via the overrides we provide
 * for e.g. 
 * [u:hello world] ==> <TextU>hello world</TextU> ==> overrides ==> markdown-to-jsx
 */
const OLD_PATTERNS = [
    {
        regExpPattern:   /\[(u):([^\]]+)\]/g, // url,
        replacementTag: 'TextU'
    },
    {
        regExpPattern: /\[(ub):([^\]]+)\]/g, // url
        replacementTag: 'TextUB'
    },
    {
        regExpPattern: /\[(ut):([^\]]+)\]/g, // url
        replacementTag: 'TextUT'
    },
    {
        regExpPattern: /\[(up):([^\]]+)\]/g, // url
        replacementTag: 'TextUP'
    },
    {
        regExpPattern: /\[(d):([^\]]+)\]/g, // default or primary gradient color
        replacementTag: 'TextD'
    },
    {
        regExpPattern: /\[(s):([^\]]+)\]/g, // secondary gradient color
        replacementTag: 'TextS'
    },
    {
        regExpPattern: /\[(t):([^\]]+)\]/g, // third gradient color
        replacementTag: 'TextT'
    },
    {
        regExpPattern: /\[(e):([^\]]+)\]/g, // error
        replacementTag: 'TextE'
    },
    {
        regExpPattern: /\[(b):([^\]]+)\]/g, // bold
        replacementTag: 'TextB'
    },
    {
        regExpPattern: /\[(i):([^\]]+)\]/g, // italics
        replacementTag: 'TextI'
    },
    {
        regExpPattern: /\[(bi):([^\]]+)\]/g, // bolditalics
        replacementTag: 'TextBI'
    },
    {
        regExpPattern: /\[(w):([^\]]+)\]/g, // url
        replacementTag: 'TextW'
    },
    {
        regExpPattern: /\[(wb):([^\]]+)\]/g, // url
        replacementTag: 'TextWB'
    },
    {
        regExpPattern: /\[(mg):([^\]]+)\]/g, // url
        replacementTag: 'TextMG'
    },
    {
        regExpPattern: /\[(dg):([^\]]+)\]/g, // url
        replacementTag: 'TextDG'
    },
    {
        regExpPattern: /\[(ddg):([^\]]+)\]/g, // url
        replacementTag: 'TextDDG'
    },
]

/**
 * NEW EPNS TAGS PATTERNS
 */
export const PATTERNS = [
   ...OLD_PATTERNS
];