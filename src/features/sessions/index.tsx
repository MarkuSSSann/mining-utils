import Charts from "./components/Charts";
import Form from "./components/Form/Form";
import RecordsTable from "./components/RecordsTable";

export default function index() {
  return (
    <>
      <Form />

      <RecordsTable />

      <Charts />
    </>
  );
}
