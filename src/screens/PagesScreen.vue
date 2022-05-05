<template>
  <main class="d-flex flex-column flex-shrink-0 p-3 bg-light">
    <h4>
      Pages
      <router-link
        to="/pages/new"
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
export default {
  name: "PagesScreen",
  data() {
    return {
      moment,
      filter: null,
      sortBy: "title",
      sortDesc: false,
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      fields: [
        {
          key: "title",
          label: "Title",
          sortable: true,
        },
        {
          key: "dateCreated",
          label: "Date Created",
          sortable: true,
          formatter: (value) => {
            return moment(value).format("DD MMM YYYY - h:mm:ss a");
          },
        },
      ],
      small: true,
      items: [
        {
          _id: "626be163c527796918e163d6",
          title: "About us",
          content:
            "This tells the story of my experience in a white garment church and how I suffered a head injury while fetching water at a mechanical well and loosing focus while doing so. This also tells of my experience not fitting in while in this church as I couldn’t dance and there was basically no chance to showcase anything I know but just follow someone else’s cue.",
          dateCreated: "2022-04-29T13:00:19.891Z",
          __v: 0,
        },
        {
          _id: "626be13bc527796918e163d4",
          title: "Contact us",
          content:
            "This tells the story of my experience living in a semi-completed 3-storey building. This story talks about the demons we fought while living in this building and how the house feels haunted sometimes. This also talks about the sacrifice that was made to cause us to go insane and how we spent most of our time while in that building reading and talking about the bible.",
          dateCreated: "2022-04-29T12:59:39.151Z",
          __v: 0,
        },
        {
          _id: "626be114c527796918e163d1",
          title: "Homepage",
          content: "This is the story of how Tobi is working from home",
          dateCreated: "2022-04-29T12:59:00.533Z",
          __v: 0,
        },
      ],
    };
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
};
</script>

<style></style>
