import DashboardCard from './DashboardCard';
import { ReactComponent as Dollar } from '../../assests/SVG/dollar-coin.svg';
import { ReactComponent as Cart } from '../../assests/SVG/Cart.svg';
import { ReactComponent as Fork } from '../../assests/SVG/Fork.svg';
import Order from './Order';
const OwnerDashboard = () => {
  return (
    <section className="owner-dashboard">
      <h1 className="heading-primary owner-dashboard__title">dashboard</h1>

      <div className="card-holder">
        <DashboardCard title="total revenue" content="rs. 1,00,000">
          <Dollar />
        </DashboardCard>
        <DashboardCard title="total orders" content="200">
          <Cart />
        </DashboardCard>
        <DashboardCard title="best sellers" content="chicken fried rice">
          <Fork />
        </DashboardCard>
      </div>

      <div>
        <h1 className="heading-primary owner-dashboard__title">order status</h1>
        <ul>
          <li>
            <Order title="chicken fried rice" status="completed" />
          </li>
          <li>
            <Order title="chicken fried rice" status="completed" />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OwnerDashboard;
