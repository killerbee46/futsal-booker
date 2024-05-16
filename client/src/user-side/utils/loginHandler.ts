export const login = (data:any) => {
    const userData = {
        ...data,
        loggedIn:true
      }
    localStorage.setItem("auth",JSON.stringify(userData))
}

export const logout = () => {
    const userData = {
        loggedIn:false
      }
    localStorage.setItem("auth",JSON.stringify(userData))
}

const tempUser = localStorage.getItem("auth")

export const userData = tempUser && tempUser !== undefined ? JSON.parse(tempUser) : {loggedIn:false} 