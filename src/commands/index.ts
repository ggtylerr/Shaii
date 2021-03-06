// This file exists because the commands import faster
// when they are hardcoded like this than
// dynamically importing them with FS

import { ICommand } from "../types";
import { genCommands } from "../logic/logic.shaii";
import { imageProcessors } from "../logic/imageProcessors.shaii";
import logger from "../shaii/Logger.shaii";

// economy game commands
import rank from "./economyGames/rank.shaii";
// import battle from "./economyGames/battle.shaii";
// import inventory from "./economyGames/inventory.shaii";
// import stats from "./economyGames/stats.shaii";

// fun commands
import anime from "./fun/anime.shaii";
import decode from "./fun/decode.shaii";
import dicksize from "./fun/dicksize.shaii";
import tts from "./fun/tts.shaii";
import mors from "./fun/mors.shaii";
import say from "./fun/say.shaii";
import traceAnime from "./fun/trace.shaii";
import uwuify from "./fun/uwufy.shaii";
import britify from "./fun/britify.shaii";
import match from "./fun/match.shaii";
import fact from "./fun/funfact.shaii";

// moderation commands
import clear from "./moderation/clear.shaii";
import kick from "./moderation/kick.shaii";
import whois from "./moderation/whois.shaii";

// utility commands
import help from "./utility/help.shaii";
import ping from "./utility/ping.shaii";
import avatar from "./utility/avatar.shaii";
import env from "./utility/env.shaii";

// music player commands
import play from "./musicPlayer/play.shaii";
import skip from "./musicPlayer/skip.shaii";
import volume from "./musicPlayer/volume.shaii";
import shuffle from "./musicPlayer/shuffle.shaii";
import queue from "./musicPlayer/queue.shaii";
import nowPlaying from "./musicPlayer/nowPlaying.shaii";

// image processing
import transform from "./imageProcessors/transform.shaii";
import stack from "./imageProcessors/stack.shaii";
import vote from "./fun/vote.shaii";

export const getCommands = async () => {
  let commands = [
    ...genCommands(Object.values(imageProcessors)),
    nowPlaying,
    transform,
    stack,
    avatar,
    rank,
    whois,
    tts,
    match,
    ping,
    volume,
    fact,
    env,
    queue,
    shuffle,
    skip,
    britify,
    play,
    anime,
    clear,
    decode,
    dicksize,
    help,
    mors,
    say,
    traceAnime,
    uwuify,
    vote,
    kick,
    // stats,
    // inventory,
    // battle,
  ];

  if (true) {
    logger.config.print("3D Capabilities acknowledged, loading 3D commands...");
    const { commands3D } = await import("../logic/3DRenderer.shaii");
    genCommands(Object.values(commands3D)).forEach((command) => commands.push(command));
  }

  return commands;
};
