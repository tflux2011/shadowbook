<template>
  <main class="d-flex flex-column flex-shrink-0 p-3 bg-light">
    <h4>Add New Post</h4>
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
          v-model="content"
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
                  @click="publishContent"
                  class="btn btn-secondary btn-sm float-end"
                >
                  Publish
                </button>
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
  name: "NewPostsScreen",
  components: {
    editor: Editor,
  },
  data() {
    return {
      title: "",
      content: this.value,
    };
  },
  props: {
    value: {
      type: String,
      default: "",
    },
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
  methods: {
    async publishContent() {
      console.log(this.title, " ", this.content);
      let payload = {
        title: this.title,
        content: this.content,
      };
      try {
        let res = await this.$store.dispatch("CREATE_POST", payload);
        console.log(res);
        if (res.length > 0) {
          this.items = res;
        }
      } catch (error) {
        console.log(error.request);
      }
    },
    update: function () {
      // pass updated content back to the parent
      this.$emit("input", this.content);
    },
  },
};
</script>

<style></style>
