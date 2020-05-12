import styles from "./styles.scss";
import Header from 'components/Header'

const Layout = (props) => {
  return (
    <div className={styles.container}>
       <Header />
      <div>
        {props.children}
      </div>
    </div>
  );

}

export default Layout;
