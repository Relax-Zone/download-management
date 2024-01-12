<script lang="ts">
    import { X, Megaphone } from 'lucide-svelte'

    export let message:any

</script>

{#if message}
<div class="w-screen h-screen bg-black/50 backdrop-blur-lg fixed top-0 left-0 z-50 flex items-center justify-center">
    <div class="max-w-[350px] w-full from-zinc-800 shadow-lg shadow-blue-500/50 to-zinc-900 drop-shadow p-2 rounded-xl bg-gradient-to-tr  m-2">
        <div class="flex justify-between items-center">
            <div>
                <h2 class="flex font-bold"><Megaphone /><span class="ml-2">ระบบ</span></h2>
            </div>
            <button on:click={() => { message = "" }} class=" p-2 m-2">
                <X />
            </button>
        </div>
        <hr class='my-1 border-zinc-700' />
        <div class='overflow-auto h-[100px] my-2 text-2xl font-bold'>
            {message}
        </div>
        <button on:click={() => { message = "" }} class="font-bold bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full hover:shadow-md hover:shadow-blue-500/50 transition p-2 w-full flex justify-center">
            <div class="flex"><span class="ml-2">รับทราบ</span></div>
        </button>
    </div>
</div>
{/if}