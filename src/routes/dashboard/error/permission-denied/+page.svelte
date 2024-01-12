<script>
    import { goto } from "$app/navigation";

    let countdown = 5
    if (countdown >= 0){
        setInterval(() => {countdown = countdown - 1},1000)
    }
    else{
        countdown = 0
    }
    
    $: if (countdown <= 0){
        goto('/')
    }
</script>

<div class="fixed top-0 z-30 h-screen w-screen bg-gradient-to-tr from-red-400 to-red-600 flex justify-center items-center">
    <div class="w-full">
        <h1 class="text-center font-bold text-2xl sm:text-4xl">คุณไม่ได้รับอนุญาติให้ใช้หน้านี้</h1>
        <p class="text-white flex items-center w-full justify-center pt-4 rounded-lg mt-4 ">
            เราจะพาคุณกลับหน้าแรก ในอีก {countdown} วินาที
        </p>
    </div>
</div>