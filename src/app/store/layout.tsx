import StoreHeader from "@/components/header/subheader/StoreHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <StoreHeader />
      {children}
    </div>
  );
}
