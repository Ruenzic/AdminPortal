export async function getPosts (userId) {
  const response = await fetch('/api/posts', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({userId: userId})
  })
  return response.json()
}
