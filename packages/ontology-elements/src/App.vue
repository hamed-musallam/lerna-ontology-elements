<script setup lang="ts">
import OntologyAnnotation from "./components/ontology-annotation.ce.vue";
import OntologyAutoComplete from "./components/ontology-autocomplete.ce.vue";
import OntologyCompose from "./components/ontology-compose.ce.vue";

import { ref } from "vue";
let selectedValue = ref(
  "Homo sapiens	OBI	http://purl.obolibrary.org/obo/NCBITaxon_9606	class"
);
</script>
<template>
  <header>
    <div class="wrapper">
      <ontology-annotation :annotation="selectedValue"></ontology-annotation>
      <br />
      <br />
      <ontology-auto-complete
        :modelValue="selectedValue"
        @change="selectedValue = $event"
        format="text"
        label="Input field (ontology driven)"
        info="Search terms across ontologies"
        placeholder="search term"
      ></ontology-auto-complete>
      <br />
      <code v-if="selectedValue">
        Value:
        <pre>{{ selectedValue }}</pre>
      </code>
      <hr />
      <ontology-compose
        format="text"
        label="Input field (ontology driven)"
        info="Search terms across ontologies"
      ></ontology-compose>
    </div>
  </header>
</template>
