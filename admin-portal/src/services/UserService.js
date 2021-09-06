export async function getUsers () {
  const response = await fetch('/api/users')
  return response.json()
}

export async function deleteUser (userId) {
  const response = await fetch('/api/user', {
    method: 'DELETE',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({userId: userId})
  })
  return response.json()
}

export async function createUser (data) {
  const response = await fetch(`/api/user`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: data})
  })
  return response.json()
}

export async function updateUser (data) {
  const response = await fetch(`/api/user`, {
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({user: data})
  })
  return response.json()
}
