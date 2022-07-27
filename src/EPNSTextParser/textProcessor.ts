import { PATTERNS, EPNSClosingTagWithSpaceRegexPATTERN } from './patterns';

/**
 * Returns a transformed text which is understood by the "markdown-to-jsx" lib
 * @param contentText 
 * @returns
 */

export const transformNewLine = (contentText: string) : string => {
   return contentText.replaceAll('\n', '<br/>');
}

/**
 * This function transforms the whitespace between 2 custom tags and inserts &nbsp;
 * For e.g. - 
 * - <EPNSText>Hello World</EPNSText><EPNSText>Hello World2</EPNSText> ==> no change
 * - <EPNSText>Hello World</EPNSText> <EPNSText>Hello World2</EPNSText> ==> <EPNSText>Hello World</EPNSText>&nbsp;<EPNSText>Hello World2</EPNSText>
 * @param contentText 
 * @returns 
 */
export const transformWhiteSpace = (contentText: string) : string => {
    let transformedText = contentText;
    
    let tagMatches = EPNSClosingTagWithSpaceRegexPATTERN.exec(contentText);

    if (tagMatches) {
        let tag = tagMatches[0]?.split(' ')?.join('');
        return transformedText.replace(EPNSClosingTagWithSpaceRegexPATTERN, `${tag}&nbsp;`);
    }
    return contentText;
}

export const preProcessMarkdownText = (contentText: string) : string => {
    let transformedText = contentText;

    for (let i = 0; i < PATTERNS.length; i++) {
        const { regExpPattern, replacementTag } = PATTERNS[i];
        transformedText = transformedText.replaceAll(regExpPattern, `<${replacementTag}>$2</${replacementTag}>`);
    }

    transformedText = transformWhiteSpace(transformedText);

    return transformedText;
};