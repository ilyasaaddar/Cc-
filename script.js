// مثال: تبديل عنوان ساخر كل مرة تفتح الصفحة
const subtitles = [
  "نصنع الأخبار لأن الواقع ما كيساعفناش",
  "إذا ضحكت، فالمشكلة فيك، ماشي فينا",
  "كل شي كذوب... ولكن مضحك"
];

document.querySelector('.subtitle').innerText = 
  subtitles[Math.floor(Math.random() * subtitles.length)];
