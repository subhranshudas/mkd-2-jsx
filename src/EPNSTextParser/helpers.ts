export function extractTimeStamp(notificationBody: string): {
    notificationBody: string;
    timeStamp: string;
  } {

    let parsedBody = {
      notificationBody: notificationBody,
      timeStamp: "",
    };
    
    const matchesV1TimestampTag = notificationBody.match(/\[timestamp:(.*?)\]/);

    if (matchesV1TimestampTag) {
      parsedBody.timeStamp = matchesV1TimestampTag[1];
      const textWithoutTimeStamp = notificationBody.replace(
        / *\[timestamp:[^)]*\] */g,
        ''
      );
      parsedBody.notificationBody = textWithoutTimeStamp;
    }

    const matchesV2TimestampTag = notificationBody.match(/<Timestamp>(.*?)<\/Timestamp>/);

    if (matchesV2TimestampTag) {
      parsedBody.timeStamp = matchesV2TimestampTag[1];
      const textWithoutTimeStamp = notificationBody.replace(
        /<Timestamp.*?>.*?<\/Timestamp>/g,
        ''
      );
      parsedBody.notificationBody = textWithoutTimeStamp;
    }

    return parsedBody;
  }