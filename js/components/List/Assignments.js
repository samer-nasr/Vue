import AssignmentList from "./AssignmentList.js"
import AssignmentCreate from "./AssignmentCreate.js"

export default {
    components: { AssignmentList , AssignmentCreate },
    template: `
        <section class="space-y-8">
                <assignment-list
                    :assignments="filters.inProgress"
                    title="In Progress"
                >
                </assignment-list>

                <assignment-list
                    :assignments="filters.completed"
                    title="Completed"
                >
                </assignment-list>

                <assignment-create @add="add"></assignment-create>
        </section>
        
    `,
    data() {
        return {
            assignments: [
                { name: 'first', complete: false, id: 1 , tag:'math'},
                { name: 'second', complete: false, id: 2 , tag:'science'},
                { name: 'third', complete: false, id: 3 , tag:'math'},

            ],

        }
    },

    computed: {
        filters() {
            return {
                completed: this.assignments.filter(a => a.complete),
                inProgress: this.assignments.filter(a => !a.complete)
            }
        }
    },

    methods : {
        add(name){
            this.assignments.push({ 
                name : name ,
                complete : false,
                id: this.assignments.length+1
            });
        }
    }
}
