export default {
    template :
    `
        <li >
                    <label for="" class="flex justify-between align-center space-x-12">
                        <p>{{ assignment.name }}</p>
                        <input type="checkbox" v-model="assignment.complete" name="" id="">
                    </label>
                
        </li>
    `,
    props : {
        assignment : Object,
    }
}