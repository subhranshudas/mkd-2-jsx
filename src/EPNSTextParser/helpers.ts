import { V1_PATTERNS, EPNSTimestampPATTERN } from './patterns';

export function extractTimeStamp(contentText: string): {
  notificationBody: string;
  timeStamp: string;
} {
  let parsedBody = {
    notificationBody: contentText,
    timeStamp: '',
  };

  const matchesV1TimestampTag =  EPNSTimestampPATTERN.V1.exec(contentText);
  

  if (matchesV1TimestampTag) {
    parsedBody.timeStamp = matchesV1TimestampTag[1];
    parsedBody.notificationBody = contentText.replace(EPNSTimestampPATTERN.V1, '');
  }


  const matchesV2TimestampTag =  EPNSTimestampPATTERN.V2.exec(contentText)

  if (matchesV2TimestampTag) {
    parsedBody.timeStamp = matchesV2TimestampTag[1];
    parsedBody.notificationBody = contentText.replace(EPNSTimestampPATTERN.V2, '');
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