const spellRegionsPlus = globalThis.SpellRegionsPlus ?? {};



Hooks.on("dnd5e.postUseActivity", (activity, usageConfig, results) => {
    if (activity?.item?.type !== "spell") return;

    const data = extractSpellCastData(activity, usageConfig, results);
    const json = JSON.stringify(data, null, 2);

    globalThis.SpellRegionsPlus = {
        ...spellRegionsPlus,
        lastSpellCast: data,
        lastSpellCastJson: json,
        downloadSpellCastData
    };

    if (globalThis.SpellRegionsPlusSettings?.get("showSpellCastJsonInConsole") !== false) {
        globalThis.console.info("SpellRegions+: spell cast data", data);
        globalThis.console.info("SpellRegions+: formatted JSON", json);
    }
});

function extractSpellCastData(activity, usageConfig, results) {
    return {
        extractedAt: new Date().toISOString(),
        actor: toPlainData(activity.actor),
        item: toPlainData(activity.item),
        activity: toPlainData(activity),
        usageConfig: toPlainData(usageConfig),
        results: toPlainData(results),
        targets: [...(game.user.targets ?? [])].map(token => ({
            uuid: token.document?.uuid ?? token.uuid,
            token: toPlainData(token.document)
        }))
    };
}

function toPlainData(value, seen = new WeakSet()) {
    if (value === null || typeof value !== "object") {
        return typeof value === "function" ? undefined : value;
    }

    if (seen.has(value)) return "[Circular]";
    seen.add(value);

    if (typeof value.toObject === "function") {
        return toPlainData(value.toObject(), seen);
    }

    if (value instanceof Set) {
        return [...value].map(entry => toPlainData(entry, seen));
    }

    if (value instanceof Map) {
        return Object.fromEntries([...value].map(([key, entry]) => [
            key,
            toPlainData(entry, seen)
        ]));
    }

    if (Array.isArray(value)) {
        return value.map(entry => toPlainData(entry, seen));
    }

    return Object.fromEntries(
        Object.entries(value)
            .filter(([, entry]) => typeof entry !== "function")
            .map(([key, entry]) => [key, toPlainData(entry, seen)])
    );
}

function downloadSpellCastData(data = globalThis.SpellRegionsPlus?.lastSpellCast) {
    if (!data) return;

    const json = typeof data === "string" ? data : JSON.stringify(data, null, 2);
    const blob = new globalThis.Blob([json], {type: "application/json"});
    const url = globalThis.URL.createObjectURL(blob);
    const link = globalThis.document.createElement("a");
    const timestamp = new Date().toISOString().replaceAll(":", "-");

    link.href = url;
    link.download = `spell-cast-${timestamp}.json`;
    link.click();
    globalThis.URL.revokeObjectURL(url);
}