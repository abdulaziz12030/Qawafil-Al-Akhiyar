// سنة تلقائية في الفوتر
document.getElementById('year').textContent = new Date().getFullYear().toString();

// قائمة للجوال
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu){
  navToggle.addEventListener('click', ()=>{
    const isOpen = navMenu.style.display === 'flex';
    navMenu.style.display = isOpen ? 'none' : 'flex';
  });
}

// تبديل الثيم مع حفظ التفضيل
const themeToggle = document.getElementById('themeToggle');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark' || (!savedTheme && prefersDark)){
  document.body.classList.add('dark');
}
if (themeToggle){
  themeToggle.addEventListener('click', ()=>{
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
}

// نموذج الواتساب
const WA_PHONE = '966000000000'; // استبدل الرقم برقم الواتساب الخاص بك بدون "+"
const form = document.getElementById('contactForm');
if (form){
  form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get('name') || '';
    const phone = data.get('phone') || '';
    const email = data.get('email') || '';
    const service = data.get('service') || '';
    const message = data.get('message') || '';
    const serviceLabel = {
      'riyadh-makkah':'رحلة الرياض ⇄ مكة',
      'riyadh-makkah-madinah':'الرياض ⇢ مكة ⇢ المدينة ⇢ الرياض',
      'hotel-flight':'حجوزات فنادق وطيران',
      'vip-bus':'نقل جماعي VIP'
    }[service] || service;

    const text = `طلب حجز من الموقع:%0Aالاسم: ${encodeURIComponent(name)}%0Aالجوال: ${encodeURIComponent(phone)}%0Aالبريد: ${encodeURIComponent(email)}%0Aالخدمة: ${encodeURIComponent(serviceLabel)}%0Aالتفاصيل: ${encodeURIComponent(message)}`;
    const url = `https://wa.me/${WA_PHONE}?text=${text}`;
    window.open(url, '_blank');
  });
}

// تسجيل خدمة PWA
if ('serviceWorker' in navigator){
  window.addEventListener('load', ()=>{
    navigator.serviceWorker.register('/sw.js').catch(console.error);
  });
}
