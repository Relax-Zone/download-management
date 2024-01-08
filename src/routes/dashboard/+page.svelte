<script lang="ts">
    import FileBlock from "../../components/FileBlock.svelte";
</script>

<div class="p-4">
    <div class="mb-4 py-6 border-b-2 border-zinc-900 flex items-center justify-between">
        <h1 class="font-bold text-4xl">ยินดีต้อนรับคุณ <span class="bg-gradient-to-tr from-blue-400 to-blue-800 bg-clip-text text-transparent">@usename</span></h1>
        <a href="./dashboard/admin/create" class="text-lg mb-2 mr-2 font-bold bg-gradient-to-tr from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition px-4 py-1 rounded-full">เพิ่มงาน</a>
    </div>
    <div>
        <FileBlock />
    </div>
</div>