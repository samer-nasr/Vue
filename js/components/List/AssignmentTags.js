export default {
    template : `
            <div class="flex gap-2 mb-8 text-xs">
                <button 
                    @click="$emit('change', tag)"
                    class="border rounded p-1" 
                    :class="{
                        'border-blue-500 text-blue-500' : tag == currentTag
                    }"
                    v-for="tag in tags">
                    {{ tag }}
                 </button>
            </div>
    `,
    props : {
        initialTag : Array,
        currentTag : String,
    },

   
    computed : {
        tags(){
            //set for unique elements
            return ['all',...new Set(this.initialTag)];
        }
    }

}