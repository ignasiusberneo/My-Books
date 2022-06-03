<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import StarRating from "vue-star-rating";
export default {
  data() {
    return {
      books: [],
    };
  },
  components: {
    StarRating,
  },
  methods: {
    ...mapActions(useCounterStore, ["axiosGetWishlist"]),
    getWishlist: async function () {
      try {
        const response = await this.axiosGetWishlist();
        this.books = response.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
  created() {
    this.getWishlist();
  },
};
</script>

<template>
  <table class="table table-striped my-5">
    <thead>
      <tr>
        <th class="text-center" scope="col">Thumbnail</th>
        <th class="text-center" scope="col">Title</th>
        <th class="text-center" scope="col">Author</th>
        <th class="text-center" scope="col">Rating</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="book in books">
        <th>
          <img :src="book.volumeInfo.imageLinks.thumbnail" />
        </th>
        <td class="align-middle text-center">{{ book.volumeInfo.title }}</td>
        <td class="align-middle text-center" v-if="book.volumeInfo.authors">
          {{ book.volumeInfo.authors.toString() }}
        </td>
        <td class="align-middle text-center" v-if="!book.volumeInfo.authors">
          -
        </td>
        <td
          class="align-middle text-center"
          v-if="book.volumeInfo.averageRating"
        >
          <StarRating
            read-only="true"
            :rating="book.volumeInfo.averageRating"
            star-size="30"
            show-rating="false"
          ></StarRating>
        </td>
        <td
          class="align-middle text-center"
          v-if="!book.volumeInfo.averageRating"
        >
          No Rating
        </td>
      </tr>
    </tbody>
  </table>
</template>
