<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { EditInterface, EditPlaintext } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';

	export let config: EditPlaintext;
	export let document: (any & Models.Document) | null;
	export let value: any | null;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

	// Prevents compilation errors
	config; document; value; panel; group; block; ready;

	let inputValue = value;
	function onInput(e: any) {
		inputValue = e.target.value;
	}

	if(document === null && config.createValue) {
		inputValue = config.createValue;
	}
</script>

{#if block.editInterface.name === "status"}
	<select class="select p-3 border-2 variant-ghost-primary text-lg text-slate-900" 
			name={block.attribute}	
    		value={inputValue}
			>
	<option value="online">online</option>
	<option value="offline" selected>offline</option>
	</select>
{:else if block.editInterface.name === "gwModel"}
	<select class="select p-3 border-2 variant-ghost-primary text-lg text-slate-900" 
			name={block.attribute}
    		value={inputValue}
			>
	<option value="lg308" selected>LG308</option>
	<option value="lg308n">LG308N</option>
	<option value="lps8n">LPS8N</option>
	<option value="lps8v2">LPS8v2</option>
	<option value="dlos8n">DLOS8N</option>
	<option value="dlos8">DLOS8</option>
	<option value="hp0cin">HP0C</option>
	<option value="hp0aout">HP0A</option>
	<option value="hp0dout">HP0D</option>
	</select>
{:else if block.editInterface.name === "region"}
	<select class="select p-3 border-2 variant-ghost-primary text-lg text-slate-900" 
			name={block.attribute}
    		value={inputValue}
			>
	<option value="eu868" selected>EU868</option>
	<option value="eu433">EU433</option>
	<option value="us915">US915</option>
	<option value="cn470">CN470</option>
	<option value="cn779">CN779</option>
	<option value="au923">AU923</option>
	<option value="as1">AS1</option>
	<option value="as2">AS2</option>
	<option value="as3">AS3</option>
	<option value="kr">KR</option>
	<option value="in">IN</option>
	<option value="ru">RU</option>
	<option value="kz">KZ</option>
	</select>
{:else if block.editInterface.name === "service"}
	<select class="select p-3 border-2 variant-ghost-primary text-lg text-slate-900" 
			name={block.attribute}
    		value={inputValue}
			>
	<option value="fwd" selected>fwd</option>
	<option value="station">station</option>
	<option value="chirpstack">chirpstack</option>
	</select>
{:else}
    <input
    	class={config.view}
    	type={config.type}
    	disabled={document !== null && config.editDisabled}
    	name={block.attribute}
    	value={inputValue}
    	on:input={onInput}
    	placeholder={config.placeholder}
    />
{/if}