

import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components : {Assignment , AssignmentTags},
    template : `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
            {{ title }}
             <span>({{ assignments.length }})</span>
            </h2>

            <assignment-tags 
                :initial-tag="assignments.map(a => a.tag)"
                @change="currentTag = $event"
                :currentTag="currentTag"
            />
            <ul class="border border-gray-600 p-4">
                <assignment
                 v-for="assignment in filteredAssignments " 
                :key="assignment.id"
                :assignment="assignment"
                >
                </assignment>
            </ul>
        </section>
    `,
    

    props : {
        assignments : Array,
        title   : String, 
    },

    data(){
        return{
            currentTag : 'all'
        }
    },

    computed : {
        filteredAssignments(){
            
             return (this.currentTag != 'all') ? this.assignments.filter(a => a.tag == this.currentTag) : this.assignments;
        },
        
    }
}