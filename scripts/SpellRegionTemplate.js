export class SpellRegionTemplate {

	static init() {
		// Figure Out which one would work better
		Hooks.on("dnd5e.preCreateActivityTemplate", (activity, templateData) => {
			console.log("preCreateActivityTemplate", activity, templateData);
		});

		Hooks.on("dnd5e.CreateActivityTemplate", (activity, templateData) => {
			console.log("CreateActivityTemplate", activity, templateData);
		});
	}
}


function populateTemplateData(templateData, activity) {
	templateData.actor = activity.actor;
	templateData.item = activity.item;
	templateData.activity = activity;
	templateData.usageConfig = activity.usageConfig;
	templateData.results = activity.results;
	templateData.targets = [...(game.user.targets ?? [])].map(token => ({
		uuid: token.document?.uuid ?? token.uuid,
		token: token.document
	}));
}
