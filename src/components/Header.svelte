<script lang="ts">
    import { DownloadCloud } from 'lucide-svelte'
</script>

<div class="p-4 flex shadow-md shadow-blue-500/50 justify-between sticky top-0 bg-zinc-900/50 backdrop-blur-lg">
    <!-- site indentify -->
    <a href="/" class="flex font-bold text-xl items-center break-all">
        <DownloadCloud class="pr-2" stroke-width='1.2' size="2em" />
        RZ Download
    </a>

    <div class="flex items-center">
        <a href="/dashboard" class="font-bold px-4 py-1 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition">Dashboard</a>
    </div>


</div>