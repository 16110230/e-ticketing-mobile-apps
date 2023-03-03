export const send_reply = replyState => {
  return {
    type: 'SEND_REPLY',
    payload: {
      ticId: replyState.ticId,
      commentText: replyState.commentText,
      fileName: replyState.fileName,
      fileText: replyState.fileText,
    },
  };
};
