export default function Layout({
  children,
  tel,
  address,
}: {
  children: React.ReactNode;
  tel: React.ReactNode;
  address: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; NextJs is Great!
      {tel}
      {address}
    </div>
  );
}
