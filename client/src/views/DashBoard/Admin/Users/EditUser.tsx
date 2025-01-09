import React from 'react'
import DashboardLayout from '../../../../Layouts/DashboardLayout'
import UserForm from "../../../../components/Forms/UserForm"

const EditUser = () => {
  return (
    <DashboardLayout title={"Edit User"}>
        <UserForm update />
    </DashboardLayout>
  )
}

export default EditUser