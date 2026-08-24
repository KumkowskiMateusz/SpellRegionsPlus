export class SpellRegionTemplate {

	static init() {
		Hooks.on("dnd5e.preCreateActivityTemplate", (activity, templateData) => {

		if (overrideSpellTemplate(activity, templateData) === false) return false;
		});
	}
}


function overrideSpellTemplate(activity, templateData) {
	const overrides = getSpellTemplateOverrides(activity, templateData);

	foundry.utils.mergeObject(templateData, overrides, {
		inplace: true,
		recursive: true
	});
}

function getSpellTemplateOverrides(activity, templateData) {
	return {
		flags: {
			"spellregions-plus": {
				activity: activity.uuid,
				originalShape: templateData.t,
				originalDistance: templateData.distance
			}
		}
	};
}
