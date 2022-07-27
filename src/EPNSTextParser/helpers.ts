import { V1_PATTERNS } from './patterns';

const TimestampPatterns = {
  V1: {
      matcherRegex: /\[timestamp:(.*?)\]/mg,
      replacerRegex: /\[timestamp:(.*?)\]/mg
  },
  V2: {
      matcherRegex: /<Timestamp>(.*?)<\/Timestamp>/mg,
      replacerRegex: /<Timestamp>(.*?)<\/Timestamp>/mg
  }
};

export function extractTimeStamp(contentText: string): {
notificationBody: string;
timeStamp: string;
} {
let parsedBody = {
  notificationBody: contentText,
  timeStamp: '',
};

 const matchesV1TimestampTag =  TimestampPatterns.V1.matcherRegex.exec(contentText);
 

if (matchesV1TimestampTag) {
  parsedBody.timeStamp = matchesV1TimestampTag[1];
  parsedBody.notificationBody = contentText.replace(TimestampPatterns.V1.replacerRegex, '');;
}


const matchesV2TimestampTag =  TimestampPatterns.V2.matcherRegex.exec(contentText)

if (matchesV2TimestampTag) {
  parsedBody.timeStamp = matchesV2TimestampTag[1];
  parsedBody.notificationBody = contentText.replace(TimestampPatterns.V2.replacerRegex, '');;
}

return parsedBody;
}

const v1Patterns = V1_PATTERNS.map((_patterns) => {
  return _patterns.regExpPattern
});

export function getParserVersion(contentText: string) {
  let isV1 = false;

  for (let i = 0; i < v1Patterns.length; i++) {
    try {
      if(v1Patterns[i]?.test(contentText)) {
        isV1 = true;
        break;
      }
    } catch (e) {
     continue;
    }
  }
  
  return isV1 ? 'v1' : 'v2';
}