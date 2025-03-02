import AssignmentList from "./AssignmentList.js"

export default {
    components: { AssignmentList },
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

                <form @submit.prevent="add" class="border p-2 space-x-4">
                    <input v-model="newAssignment" placeholder="new assignments..." class="text-black p-2"/>
                    <button type="submit" class=" p-2">Add</button>
                </form>
        </section>
        
    `,
    data() {
        return {
            assignments: [
                { name: 'first', complete: false, id: 1 },
                { name: 'second', complete: false, id: 2 },
                { name: 'third', complete: false, id: 3 },

            ],

            newAssignment : ''
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
        add() {
            this.assignments.push({
                name : this.newAssignment,
                completed : false,
                id: this.assignments.length+1
            });

            this.newAssignment = '';
        }
    }
}
