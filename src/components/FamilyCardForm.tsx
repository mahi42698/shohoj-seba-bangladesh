import { FamilyCardData, FamilyMember } from "@/pages/FamilyCardPage";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

interface Props {
  formData: FamilyCardData;
  setFormData: (data: FamilyCardData) => void;
}

const inputClass =
  "w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground text-base focus:ring-2 focus:ring-ring focus:outline-none";

const labelClass = "block text-base font-medium mb-1.5 text-foreground";

const FamilyCardForm = ({ formData, setFormData }: Props) => {
  const update = (field: keyof FamilyCardData, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const addMember = () => {
    setFormData({
      ...formData,
      members: [...formData.members, { name: "", relation: "", age: "", nid: "" }],
    });
  };

  const updateMember = (index: number, field: keyof FamilyMember, value: string) => {
    const updated = [...formData.members];
    updated[index] = { ...updated[index], [field]: value };
    setFormData({ ...formData, members: updated });
  };

  const removeMember = (index: number) => {
    setFormData({
      ...formData,
      members: formData.members.filter((_, i) => i !== index),
    });
  };

  return (
    <div className="space-y-8">
      {/* Section 1 */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h2 className="text-xl font-bold mb-6 text-primary border-b border-border pb-3">
          ১. আবেদনকারীর তথ্য
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>আবেদনকারীর নাম</label>
            <input className={inputClass} value={formData.applicantName} onChange={(e) => update("applicantName", e.target.value)} placeholder="পূর্ণ নাম লিখুন" />
          </div>
          <div>
            <label className={labelClass}>পিতার নাম</label>
            <input className={inputClass} value={formData.fatherName} onChange={(e) => update("fatherName", e.target.value)} placeholder="পিতার নাম" />
          </div>
          <div>
            <label className={labelClass}>মাতার নাম</label>
            <input className={inputClass} value={formData.motherName} onChange={(e) => update("motherName", e.target.value)} placeholder="মাতার নাম" />
          </div>
          <div>
            <label className={labelClass}>NID নম্বর</label>
            <input className={inputClass} value={formData.nidNumber} onChange={(e) => update("nidNumber", e.target.value)} placeholder="জাতীয় পরিচয়পত্র নম্বর" />
          </div>
          <div>
            <label className={labelClass}>মোবাইল নম্বর</label>
            <input className={inputClass} value={formData.mobile} onChange={(e) => update("mobile", e.target.value)} placeholder="01XXXXXXXXX" />
          </div>
          <div>
            <label className={labelClass}>জন্ম তারিখ</label>
            <input className={inputClass} type="date" value={formData.birthDate} onChange={(e) => update("birthDate", e.target.value)} />
          </div>
          <div className="md:col-span-2">
            <label className={labelClass}>বর্তমান ঠিকানা</label>
            <input className={inputClass} value={formData.address} onChange={(e) => update("address", e.target.value)} placeholder="সম্পূর্ণ ঠিকানা লিখুন" />
          </div>
          <div>
            <label className={labelClass}>জেলা</label>
            <input className={inputClass} value={formData.district} onChange={(e) => update("district", e.target.value)} placeholder="জেলার নাম" />
          </div>
          <div>
            <label className={labelClass}>উপজেলা</label>
            <input className={inputClass} value={formData.upazila} onChange={(e) => update("upazila", e.target.value)} placeholder="উপজেলার নাম" />
          </div>
          <div>
            <label className={labelClass}>ইউনিয়ন / ওয়ার্ড</label>
            <input className={inputClass} value={formData.union} onChange={(e) => update("union", e.target.value)} placeholder="ইউনিয়ন বা ওয়ার্ড" />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h2 className="text-xl font-bold mb-6 text-primary border-b border-border pb-3">
          ২. পরিবারের তথ্য
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>পরিবারের মোট সদস্য</label>
            <input className={inputClass} type="number" value={formData.totalMembers} onChange={(e) => update("totalMembers", e.target.value)} placeholder="সংখ্যা" />
          </div>
          <div>
            <label className={labelClass}>পরিবারের প্রধানের নাম</label>
            <input className={inputClass} value={formData.headName} onChange={(e) => update("headName", e.target.value)} placeholder="প্রধানের নাম" />
          </div>
          <div>
            <label className={labelClass}>প্রধানের NID</label>
            <input className={inputClass} value={formData.headNid} onChange={(e) => update("headNid", e.target.value)} placeholder="NID নম্বর" />
          </div>
          <div>
            <label className={labelClass}>প্রধানের মোবাইল নম্বর</label>
            <input className={inputClass} value={formData.headMobile} onChange={(e) => update("headMobile", e.target.value)} placeholder="01XXXXXXXXX" />
          </div>
        </div>
      </div>

      {/* Section 3 - Members */}
      <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
        <h2 className="text-xl font-bold mb-6 text-primary border-b border-border pb-3">
          ৩. পরিবারের সদস্য তালিকা
        </h2>
        {formData.members.map((member, index) => (
          <div key={index} className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4 p-4 bg-muted rounded-lg">
            <div className="col-span-2 md:col-span-1">
              <label className="text-sm font-medium">নাম</label>
              <input className={inputClass} value={member.name} onChange={(e) => updateMember(index, "name", e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium">সম্পর্ক</label>
              <input className={inputClass} value={member.relation} onChange={(e) => updateMember(index, "relation", e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium">বয়স</label>
              <input className={inputClass} type="number" value={member.age} onChange={(e) => updateMember(index, "age", e.target.value)} />
            </div>
            <div>
              <label className="text-sm font-medium">NID নম্বর</label>
              <input className={inputClass} value={member.nid} onChange={(e) => updateMember(index, "nid", e.target.value)} />
            </div>
            <div className="flex items-end">
              <button onClick={() => removeMember(index)} className="h-12 w-12 rounded-lg bg-destructive/10 text-destructive flex items-center justify-center hover:bg-destructive/20">
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
        <Button onClick={addMember} variant="outline" className="w-full">
          <Plus className="w-5 h-5" />
          সদস্য যোগ করুন
        </Button>
      </div>
    </div>
  );
};

export default FamilyCardForm;
