import { cards } from "../lib/data";
import Card from "../ui/dashboard/card";
import Chart from "../ui/dashboard/chart";
import Rightbar from "../ui/dashboard/rightbar";
import Transactions from "../ui/dashboard/transactions";

import styles from "../ui/dashboard/dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <div className={styles.cards}>
          {cards.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
        <Transactions />
        <Chart />
      </div>
      <div className={styles.side}>
        <Rightbar />
      </div>
    </div>
  );
};

export default Dashboard;