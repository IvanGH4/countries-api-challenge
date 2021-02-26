<template>
    <div>
        <BaseHeader />
        <BaseMain />
        <BaseFooter />
    </div>
</template>

<script>
import BaseFooter from '@/components/layout/BaseFooter.vue'
import BaseHeader from '@/components/layout/BaseHeader.vue'
import BaseMain from '@/components/layout/BaseMain.vue'

export default {
    name: 'BaseLayout',
    components: {
        BaseHeader,
        BaseMain,
        BaseFooter        
    }
}
</script>

<style>

</style>