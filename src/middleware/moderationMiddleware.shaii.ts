import Logger from "../shaii/Logger.shaii";
import { isFreeNitro } from "../moderation/isFreeNitro.shaii";
import { isBadWord } from "../moderation/isBadWord.shaii";
import { IMessage } from "../types";
import { isMuted } from "../moderation/isMuted.shaii";
import { isIP } from "../moderation/isIP.shaii";
import { GEOXOR_GUILD_ID, SECRET_GUILD_ID } from "../constants";

const checks = [isFreeNitro, isBadWord, isMuted, isIP];

export default function (message: IMessage, next: (message: IMessage) => any): void {
  if (message.author.bot) return next(message);
  if (message.guild?.id !== GEOXOR_GUILD_ID && message.guild?.id !== SECRET_GUILD_ID) return;
  for (let i = 0; i < checks.length; i++) {
    const checkFn = checks[i];
    const idxString = `[${i + 1}/${checks.length}]`;
    const isFailed = checkFn(message);
    if (isFailed) {
      message.delete();
      return Logger.command.error(`${idxString} Check ${checkFn.name} failed for ${message.author.username}`);
    }
  }

  return next(message);
}
