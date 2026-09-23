export default function Footer() {
  return (
    <footer className="bg-dark text-white text-center p-4 mt-5">
      <div className="mb-3 d-flex justify-content-center gap-4">
        <a href="https://wa.me/919597894420" target="_blank" rel="noopener noreferrer" className="text-white"><i className="bi bi-whatsapp fs-4"></i></a>
        <a href="tel:+916374357008" className="text-white"><i className="bi bi-telephone fs-4"></i></a>
        <a href="mailto:mwmtrust2016@gmail.com" className="text-white"><i className="bi bi-envelope fs-4"></i></a>
      </div>
      <p className="mb-0">&copy; {new Date().getFullYear()} Mission Word Movement Trust. All rights reserved.</p>
    </footer>
  );
}
