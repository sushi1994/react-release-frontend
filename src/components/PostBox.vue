<template>
  <v-container>
    <v-card outlined>
    <v-row>
      <v-col>Tag: {{ reactRelease.tag_name }}</v-col>
    </v-row>
    <v-row>
      <v-col>Autor: {{ reactRelease.author.login }}</v-col>
      <v-col><v-img :src="reactRelease.author.avatar_url"  height="200px" width="200px"></v-img></v-col>
    </v-row>
    <v-row>
      <v-col>Erstelldatum: {{ reactRelease.created_at }}</v-col>
    </v-row>
  </v-card>
  </v-container>
  
</template>

<script>
  export default {
    name: 'PostBox',

    props: {
      reactRelease: {
        type: Object,
        required: true
      }
    },  
    data: () => ({
      
    }),
  }
</script>
