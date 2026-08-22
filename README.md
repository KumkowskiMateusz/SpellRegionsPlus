# SpellRegions+

A Foundry VTT module designed to improve area-of-effect spell handling in the newer region system introduced in v14.

In v14, Foundry replaced templates with regions, offering more flexible effects. However, spell targeting and cleanup still feel awkward for repeated AOE spell use. This module aims to bridge that gap by integrating region creation, targeting, cleanup, and roll handling into a smoother workflow.

## Overview

This module focuses on automating the current spell workflow so it works more naturally with the region system:

- automatically handle spell targeting within created regions
- clean up regions automatically based on duration or concentration rules
- transfer activities and effects when creating spell regions
- support repeated area effects without manual cleanup clutter
- improve multi-token damage rolling and UI flow

## Main Features

### Auto-Destroy Feature
Regions can be cleaned up automatically according to their duration settings.

- Instantaneous regions are never left on the board; their affected tokens still take the effect.
- X-turn regions remain for the specified number of caster turns, or until concentration is lost.
- Indefinite regions remain on the board by default unless otherwise configured.

### Token Moves Within Enhanced
Will activate script every time a token moves X Feet in a region.

### Auto Effect and Activity Transfer
This module allows base Foundry VTT options, including activities and effects, to be carried forward when creating a spell region.

This keeps spell creation consistent with the standard Foundry workflow and reduces manual setup.

### New Activity: Create Region
Adds a new activity specifically for creating regions.

This allows:

- magical items to generate regions
- consumables to create regions
- spells to trigger region-based chain effects

### Auto Dice Roll / Manual Dice Roll Options
Global module settings allow you to control how rolls are handled.

For each token type, the module tracks a value called Max_Manual_Rolls (default: 3):

- if the number of affected targets is 3 or fewer, a custom UI can show each individual roll
- if the number exceeds the limit, the system can roll automatically while still tracking resistances and similar adjustments

### Multiple Token Damage UI
This improves rolling for multiple tokens hit by an AOE effect.

Planned behavior includes:

- distinguishing between NPC and player tokens
- configurable visibility for player rolls
- support for manual overrides such as Roll, Fail, or Save

### Region Templates
A dedicated DM tab can store region templates in a folder for reuse.

This allows drag-and-drop creation of duplicate regions and makes repeated spell setup faster.

## Why This Module?

It is designed to make AOE spellcasting in Foundry VTT feel less tedious and more consistent with the modern region model. Instead of leaving temporary effects on the map and manually managing target resolution, the module helps automate and streamline the process.

## Intended Use

This module is primarily aimed at Dungeon Masters and players who regularly use area effects, persistent regions, and repeated spell casting in battle.

