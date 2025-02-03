import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={css.homePage}>
      <h1>Welcome to the Contact Book App!</h1>
      <p>Manage your contacts securely and efficiently.</p>
    </div>
  );
};

export default HomePage;