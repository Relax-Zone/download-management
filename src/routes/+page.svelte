<script lang="ts">
    import { ArrowRight } from 'lucide-svelte'
</script>

<div class="min-h-[80dvh] flex items-center justify-center content-center flex-wrap p-7 md:p-4">
    <div>
        <h1 class="mb-12 font-bold lg:text-5xl sm:text-3xl md:text-4xl text-4xl">โหลดไฟล์ของคุณได้ทุกที่ <span class="bg-clip-text bg-gradient-to-tr from-blue-500 to-blue-700 text-transparent">"ไ่ต้องกลัวไฟล์หาย"</span></h1> 
        <div class="w-full flex-wrap flex mb-4">
            <a href="mailto:suwijak.pak@gmail.com" class="text-lg mb-2 mr-2 font-bold bg-gradient-to-tr from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition px-4 py-1 rounded-full">ติดต่อเรา</a>
            <a href="/dashboard" class="flex items-center text-lg mb-2 mr-2 font-bold bg-gradient-to-tr from-blue-500 to-blue-700 hover:border-blue-600 border-b-2 border-transparent transition mx-4 py-1 bg-clip-text">ไปยัง Dashboard <ArrowRight class="ml-2" /></a>
        </div>
    </div>
</div>