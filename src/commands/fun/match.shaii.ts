import { getShipName } from "../../logic/logic.shaii";
import { defineCommand } from "../../types";

export default defineCommand({
  name: "match",
  description: "See how much you and another user match!",
  requiresProcessing: false,
  execute: (message) => {
    const matcher = message.author;
    const matchee = message.mentions.users.first();

    if (!matchee) return "Tag the person you wanna match with!";

    const matcherValue = parseFloat(matcher.id);
    const matcheeValue = parseFloat(matchee.id as string);
    const matchValue = (matcherValue + matcheeValue) % 22;
    const matchCalculation = ((22 - matchValue) / 22) * 100;

    const shipName = getShipName(matcher.username, matchee.username);

    const perfectMatchString = `You perfectly match ${~~matchCalculation}% ${shipName}`;
    const matchString = `You match ${~~matchCalculation}% ${shipName}`;
    return matchCalculation == 100 ? perfectMatchString : matchString;
  },
});
