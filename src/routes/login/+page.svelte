<script lang="ts">
  import { goto } from '$app/navigation';
    import axios from 'axios';
    import { ArrowLeft , Loader2 } from 'lucide-svelte'

    let error :String
    let username :String
    let password :String
    let loginButton = false
    let loginLoading = false

    $: if(username && password){
            loginButton = true
        }
        else{
            loginButton = false
        }
    
    async function Register(e:any){
        e.preventDefault()
        loginLoading = await true
        try{
            const registerStatus = await axios.post('./login',{username,password})
            await goto('./dashboard')
        }
        catch(err : any){
            error = err.response.data.err
        }
        loginLoading = await false
    }

</script>

<main class="min-h-screen backdrop-blur-xl w-full z-50 fixed top-0 left-0 flex justify-center items-center content-center flex-wrap p-4">
    <div class="bg-zinc-900 max-w-[450px] w-full p-6 mx-auto rounded-xl">
        <h1 class="text-2xl font-bold mb-7 flex justify-between items-center">เข้าสู่ระบบ<a class="text-sm bg-gradient-to-tr from-blue-400 to-blue-800 hover:shadow-md hover:shadow-blue-500/50 p-1 rounded-md" href="/register">คลิ๊กเพื่อสัครสมาชิก</a></h1>
        <!-- login form -->
            {#if error}
            <p class="mb-4 p-2 bg-red-500/50 font-bold rounded-lg text-red-300 border border-red-400">{error}</p>
            {/if}
        <form on:submit={Register}>
            <label for="username" class="font-bold">อีเมล</label>
            <input type="text" bind:value={username} class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700" />
            <label for="password" class="font-bold">รหัสผ่าน</label>
            <input type="password" bind:value={password} id="password" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700" />
            {#if loginButton}
            <button type="submit" class="text-white outline-none focus:outline-2 focus:outline-blue-600  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4 bg-gradient-to-tr from-blue-400 to-blue-800 hover:shadow-md hover:shadow-blue-500/50">
                {#if loginLoading}
                <Loader2 class="mr-2 animate-spin"/>
                {/if}
                เข้าสู่ระบบ</button>
            {:else}    
            <div class="outline-none bg-zinc-800 text-zinc-500 cursor-not-allowed  font-bold flex items-center w-full justify-center p-4 rounded-lg my-4">เข้าสู่ระบบ</div>
            {/if}
        </form>
        
    </div>
    <a href="/" class="text-white flex items-center w-full justify-center pt-4 rounded-lg mt-4 ">
        <ArrowLeft class="pr-2" /> 
        กลับหน้าแรก
    </a>
</main>