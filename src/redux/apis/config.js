export const configFunction = (getState) => {
 const token = document.cookie.split('=')[1];
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }
  return config
}
