<template>
  <div>
    <h1 class="text-center text-blue-600 text-4xl font-semibold">Travel cost estimator</h1>
    <div class="bg-white rounded-lg shadow-md p-5 my-5">
      <div class="flex flex-col text-base mb-2.5">
        Total Distance (km)
        <input v-model="distance" type="number" class="p-2.5 text-base mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-600" />
      </div>
      <div class="flex flex-col text-base mb-2.5">
        Average Fuel Consumption (liters per 100 km)
        <input v-model="averageFuel" type="number" class="p-2.5 text-base mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-600" />
      </div>
      <div class="flex flex-col text-base mb-2.5">
        Current Fuel Price (per liter)
        <input v-model="price" type="number" class="p-2.5 text-base mt-1 border border-gray-300 rounded focus:outline-none focus:border-blue-600" />
      </div>
      <div class="flex gap-5">
        <button @click="calcCost" class="w-full p-3 bg-blue-600 text-white text-base rounded transition duration-300 ease-in-out mt-2.5 hover:bg-blue-700">
          Calculate
        </button>
        <button @click="resetData" class="w-full p-3 bg-gray-500 text-gray-100 text-base rounded transition duration-300 ease-in-out mt-2.5 hover:bg-gray-700">
          Clear
        </button>
      </div>
    </div>
    <h3 class="flex justify-around text-xl font-semibold text-green-600 mt-5">
      Travel Cost Summary:
      <span v-html="travelCost"></span>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      distance: "",
      averageFuel: "",
      price: "",
      travelCost: "",
    };
  },
  methods: {
    calcCost() {
      if (this.distance > 0) {
        const totalFuel = (this.distance * this.averageFuel) / 100;
        const totalCost = (totalFuel * this.price).toFixed(1);
        this.travelCost = totalCost;
      } else {
        this.travelCost = `<div class="text-red-500 font-normal text-base">Invalid value</div>`
      }
    },
    resetData() {
      this.distance = "";
      this.averageFuel = "";
      this.price = "";
      this.travelCost = "";
    },
  },
};
</script>
