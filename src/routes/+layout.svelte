<script>
    import '../app.css'
    import Header from '../components/Header.svelte';
    import { ProgressBar } from "@prgm/sveltekit-progress-bar";
</script>

<svelte:head>
	<title>RZ Download</title>
    <link rel="shortcut icon" href="./favicon.png" type="image/x-icon">
</svelte:head>

<div class="min-h-screen bg-zinc-950 text-white font-line-seed-sans-th">
    <ProgressBar class="text-blue-600 z-[9999999]" />
    <Header />
    <slot />
</div>