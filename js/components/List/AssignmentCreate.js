

export default {
    template : `
        <form @submit.prevent="add" class="border p-2 space-x-4">
                    <input v-model="newAssignment" placeholder="new assignments..." class="text-black p-2"/>
                    <button type="submit" class=" p-2">Add</button>
        
                    </form>
    `
    ,
   
    data() {
        return {
            newAssignment : ''
        }
    },

    methods : {
        add() {
            this.$emit('add',this.newAssignment);
            this.newAssignment = '';
        }
    }

}