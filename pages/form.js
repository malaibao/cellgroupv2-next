import Form from "../components/Form";
import axios from "axios";
import useSWR, { preload } from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const emptyArr = [];
const form = () => {
  const { data: leaders = emptyArr } = useSWR(
    "http://localhost:3000/api/submissions",
    fetcher
  );

  return <Form leaders={leaders} />;
};

export default form;
