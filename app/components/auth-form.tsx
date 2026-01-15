import Form from 'next/form';
import { useFormStatus } from 'react-dom';
import Link from 'next/link';

function Submit({ isSuccessful }: { isSuccessful: boolean }) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={ pending || isSuccessful }
      className="rounded-lg text-white p-2 w-full h-10
      hover:brightness-125 bg-gradient-to-r from-blue-500 via-purple-500
      to-rose-500 transition-all"
    >
      {pending ? "Confirming..." : "Confirm"}
    </button>
  );
}

export function AuthForm({
  action,
  children,
  defaultEmail = '',
  isSuccessful,
  url,
  content,
}: {
  action: NonNullable<string | ((formData: FormData) => void | Promise<void>) | undefined>;
  children: React.ReactNode;
  defaultEmail: string;
  isSuccessful: boolean;
  url: string;
  content: string;
}) {
  return (
  <>

  <section className="flex justify-center md:my-48 md:mx-48 py-12 rounded-lg
    bg-neutral-100 dark:bg-neutral-900 md:shadow-2xl md:shadow-purple-500">
    <div className="w-[95%] md:w-1/2">
      {children}
    <Form action={action}>
      <div className="grid grid-cols-1 gap-4 my-12">
        <label htmlFor="email"
          className="font-bold"
        >
          Email
        </label>
        <input
          className="bg-white dark:bg-black rounded-lg w-full transition-all
            focus:border-purple-500 focus:outline focus:outline-purple-500 p-2
            hover:shadow-xl hover:shadow-purple-500"
          id="email"
          name="email"
          type="email"
          defaultValue={`${defaultEmail}`}
          placeholder="user@email.com"
          autoComplete="email"
          required
        >
        </input>
        <label htmlFor="password"
          className="font-bold"
        >
          Password
        </label>
        <input
          className="bg-white dark:bg-black rounded-lg w-full transition-all
            focus:border-purple-500 focus:outline focus:outline-purple-500 p-2
            hover:shadow-xl hover:shadow-purple-500"
          id="password"
          name="password"
          type="password"
          placeholder="password"
          required
        >
        </input>
      </div>
      <Submit isSuccessful={isSuccessful}/>
      <Link href={url}><h1 className="text-center m-6">{content}</h1></Link>
    </Form>
    </div>
  </section>

  </>
  );
}
