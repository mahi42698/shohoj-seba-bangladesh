import { useState, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Download, Printer, Copy } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const templates = [
  { label: "চাকরির আবেদন পত্র", id: "job" },
  { label: "ছুটির আবেদন পত্র", id: "leave" },
  { label: "সাধারণ আবেদন পত্র", id: "general" },
  { label: "অভিযোগ পত্র", id: "complaint" },
];

interface FormData {
  template: string;
  recipientName: string;
  recipientTitle: string;
  recipientOrg: string;
  applicantName: string;
  applicantAddress: string;
  subject: string;
  body: string;
  date: string;
}

const initial: FormData = {
  template: "general", recipientName: "", recipientTitle: "", recipientOrg: "",
  applicantName: "", applicantAddress: "", subject: "", body: "", date: new Date().toISOString().split("T")[0],
};

const inputClass = "w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-ring focus:outline-none";
const labelClass = "block text-base font-medium mb-1.5 text-foreground";

const ApplicationLetterPage = () => {
  const [form, setForm] = useState<FormData>(initial);
  const previewRef = useRef<HTMLDivElement>(null);

  const u = (field: keyof FormData, val: string) => setForm({ ...form, [field]: val });

  const exportPDF = async () => {
    if (!previewRef.current) return;
    const canvas = await html2canvas(previewRef.current, { scale: 2, backgroundColor: "#fff" });
    const pdf = new jsPDF("p", "mm", "a4");
    const w = pdf.internal.pageSize.getWidth();
    pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, w, (canvas.height * w) / canvas.width);
    pdf.save("আবেদন-পত্র.pdf");
  };

  const getDefaultBody = () => {
    switch (form.template) {
      case "job": return "মহোদয়,\n\nবিনীত নিবেদন এই যে, আমি আপনার প্রতিষ্ঠানে চাকরির জন্য আবেদন করছি। আমি নিষ্ঠা ও আন্তরিকতার সাথে কাজ করতে আগ্রহী।\n\nঅতএব, মহোদয়ের নিকট আকুল আবেদন, আমাকে চাকরির সুযোগ প্রদান করে বাধিত করবেন।";
      case "leave": return "মহোদয়,\n\nবিনীত নিবেদন এই যে, আমি জরুরি কারণে ছুটি প্রয়োজন। অনুগ্রহ করে আমাকে ছুটি মঞ্জুর করবেন।\n\nঅতএব, মহোদয়ের নিকট আকুল আবেদন, আমার ছুটি মঞ্জুর করে বাধিত করবেন।";
      case "complaint": return "মহোদয়,\n\nবিনীত নিবেদন এই যে, আমি নিম্নোক্ত বিষয়ে আপনার দৃষ্টি আকর্ষণ করতে চাই।\n\nঅতএব, মহোদয়ের নিকট আকুল আবেদন, বিষয়টি বিবেচনা করে প্রয়োজনীয় ব্যবস্থা গ্রহণ করবেন।";
      default: return "মহোদয়,\n\nবিনীত নিবেদন এই যে,\n\n\n\nঅতএব, মহোদয়ের নিকট আকুল আবেদন, উপরোক্ত বিষয়ে প্রয়োজনীয় ব্যবস্থা গ্রহণ করে বাধিত করবেন।";
    }
  };

  const bodyText = form.body || getDefaultBody();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="container py-8 flex-1">
        <h1 className="text-3xl font-bold text-center mb-8 text-primary">✍️ আবেদন পত্র জেনারেটর</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary border-b border-border pb-3">টেমপ্লেট নির্বাচন</h2>
              <div className="grid grid-cols-2 gap-3">
                {templates.map((t) => (
                  <label key={t.id} className={`flex items-center gap-2 p-3 rounded-lg border cursor-pointer transition-colors ${form.template === t.id ? "border-primary bg-accent" : "border-input"}`}>
                    <input type="radio" checked={form.template === t.id} onChange={() => u("template", t.id)} className="accent-primary w-5 h-5" />
                    <span className="text-sm">{t.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary border-b border-border pb-3">প্রাপকের তথ্য</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className={labelClass}>প্রাপকের নাম</label><input className={inputClass} value={form.recipientName} onChange={e => u("recipientName", e.target.value)} /></div>
                <div><label className={labelClass}>পদবি</label><input className={inputClass} value={form.recipientTitle} onChange={e => u("recipientTitle", e.target.value)} /></div>
                <div className="md:col-span-2"><label className={labelClass}>প্রতিষ্ঠান</label><input className={inputClass} value={form.recipientOrg} onChange={e => u("recipientOrg", e.target.value)} /></div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary border-b border-border pb-3">আবেদনকারীর তথ্য</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div><label className={labelClass}>আবেদনকারীর নাম</label><input className={inputClass} value={form.applicantName} onChange={e => u("applicantName", e.target.value)} /></div>
                <div><label className={labelClass}>তারিখ</label><input className={inputClass} type="date" value={form.date} onChange={e => u("date", e.target.value)} /></div>
                <div className="md:col-span-2"><label className={labelClass}>ঠিকানা</label><input className={inputClass} value={form.applicantAddress} onChange={e => u("applicantAddress", e.target.value)} /></div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
              <h2 className="text-xl font-bold mb-4 text-primary border-b border-border pb-3">বিষয় ও মূল পত্র</h2>
              <div className="space-y-4">
                <div><label className={labelClass}>বিষয়</label><input className={inputClass} value={form.subject} onChange={e => u("subject", e.target.value)} placeholder="আবেদনের বিষয়" /></div>
                <div>
                  <label className={labelClass}>মূল পত্র</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-ring focus:outline-none min-h-[200px]" value={form.body} onChange={e => u("body", e.target.value)} placeholder={getDefaultBody()} />
                </div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="sticky top-20">
            <div className="a4-preview rounded-lg overflow-hidden">
              <div ref={previewRef} className="p-10 bg-card" style={{ fontFamily: "'Hind Siliguri', sans-serif", fontSize: "13px", lineHeight: "1.8" }}>
                <p className="text-right mb-6">তারিখ: {form.date}</p>
                <div className="mb-4">
                  <p className="font-bold">বরাবর,</p>
                  <p>{form.recipientName || "........................."}</p>
                  <p>{form.recipientTitle || "........................."}</p>
                  <p>{form.recipientOrg || "........................."}</p>
                </div>
                <p className="font-bold mb-4">বিষয়: {form.subject || "........................."}</p>
                <div className="whitespace-pre-line mb-8">{bodyText}</div>
                <div className="mt-12">
                  <p>বিনীত,</p>
                  <p className="font-bold mt-1">{form.applicantName || "........................."}</p>
                  <p>{form.applicantAddress || "........................."}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-4 justify-center">
              <Button variant="success" onClick={exportPDF}><Download className="w-5 h-5" /> PDF ডাউনলোড করুন</Button>
              <Button variant="outline" onClick={() => window.print()}><Printer className="w-5 h-5" /> প্রিন্ট করুন</Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ApplicationLetterPage;
