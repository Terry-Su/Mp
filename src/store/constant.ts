// ****** folder name ******
export const DOT_MP_CONFIG = '.mpconfig'


// ****** file name ******
export const SELECTION_JSON = 'selection.json'
export const NODE_CONFIG = 'nodeconfig'


// ******  format ******
export const NODE_CONFIG_EXTENSION = '.js'


// ******  selection   ******
export enum SelectionKey {
	SELF = '/:self',
	ALL = '/:all',
}


// ******  mp config  ******
export const MP_CONFIG_JS = 'mp.config.js'
export const Dot_MP_CONFIG_JSON = '.mp.config.json'

export enum MpConfigKey {
	HIDE_DEFAULT_PROMPT = 'hideDefaultPrompt'
}



// ******  prompt  ******
export enum ChoicePromptUpdateProjectKey {
	CONTINUE = 'Already set, continue',
	RESET = 'Reset all selection',
	HIDE = 'Do not show this anymore(Set "shouldPrompt" to true in mp.config.js to show this again) and continue',
}

