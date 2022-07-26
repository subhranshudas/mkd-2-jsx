import { PATTERNS } from './patterns';

/**
 * Returns a transformed text which is understood by the "markdown-to-jsx" lib
 * @param contentText 
 * @returns
 */

export const transformNewLine = (contentText: string) : string => {
   return contentText.replaceAll('\n', '<br/>');
}

export const transformWhiteSpace = (contentText: string) : string => {
    return contentText.replaceAll(' ', "&nbsp;"); // ??!! find better way???
}

export const transformPatternsToTags = (contentText: string) : string => {
    let transformedText = contentText;

    for (let i = 0; i < PATTERNS.length; i++) {
        const { regExpPattern, replacementTag } = PATTERNS[i];
        transformedText = transformedText.replaceAll(regExpPattern, `<${replacementTag}>$2</${replacementTag}>`);
    }

    return transformedText;
}


/**
 * Add/Remove Processors here in the pipeline
 */
const processors = [
    transformPatternsToTags,
    transformNewLine,
    transformWhiteSpace
];

export const preProcessMarkdownText = (contentText: string) : string => {
   return processors.reduce((transformedText, transformFunction) => {
        return transformFunction(transformedText);
   }, contentText)
};