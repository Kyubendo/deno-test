// import {Bot} from "https://deno.land/x/grammy@v1.29.0/bot.ts"

import { Bot } from "grammy:bot";

const bot = new Bot(Deno.env.get("BOT_TOKEN")!);

// Try to type "bot."
