<template>
    <Tasks @toggle-reminder="toggleReminder" @delete-task="deleteTask" :tasks="tasks" />
</template>

<script>
    import Tasks from '../components/Tasks'
    
    export default {
        name: 'Home',
        props: {
            showAddAccount: Boolean,
        },
        components: {
            Tasks,
        },
        data() {
            return {
                tasks: [],
            }
        },
        methods: {
            addAccount(task) {
                this.tasks = [...this.tasks, task]
            },
            deleteTask(id) {
                if(confirm('Are you sure?')) {
                    this.tasks = this.tasks.filter((task) => task.id !== id)
                }
            },
            toggleReminder(id) {
                this.tasks = this.tasks.map((task) => 
                    task.id === id ? {...task, reminder: !task.reminder} :
                    task)
            }
        },
        created() {
            this.tasks = [
            {
                id: 1,
                text: 'Doctors',
                day: 'March 1st at 2:30pm',
                reminder: true,
            },
            {
                id: 2,
                text: 'Meeting',
                day: 'March 3rd at 2:30pm',
                reminder: false,
            },
            ]
        }
    }
</script>