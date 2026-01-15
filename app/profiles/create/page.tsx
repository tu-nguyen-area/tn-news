import CreateForm from '@/app/components/create-form';
import { auth } from '@/app/(auth)/auth';

export default async function Page() {
  const session = await auth();
  const user_id = session?.user?.id;

  return (
  <>

  <section>
    <CreateForm
      user_id={`${user_id}`}
    />
  </section>

  </>
  );
}
