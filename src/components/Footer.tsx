import { Mail, Phone, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-xl font-bold mb-4">ওয়েবসাইট সম্পর্কে</h3>
          <p className="opacity-80 text-base leading-relaxed">
            এই ওয়েবসাইটটি বাংলাদেশের সাধারণ মানুষের জন্য সহজে ফরম তৈরি করার
            উদ্দেশ্যে তৈরি করা হয়েছে।
          </p>
          <div className="mt-4 opacity-70 text-sm">
            <p className="font-semibold">MD. Mahiur Rahman</p>
            <p>CEO – Find Mineral Water Project</p>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">যোগাযোগ করুন</h3>
          <div className="space-y-3">
            <a
              href="https://wa.me/8801726553185"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              <span>WhatsApp: +8801726553185</span>
            </a>
            <a
              href="mailto:mahi42698@gmail.com"
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              <span>Email: mahi42698@gmail.com</span>
            </a>
            <a
              href="https://www.facebook.com/share/1DNULj468x/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
            >
              <Facebook className="w-5 h-5" />
              <span>ফেসবুক পেজ</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mt-10 pt-6 border-t border-primary-foreground/20 text-center opacity-60 text-sm">
        © {new Date().getFullYear()} সহজ সেবা বাংলাদেশ। সর্বস্বত্ব সংরক্ষিত।
      </div>
    </footer>
  );
};

export default Footer;
