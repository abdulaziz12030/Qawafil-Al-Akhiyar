# قوافل الأخيار — النسخة الأساسية (Baseline)
موقع ثابت (Static) جاهز للنشر يحقق المتطلبات: RTL، Responsive، Dark Mode، أداء عالٍ، SEO، PWA، ونموذج يرسل عبر واتساب.

## التهيئة السريعة
1) استبدل الروابط والعناوين في `index.html` (og:url، logo، البريد، رقم واتساب).
2) ضع معرّف Google Analytics في سكربت gtag داخل `index.html` بدل `G-XXXXXXXXXX`.
3) غيّر رقم الواتساب في `script.js` عبر المتغير `WA_PHONE` إلى رقمك (بدون علامة +).
4) ارفع المجلد إلى GitHub ثم انشر عبر Vercel (أو أي استضافة ثابتة).
5) اربط الدومين وفعّل HTTPS (Vercel يفعّل SSL تلقائيًا).
6) أضف الموقع في Google Search Console، ثم ارفع ملف `sitemap.xml` وحدّث robots.txt برابط موقعك.

## بنية الملفات
.
├─ index.html
├─ styles.css
├─ script.js
├─ manifest.webmanifest
├─ sw.js
├─ robots.txt
├─ sitemap.xml
└─ assets
   ├─ icons (شعارات وأيقونات التطبيق)
   └─ images (صور الموقع)

## تحسينات إضافية مقترحة
- تحويل الصور إلى WebP (حالياً hero.webp جاهزة كمثال).
- ضغط الشفرة عبر minify قبل النشر.
- اختبار الأداء عبر Lighthouse واستبدال صور كبيرة بأخرى مضغوطة.
