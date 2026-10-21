// Menyiapkan movieThemes untuk digunakan pada langkah berikutnya.
const movieThemes = {
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      mk2: { bg1: '#22010a', bg2: '#ef4444', bg3: '#fbbf24', icon: '🐉', subtitle: 'Aksi brutal, pertarungan legendaris, dan arena mematikan.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      mario: { bg1: '#1e3a8a', bg2: '#ef4444', bg3: '#22c55e', icon: '⭐', subtitle: 'Petualangan penuh warna dengan dunia galaksi yang seru.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      endgame: { bg1: '#111827', bg2: '#7c3aed', bg3: '#22d3ee', icon: '🛡️', subtitle: 'Pertempuran akhir para Avengers yang epik dan emosional.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      blackpanther: { bg1: '#05070c', bg2: '#6d28d9', bg3: '#60a5fa', icon: '🐾', subtitle: 'Wakanda bangkit dengan gaya, teknologi, dan kehormatan.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      jurassic: { bg1: '#032b1e', bg2: '#10b981', bg3: '#fbbf24', icon: '🦖', subtitle: 'Dunia dinosaurus yang liar, megah, dan menegangkan.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      spiderverse: { bg1: '#0f172a', bg2: '#ec4899', bg3: '#38bdf8', icon: '🕷️', subtitle: 'Visual multiverse yang unik, dinamis, dan penuh energi.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      transformers: { bg1: '#111827', bg2: '#60a5fa', bg3: '#94a3b8', icon: '🤖', subtitle: 'Ledakan besar dan pertarungan robot penuh kekuatan.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      lalaland: { bg1: '#1e1b4b', bg2: '#f472b6', bg3: '#fbbf24', icon: '🎷', subtitle: 'Musikal romantis dengan nuansa kota dan mimpi yang indah.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      thenun: { bg1: '#09090b', bg2: '#334155', bg3: '#ef4444', icon: '⛪', subtitle: 'Kengerian sunyi yang gelap, dingin, dan menegangkan.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      evildead: { bg1: '#1c0a0a', bg2: '#dc2626', bg3: '#64748b', icon: '🩸', subtitle: 'Horor brutal dengan tensi tinggi dan atmosfer mencekam.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      jumanji: { bg1: '#14532d', bg2: '#f59e0b', bg3: '#60a5fa', icon: '🌴', subtitle: 'Petualangan liar di dunia game yang penuh kejutan.' },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      beautybeast: { bg1: '#1e293b', bg2: '#60a5fa', bg3: '#fbbf24', icon: '🌹', subtitle: 'Kisah romantis penuh sihir dengan nuansa istana yang megah.' }
    // Menutup blok logika atau kumpulan data di atas.
    };

    // Menyiapkan movies untuk digunakan pada langkah berikutnya.
    const movies = [
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'mk2', title: 'Mortal Kombat II', genre: 'Action, Fantasy', rating: 'D17+', duration: '1j 58m', price: 55000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'mario', title: 'The Super Mario Galaxy Movie', genre: 'Animation, Adventure', rating: 'SU', duration: '1j 45m', price: 50000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'endgame', title: 'Avengers: Endgame', genre: 'Action, Sci-Fi', rating: 'R13+', duration: '3j 01m', price: 60000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'blackpanther', title: 'Black Panther', genre: 'Action, Superhero', rating: 'R13+', duration: '2j 14m', price: 54000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'jurassic', title: 'Jurassic World', genre: 'Adventure, Sci-Fi', rating: 'R13+', duration: '2j 04m', price: 53000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'spiderverse', title: 'Spider-Man: Across the Spider-Verse', genre: 'Animation, Action', rating: 'R13+', duration: '2j 20m', price: 56000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'transformers', title: 'Transformers: Dark of the Moon', genre: 'Action, Sci-Fi', rating: 'R13+', duration: '2j 34m', price: 52000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'lalaland', title: 'La La Land', genre: 'Drama, Musical', rating: 'R13+', duration: '2j 08m', price: 49000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'thenun', title: 'The Nun', genre: 'Horror', rating: 'D17+', duration: '1j 36m', price: 50000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'evildead', title: 'Evil Dead Rise', genre: 'Horror', rating: 'D17+', duration: '1j 37m', price: 51000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'jumanji', title: 'Jumanji: Welcome to the Jungle', genre: 'Adventure, Comedy', rating: 'R13+', duration: '1j 59m', price: 52000 },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'beautybeast', title: 'Beauty and the Beast', genre: 'Fantasy, Romance', rating: 'SU', duration: '2j 09m', price: 50000 }
    // Menutup blok logika atau kumpulan data di atas.
    ];


    // Menyiapkan movieDetails untuk digunakan pada langkah berikutnya.
    const movieDetails = {
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      mk2: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Turnamen pertarungan kembali memanas ketika para petarung terpilih harus menghadapi ancaman baru yang lebih brutal dan penuh dendam.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'James Wan, Todd Garner',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Simon McQuoid',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Jeremy Slater, Ed Boon',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'New Line Cinema',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Karl Urban', 'Jessica McNamee', 'Josh Lawson', 'Ludi Lin', 'Mehcad Brooks']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      mario: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Mario dan teman-temannya masuk ke petualangan galaksi penuh warna, dunia baru, dan tantangan yang menguji keberanian mereka.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Chris Meledandri, Shigeru Miyamoto',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Aaron Horvath, Michael Jelenic',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Matthew Fogel',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Illumination',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Chris Pratt', 'Anya Taylor-Joy', 'Jack Black', 'Charlie Day']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      endgame: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Para Avengers yang tersisa menyusun rencana terakhir untuk memulihkan dunia setelah kehancuran besar yang mengubah nasib semesta.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Kevin Feige',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Anthony Russo, Joe Russo',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Christopher Markus, Stephen McFeely',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Marvel Studios',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Robert Downey Jr.', 'Chris Evans', 'Scarlett Johansson', 'Chris Hemsworth']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      blackpanther: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'TChalla kembali ke Wakanda untuk menerima takhta, tetapi konflik baru memaksanya membuktikan diri sebagai raja dan pelindung bangsa.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Kevin Feige',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Ryan Coogler',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Ryan Coogler, Joe Robert Cole',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Marvel Studios',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Chadwick Boseman', 'Michael B. Jordan', 'Lupita Nyongo', 'Danai Gurira']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      jurassic: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Pulau dinosaurus kembali kacau ketika manusia harus bertahan dari predator purba dan keputusan berbahaya yang mengancam semua orang.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Frank Marshall, Patrick Crowley',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Colin Trevorrow',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Colin Trevorrow, Derek Connolly',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Universal Pictures',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Chris Pratt', 'Bryce Dallas Howard', 'Irrfan Khan', 'Vincent DOnofrio']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      spiderverse: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Miles Morales masuk lebih jauh ke dalam multiverse dan bertemu banyak Spider-People dengan konflik besar tentang identitas dan pilihan.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Phil Lord, Christopher Miller',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Joaquim Dos Santos, Kemp Powers, Justin K. Thompson',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Phil Lord, Christopher Miller, Dave Callaham',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Sony Pictures Animation',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac', 'Jake Johnson']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      transformers: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Perang antara Autobots dan Decepticons meningkat saat rahasia lama dari bulan mengubah arah konflik di bumi.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Don Murphy, Tom DeSanto',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Michael Bay',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Ehren Kruger',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Paramount Pictures',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Shia LaBeouf', 'Rosie Huntington-Whiteley', 'Josh Duhamel', 'Tyrese Gibson']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      lalaland: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Seorang pianis jazz dan aktris muda mengejar mimpi di Los Angeles sambil menghadapi pilihan cinta, karier, dan masa depan.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Fred Berger, Jordan Horowitz',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Damien Chazelle',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Damien Chazelle',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Summit Entertainment',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Ryan Gosling', 'Emma Stone', 'John Legend', 'Rosemarie DeWitt']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      thenun: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Seorang biarawati muda dan pastor dikirim menyelidiki biara terpencil, lalu menemukan teror gelap yang mengancam iman mereka.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'James Wan, Peter Safran',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Corin Hardy',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Gary Dauberman',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'New Line Cinema',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Taissa Farmiga', 'Demián Bichir', 'Jonas Bloquet', 'Bonnie Aarons']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      evildead: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Keluarga yang terjebak dalam apartemen harus menghadapi kekuatan jahat setelah sebuah kitab terkutuk membangkitkan teror mengerikan.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Rob Tapert',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Lee Cronin',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Lee Cronin',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Ghost House Pictures',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Lily Sullivan', 'Alyssa Sutherland', 'Morgan Davies', 'Gabrielle Echols']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      jumanji: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Empat remaja masuk ke dunia game Jumanji dan harus menyelesaikan misi berbahaya agar bisa kembali ke dunia nyata.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'Matt Tolmach, William Teitler',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Jake Kasdan',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Chris McKenna, Erik Sommers',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Columbia Pictures',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Dwayne Johnson', 'Kevin Hart', 'Jack Black', 'Karen Gillan']
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      },
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      beautybeast: {
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        synopsis: 'Belle masuk ke istana terkutuk dan menemukan sisi lain dari Beast, sebuah kisah sihir, keberanian, dan cinta yang perlahan tumbuh.',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        producer: 'David Hoberman, Todd Lieberman',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        director: 'Bill Condon',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        writers: 'Stephen Chbosky, Evan Spiliotopoulos',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        production: 'Walt Disney Pictures',
        // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
        cast: ['Emma Watson', 'Dan Stevens', 'Luke Evans', 'Josh Gad']
      // Menutup blok logika atau kumpulan data di atas.
      }
    // Menutup blok logika atau kumpulan data di atas.
    };

    // Menyiapkan cinemasByRegion untuk digunakan pada langkah berikutnya.
    const cinemasByRegion = {
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      'Banda Aceh': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'aceh1', name: 'Suzuya Mall XXI', address: 'Banda Aceh', type: 'Regular • Deluxe', distance: '2.3 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'aceh2', name: 'Plaza Aceh CGV', address: 'Banda Aceh', type: 'Regular • Gold', distance: '4.1 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Medan': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'medan1', name: 'Sun Plaza XXI', address: 'Medan', type: 'Regular • Premiere', distance: '2.0 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'medan2', name: 'Delipark XXI', address: 'Medan', type: 'Regular • IMAX', distance: '3.6 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'medan3', name: 'CGV Focal Point', address: 'Medan', type: 'Regular • Satin', distance: '5.1 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Padang': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'padang1', name: 'Transmart XXI', address: 'Padang', type: 'Regular • Deluxe', distance: '3.1 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'padang2', name: 'Padang CGV', address: 'Padang', type: 'Regular • Gold', distance: '4.7 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Pekanbaru': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'pekan1', name: 'SKA XXI', address: 'Pekanbaru', type: 'Regular • Premiere', distance: '2.8 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'pekan2', name: 'Mall Pekanbaru CGV', address: 'Pekanbaru', type: 'Regular • Satin', distance: '4.4 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Batam': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'batam1', name: 'Grand Batam XXI', address: 'Batam', type: 'Regular • IMAX', distance: '2.4 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'batam2', name: 'CGV Park Avenue', address: 'Batam', type: 'Regular • Gold', distance: '5.0 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Palembang': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'plg1', name: 'Palembang Indah Mall XXI', address: 'Palembang', type: 'Regular • Premiere', distance: '2.9 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'plg2', name: 'Picon CGV', address: 'Palembang', type: 'Regular • Satin', distance: '4.2 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      'Bandar Lampung': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'lamp1', name: 'Boemi Kedaton XXI', address: 'Bandar Lampung', type: 'Regular • Deluxe', distance: '2.7 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'lamp2', name: 'Transmart CGV', address: 'Bandar Lampung', type: 'Regular • Gold', distance: '4.5 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Jakarta': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'jkt1', name: 'Plaza Senayan XXI', address: 'Jakarta', type: 'Regular • Premiere', distance: '2.0 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'jkt2', name: 'CGV Grand Indonesia', address: 'Jakarta', type: 'Regular • Gold', distance: '3.1 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'jkt3', name: 'Cinépolis Pejaten', address: 'Jakarta', type: 'Regular • Macro XE', distance: '5.6 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Bogor': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'bog1', name: 'Botani Square XXI', address: 'Bogor', type: 'Regular • Premiere', distance: '2.1 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'bog2', name: 'AEON Sentul CGV', address: 'Bogor', type: 'Regular • Gold', distance: '6.1 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Bandung': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'bdg1', name: 'Paris Van Java XXI', address: 'Bandung', type: 'Regular • Premiere', distance: '2.4 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'bdg2', name: 'CGV 23 Paskal', address: 'Bandung', type: 'Regular • Gold', distance: '3.5 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'bdg3', name: 'Ciwalk XXI', address: 'Bandung', type: 'Regular • Deluxe', distance: '4.3 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Cirebon': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'crb1', name: 'CGV CSB Mall', address: 'Kota Cirebon', type: 'Regular • Satin • Gold', distance: '2.1 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'crb2', name: 'Grage XXI', address: 'Grage Mall Cirebon', type: 'Regular • Deluxe', distance: '3.4 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'crb3', name: 'Transmart XXI', address: 'Kedawung', type: 'Regular • IMAX', distance: '5.2 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'crb4', name: 'Cirebon Superblock Cinema', address: 'CSB Area', type: 'Regular • Premiere', distance: '4.6 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Semarang': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'smg1', name: 'Paragon XXI', address: 'Semarang', type: 'Regular • Premiere', distance: '2.6 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'smg2', name: 'DP Mall CGV', address: 'Semarang', type: 'Regular • Gold', distance: '3.8 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Yogyakarta': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'jog1', name: 'Ambarrukmo XXI', address: 'Yogyakarta', type: 'Regular • Premiere', distance: '2.7 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'jog2', name: 'Jogja City Mall XXI', address: 'Yogyakarta', type: 'Regular • Deluxe', distance: '5.1 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'jog3', name: 'CGV Jwalk', address: 'Yogyakarta', type: 'Regular • Gold', distance: '4.2 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Surabaya': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'sby1', name: 'Tunjungan Plaza XXI', address: 'Surabaya', type: 'Regular • Premiere', distance: '2.0 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'sby2', name: 'Pakuwon CGV', address: 'Surabaya', type: 'Regular • Gold', distance: '5.2 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'sby3', name: 'Ciputra World XXI', address: 'Surabaya', type: 'Regular • Deluxe', distance: '4.4 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Malang': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mlg1', name: 'Malang Town Square XXI', address: 'Malang', type: 'Regular • Deluxe', distance: '2.2 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mlg2', name: 'CGV Dinoyo', address: 'Malang', type: 'Regular • Gold', distance: '4.6 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Denpasar': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'dps1', name: 'Level 21 XXI', address: 'Denpasar', type: 'Regular • Premiere', distance: '2.5 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'dps2', name: 'CGV Trans Studio Mall', address: 'Denpasar', type: 'Regular • Gold', distance: '4.1 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Mataram': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mat1', name: 'Epicentrum XXI', address: 'Mataram', type: 'Regular • Deluxe', distance: '2.7 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mat2', name: 'Cinépolis Lombok', address: 'Mataram', type: 'Regular • Macro XE', distance: '5.0 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Kupang': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'kup1', name: 'Lippo Plaza XXI', address: 'Kupang', type: 'Regular • Deluxe', distance: '3.1 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'kup2', name: 'Kupang CGV', address: 'Kupang', type: 'Regular • Gold', distance: '5.2 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Pontianak': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'ptk1', name: 'Ayani Mega Mall XXI', address: 'Pontianak', type: 'Regular • Premiere', distance: '2.4 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'ptk2', name: 'Pontianak CGV', address: 'Pontianak', type: 'Regular • Gold', distance: '4.7 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Banjarmasin': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'bjm1', name: 'Duta Mall XXI', address: 'Banjarmasin', type: 'Regular • Premiere', distance: '2.1 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'bjm2', name: 'CGV Q Mall', address: 'Banjarmasin', type: 'Regular • Gold', distance: '4.3 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Palangkaraya': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'plk1', name: 'Palangka Raya XXI', address: 'Palangkaraya', type: 'Regular • Deluxe', distance: '2.9 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'plk2', name: 'Mega Town Square CGV', address: 'Palangkaraya', type: 'Regular • Gold', distance: '5.0 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Samarinda': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'smr1', name: 'Big Mall XXI', address: 'Samarinda', type: 'Regular • Premiere', distance: '2.2 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'smr2', name: 'Samarinda CGV', address: 'Samarinda', type: 'Regular • Gold', distance: '4.4 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Balikpapan': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'blk1', name: 'Pentacity XXI', address: 'Balikpapan', type: 'Regular • IMAX', distance: '2.3 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'blk2', name: 'Balikpapan CGV', address: 'Balikpapan', type: 'Regular • Gold', distance: '4.0 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Manado': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mdo1', name: 'Manado Town Square XXI', address: 'Manado', type: 'Regular • Premiere', distance: '2.2 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mdo2', name: 'CGV Megamall', address: 'Manado', type: 'Regular • Gold', distance: '4.1 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Palu': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'palu1', name: 'Palu Grand Mall XXI', address: 'Palu', type: 'Regular • Deluxe', distance: '2.6 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'palu2', name: 'Palu CGV', address: 'Palu', type: 'Regular • Gold', distance: '4.9 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Kendari': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'kdi1', name: 'Lippo Plaza XXI', address: 'Kendari', type: 'Regular • Deluxe', distance: '2.8 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'kdi2', name: 'Kendari CGV', address: 'Kendari', type: 'Regular • Gold', distance: '5.1 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Makassar': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mks1', name: 'Panakkukang XXI', address: 'Makassar', type: 'Regular • Premiere', distance: '2.0 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mks2', name: 'CGV Trans Studio Mall', address: 'Makassar', type: 'Regular • Gold', distance: '3.8 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mks3', name: 'Nipah Mall XXI', address: 'Makassar', type: 'Regular • Deluxe', distance: '4.6 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Gorontalo': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'gor1', name: 'Gorontalo XXI', address: 'Gorontalo', type: 'Regular • Deluxe', distance: '2.9 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'gor2', name: 'City Mall CGV', address: 'Gorontalo', type: 'Regular • Gold', distance: '4.8 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Mamuju': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mam1', name: 'Mamuju XXI', address: 'Mamuju', type: 'Regular • Deluxe', distance: '2.7 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'mam2', name: 'Mamuju CGV', address: 'Mamuju', type: 'Regular • Gold', distance: '4.9 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Ambon': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'amb1', name: 'Ambon City Center XXI', address: 'Ambon', type: 'Regular • Premiere', distance: '2.3 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'amb2', name: 'Ambon CGV', address: 'Ambon', type: 'Regular • Gold', distance: '4.5 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Ternate': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'ter1', name: 'Ternate Mall XXI', address: 'Ternate', type: 'Regular • Deluxe', distance: '2.5 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'ter2', name: 'Ternate CGV', address: 'Ternate', type: 'Regular • Gold', distance: '5.0 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Sorong': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'srg1', name: 'Sorong City XXI', address: 'Sorong', type: 'Regular • Deluxe', distance: '2.8 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'srg2', name: 'Sorong CGV', address: 'Sorong', type: 'Regular • Gold', distance: '4.7 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ],
      // Menentukan nilai properti pada objek konfigurasi atau data aplikasi.
      'Jayapura': [
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'jpr1', name: 'Jayapura XXI', address: 'Jayapura', type: 'Regular • Premiere', distance: '2.2 km' },
        // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
        { id: 'jpr2', name: 'Jayapura CGV', address: 'Jayapura', type: 'Regular • Gold', distance: '4.4 km' }
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      ]
    // Menutup blok logika atau kumpulan data di atas.
    };

    // Menyiapkan payMethods untuk digunakan pada langkah berikutnya.
    const payMethods = [
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'qris', name: 'QRIS', detail: 'Scan cepat dari bank atau e-wallet' },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'gopay', name: 'GoPay', detail: 'Pembayaran instan tanpa ribet' },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'dana', name: 'DANA', detail: 'Aman dan praktis untuk transaksi digital' },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'va', name: 'Virtual Account', detail: 'BCA, BNI, BRI, Mandiri' }
    // Menutup blok logika atau kumpulan data di atas.
    ];

    // Menyiapkan promoBundles untuk digunakan pada langkah berikutnya.
    const promoBundles = [
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'snack', className: 'snack', tag: 'Bundling hemat', emoji: '🍿🥤', title: 'Popcorn + Soda', description: 'Paket hemat untuk nonton santai. Cocok buat kamu yang ingin snack dan minuman sekaligus.', price: 35000, note: '1 popcorn medium + 1 soda medium' },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'combo', className: 'combo', tag: 'Bundle favorit', emoji: '🎟️🍔🥤', title: '2 Tiket + Burger + 2 Minuman', description: 'Paket lengkap untuk nonton bareng. Sudah termasuk dua tiket dan combo makanan ringan.', price: 125000, note: 'Best deal untuk nonton berdua' },
      // Melanjutkan ekspresi, parameter, atau struktur data pada blok ini.
      { id: 'member', className: 'member', tag: 'Promo member', emoji: '🎫🧋', title: '1 Tiket + 1 Minuman + Voucher Member', description: 'Pilih paket ini kalau ingin dapat minuman sekaligus voucher potongan untuk transaksi berikutnya.', price: 65000, note: 'Minuman medium + voucher member Rp10.000' }
    // Menutup blok logika atau kumpulan data di atas.
    ];

    // Menyiapkan times untuk digunakan pada langkah berikutnya.
    const times = ['10:30', '13:15', '16:20', '19:45'];
    // Menyiapkan regionOptions untuk digunakan pada langkah berikutnya.
    const regionOptions = Object.keys(cinemasByRegion);

// Menyiapkan posterMap untuk digunakan pada langkah berikutnya.
const posterMap = {"jumanji": "assets/images/image-02.jpg", "evildead": "assets/images/image-03.jpg", "thenun": "assets/images/image-04.jpg", "lalaland": "assets/images/image-05.jpg", "transformers": "assets/images/image-06.jpg", "spiderverse": "assets/images/image-07.jpg", "jurassic": "assets/images/image-08.jpg", "blackpanther": "assets/images/image-09.jpg", "endgame": "assets/images/image-10.jpg", "mario": "assets/images/image-11.jpg", "mk2": "assets/images/image-12.jpg", "beautybeast": "assets/images/image-13.jpg"};
