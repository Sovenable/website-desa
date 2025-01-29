import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, MapPin, Users, ArrowLeft, Share2 } from 'lucide-react';
import Navbar from './Navbar';
import LoadingSpinner from './LoadingSpinner';

const BeritaPage = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulasi loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Data berita dan agenda kegiatan
  const beritaData = {
    1: {
      id: 1,
      title: "Sosialisasi Stunting",
      date: "2025-01-07",
      time: "09:00 WIB",
      location: "Posyandu",
      peserta: "Kader Posyandu & Ibu Hamil",
      image: "/image/stunting/s1.jpg",
      category: "Kesehatan",
      author: "Admin Desa",
      content: `
        Pada hari Senin, 15 Januari 2024, telah dilaksanakan Sosialisasi Stunting di Balai Desa Tanjung Jaya. Kegiatan ini diikuti oleh kader posyandu dan ibu hamil di wilayah desa.

        Dalam sosialisasi ini dibahas beberapa topik penting:
        1. Pengertian dan penyebab stunting
        2. Cara pencegahan stunting sejak masa kehamilan
        3. Pentingnya ASI eksklusif
        4. Pemantauan tumbuh kembang anak
        5. Pola makan sehat untuk ibu hamil dan balita

       Kegiatan ini bertujuan untuk meningkatkan pemahaman masyarakat Desa Tanjung Jaya tentang pentingnya pencegahan stunting sebagai upaya menciptakan generasi yang sehat dan cerdas.
      `,
      galeri: [
        "/image/stunting/s2.jpg",
        "/image/stunting/s3.jpg",
        "/image/stunting/s4.jpg"
      ]
    },
    2: {
      id: 2,
      title: "Sosialisasi Pembuatan Abon Ikan",
      date: "2025-01-17",
      time: "12:00 WIB",
      location: "Rumah Warga Desa",
      peserta: "Ibu Hamil & Ibu Menyusui",
      image: "/image/abon/a1.jpg",
      category: "Ekonomi",
      author: "Admin Desa",
      content: `
        Sosialisasi ini diadakan untuk memberikan pelatihan kepada ibu-ibu PKK Desa Tanjung Jaya dalam mengolah bahan pangan menjadi produk bernilai tambah, yaitu abon. Selain sebagai upaya pemberdayaan ekonomi keluarga, kegiatan ini juga bertujuan untuk memperkenalkan alternatif pengolahan makanan yang praktis dan bergizi. Selama kegiatan, para peserta diajarkan proses pembuatan abon mulai dari persiapan bahan, pengolahan, hingga pengemasan produk agar lebih menarik dan tahan lama.  

      `,
      galeri: [
        "/image/abon/a2.jpg",
        "/image/abon/a3.jpg",
        "/image/abon/a4.jpg"
      ]
    },
    3: {
      id: 3,
      title: "Kegiatan Musyawarah Rencana Pembangunan Desa",
      date: "2025-01-21",
      time: "09:00 WIB",
      location: "Balai Desa",
      peserta: "Seluruh Warga",
      image: "/image/musrembang/m1.jpg",
      category: "Pembangunan",
      author: "Admin Desa",
      content: `
       Musyawarah Rencana Pembangunan Desa (Musrenbang) adalah kegiatan yang melibatkan seluruh elemen masyarakat, perangkat desa, dan tokoh masyarakat untuk membahas dan menyusun rencana pembangunan Desa Tanjung Jaya. Dalam forum ini, warga menyampaikan aspirasi dan kebutuhan desa yang menjadi prioritas untuk ditindaklanjuti. Musrenbang ini bertujuan untuk menyusun program kerja yang sesuai dengan kebutuhan masyarakat, sekaligus memastikan pembangunan desa dilakukan secara transparan dan partisipatif.
      `,
      galeri: [
        "/image/musrembang/m2.jpg",
        "/image/musrembang/m3.jpg",
        "/image/musrembang/m4.jpg"
      ]
    },
    4: {
      id: 4,
      title: "Penanaman dan Pemanfaatan Apotek Hidup",
      date: "2025-01-17",
      time: "09:00 WIB",
      location: "SDN 01 Tanjung Jaya",
      peserta: "Siswa Siswi SDN 01 Tanjung Jayaa",
      image: "/image/apotek/a1.jpg",
      category: "Kesehatan",
      author: "Admin Desa",
      content: `
        Kegiatan ini bertujuan untuk meningkatkan kesadaran masyarakat tentang manfaat tanaman obat keluarga (TOGA) dalam menjaga kesehatan. Siswa dan siwsi diajak untuk menanam berbagai tanaman obat, seperti jahe, kunyit, daun sirih, dan tanaman herbal lainnya, di pekarangan rumah. Selain itu, diberikan edukasi tentang cara pengolahan tanaman tersebut sebagai alternatif obat alami untuk kebutuhan sehari-hari.
      `,
      galeri: [
        "/image/apotek/a2.jpg",
        "/image/apotek/a3.jpg",
        "/image/apotek/a4.jpg"
      ]
    },
    5: {
      id: 5,
      title: "Senam Bersama Ibu-ibu PKK",
      date: "2025-01-11",
      time: "06:00 WIB",
      location: "Halaman Rumah Lurah",
      peserta: "Ibu-Ibu PKK",
      image: "/image/senam/s1.jpg",
      category: "Kesehatan",
      author: "Admin Desa",
      content: `
        Kegiatan senam pagi rutin dilaksanakan sebagai bagian dari program kesehatan masyarakat.
        
        Manfaat kegiatan ini:
        1. Meningkatkan kebugaran jasmani
        2. Mempererat silaturahmi antar warga
        3. Mencegah penyakit tidak menular
        4. Mendorong gaya hidup sehat
        
        Kegiatan ini akan dilaksanakan secara rutin setiap minggu.
      `,
      galeri: [
        "/image/senam/s2.jpg",
        "/image/senam/s3.jpg",
        "/image/senam/s4.jpg"
      ]
    },
    6: {
      id: 6,
      title: "Kegiatan Posyandu Balita, Remaja, dan Lansia",
      date: "2025-01-07",
      time: "08:00 WIB",
      location: "Posyandu Desa",
      peserta: "Balita, Remaja, dan Lansia",
      image: "/image/posyandu/p1.jpg",
      category: "Kesehatan",
      author: "Admin Desa",
      content: `
       Kegiatan posyandu dilakukan secara rutin untuk memantau kesehatan masyarakat di berbagai kelompok umur. Untuk balita, dilakukan pemeriksaan berat badan, tinggi badan, serta pemberian imunisasi. Untuk remaja, diberikan edukasi tentang kesehatan reproduksi dan pola hidup sehat. Sedangkan untuk lansia, dilakukan pemeriksaan kesehatan umum serta penyuluhan tentang pola makan dan gaya hidup sehat yang sesuai dengan usia mereka.
      `,
      galeri: [
        "/image/posyandu/p2.jpg",
        "/image/posyandu/p3.jpg",
        "/image/posyandu/p4.jpg"
      ]
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <LoadingSpinner />
      </div>
    );
  }

  // Handle jika berita tidak ditemukan
  if (!beritaData[id]) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto py-16 px-4 text-center animate-fade-in">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Berita Tidak Ditemukan
          </h1>
          <p className="text-gray-600 mb-8">
            Maaf, berita yang Anda cari tidak tersedia.
          </p>
          <Link 
            to="/aktivitas-desa"
            className="inline-flex items-center text-blue-600 hover:text-blue-700"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Kembali ke Aktivitas Desa
          </Link>
        </div>
      </div>
    );
  }

  const berita = beritaData[id];

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: berita.title,
        text: berita.content.substring(0, 100) + '...',
        url: window.location.href
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Image */}
      <div className="relative h-[400px] w-full">
        <img 
          src={berita.image} 
          alt={berita.title}
          className="w-full h-full object-cover animate-fade-in"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <Link 
          to="/aktivitas-desa"
          className="absolute top-4 left-4 flex items-center gap-2 text-white bg-black/20 px-4 py-2 rounded-full hover:bg-black/40 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali
        </Link>
      </div>
      
      <main className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-sm -mt-20 relative z-10 p-8 animate-slide-up">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-between items-start mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {berita.category}
              </span>
              <button
                onClick={handleShare}
                className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {berita.title}
            </h1>
            <div className="flex flex-wrap gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(berita.date).toLocaleDateString('id-ID', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{berita.time}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{berita.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>{berita.peserta}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="prose max-w-none mb-8">
            {berita.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 mb-4">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Galeri Foto */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Galeri Foto
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {berita.galeri.map((foto, index) => (
                <div 
                  key={index} 
                  className="rounded-lg overflow-hidden animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img 
                    src={foto} 
                    alt={`Foto ${index + 1}`}
                    className="w-full h-48 object-cover hover:opacity-90 transition-opacity"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Author & Share */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src="/api/placeholder/40/40" 
                  alt={berita.author}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-medium text-gray-800">{berita.author}</p>
                <p className="text-sm text-gray-500">Admin Desa</p>
              </div>
            </div>
          </div>

          {/* Related News Section */}
          <div className="mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Kegiatan Terkait
            </h2>
            <div className  ="grid md:grid-cols-2 gap-6">
              {Object.values(beritaData)
                .filter(item => item.id !== berita.id && item.category === berita.category)
                .slice(0, 2)
                .map(relatedNews => (
                  <Link 
                    key={relatedNews.id}
                    to={`/berita/${relatedNews.id}`}
                    className="group"
                  >
                    <div className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                      <div className="aspect-video">
                        <img 
                          src={relatedNews.image}
                          alt={relatedNews.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="p-4">
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm mb-2">
                          {relatedNews.category}
                        </span>
                        <h3 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {relatedNews.title}
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                          {new Date(relatedNews.date).toLocaleDateString('id-ID', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }

        .animate-slide-up {
          animation: slide-up 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BeritaPage;