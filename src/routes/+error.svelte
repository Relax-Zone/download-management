<script lang="ts">
	import { page } from '$app/stores';
    import { Copy , CopyCheck } from "lucide-svelte"    

    let isCopy = false

    function copy(text:string):void {
        isCopy = true
        navigator.clipboard.writeText(text)
        setTimeout(() => {
            isCopy = false
        },1000)
    }
</script>

<div class="fixed top-0 z-30 h-screen w-screen p-4 bg-gradient-to-tr from-red-400 to-red-600 flex justify-center flex-wrap content-center  items-center">
    <div class="w-full">
        <h1 class="text-center font-bold text-2xl sm:text-4xl">มีข้อผิดพลาดเกิดขึ้น</h1>
        <p class="text-white flex items-center w-full justify-center pt-4 rounded-lg mt-4 flex-wrap text-center">
            หากคุณมั่นใจว่าไม่ใช่ความผิดพลาดของคุณกรุณาส่งข้อความนี้หาเรา 
        </p>
        <button class="mx-auto bg-black/30 p-2 rounded-md flex" on:click={() => {copy(`${$page.status} : ${$page.error?.message} (${$page.url})`)}}>
            <code class="mr-2 max-w-[75vw] overflow-x-auto">{$page.status} : {$page.error?.message} ({$page.url})</code>
            {#if isCopy}
            <CopyCheck />
            {:else}    
            <Copy />
            {/if}
        </button> 
    </div>
    <a class="border-b border-white text-center mt-6 mx-4 hover:text-red-300" href="/">กลับหน้าแรก</a>  
    <a class="border-b border-white text-center mt-6 mx-4 hover:text-red-300" href="mailto:suwijak.pak@gmail.com">ติดต่อเรา</a>  
</div>