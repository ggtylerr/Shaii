// import { PrismaClient } from "@prisma/client";
// import { IBattle } from "../types";
import logger from "./Logger.shaii";
import mongoose from "mongoose";
import config from "./Config.shaii";
import { IUser, IUserFunctions, Kick } from "../types";
import Discord from "discord.js";
mongoose.connect(config.mongo).then(() => console.log("connected"));
const { Schema } = mongoose;

const schema = new Schema<IUser>({
  discord_id: { type: "String", required: true },
  xp: { type: "Number", default: 0 },
  bonks: { type: "Number", default: 0 },
  is_muted: { type: "Boolean", default: false },
  is_banned: { type: "Boolean", default: false },
  joined_at: { type: "Number", required: true },
  account_created_at: { type: "Number", required: true },

  kick_history: Array,
  mute_history: Array,
  ban_history: Array,
  bonk_history: Array,
  previous_usernames: Array,
  roles: Array,
  previous_nicks: Array,
});

schema.methods.updateRoles = function (roles: string[]) {
  this.roles = roles;
  return this.save();
};

schema.statics.findOneOrCreate = async function (member: Discord.GuildMember | Discord.PartialGuildMember) {
  let user = await User.findOne({ discord_id: member.id });

  if (!user) {
    const userData = {
      discord_id: member.id,
      roles: Array.from(member.roles.cache.keys() || []),
      joined_at: member.joinedTimestamp || Date.now(),
      account_created_at: member.user.createdTimestamp,
    };

    user = await new User(userData).save();
  }
  return user;
};

schema.statics.kick = async function (kicker_id: string, kickee_id: string, reason: string = "") {
  const kickee = await User.findOne({ discord_id: kickee_id });
  if (!kickee) return;

  const kick: Kick = {
    timestamp: Date.now(),
    casted_by: kicker_id,
    reason,
  };

  kickee.kick_history.push(kick);

  return kickee.save().catch((err: any) => console.log(err));
};

// @ts-ignore
export const User: mongoose.Model<IUser, {}, {}, {}> & IUserFunctions = mongoose.model<IUser>("User", schema);
