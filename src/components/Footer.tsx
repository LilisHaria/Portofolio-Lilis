const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center">
          <p className="text-sm md:text-base">
            © {new Date().getFullYear()} Lilis Puspita Haria. All rights reserved.
          </p>
          <p className="text-sm text-background/80 mt-2">
            Product & Project Manager | Software Engineering @ UGM
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
