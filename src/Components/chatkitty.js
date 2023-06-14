import ChatKitty from '@chatkitty/core';
export const chatkitty = ChatKitty.getInstance('18b75db7-9263-44e2-adb4-19aec46af6c9');


export function channelDisplayName(channel) {
    if (channel.type === 'DIRECT') {
      return channel.members.map((member) => member.displayName).join(', ');
    } else {
      return channel.name;
    }
  }