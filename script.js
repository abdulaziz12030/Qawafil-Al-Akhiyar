function sendToWhatsApp() {
    const phoneNumber = '966570905999';
    const message = encodeURIComponent('السلام عليكم، أرغب في المساهمة في مشاريع قوافل الأخيار');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
}
