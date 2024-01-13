<script lang="ts">
  import { goto } from '$app/navigation';
    import axios from 'axios'
    import { ArrowLeft , Loader2 } from 'lucide-svelte'
    
    let error :String
    let username :String
    let password :String
    let conPassword :String
    let regisButton = false
    let regisLoading = false

    $: if(username && password && (password === conPassword)){
            regisButton = true
        }
        else{
            regisButton = false
        }
    
    $: if(password != conPassword){
            error = "รหัสผ่านไม่ตรงกัน"
        }
        else{
            error = ""
        }

    async function Register(e:any){
        e.preventDefault()
        regisLoading = await true
        try{
            const data = await axios.post("./register",{username,password})
            await goto('./register/callback')
        }
        catch(err :any){            
            error = err.response.data.err
        }
        regisLoading = await false
    }

</script>

<main class="min-h-screen backdrop-blur-xl w-full z-50 fixed top-0 left-0 flex justify-center items-center content-center flex-wrap p-4">
    <div class="bg-zinc-900 max-w-[450px] w-full p-6 mx-auto rounded-xl">
        <h1 class="text-2xl font-bold mb-7 flex justify-between items-center">สมัครสมาชิก<a class="text-sm bg-gradient-to-tr from-blue-400 to-blue-800 hover:shadow-md hover:shadow-blue-500/50 p-1 rounded-md" href="/login">คลิ๊กเพื่อเข้าสู่ระบบ</a></h1>
        {#if error}
            <p class="mb-4 p-2 bg-red-500/50 font-bold rounded-lg text-red-300 border border-red-400">{error}</p>
        {/if}
        <!-- login form -->
        <form on:submit={Register}>
            <label for="username" class="font-bold">อีเมล</label>
            <input bind:value={username} type="text" id="username" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700" />
            <label for="password" class="font-bold">รหัสผ่าน</label>
            <input bind:value={password} type="password" id="password" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700" />
            <label for="conpassword" class="text-white font-bold ">ยืนยันรหัสผ่าน <span class="text-sm text-zinc-400 font-[400]">กรอกรหัสผ่านอีกครั้ง</span></label>
            <input bind:value={conPassword} type="password" id="conpassword" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700" />
            {#if regisButton}
            <button type="submit" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-gradient-to-tr from-blue-400 to-blue-800 hover:shadow-md hover:shadow-blue-500/50">
                {#if regisLoading}
                <Loader2 class="mr-2 animate-spin"/>
                {/if}
                สมัครสาชิก
            </button>
            {:else}   
            <div class="bg-zinc-800 text-zinc-500 cursor-not-allowed outline-none font-bold flex items-center w-full justify-center p-4 rounded-lg my-4">สมัครสาชิก</div>
            {/if}
        </form>
        
    </div>
    <a href="/" class="text-white flex items-center w-full justify-center pt-4 rounded-lg mt-4 ">
        <ArrowLeft class="pr-2" /> 
        กลับหน้าแรก
    </a>
</main>