import React from 'react'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import UserForm from '../../../../components/Forms/UserForm'

const AddUser = () => {
  return (
    <DashboardLayout title={"Add User"}>
        <UserForm half />
    </DashboardLayout>
  )
}

export default AddUser