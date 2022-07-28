/**
 * OLD EPNS TAGS PATTERNS
 * !!these patterns are only there to support old tags, so don't add anymore!!
 * basically these will convert the old tags to a TAG understood by markdown-to-jsx via the overrides we provide
 * for e.g. 
 * [u:hello world] ==> <TextU>hello world</TextU> ==> overrides ==> markdown-to-jsx
 */
export const V1_PATTERNS = [
    {
        regExpPattern:   /\[(u):([^\]]+)\]/g, // url,
        replacementTag: 'EPNSTextU'
    },
    {
        regExpPattern: /\[(ub):([^\]]+)\]/g, // url
        replacementTag: 'EPNSTextUB'
    },
    {
        regExpPattern: /\[(ut):([^\]]+)\]/g, // url
        replacementTag: 'EPNSTextUT'
    },
    {
        regExpPattern: /\[(up):([^\]]+)\]/g, // url
        replacementTag: 'EPNSTextUP'
    },
    {
        regExpPattern: /\[(d):([^\]]+)\]/g, // default or primary gradient color
        replacementTag: 'EPNSTextD'
    },
    {
        regExpPattern: /\[(s):([^\]]+)\]/g, // secondary gradient color
        replacementTag: 'EPNSTextS'
    },
    {
        regExpPattern: /\[(t):([^\]]+)\]/g, // third gradient color
        replacementTag: 'EPNSTextT'
    },
    {
        regExpPattern: /\[(e):([^\]]+)\]/g, // error
        replacementTag: 'EPNSTextE'
    },
    {
        regExpPattern: /\[(b):([^\]]+)\]/g, // bold
        replacementTag: 'EPNSTextB'
    },
    {
        regExpPattern: /\[(i):([^\]]+)\]/g, // italics
        replacementTag: 'EPNSTextI'
    },
    {
        regExpPattern: /\[(bi):([^\]]+)\]/g, // bolditalics
        replacementTag: 'EPNSTextBI'
    },
    {
        regExpPattern: /\[(w):([^\]]+)\]/g, // white
        replacementTag: 'EPNSTextW'
    },
    {
        regExpPattern: /\[(wb):([^\]]+)\]/g, // white bold
        replacementTag: 'EPNSTextWB'
    },
    {
        regExpPattern: /\[(mg):([^\]]+)\]/g, // medium grey
        replacementTag: 'EPNSTextMG'
    },
    {
        regExpPattern: /\[(dg):([^\]]+)\]/g, // dark grey
        replacementTag: 'EPNSTextDG'
    },
    {
        regExpPattern: /\[(ddg):([^\]]+)\]/g, // darker grey
        replacementTag: 'EPNSTextDDG'
    },
]

/**
 * NEW EPNS TAGS PATTERNS ??
 */



/**
 * !!Make sure this regex matches with the Tag names in the patterns' regexes
 * For e.g. if we have <EPNSText>..</EPNSText> then the below should be EPNS,
 * if we have <MDX>..</MDX> then below should be MDX.
 * we are only allowing 
 *  -- whitepace
 */
export const EPNSClosingTagWithSpaceRegexPATTERN = /<\/EPNS(.*?)> /mg;

export const EPNSTimestampPATTERN = {
    V1: /\[timestamp:(.*?)\]/mg,
    V2: /<Timestamp>(.*?)<\/Timestamp>/mg,
};