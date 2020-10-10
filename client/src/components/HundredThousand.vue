<template>
  <div class="container">
    <table class="table table-striped">
      <thead class="thead-dark">
        <th>Número</th>
        <th>Repeticiones</th>
      </thead>
      <tbody>
        <tr v-for="(n, i) in array" :key="i">
          <td>{{ n.numero }}</td>
          <td>{{ n.repeticiones }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      array: [],
    };
  },
  methods: {
    traerArray() {
      axios
        .post('http://localhost:5000/prueba', {})
        .then((res) => {
          const array = res.data;
          const swap = (i, j) => {
            const aux = array[i];

            array[i] = array[j];
            array[j] = aux;
          };
          const partition = (l, h) => {
            const pivote = array[l];
            let i = l;
            let j = h;

            while (i < j) {
              do {
                // eslint-disable-next-line no-plusplus
                i++;
              } while (array[i] <= pivote);
              do {
                // eslint-disable-next-line no-plusplus
                j--;
              } while (array[j] > pivote);
              if (i < j) swap(i, j);
            }
            swap(l, j);
            return j;
          };
          const quickSort = (l, h) => {
            if (l < h) {
              const j = partition(l, h);
              quickSort(l, j);
              quickSort(j + 1, h);
            }
          };
          array.push(101);
          quickSort(0, array.length - 1);

          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < array.length - 1; i++) {
            let contador = 0;
            // eslint-disable-next-line no-plusplus
            for (let j = i; j < array.length - 1; j++) {
              // eslint-disable-next-line no-plusplus
              if (array[i] === array[j]) contador++;
            }
            this.array.push({ numero: array[i], repeticiones: contador });
            i += contador - 1;
          }
        })
        .catch((err) => {
          // eslint-disable-next-line semi
          console.log(err);
        });
    },
  },
  created() {
    this.traerArray();
  },
};
</script>

<style scoped></style>
