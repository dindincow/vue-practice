<template>
    <div>
        <CompA/>
        <br/>
        <CompB/>
    </div>
</template>

<script>
import CompA from '@/components/Mixin/CompA'
import CompB from '@/components/Mixin/CompB'
export default {
    components: {
        CompA,
        CompB
    }
}
</script>