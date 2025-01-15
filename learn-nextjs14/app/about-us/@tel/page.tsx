import sleep from "../../utils/sleep";

export default async function Tel() {
  await sleep(1000);
  return <h2>tel: 010-1234-1234</h2>;
}
