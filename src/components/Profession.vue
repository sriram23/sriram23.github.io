<template>
    <div class="profession">
        <div class="profession-title">Professional Experience</div>
        <div v-for="profession in Professions" :key="profession">
            <ProfessionCard
                class="profession-card"
                :source="profession.source"
                :designation="profession.designation"
                :company="profession.company"
                :time="profession.time" />
        </div>
    </div>
</template>

<script>
import ProfessionCard from './ProfessionCard'
import Const from '../constant/constant'
export default {
    name: 'Profession',
    data() {
        return {
            Professions: ''
        }
    },
    components: {
        ProfessionCard
    },
    created() {
        this.Professions = Const.professions;
    }
}
</script>

<style lang="scss" scoped>
.profession {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 5rem 0;
    .profession-title {
        font-size: 3rem;
        padding: 1rem;
    }
    .profession-card {
        min-width: 50rem;
        padding: 1rem;
    }
}

@media (max-width: 768px) {
    .profession-card {
        min-width: unset !important;
        width: 30rem;
    }
}

@media (max-width: 425px) {
    .profession-card {
        min-width: unset !important;
        width: 18rem;
    }
}
</style>