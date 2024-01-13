<script lang="ts">
    import { Plus , File , User } from "lucide-svelte"
</script>

<div class="p-4">
    <div class="max-w-6xl border-zinc-700 border p-4 mt-6 rounded-lg mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a href="/dashboard/admin/create" class="p-6 rounded-lg bg-gradient-to-tr from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition">
            <Plus class="w-full my-4" size="2em" strokeWidth="2" />
            <h2 class="text-center font-bold text-2xl">สร้างงาน</h2>
        </a>
        <a href="/dashboard/admin/works" class="p-6 rounded-lg bg-gradient-to-tr from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition">
            <File class="w-full my-4" size="2em" strokeWidth="2" />
            <h2 class="text-center font-bold text-2xl">จัดการงาน</h2>
        </a>
        <a href="/dashboard/admin/users" class="p-6 rounded-lg bg-gradient-to-tr from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition">
            <User class="w-full my-4" size="2em" strokeWidth="2" />
            <h2 class="text-center font-bold text-2xl">จัดการผู้ใช้</h2>
        </a>
    </div>
</div>