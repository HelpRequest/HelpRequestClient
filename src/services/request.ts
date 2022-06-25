import { requestAskedType } from "../Types/RequestAskedType";


const BASE_URL = 'http://localhost:3002'

export async function postRequest( request: requestAskedType) {
  try {
  const newRequest: any = await fetch(`${BASE_URL}/request/post`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(request),
  });
  return await newRequest;
  } catch (err) {
    console.log('Error at postRequest Service: ', err)
  }
}

export async function getAllIncomingRequests(): Promise<any> {
  try {
    const allIncomingRequests = await fetch(`${BASE_URL}/request/get`);
    return await allIncomingRequests.json();
  } catch (err) {
      console.log('Error at getAllIncomingRequests Service: ', err);
  }
}