<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @toggle-add-account="$emit('toggle-add-account')" text="Sign Up" color="green" />
        <!-- Button text="Log In" color="black" />
        <Button text="Log Out" color="gray" /-->
    </header>
</template>

<script>
    import Button from './Button'

    export default {
        name: 'Header',
        props: {
            title: String,
            showAddAccount: Boolean,
        },
        components: {
            Button
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
</style>