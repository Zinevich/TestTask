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
                            plain="true"
                            size="mini"
                            @click="openEditDialog(scope)"
                    >Edit</ElButton>
                    <ElButton
                            plain="true"
                            size="mini"
                            type="danger"
                            @click="deleteRow(scope)"
                    >Delete</ElButton>
                </template>
            </ElTableColumn>
        </ElTable>
        <ElDialog title="Edit user" :visible.sync="editDialogVisible">
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
                <ElButton plain="true" type="danger" @click="editDialogVisible = false">Cancel</ElButton>
                <ElButton plain="true" type="primary" @click="submitEdit">Confirm</ElButton>
            </span>
        </ElDialog>
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
            this.$store.commit('deleteItemTableData', scope.$index);
            this.$message.error('You have deleted a user.');
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
