import StoreHeader from "@/components/header/subheader/StoreHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <StoreHeader />
      {children}
    </main>
  );
}
