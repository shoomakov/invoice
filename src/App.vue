<template>
  <div class="container">
    <div class="row">

      <div class="flex-item">
        <h2>Накладная</h2>
      </div>

      <div class="flex-item">

        <table class="table">

          <tr class="header-tr">
            <th>Наименование</th>
            <th>Количество</th>
            <th>Цена</th>
            <th class="empty"></th>
          </tr>

          <tr v-for="(r, i) in rows" :key="i" class="edit-tr">
            <td><input type="text" :value="r.name" v-model="rows[i].name"></td>
            <td><input type="number" min="0" :value="r.quantity" v-model="rows[i].quantity"></td>
            <td><input type="number" min="0" :value="r.price" v-model="rows[i].price"></td>
            <td class="edit-buttons">
              <button class="delete" @click="removeRow(i)">
                <i class="fa fa-trash-o" aria-hidden="true"></i>
              </button>
            </td>
          </tr>

          <tr>
            <td><input type="text" name="name" v-model="current.name"></td>
            <td><input type="number" min="0" name="quantity" v-model="current.quantity"></td>
            <td><input type="number" min="0" name="price" v-model="current.price"></td>
            <td class="edit-buttons">
              <button class="edit" @click="pushData(current)">
                <i class="fa fa-plus" aria-hidden="true"></i>
              </button>
            </td>
          </tr>

          <tr class="footer-tr">
            <td></td>
            <td>Итого</td>
            <td>{{ total }} $</td>
            <td></td>
          </tr>

        </table>

      </div>

    </div>
  </div>
</template>

<script src="./App.js"></script>

<style lang="scss" src="./App.scss"></style>
