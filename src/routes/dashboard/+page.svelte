<script lang="ts">
    import FileBlock from "../../components/FileBlock.svelte";

    export let data
</script>

<div class="p-4">
    <div class="mb-4 py-6 border-b-2 border-zinc-900 flex items-center justify-between flex-wrap">
        <h1 class="font-bold text-2xl md:text-4xl mb-4">ยินดีต้อนรับคุณ <span class="bg-gradient-to-tr from-blue-400 to-blue-800 bg-clip-text text-transparent">{data.username}</span></h1>
        <div class="mb-2">
            {#if data.role === "admin"}
                <a href="./dashboard/admin/create" class="text-lg mb-2 mr-2 font-bold bg-gradient-to-tr from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition px-4 py-1 rounded-full">เพิ่มงาน</a>
            {/if}
            <a href="./logout" class="text-lg mb-2 mr-2 font-bold bg-gradient-to-tr from-red-400 to-red-600 hover:shadow-lg hover:shadow-red-700/80 transition px-4 py-1 rounded-full">ออกจากระบบ</a>
        </div>
    </div>
    <div>
        {#each data.userWork as userWork }
        <FileBlock title={userWork.title} description={userWork.description} auther={userWork.description} download={userWork.download} />
        {/each}
    </div>
</div>