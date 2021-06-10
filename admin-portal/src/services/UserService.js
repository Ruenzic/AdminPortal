export async function GetUsers () {
  const response = await fetch('/api/users')
  return response.json()
}

export async function DeleteUser (userId) {
  const response = await fetch('/api/user', {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({userId: userId})
  })
  return response.json()
}

export async function CreateUser (data) {
  const response = await fetch(`/api/user`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: data})
  })
  return response.json()
}

export async function UpdateUser (data) {
  const response = await fetch(`/api/user`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: data})
  })
  return response.json()
}
