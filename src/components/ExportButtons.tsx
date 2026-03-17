import { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Download, Printer, Image } from "lucide-react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

interface Props {
  previewRef: RefObject<HTMLDivElement>;
}

const ExportButtons = ({ previewRef }: Props) => {
  const getCanvas = async () => {
    if (!previewRef.current) return null;
    return html2canvas(previewRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#ffffff",
    });
  };

  const handlePDF = async () => {
    const canvas = await getCanvas();
    if (!canvas) return;
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
    pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("পারিবারিক-কার্ড-আবেদন.pdf");
  };

  const handlePrint = () => {
    window.print();
  };

  const handleJPG = async () => {
    const canvas = await getCanvas();
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "পারিবারিক-কার্ড-আবেদন.jpg";
    link.href = canvas.toDataURL("image/jpeg", 0.95);
    link.click();
  };

  return (
    <div className="flex flex-wrap gap-3 mt-4 justify-center">
      <Button variant="success" onClick={handlePDF}>
        <Download className="w-5 h-5" />
        PDF ডাউনলোড করুন
      </Button>
      <Button variant="outline" onClick={handlePrint}>
        <Printer className="w-5 h-5" />
        প্রিন্ট করুন
      </Button>
      <Button variant="outline" onClick={handleJPG}>
        <Image className="w-5 h-5" />
        JPG ডাউনলোড
      </Button>
    </div>
  );
};

export default ExportButtons;
