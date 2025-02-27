export default {

    template: `
                        <button
                         class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed"
                         :disabled="processing"
                         v-on:click="submit"
                         >
                         <slot/>
                         </button>
                    `,

    data() {
        return {
            processing: false,
        }
    },

    methods: {
        submit() {
            this.processing = true;
        }
    }
}
