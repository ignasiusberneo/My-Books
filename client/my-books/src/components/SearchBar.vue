<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
export default {
  data() {
    return {
      books: [],
      title: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["axiosGetBooks"]),
    getOmdb: async function () {
      try {
        const response = await this.axiosGetOmdb(this.omdbData);
        this.foundDrama = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<template></template>
