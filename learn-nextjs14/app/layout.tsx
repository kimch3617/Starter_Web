import "../styles/global.css"
import { Metadata } from "next";
import Navigation from "../components/navigation";

export const metadata: Metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Movies"
  },
  description: "The best movies on best framework",
};

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navigation />
          {children}
          {modal}
          <div id="modal-root" />
        </div>
      </body>
    </html>
  );
}
