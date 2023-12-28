import NavigationBar from "@/app/components/navbar";
import "../app/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "@/app/components/appFooter";
export const metadata = {
  title: "PH Logistics | Cargo Handling & Shipping",
  description:
    "PH Logistics is a Shipping and Logistics service provider including cargo handling, warehousing. We are located in Ghana, and the West African sub-region. Your delivery is our priority.",
  keywords:
    "cargo handling, logistics, freight forwarding, shipping, air freight, sea freight, land transportation, supply chain management, secure transit, on-time delivery, cost-effective solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
