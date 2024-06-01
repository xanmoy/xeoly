import SearchHeader from "@/components/SearchHeader";
import SearchFooter from "@/components/SearchFooter"; // Import the SearchFooter component
import "./../globals.css";
import Footer from "@/components/Footer";
export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
      <SearchFooter />
    </div>
  );
}
