<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field v-model="filterCriteria.startCreatedAt" outlined dense hide-details>
            <template v-slot:append-outer>
              <date-picker v-model="filterCriteria.startCreatedAt" />
            </template>
          </v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="filterCriteria.endCreatedAt" outlined dense hide-details>
            <template v-slot:append-outer>
              <date-picker v-model="filterCriteria.endCreatedAt" />
            </template>
          </v-text-field>
      </v-col>
      <v-col>
        <v-text-field label="Autor" v-model="filterCriteria.author" outlined dense hide-details></v-text-field>
      </v-col>
      <v-col>
        <v-btn @click="getReactReleases">Suchen</v-btn>
      </v-col>
    </v-row>
    <v-row v-for="reactRelease in reactReleases" :key="reactRelease.id">
      <post-box :reactRelease="reactRelease"/>
    </v-row>
  </v-container>
</template>

<script>
import PostBox from '@/components/PostBox.vue'
import DatePicker from '@/components/DatePicker';

import Repo from "../RestRepository";

  export default {
    name: 'HomeView',

    components: {
        PostBox,
        DatePicker
    },

    data: () => ({
      repo: new Repo(),
      filterCriteria: {
        author: null,
        startCreatedAt: null,
        endCreatedAt: null
      },
      reactReleases:null
    }),
    methods: {
      getReactReleases(){
        this.repo.getReactReleases(this.filterCriteria).then((reactRelases) => {
          this.reactReleases = reactRelases
        })
      }
    },
    mounted() {
      this.getReactReleases()
    }
  }
</script>
