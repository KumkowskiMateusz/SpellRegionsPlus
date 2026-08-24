const SPELLREGIONS_MODULE_ID = "SpellRegions+";

const SPELLREGIONS_SETTINGS = {
    maxManualRolls: {
        name: "SpellRegions+.Settings.MaxManualRolls.Name",
        hint: "SpellRegions+.Settings.MaxManualRolls.Hint",
        scope: "world",
        config: true,
        type: Number,
        default: 3,
        range: {
            min: 0,
            max: 20,
            step: 1
        }
    },
    autoDestroyInstantaneous: {
        name: "SpellRegions+.Settings.AutoDestroyInstantaneous.Name",
        hint: "SpellRegions+.Settings.AutoDestroyInstantaneous.Hint",
        scope: "world",
        config: true,
        type: Boolean,
        default: true
    },
    autoDestroyOnConcentrationLoss: {
        name: "SpellRegions+.Settings.AutoDestroyConcentration.Name",
        hint: "SpellRegions+.Settings.AutoDestroyConcentration.Hint",
        scope: "world",
        config: true,
        type: Boolean,
        default: true
    },
    showSpellCastJsonInConsole: {
        name: "SpellRegions+.Settings.ShowSpellCastJson.Name",
        hint: "SpellRegions+.Settings.ShowSpellCastJson.Hint",
        scope: "client",
        config: true,
        type: Boolean,
        default: true
    }
};

Hooks.once("init", () => {
    for (const [key, setting] of Object.entries(SPELLREGIONS_SETTINGS)) {
        game.settings.register(SPELLREGIONS_MODULE_ID, key, setting);
    }
});

globalThis.SpellRegionsPlusSettings = {
    definitions: SPELLREGIONS_SETTINGS,
    get(key) {
        return game.settings.get(SPELLREGIONS_MODULE_ID, key);
    }
};