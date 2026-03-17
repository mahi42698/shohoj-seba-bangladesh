import { forwardRef } from "react";
import { FamilyCardData } from "@/pages/FamilyCardPage";

interface Props {
  formData: FamilyCardData;
}

const FamilyCardPreview = forwardRef<HTMLDivElement, Props>(({ formData }, ref) => {
  return (
    <div className="a4-preview rounded-lg overflow-hidden">
      <div ref={ref} className="print-area p-8 bg-card text-foreground" style={{ fontFamily: "'Hind Siliguri', sans-serif", fontSize: "12px", lineHeight: "1.5" }}>
        {/* Header */}
        <div className="text-center mb-6 border-b-2 border-foreground/20 pb-4">
          <h2 className="text-lg font-bold">গণপ্রজাতন্ত্রী বাংলাদেশ সরকার</h2>
          <h3 className="text-base font-bold mt-1">পারিবারিক কার্ড আবেদন ফরম</h3>
        </div>

        {/* Photo placeholder */}
        <div className="float-right ml-4 mb-4 w-24 h-28 border-2 border-foreground/30 flex items-center justify-center text-muted-foreground text-xs text-center">
          ছবি<br />আঠালো করুন
        </div>

        {/* Applicant Info */}
        <div className="mb-5">
          <h4 className="font-bold text-sm mb-2 border-b border-foreground/10 pb-1">আবেদনকারীর তথ্য</h4>
          <div className="space-y-1">
            <p>আবেদনকারীর নাম: <span className="font-semibold">{formData.applicantName || "........................."}</span></p>
            <p>পিতার নাম: <span className="font-semibold">{formData.fatherName || "........................."}</span></p>
            <p>মাতার নাম: <span className="font-semibold">{formData.motherName || "........................."}</span></p>
            <p>জাতীয় পরিচয়পত্র নম্বর: <span className="font-semibold">{formData.nidNumber || "........................."}</span></p>
            <p>মোবাইল: <span className="font-semibold">{formData.mobile || "........................."}</span></p>
            <p>জন্ম তারিখ: <span className="font-semibold">{formData.birthDate || "........................."}</span></p>
            <p>ঠিকানা: <span className="font-semibold">{formData.address || "........................."}</span></p>
            <p>জেলা: {formData.district || "............"} | উপজেলা: {formData.upazila || "............"} | ইউনিয়ন/ওয়ার্ড: {formData.union || "............"}</p>
          </div>
        </div>

        <div className="clear-both" />

        {/* Family Info */}
        <div className="mb-5">
          <h4 className="font-bold text-sm mb-2 border-b border-foreground/10 pb-1">পরিবারের তথ্য</h4>
          <div className="space-y-1">
            <p>পরিবারের মোট সদস্য: <span className="font-semibold">{formData.totalMembers || "........"}</span></p>
            <p>পরিবারের প্রধানের নাম: <span className="font-semibold">{formData.headName || "........................."}</span></p>
            <p>প্রধানের NID: <span className="font-semibold">{formData.headNid || "........................."}</span></p>
            <p>প্রধানের মোবাইল: <span className="font-semibold">{formData.headMobile || "........................."}</span></p>
          </div>
        </div>

        {/* Members Table */}
        {formData.members.length > 0 && (
          <div className="mb-5">
            <h4 className="font-bold text-sm mb-2 border-b border-foreground/10 pb-1">পরিবারের সদস্য তালিকা</h4>
            <table className="w-full border-collapse text-xs">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-border p-1.5 text-left">ক্রমিক</th>
                  <th className="border border-border p-1.5 text-left">নাম</th>
                  <th className="border border-border p-1.5 text-left">সম্পর্ক</th>
                  <th className="border border-border p-1.5 text-left">বয়স</th>
                  <th className="border border-border p-1.5 text-left">NID নম্বর</th>
                </tr>
              </thead>
              <tbody>
                {formData.members.map((member, index) => (
                  <tr key={index}>
                    <td className="border border-border p-1.5">{index + 1}</td>
                    <td className="border border-border p-1.5">{member.name}</td>
                    <td className="border border-border p-1.5">{member.relation}</td>
                    <td className="border border-border p-1.5">{member.age}</td>
                    <td className="border border-border p-1.5">{member.nid}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Signatures */}
        <div className="mt-16 flex justify-between pt-4">
          <div className="text-center">
            <div className="border-t border-foreground/40 pt-2 px-8">আবেদনকারীর স্বাক্ষর</div>
          </div>
          <div className="text-center">
            <div className="border-t border-foreground/40 pt-2 px-8">কর্তৃপক্ষের স্বাক্ষর</div>
          </div>
        </div>
      </div>
    </div>
  );
});

FamilyCardPreview.displayName = "FamilyCardPreview";

export default FamilyCardPreview;
