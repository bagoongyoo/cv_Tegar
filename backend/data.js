const educationHistory = [
    { id: 1, period: '2023 - Sekarang', institution: 'Universitas Amikom Yogyakarta', major: 'S1 - Informatika' },
    { id: 2, period: '2020 - 2023', institution: 'SMA Negeri 1 Banguntapan', major: 'MIPA' }
  ];
  
const skills = [
    { name: 'Vue.js',
      level: 'Mahir',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' 
    },

    { name: 'JavaScript', 
      level: 'Mahir',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' 
    },

    { name: 'Tailwind CSS', 
      level: 'Mahir',
      iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
    },

    { name: 'Node.js', 
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' 
    },

    { name: 'React.js', 
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' 
    },

    { name: 'MySQL',
      level: 'Menengah',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },

    { name: 'Git & GitHub',
      level: 'Mahir', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    { name: 'HTML5 & CSS3',
      level: 'Mahir', 
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    }
  ];
  
  const projects = [
    {
      title: 'Master Trainer di Amazon Web Service (AWS)',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4P34TKgJcYwMiu7SRyW-IisJ4MpJ0u0kTiQ&s',
      description: 'Menjadi Master Trainer di Amazon Web Service sejak 2022.',
      tech: ['Cloud Practitioner Essentiaks', 'AWS Elastic Cloud Computing', 'MySQL'],
      link: 'https://www.liputan6.com/news/read/5698523/aws-ajak-indonesia-lebih-paham-soal-cloud-lewat-program-terampil-di-awan?page=2'
    },
    {
      title: 'Mentor Cloud Computing di SMAN 1 Banguntapan',
      image: 'https://sman1cangkringan.sch.id/wp-content/uploads/2024/07/14.-Sagasitas-cloud-computing.jpg',
      description: 'Menjadi Mentor Cloud Computing di SMAN 1 Banguntapan sejak 2023.',
      tech: ['Public Cloud', 'Private Cloud', 'Hybrid Cloud'],
      link: 'https://sman1-btp.sch.id/layanan-bk-berbasis-it/'
    }
  ];
  
  module.exports = { educationHistory, skills, projects };