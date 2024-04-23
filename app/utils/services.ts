import { Data } from '../types/exp'
export async function sendData(data: Data) {
 const response = await fetch('/api/pdf', {
  method: 'POST',
  body: JSON.stringify(data),
 })
 return response
}
