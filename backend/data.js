const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Banguntapan', major: 'MIPA' }
  ];
  
  const skills = [
    { name: 'Vue.js', level: 'Mahir' },
    { name: 'JavaScript', level: 'Mahir' },
    { name: 'Tailwind CSS', level: 'Mahir' },
    { name: 'Node.js', level: 'Menengah' },
    { name: 'Express.js', level: 'Menengah' },
    { name: 'PostgreSQL', level: 'Menengah' },
    { name: 'Git & GitHub', level: 'Mahir' },
    { name: 'HTML5 & CSS3', level: 'Mahir' }
  ];
  
  const projects = [
    {
      title: 'Master Trainer AWS',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4P34TKgJcYwMiu7SRyW-IisJ4MpJ0u0kTiQ&s',
      description: 'Menjadi Master Trainer di Amazon Web Service.',
      tech: ['Vue.js', 'Express.js', 'PostgreSQL'],
      link: '#'
    },
    {
      title: 'Aplikasi Manajemen Tugas',
      image: 'https://via.placeholder.com/500x300?text=Proyek+2',
      description: 'Aplikasi untuk melacak progres tugas harian.',
      tech: ['React', 'Firebase'],
      link: '#'
    }
  ];
  
  module.exports = { educationHistory, skills, projects };