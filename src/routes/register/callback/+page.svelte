<script>
    import { goto } from "$app/navigation";

    let countdown = 3
    if (countdown >= 0){
        setInterval(() => {countdown = countdown - 1},1000)
    }
    else{
        countdown = 0
    }
    
    $: if (countdown <= 0){
        goto('/login')
    }
</script>

<main class="min-h-screen backdrop-blur-xl w-full z-50 fixed top-0 left-0 flex justify-center items-center content-center flex-wrap">
    <div class="bg-zinc-900 max-w-[450px] w-full p-6 mx-auto rounded-xl">
        <h1 class="text-2xl font-bold mb-7">คุณสมัครสมาชิกแล้ว</h1>
        <!-- login form -->
        <a href="/dashboard" class="text-white font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700">
            เข้าสู่ระบบ
        </a>
    </div>
    <p class="text-white flex items-center w-full justify-center pt-4 rounded-lg mt-4 ">
        ไปยังหน้าเข้าสู่ระบบ ในอีก {countdown} วินาที
    </p>
</main>