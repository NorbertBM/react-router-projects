import { redirect } from "react-router-dom";

const sleep = (n = 2000) => new Promise((r) => setTimeout(r, n));
const rand = () => Math.round(Math.random() * 100);

export async function homeLoader() {
  await sleep();
  return { data: `Home loader - random value ${rand()}` };
}
export async function dashboardLoader() {
  await sleep();
  return { data: `Dashboard loader - random value ${rand()}` };
}

export async function redirectLoader() {
  await sleep();
  return redirect("/");
}
