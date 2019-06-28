<template>
    <div class="hello">
        <ElTable
                :data="tableData"
                style="width: 100%;"
        >
            <ElTableColumn
                    label="Name"
                    prop="name"
            >
            </ElTableColumn>
            <ElTableColumn
                    label="Surname"
                    prop="surname"
            >
            </ElTableColumn>
            <ElTableColumn
                    label="Phone"
                    prop="phone"
            >
            </ElTableColumn>
            <ElTableColumn
                    label="Email"
                    prop="email"
            >

            </ElTableColumn>
            <ElTableColumn align="right">
                <template slot-scope="scope">
                    <ElButton
                            size="mini"
                            @click="openEditDialog(scope)"
                    >Edit</ElButton>
                    <ElButton
                            size="mini"
                            type="danger"
                            @click="deleteRow(scope)"
                    >Delete</ElButton>
                </template>
            </ElTableColumn>
        </ElTable>
        <el-dialog title="Edit user" :visible.sync="editDialogVisible">
<!--            <el-form :model="form">-->
<!--                <el-form-item label="Promotion name" :label-width="formLabelWidth">-->
<!--                    <el-input v-model="form.name" autocomplete="off"></el-input>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="Zones" :label-width="formLabelWidth">-->
<!--                    <el-select v-model="form.region" placeholder="Please select a zone">-->
<!--                        <el-option label="Zone No.1" value="shanghai"></el-option>-->
<!--                        <el-option label="Zone No.2" value="beijing"></el-option>-->
<!--                    </el-select>-->
<!--                </el-form-item>-->
<!--            </el-form>-->
            <ElForm
                    ref="form"
                    :model="editDialogForm"
                    label-width="120px"
            >
                <ElFormItem label="Name">
                    <ElInput v-model="editDialogForm.name">{{tableData.name}}</ElInput>
                </ElFormItem>
                <ElFormItem label="Surname">
                    <ElInput v-model="editDialogForm.surname">{{tableData.surname}}</ElInput>
                </ElFormItem>
                <ElFormItem label="Phone">
                    <ElInput v-model="editDialogForm.phone">{{tableData.phone}}</ElInput>
                </ElFormItem>
                <ElFormItem label="Email">
                    <ElInput v-model="editDialogForm.email">{{tableData.email}}</ElInput>
                </ElFormItem>

            </ElForm>
            <span slot="footer" class="dialog-footer">
                <ElButton @click="editDialogVisible = false">Cancel</ElButton>
                <el-button type="primary" @click="submitEdit">Confirm</el-button>
  </span>
        </el-dialog>
    </div>

</template>

<script>
    import { mapState } from 'vuex';
export default {
  name: 'Users',
    data() {
      return {
          editDialogVisible: false,
          editDialogFormIndex: null,
          editDialogForm: {
              name: '',
              surname: '',
              phone: '',
              email: '',
          },
          formLabelWidth: '120px',

      }
    },
    computed: {
      ...mapState(['tableData'])
    },
    watch: {},
    methods: {
        deleteRow(scope) {
            this.$store.commit('deleteItemTableData', scope.$index)

        },
        openEditDialog(scope) {
            this.editDialogForm = scope.row;
            this.editDialogFormIndex = scope.$index;
            this.editDialogVisible = true;
        },
        submitEdit() {
            this.$store.commit('editItemTableData', {id: this.editDialogFormIndex, value: this.editDialogForm} )
            this.editDialogVisible = false;

        }
    },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
