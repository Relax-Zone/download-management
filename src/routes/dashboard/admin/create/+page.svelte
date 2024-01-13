<script lang="ts">
  import { goto } from "$app/navigation";
  import axios from "axios";
  import { onMount } from "svelte";
  import { Loader2 } from 'lucide-svelte'
  import Popup from "../../../../components/Popup.svelte";

    export let data:any 
    let title :String
    let userEmail :String
    let description :String
    let downloadLink :String
    let sendButton :boolean = false
    let sendButtonLoading :boolean = false
    let errorMessage :string 
    let sucessMessage :string

    onMount(()=>{
        if(data?.role != "admin"){
            setTimeout(()=>{
                goto("/dashboard/error/permission-denied")
            },300)
        }}
    )

    $: if(title && userEmail && downloadLink){
            sendButton = true
        }
        else{
            sendButton = false
        }
    
    async function Submit(e:any){
        e.preventDefault()
        sendButtonLoading = await true
        try {
            const data = await axios.post('/dashboard/admin/create',{ title , userEmail , description , downloadLink })
            sucessMessage = data.data.msg
        }
        catch(err:any){
            errorMessage = err.response.data
            console.log(err);    
        }
        sendButtonLoading = await false
    }

</script>

<div class="p-4">
  
    <Popup message = {sucessMessage || errorMessage} />
    <form on:submit={Submit} class="p-6 border border-zinc-800 rounded-lg max-w-5xl mx-auto">
        <input bind:value={title} type="text" placeholder="ชื่อ" class="text-xl font-bold w-full bg-zinc-800 p-2 mb-4 outline-none focus:outline-2 focus:outline-blue-500 rounded-md">
        <hr class="mb-4 border-zinc-700">
        <input bind:value={userEmail} type="text" placeholder="อีเมลลูกค้า" class="w-full bg-zinc-800 p-2 mb-4 outline-none focus:outline-2 focus:outline-blue-500 rounded-md">
        <textarea bind:value={description} name="" id="" rows="7" class="w-full bg-zinc-800 p-2 mb-4 outline-none focus:outline-2 focus:outline-blue-500 rounded-md" placeholder="คำอธิบาย"></textarea>
        <div class="bg-zinc-900 border border-zinc-800 rounded-md p-6 mb-4">
            การอัปโหลดไฟล์ไม่พร้อมใช้งานกรุณาแนบลิงก์ดาวน์โหลด
        </div>
        <input bind:value={downloadLink} type="text" placeholder="ลิงก์ดาวน์โหลด" class="w-full bg-zinc-800 p-2 mb-4 outline-none focus:outline-2 focus:outline-blue-500 rounded-md">
        {#if sendButton}
        <button type="submit" class="flex text-lg mb-2 mr-2 font-bold bg-gradient-to-tr from-blue-500 to-blue-700 hover:shadow-lg hover:shadow-blue-500/50 transition px-4 py-1 rounded-full">
            {#if sendButtonLoading}
            <Loader2 class="mr-2 animate-spin"/>
            {/if}
            เพิ่มงาน
        </button>
        {:else}    
        <div class="inline-block text-lg mb-2 mr-2 font-bold bg-zinc-800 text-zinc-500 cursor-not-allowed px-4 py-1 rounded-full">เพิ่มงาน</div>
        {/if}
    </form>
</div>