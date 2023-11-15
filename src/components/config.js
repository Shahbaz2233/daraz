const token = localStorage.getItem("adminToken")
const token2 = localStorage.getItem("userToken")
export const header = {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
}
console.log('token---->',token2)
export const header2 = {
    headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token2}`
    }
}

