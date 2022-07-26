export function extractTimeStamp(contentText: string): {
    notificationBody: string;
    timeStamp: string;
  } {

  let parsedBody = {
    notificationBody: contentText,
    timeStamp: "",
  };
  
  const matchesV1TimestampTag = contentText.match(/\[timestamp:(.*?)\]/);

  if (matchesV1TimestampTag) {
    parsedBody.timeStamp = matchesV1TimestampTag[1];
    const textWithoutTimeStamp = contentText.replace(
      / *\[timestamp:[^)]*\] */g,
      ''
    );
    parsedBody.notificationBody = textWithoutTimeStamp;
  }

  const matchesV2TimestampTag = contentText.match(/<Timestamp>(.*?)<\/Timestamp>/);

  if (matchesV2TimestampTag) {
    parsedBody.timeStamp = matchesV2TimestampTag[1];
    const textWithoutTimeStamp = contentText.replace(
      /<Timestamp.*?>.*?<\/Timestamp>/g,
      ''
    );
    parsedBody.notificationBody = textWithoutTimeStamp;
  }

  return parsedBody;
}