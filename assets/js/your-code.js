export function getAllDogs() {
  // Your code here
  let url = '/dogs';
  return fetch(url);
}

export function getDogNumberTwo() {
  // Your code here
  let url = '/dogs/2';
  return fetch(url);
}

export function postNewDog() {
  // Your code here
  let dog = {
    name: 'Max',
    age: 2,
  };
  let body = new URLSearchParams(dog);
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  return fetch('/dogs', { method: 'POST', body: body, headers: headers });
}

export function postNewDogV2(name, age) {
  // Your code here
  let dog = {
    name,
    age,
  };
  let body = new URLSearchParams(dog);
  let headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
  };
  return fetch('/dogs', { method: 'POST', body: body, headers: headers });
}

export function deleteDog(id) {
  // Your code here
  return fetch(`/dogs/${id}/delete`, {
    method: 'POST',
    headers: {
      AUTH: 'ckyut5wau0000jyv5bsrud90y',
    },
  });
}
