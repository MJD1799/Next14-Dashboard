import Sidebar from '../ui/dashboard/sidebar';
import Navbar from '../ui/dashboard/navbar';
import Footer from '../ui/dashboard/footer';
import styles from '../ui/dashboard/dashboard.module.css';

const DashboardLayout = ({children}) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar/>
      </div>
      <div className={styles.content}>
        <Navbar/>
        {children}
        <Footer/>
      </div>
    </div>
  )
};

export default DashboardLayout;