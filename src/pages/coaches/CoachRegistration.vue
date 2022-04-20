<template>
    <section>
        <h2>Register As a Coach now!</h2>
        <base-card>
            <coach-form @save-data="saveData"></coach-form>
        </base-card>
    </section>
</template>

<script>

import CoachForm from "../../components/coaches/CoachForm.vue"
export default {
    components: {
        CoachForm
    },
    methods: {
        saveData(data) {
            this.$store.dispatch('coaches/registerCoach', data);
            this.$router.replace('/coaches');
        }
    }
}
</script>