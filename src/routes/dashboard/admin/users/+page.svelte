<script lang="ts">
    export let data:any
</script>

<main>
    {#if data.users?.length >= 1}
        {JSON.stringify (data.users)}
    {/if}
</main>