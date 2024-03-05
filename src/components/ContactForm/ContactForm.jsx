import { useDispatch } from "react-redux";
// import { addTask } from "../../redux/tasks/operations";
import css from "./ContactForm.module.css";
import { addContact } from "../../redux/contacts/operationsContacts";

// export const TaskEditor = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;
//     const text = form.elements.text.value;
//     if (text !== "") {
//       dispatch(addTask(text));
//       form.reset();
//       return;
//     }
//     alert("Task cannot be empty. Enter some text!");
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit}>
//       <input name="text" className={css.input} />
//       <button type="submit" className={css.button}>
//         Add task
//       </button>
//     </form>
//   );
// };
export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const number = formData.get("number");

    dispatch(addContact({ name, number }));

    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <label className={css.label}>
        Name:
        <input className={css.input} type="text" name="name" required />
      </label>

      <label className={css.label}>
        Number:
        <input className={css.input} type="tel" name="number" required />
      </label>

      <button className={css.button} type="submit">
        Add contact
      </button>
    </form>
  );
};
