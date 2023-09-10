<script>
	import Navbar from '$lib/components/navbar.svelte';
	import { configStore } from '$lib/stores/config';
	import { ConicGradient } from '@skeletonlabs/skeleton';
	import { invalidateAll } from '$app/navigation';
	import { AppwriteService } from '$lib/appwrite';
	
	export let data;

	AppwriteService.subscribe('documents', invalidateAll);
</script>

<Navbar title="Welcome" icon="👋" description="Are you ready to change the world today? 😏" />

<div class="p-4 text-base">
	<div class="border-2 border-primary-200 rounded-md p-6">
		<p class="text-primary-600 text-center">{$configStore.dashboard.motd}</p>
	</div>
	<div class="border-2 border-primary-200 rounded-md p-6">
		<ConicGradient stops={data.conicStops} legend>(Gateway Status)</ConicGradient>
	</div>
</div>
