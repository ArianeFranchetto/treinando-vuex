<template>
    <div>
        <h2>
            ########
            <h3>
                Counter: {{ counter }}
            </h3>
            <button @click="decrement">-</button>
            <button @click="increment">+</button>


        </h2>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'ParteUm',

    computed: { ...mapGetters([
        'counter'
    ])},

    methods: {
        ...mapActions ([
            'decrement',
            'increment'
        ])
    
    }



}

</script>