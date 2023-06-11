import { SearchProvider } from "@/components";
import "../../../library/styles/main.scss";

export const metadata = {
  title: "Pokedex - Next.JS",
  description: "A simple pokedex app build with Next.Js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SearchProvider>{children}</SearchProvider>
      </body>
    </html>
  );
}
