<script lang="ts">
    import { File } from 'lucide-svelte';

    export let title:string
    export let description:string
    export let auther:string
    export let download:string
</script>

<a target="_blank" href={download} class="cursor-default bg-zinc-900 p-4 rounded-xl mb-4 flex justify-between items-start flex-wrap hover:shadow-blue-500/30 hover:shadow-lg">
    <div class="flex flex-wrap w-full">
        <!-- <img class="aspect-video h-[160px] rounded-lg mr-4" src="https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg" alt=""> -->
        <div class="aspect-video sm:h-[160px] w-full sm:w-auto rounded-lg bg-gradient-to-tr from-blue-400 to-blue-700 justify-center items-center flex sm:mb-0 mb-4" ><File size="5em" /></div>
        <div class="sm:ml-4 mb-4">
            <div class="mb-4">
                <h2 class="bg-clip-text text-transparent bg-gradient-to-tr from-blue-400 to-blue-700 font-bold text-3xl">{title}</h2>
                <p class="text-zinc-500">by : {auther}</p>
                <p>{description}</p>
            </div>
        <a href={download} target="_blank" class="font-bold px-4 py-1 bg-gradient-to-tr from-blue-500 to-blue-700 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition">Download</a>
        </div>
    </div>
</a>