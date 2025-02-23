export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <div>{children}</div>
    </div>
  );
}
