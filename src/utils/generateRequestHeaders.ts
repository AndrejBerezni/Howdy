export default function generateRequestHeaders() {
  const token = localStorage.getItem('auth')
  if (!token) {
    throw new Error('Please authenticate to perform this action')
  }
  return {
    Authorization: token,
    'Content-Type': 'application/json',
  }
}
