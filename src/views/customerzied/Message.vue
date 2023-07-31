<script setup></script>
<template>
  <h2>Send Message</h2>
  <v-container>
    <v-row justify="center">
      <v-col cols="auto">
        console.log(VRating)
        <div class="text-center">
          <v-rating
            v-model="rating"
            bg-color="orange-lighten-1"
            color="blue"
          ></v-rating>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
