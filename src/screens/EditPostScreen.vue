<template>
  <main class="d-flex flex-column flex-shrink-0 p-3 bg-light">
    <h4>Edit Post</h4>
    <b-alert
      :show="dismissCountDown"
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
      class="p-2 my-2"
      >{{ message }}</b-alert
    >
    <b-row class="mt-5">
      <b-col lg="9">
        <b-form-group
          id="fieldset-1"
          description=""
          label="Enter Title"
          label-for="input-1"
          valid-feedback="Thank you!"
          :invalid-feedback="invalidFeedback"
          :state="state"
        >
          <b-form-input
            id="input-1"
            v-model="title"
            :state="state"
            trim
            placeholder="Please enter a post title"
          ></b-form-input>
        </b-form-group>

        <p class="mb-0 mt-3">Enter Content</p>
        <editor
          api-key="oap0fionueus457skqwzc7bnvkzkxae0p270akfs4fre1trr"
          :init="{
            height: 400,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount',
            ],
            toolbar:
              'undo redo | formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help',
          }"
          v-model="content"
        />
      </b-col>
      <b-col lg="3">
        <b-row class="mt-3">
          <b-col lg="12">
            <div class="card mb-3" style="max-width: 18rem">
              <div class="card-header bg-transparent">Publish</div>
              <div class="card-body text-success">
                <small class="text-muted d-block">Status: Draft</small>
                <small class="text-muted d-block">Visibility: Public</small>
              </div>
              <div class="card-footer bg-transparent">
                <button
                  @click="updatePost"
                  class="btn btn-primary btn-sm float-end"
                >
                  Update
                </button>
                <b-spinner v-if="loading"></b-spinner>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </main>
</template>

<script>
import Editor from "@tinymce/tinymce-vue";

export default {
  name: "EditPostsScreen",
  components: {
    editor: Editor,
  },
  data() {
    return {
      title: "",
      content: "",
      loading: false,
      message: "",
      dismissSecs: 5,
      dismissCountDown: 0,
    };
  },
  computed: {
    state() {
      return this.title.length >= 4;
    },
    invalidFeedback() {
      if (this.title.length > 0) {
        return "Enter at least 4 characters.";
      }
      return "";
      //return "Please enter something.";
    },
  },
  async mounted() {
    try {
      let res = await this.$store.dispatch("FETCH_POST", {
        id: this.$route.params.id,
      });

      if (res) {
        this.title = res.title;
        this.content = res.content;
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  methods: {
    async updatePost() {
      this.loading = true;
      let payload = {
        title: this.title,
        content: this.content,
      };
      try {
        let res = await this.$store.dispatch("UPDATE_POSTS", {
          id: this.$route.params.id,
          payload,
        });
        if (res) {
          this.items = res;
          this.dismissCountDown = this.dismissSecs;
          this.message = "Post was published successfully";
        }
      } catch (error) {
        console.log(error.request);
        this.message = error.message;
        this.dismissCountDown = this.dismissSecs;
      }
      this.loading = false;
    },
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown;
    },
  },
};
</script>

<style></style>
