import { requireAdmin } from '@/lib/auth.guard';

const OverviewPage_xx = () => {
  return <div>OverviewPage_xx</div>;
};

export async function getServerSideProps() {
  await requireAdmin();
  return { props: {} };
}

export default OverviewPage_xx;
