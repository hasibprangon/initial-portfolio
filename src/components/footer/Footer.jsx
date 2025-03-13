const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sky-700 font-bold">
          Copyright © {currentYear} All rights reserved by Md Hasibul Hossain
        </p>
      </div>
    </footer>
  );
};

export default Footer;
