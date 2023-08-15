<script lang="ts">
	import type { Block, Group, Panel } from '$lib/config.builder';
	import type { ListInterface, ListPlaintext } from '$lib/config.interfaces';
	import type { Models } from 'appwrite';
	import { attribute_to_object } from 'svelte/internal';

	export let config: ListPlaintext;
	export let document: any & Models.Document;
	export let value: any;
	export let panel: Panel;
	export let group: Group;
	export let block: Block;
	export let ready = true;

	// Prevents compilation errors
	config; document; value; panel; group; block; ready;
</script>

{#if block.attribute === "status"}
	{#if document[block.attribute] === true}
		<p class="max-h-[24px] overflow-hidden bg-green-500">online</p>
	{:else}
		<p class="max-h-[24px] overflow-hidden bg-red-600">offline</p>
	{/if}
{:else}
	<p class="max-h-[24px] overflow-hidden">{value}</p>
{/if}
