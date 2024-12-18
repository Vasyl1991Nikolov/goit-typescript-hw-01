// src/generics/1.ts

import axios from 'axios';

async function fetchData<T>(url: string): Promise<T> {
  try {
    const response = await axios.get<T>(url); 
    return response.data;
  } catch (error: any) {
    throw new Error(`Error fetching from ${url}: ${error.message}`);
  }
}


interface User {
  id: number;
  name: string;
  email: string;
}


async function getUserData() {
  const userData = await fetchData<User>('https://jsonplaceholder.typicode.com/users/1');
  console.log(userData);
}

getUserData();


async function getAllUsers() {
  const users = await fetchData<User[]>('https://jsonplaceholder.typicode.com/users');
  console.log(users); 
}

getAllUsers();
