import { Metadata } from "next";
import Navigation from "./components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loading..."
  },
  description: "The best movies on best framework",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
