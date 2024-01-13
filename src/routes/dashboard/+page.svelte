<script lang="ts">
    import FileBlock from "../../components/FileBlock.svelte";

    export let data
    let search : string = ""
</script>

<div class="p-4">
    <div class="mb-4 py-6 border-b-2 border-zinc-900 flex items-center justify-between flex-wrap">
        <h1 class="font-bold text-2xl md:text-4xl mb-4">ยินดีต้อนรับคุณ <span class="bg-gradient-to-tr from-blue-400 to-blue-800 bg-clip-text text-transparent">{data.username}</span></h1>
        <div class="mb-2">
            {#if data.role === "admin"}
                <a href="./dashboard/admin" class="text-lg mb-2 mr-2 font-bold bg-gradient-to-tr from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition px-4 py-1 rounded-full">ผู้ดูแล</a>
            {/if}
            <a href="./logout" class="text-lg mb-2 mr-2 font-bold bg-gradient-to-tr from-red-400 to-red-600 hover:shadow-lg hover:shadow-red-700/80 transition px-4 py-1 rounded-full">ออกจากระบบ</a>
        </div>
    </div>
    <div class="max-w-5xl mx-auto p-4 border border-zinc-800 rounded-xl">
        <div class="flex bg-zinc-900 p-4 mb-4 rounded-lg">
            <input bind:value={search} type="text" class="focus:outline focus:outline-blue-500 font-bold bg-transparent outline-none p-2 rounded-md border border-zinc-700" placeholder="ค้นหา" />
        </div>
        {#if data.userWork.length >= 1}
            {#each data.userWork as userWork }
            {#if userWork.title.includes(search) }
            <FileBlock title={userWork.title} description={userWork.description} auther={userWork.description} download={userWork.download} />
            {/if}
            {/each}
        {:else}
        <div class="flex bg-zinc-900 p-4 mb-4 rounded-lg">
            <p>ไม่พบไฟล์ของคุณ <a href="mailto:suwijak.pak@gmail.com" class="border-b-2 border-blue-500 hover:text-blue-500">ติดต่อเรา</a></p> 
        </div>    
        {/if}
    </div>
</div>