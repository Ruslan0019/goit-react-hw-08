import { useEffect } from "react";
import { useDispatch } from "react-redux";
import DocumentTitle from "../../components/DocumentTitle";
import { ContactList } from "../../components/ContactList/ContactList";
import { ContactForm } from "../../components/ContactForm/ContactForm";
// import { fetchTasks } from "../redux/tasks/operations";
// import { selectLoading } from "../redux/tasks/selectors";
import Filter from "../../components/Filter/Filter";
import { fetchContacts } from "../../redux/contacts/operationsContacts";
import css from "./contacts.module.css";

export default function Tasks() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <DocumentTitle>Your tasks</DocumentTitle>
      <div className={css.container}>
        <ContactForm />
        {/* <div>{isLoading && "Request in progress..."}</div> */}
        <Filter />
        <ContactList />
      </div>
    </>
  );
}
