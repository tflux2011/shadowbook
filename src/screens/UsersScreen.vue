<template>
  <main class="d-flex flex-column flex-shrink-0 p-3 bg-light">
    <h4>
      All Users
      <router-link
        to="/users/new"
        style="font-size: 0.7rem"
        class="bg-secondary rounded-2 link-light px-1 py-1 text-decoration-none"
        >Add New</router-link
      >
    </h4>
    <b-row>
      <b-col lg="4" class="my-1 offset-lg-8">
        <b-form-group
          label=""
          label-for="filter-input"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              id="filter-input"
              v-model="filter"
              type="search"
              placeholder="Type to Search"
            ></b-form-input>

            <b-input-group-append>
              <b-button
                class="btn btn-dark"
                :disabled="!filter"
                @click="filter = ''"
                >Clear</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>
    <b-table
      striped
      hover
      :filter="filter"
      :current-page="currentPage"
      :per-page="perPage"
      :fields="fields"
      :items="items"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      label-sort-asc=""
      label-sort-desc=""
      label-sort-clear=""
      select-mode="single"
      ref="selectableTable"
      @row-selected="onRowSelected"
      selectable
    ></b-table>
    <b-row>
      <b-col sm="12" lg="3" offset-lg="9" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          :current-page="currentPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import moment from "moment";
import { mapGetters } from "vuex";

export default {
  name: "UsersScreen",
  data() {
    return {
      moment,
      selectMode: "single",
      filter: null,
      sortBy: "dateCreated",
      sortDesc: true,
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      selected: [],
      fields: [
        {
          key: "name",
          label: "Name",
          sortable: true,
        },
        {
          key: "email",
          label: "Email",
          sortable: true,
        },
        {
          key: "isAdmin",
          label: "Role",
          sortable: true,
          formatter: (value) => {
            return value ? "Admin" : "Subscriber";
          },
        },
      ],
      items: [],
      small: true,
    };
  },
  computed: {
    ...mapGetters(["GET_USERS"]),
  },
  async mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
    this.fetchUsers();
    console.log("Fetching...");
  },
  methods: {
    onRowSelected(items) {
      // console.log(items[0]._id);
      this.$router.push({
        name: "EditUserScreen",
        params: {
          id: items[0]._id,
        },
      });
    },
    async fetchUsers() {
      try {
        let res = await this.$store.dispatch("FETCH_USERS");
        // console.log(res);
        if (res.length > 0) {
          this.items = res;
        }
      } catch (error) {
        console.log(error.request);
      }
    },
  },
};
</script>

<style></style>
