// Documentation
// https://deploy-preview-680--discordjs-guide.netlify.app/additional-info/changes-in-v13.html

// Clear the console
console.clear();

// Cosmetic Imports
import chalk from "chalk";
import { version } from "../package.json";
import logger from "./shaii/Logger.shaii";

// Print log
console.log(
  chalk.hex("#FF33A7")(`              
          -%#-          
         *@@@@*         
        -@@%%@@-        
  :====:-@@@@@@=:====:  
*@@@@@@@@*+##@#+@@@@@@@*
 #@@@#@%##%.++=#%@*@@@#  by Geoxor ๐ธ        v${version}
  -*@@%***-  :%@@@@@*-   .โโ ยท   โ  .โ  โโโยท โช   โช  
     :#@@%+-%+****:      โโ โ.  โโโช โโ โโ โโ โโ  โโ 
    -@@@@%@-@@%@@@@-     โโโโโโ โโโ โโ โโโโโ โโยท โโยท
    #@@%%@@=+@@@%@@#     โโโโชโโ โโโ โโ โโ โชโโโโโ โโโ
    #@@@@*:  :#@@@@#      โโโโ  โโโ  ยท  โ  โ โโโ โโโ
\n`)
);

// Say inspirational anime quote
logger.shaii.inspiration();

// Create shaii
logger.shaii.creating();
import "./shaii/Shaii.shaii";
import "./shaii/Database.shaii";
logger.shaii.created();
