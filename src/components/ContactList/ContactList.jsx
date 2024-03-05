// import { useSelector } from "react-redux";
// import { Task } from "../Task/Task";
// import { selectAllTasks } from "../../redux/tasks/selectors";
// import css from "./TaskList.module.css";

// export const TaskList = () => {
//   const tasks = useSelector(selectAllTasks);

//   return (
//     <ul className={css.list}>
//       {tasks.map(({ id, text }) => (
//         <li key={id}>
//           <Task id={id} text={text} />
//         </li>
//       ))}
//     </ul>
//   );
// };
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import { deleteContact } from "../../redux/contacts/operationsContacts";
import css from "./ContactList.module.css";

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
      ))}
    </ul>
  );
};

const ContactItem = ({ contact, onDelete }) => {
  return (
    <li className={css.item}>
      <span>
        {contact.name} - {contact.number}
      </span>
      <button type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  );
};
