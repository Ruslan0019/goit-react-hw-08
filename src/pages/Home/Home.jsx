/* eslint-disable react/no-unescaped-entities */
import DocumentTitle from "../../components/DocumentTitle";
import css from "./Home.module.css";
export default function Home() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <ul className={css.list}>
          <li className={css.item}>
            <span className={css.span}>Convenient contact addition:</span> Quickly and easily add new contacts to your phone book with the intuitive app interface.
          </li>
          <li className={css.item}>
            <span className={css.span}>Flexible sorting and filtering system:</span> Instantly find the needed contact using a powerful sorting and filtering system based on names, groups, or other
            parameters.
          </li>
          <li className={css.item}>
            <span className={css.span}>Easy editing and updating of data:</span> Modify contact information anytime and from anywhere to stay up-to-date with the latest changes.
          </li>
          <li className={css.item}>
            <span className={css.span}>Secure data storage:</span> Your contacts are always safe thanks to a reliable storage system and personal information protection.
          </li>
          <li className={css.item}>
            <span className={css.span}>Quick access to contacts:</span> Don't waste time searching for needed information — our intuitive quick access features will help you find the required contact
            in seconds.
          </li>
          <li className={css.item}>
            <span className={css.span}>Synchronization with cloud services:</span> Synchronize your contacts with cloud services to access them from any device at any time.
          </li>
          <li className={css.item}>
            <span className={css.span}>Personalized management options:</span> Customize the app to suit your needs by selecting themes, interface language, and other parameters.
          </li>
        </ul>
      </div>
    </>
  );
}
