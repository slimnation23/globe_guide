<template>
  <div>
    <h1 class="text-center text-blue-600 text-4xl font-semibold">Average fuel consumption</h1>
    <div class="bg-white rounded-lg shadow-md p-5 my-5">
      <div class="flex flex-col text-base mb-2.5">
        How many liters of fuel did you fill up?
        <input v-model="liters" type="number" class="p-2.5 text-base mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-600" />
      </div>
      <div class="flex flex-col text-base mb-2.5">
        How many kilometers did you drive?
        <input v-model="kilometers" type="number" class="p-2.5 text-base mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-600" />
      </div>
      <div class="flex gap-5">
        <button @click="caclAverage" class="w-full p-3 bg-blue-600 text-white text-base rounded transition duration-300 ease-in-out mt-2.5 hover:bg-blue-700">
          Calculate
        </button>
        <button @click="resetData" class="w-full p-3 bg-gray-500 text-gray-100 text-base rounded transition duration-300 ease-in-out mt-2.5 hover:bg-gray-700">
          Clear
        </button>
      </div>
    </div>
    <h3 class="flex justify-around text-xl font-semibold text-green-600 mt-5">
      Average fuel / 100 km:
      <span v-html="averageFuel"></span>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      liters: "",
      kilometers: "",
      averageFuel: "",
    };
  },
  methods: {
    caclAverage() {
      if (this.kilometers > 0) {
        const average = ((this.liters / this.kilometers) * 100).toFixed(1);
        this.averageFuel = `${average} L`;
      } else {
        this.averageFuel = `<div class="text-red-500 font-normal text-base">Invalid value</div>`;
      }
    },
    resetData() {
      this.liters = "";
      this.kilometers = "";
      this.averageFuel = "";
    },
  },
};
</script>
