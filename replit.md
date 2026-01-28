# Ruby Hoshino Bot

## Overview
Ruby Hoshino Bot is a WhatsApp multi-device bot built with Node.js using the Baileys library. It provides various features and commands for WhatsApp automation.

## Project Structure
- `index.js` - Main entry point that initializes the bot
- `handler.js` - Handles incoming WhatsApp messages
- `settings.js` - Bot configuration settings
- `lib/` - Core library files for WhatsApp connection
- `plugins/` - Bot command plugins
- `src/database/` - JSON database files for bot data

## Running the Bot
The bot runs with `npm start` and will prompt for authentication:
1. QR Code scan
2. 8-digit pairing code

## Dependencies
- Uses ESM modules (`"type": "module"`)
- Main dependencies: @whiskeysockets/baileys, axios, express, cheerio, etc.
- System dependencies: ffmpeg, imagemagick

## Recent Changes
- January 28, 2026: Initial import and setup on Replit
