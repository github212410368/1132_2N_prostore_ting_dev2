import { Metadata } from 'next';
import UpdateCabinForm_xx from './update-cabin-form_xx';
import { getCabinById } from '@/lib/cabins/cabin.actions_xx';
import notFound from '@/app/not-found';

export const metadata: Metadata = {
  title: 'Update Cabin',
};

const UpdateCabinPage_xx = async (props: {
  params: Promise<{
    id: string;
  }>;
}) => {
  const { id } = await props.params;
  const cabin = await getCabinById(id);
  // console.log('cabin', cabin);
  // console.log('typeof product', typeof cabin);
  if (!cabin) notFound();

  return (
    <>
      <h2 className='h2-bold'>Update Cabin_xx</h2>
      <div className='my-8'></div>
    </>
  );
};
export default UpdateCabinPage_xx;
