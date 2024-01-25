import React, { useEffect } from "react";
import "./SetText.css";
import TextTags from "./TextTags";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SetText() {
  const [tagSelected, setTagSelected] = useState(false);
  const dispatch = useDispatch();
  return (
    <div className="text-page">
      <div className="set-text-wrapper">
        <div className="text-container">
          <div>
            پژوهشگران استرالیایی که این فناوری به نام دی‌ویو(DeWave) را توسعه
            داده‌اند، این فرآیند را با استفاده از داده‌های بیش از ۱۰ نفر آزمایش
            کردند. شرکت کنندگان در حالی که کلاهی به سر داشتند و در سکوت مطالعه
            می‌کردند، امواج مغزی‌شان از طریق نوار مغزی(EEG) ضبط و افکارشان
            رمزگشایی و به متن تبدیل می‌شد. پژوهشگران استرالیایی می‌گویند، DeWave
            با اصلاحات بیشتر می‌تواند به بیماران سکته مغزی و مبتلا به فلج کمک
            کند تا با دیگران ارتباط برقرار کنند و هدایت ماشین‌هایی مانند بازوهای
            بیونیک یا ربات‌ها را برای مردم آسان‌تر کند. چین تِنگ‌لین دانشمند
            علوم کامپیوتر از دانشگاه فناوری سیدنی(UTS) می‌گوید: این تحقیق نشان
            دهنده تلاشی پیشگامانه در ترجمه امواج خام EEG به طور مستقیم به متن
            است که یک پیشرفت قابل توجه در این زمینه را نشان می‌دهد. این فناوری
            در آزمایش‌های انجام‌شده توسط لین و همکارانش به بیش از ۴۰ درصد دقت
            دست یافت یک حکایت از بهبود سه درصدی نسبت به استاندارد قبلی برای
            ترجمه فکر از ضبط‌های EEG دارد. هدف پژوهشگران بهبود دقت به حدود ۹۰
            درصد است که با روش‌های مرسوم ترجمه زبان یا نرم‌افزار تشخیص گفتار
            برابری می‌کند. سایر روش‌های ترجمه سیگنال‌های مغزی به زبان، نیاز به
            جراحی‌های تهاجمی برای کاشت الکترودها در مغز یا استفاده از دستگاه‌های
            بزرگ و گرانقیمت مانند MRI دارند که آنها را برای استفاده روزانه غیر
            عملی می‌سازد و اغلب نیاز به استفاده از ردیابی چشم برای تبدیل
            سیگنال‌های مغزی به کلمات دارند.
          </div>
        </div>
      </div>
      <div className="tags-container">
        <TextTags text={"اقتصادی"}/>
        <TextTags text={"سیاسی"} />
        <TextTags text={"ورزشی"} />
        <TextTags text={"علمی"} />
        <TextTags text={"علمی"} />
        <TextTags text={"علمی"} />
      </div>
      <div className="buttons-container">
        <button className="submit-button button">تایید</button>
        <button className="submit-button button">اتمام</button>
      </div>
    </div>
  );
}

export default SetText;
