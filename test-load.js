import http from 'k6/http';

export let options = {
  vus: 10, // Number of virtual users
  duration: '30s', // Duration of the test
};

export default function () {
  const res = http.get('http://localhost:3000/ping');
  if (res.status !== 200) {
    console.error(`Request failed with status ${res.status}`);
  } else {
    console.log(`Response: ${res.body}`);
  }
}