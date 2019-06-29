<template>
    <div class="style">
        <h1>Add user</h1>
        <ElRow>
            <ElCol>
                <ElForm
                        ref="form"
                        :model="form"
                        label-width="120px"
                >
                    <ElFormItem label="Name">
                        <ElInput v-model="form.name"></ElInput>
                    </ElFormItem>
                    <ElFormItem label="Surname">
                        <ElInput v-model="form.surname"></ElInput>
                    </ElFormItem>
                    <ElFormItem label="Phone">
                        <ElInput v-model="form.phone"></ElInput>
                    </ElFormItem>
                    <ElFormItem label="Email">
                        <ElInput v-model="form.email"></ElInput>
                    </ElFormItem>
                    <!--                <ElFormItem style="align-items: revert">-->
                    <div class="form_button">
                        <ElButton
                                :plain="true"
                                type="primary"
                                @click="onSubmit"
                                style="margin-right: 1em;">Create</ElButton>
                        <router-link :to="{name: 'users'}">
                            <ElButton
                                    type="danger"
                                    :plain="true">Cancel</ElButton>
                        </router-link>
                    </div>

                    <!--                </ElFormItem>-->
                </ElForm>
            </ElCol>
            <ElCol>
                <div class="json_inp">
                    <ElInput
                            type="textarea"
                            :rows="2"
                            placeholder="Please input"
                            v-model="json">
                    </ElInput>
                    <ElButton
                            style="margin-top: 1em;"
                            @click="parseJson"
                    >Import</ElButton>
                </div>
            </ElCol>

        </ElRow>



<!--        <router-view></router-view>-->
    </div>

</template>
<script>

    export default {
        name: 'AddUser',
        data() {
            return {
                json: '',
                form: {
                    name: '',
                    surname: '',
                    phone: '',
                    email: '',
                },
            }
        },
        computed: {},
        watch: {},
        methods: {
            onSubmit() {
                this.$store.commit('addItemToTableData' ,this.form);
                this.$router.push({name: 'users'});
                this.$message({
                    message: 'You created a new user.',
                    type: 'success'
                });
            },
            parseJson() {
                var data = JSON.parse(this.json);
                data.forEach(function (item) {
                    this.$store.commit('addItemToTableData', item)
                }.bind(this));
                this.$router.push({name: 'users'})
                this.$message({
                    message: 'You created a new user.',
                    type: 'success'
                });
            }
        },
    }
</script>
<style>
    .style {


    }
    .form_button {
        margin: 1em;
    }
</style>