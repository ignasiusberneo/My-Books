<script>
import { mapActions, mapWritableState } from "pinia";
import { useCounterStore } from "../stores/counter";
import StarRating from "vue-star-rating";
export default {
  data() {
    return {
      books: [],
      title: "",
    };
  },
  components: {
    StarRating,
  },
  methods: {
    ...mapActions(useCounterStore, ["axiosGetBooks", "axiosAddWishlist"]),
    getBooks: async function () {
      try {
        const response = await this.axiosGetBooks(this.title);
        this.books = response.data;
      } catch (err) {
        console.log(err);
      }
    },
    addWishlist: async function (data) {
      try {
        const response = await this.axiosAddWishlist(data);
        this.$swal({
          icon: "success",
          text: response.data.message,
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          text: error.response.data.message,
        });
      }
    },
  },
};
</script>

<template>
  <div class="input-group mx-auto w-50 my-5">
    <input
      type="search"
      v-model="title"
      class="form-control rounded mx-2"
      placeholder="Input book title..."
    />
    <button @click="getBooks" type="button" class="btn btn-outline-primary">
      search
    </button>
  </div>
  <table class="table table-striped">
    <thead>
      <tr>
        <th class="text-center" scope="col">Thumbnail</th>
        <th class="text-center" scope="col">Title</th>
        <th class="text-center" scope="col">Author</th>
        <th class="text-center" scope="col">Rating</th>
        <th class="text-center" scope="col">Action</th>
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
        <td class="align-middle">
          <button class="btn btn-primary" @click="addWishlist(book)">
            Add to Wishlist
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
