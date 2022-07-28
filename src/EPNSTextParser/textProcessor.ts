import { V1_PATTERNS, EPNSClosingTagWithSpaceRegexPATTERN } from './patterns';

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
export const transformTagWhiteSpace = (contentText: string) : string => {
    let transformedText = contentText;
    
    let tagMatches = EPNSClosingTagWithSpaceRegexPATTERN.exec(contentText);

    if (tagMatches) {
        let tag = tagMatches[0]?.split(' ')?.join('');
        return transformedText.replace(EPNSClosingTagWithSpaceRegexPATTERN, `${tag}&nbsp;`);
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