import SectionTwo from '@/app/ui/home/section-two';

export default async function Page(
  props: { params: Promise<{ id: string }> }
) {
  const params = await props.params;
  const id = params.id;

  return (
  <>

  <main>
    <SectionTwo id={id}/>
  </main>

  </>
  );
}
