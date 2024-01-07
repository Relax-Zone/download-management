<script>
    import { ArrowLeft } from 'lucide-svelte'
</script>

<main class="min-h-screen backdrop-blur-xl w-full z-50 fixed top-0 left-0 flex justify-center items-center content-center flex-wrap">
    <div class="bg-zinc-900 max-w-[450px] w-full p-6 mx-auto rounded-xl">
        <h1 class="text-2xl font-bold mb-7 flex justify-between items-center">สมัครสมาชิก<a class="text-sm bg-gradient-to-tr from-blue-400 to-blue-800 hover:shadow-md hover:shadow-blue-500/50 p-1 rounded-md" href="/login">คลิ๊กเพื่อเข้าสู่ระบบ</a></h1>
        <!-- login form -->
        <label for="username" class="font-bold">ชื่อผู้ใช้</label>
        <input type="text" id="username" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700" />
        <label for="password" class="font-bold">รหัสผ่าน</label>
        <input type="password" id="password" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700" />
        <label for="conpassword" class="text-white font-bold ">ยืนยันรหัสผ่าน <span class="text-sm text-zinc-400 font-[400]">กรอกรหัสผ่านอีกครั้ง</span></label>
        <input type="password" id="conpassword" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700" />
        <button type="submit" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-gradient-to-tr from-blue-400 to-blue-800 hover:shadow-md hover:shadow-blue-500/50">สมัครสาชิก</button>
        
    </div>
    <a href="/" class="text-white flex items-center w-full justify-center pt-4 rounded-lg mt-4 ">
        <ArrowLeft class="pr-2" /> 
        กลับหน้าแรก
    </a>
</main>