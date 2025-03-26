export const heroContent = {
  title: 'نعمل معاً لبناء مستقبل أفضل',
  description:
    'نسعى لتقديم المساعدة والدعم للمحتاجين وتحسين جودة حياتهم من خلال مشاريعنا الخيرية المتنوعة',
  buttons: [
    { text: 'تبرع الآن', path: '/donate', variant: 'primary' },
    { text: 'تطوع معنا', path: '/volunteer', variant: 'outline-primary' },
  ],
  carousel: [
    { image: '/src/assets/Images/HomePage1.jpg', alt: 'جمعية الخير' },
    { image: '/src/assets/Images/HomePage2.jpg', alt: 'جمعية الخير' },
    { image: '/src/assets/Images/HomePage3.jpg', alt: 'جمعية الخير' },
  ],
}

export const impactStats = [
  {
    icon: 'hand-holding-heart',
    count: '1000+',
    label: 'مشروع خيري منجز',
  },
  {
    icon: 'users',
    count: '5000+',
    label: 'مستفيد من خدماتنا',
  },
  {
    icon: 'heart',
    count: '200+',
    label: 'متطوع نشط',
  },
]

export const featuredProjects = [
  {
    id: 1,
    title: 'مشروع إطعام المحتاجين',
    description: 'تقديم وجبات غذائية للأسر المحتاجة في المناطق النائية',
    image: 'src/assets/Images/HomePage1.jpg',
    progress: 75,
    target: 100000,
    raised: 75000,
  },
  {
    id: 2,
    title: 'مشروع التعليم',
    description: 'توفير المنح الدراسية للطلاب المتفوقين من الأسر المحتاجة',
    image: 'src/assets/Images/HomePage2.jpg',
    progress: 60,
    target: 150000,
    raised: 90000,
  },
  {
    id: 3,
    title: 'مشروع الصحة',
    description: 'تقديم الرعاية الصحية الأساسية للمحتاجين',
    image: 'src/assets/Images/HomePage3.jpg',
    progress: 45,
    target: 200000,
    raised: 90000,
  },
]

export const ctaContent = {
  title: 'كن جزءاً من التغيير',
  description: 'تبرعك اليوم يمكن أن يغير حياة شخص غداً',
  button: {
    text: 'تبرع الآن',
    path: '/donate',
  },
}
