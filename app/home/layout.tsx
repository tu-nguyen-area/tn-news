import Header from '@/app/ui/header';
import BarNav from '@/app/ui/bar-nav';
import SignoutForm from '@/app/components/signout-form';
import Footer from '@/app/ui/footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
  <>

  <div>
    <Header />
    <BarNav />
    <SignoutForm />
    {children}
    <Footer />
  </div>

  </>
  );
}
