import Navbar from "@/components/Navbar";

const layout = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      <div className="bg-base-200 px-8 py-12 min-h-screen">{children}</div>
    </div>
  );
};
export default layout;
