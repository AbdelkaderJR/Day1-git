export function greetUser(name) {
  return `Hello ${name}`;
}

export default class DataFetcher {
  async getUser(id) {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return data.json();
  }
}
