import { requireAdmin } from '@/lib/auth.guard';

const OverviewPage_xx = () => {
  return <div>OverviewPage_xx</div>;
};

export async function getServerSideProps() {
  const adminRedirect = await requireAdmin();
  if (adminRedirect?.redirect) {
    return adminRedirect; // 重定向
  }
  return { props: {} }; // 正常渲染
}

export default OverviewPage_xx;
