import {
  V1_PATTERNS,
  EPNSClosingTagWithSpaceRegexPATTERN,
} from './patterns';

/**
 * Returns a transformed text which is understood by the "markdown-to-jsx" lib
 * @param contentText 
 * @returns
 */

export const transformNewLine = (contentText: string) : string => {
   return contentText.replaceAll('\n', '<br/>');
}

/**
 * This function creates a sequence of as many &nbsp; chars as space.
 * TODO - if this creates an issue with word breaking 
 * then simply add 1st char as &nbsp; and rest as whitespace and try.
 * @param tagMatch 
 * @returns 
 */
const getAsManyNBSPChars = (tagMatch: string) => {
    let spacesFrag = tagMatch.slice(1, -1);
    let spaces = '';

    for (let j = 0; j < spacesFrag.length; j++) {
        spaces += '&nbsp;'
    }

    return spaces;
};
/**
 * This function transforms the whitespace between 2 custom tags and inserts &nbsp;
 * For e.g. - 
 * - <EPNSText>Hello World</EPNSText><EPNSText>Hello World2</EPNSText> ==> no change
 * - <EPNSText>Hello World</EPNSText> <EPNSText>Hello World2</EPNSText> ==> <EPNSText>Hello World</EPNSText>&nbsp;<EPNSText>Hello World2</EPNSText>
 * @param contentText 
 * @returns 
 */

export const transformTagWhiteSpace = (contentText: string) : string => {
    let transformedText = contentText;

    let tagMatches = transformedText.match(EPNSClosingTagWithSpaceRegexPATTERN);
  
    if (tagMatches) {
        for (let i = 0; i < tagMatches.length; i++) {
            let tagMatch = tagMatches[i];
            const spaces = getAsManyNBSPChars(tagMatch);
            transformedText = transformedText.replace(new RegExp(tagMatch, 'gim'), `>${spaces}<`)
        }
    }

    return transformedText;
}

/**
 * This function transforms all the OLD tags to NEW standard tags
 * @param contentText 
 * @returns 
 */
export const transformV1Tags = (contentText: string) : string => {
    let transformedText = contentText;
    
    for (let i = 0; i < V1_PATTERNS.length; i++) {
        const { regExpPattern, replacementTag } = V1_PATTERNS[i];
        transformedText = transformedText.replaceAll(regExpPattern, `<${replacementTag}>$2</${replacementTag}>`);
    }
   
    return transformedText;
}

export const preProcessMarkdownText = (contentText: string) : string => {
    let transformedText = contentText;

    transformedText = transformNewLine(
        transformTagWhiteSpace(
            transformV1Tags(
                transformedText
            )
        )
    );

    return transformedText;
};