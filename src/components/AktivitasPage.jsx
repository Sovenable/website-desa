import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, MapPin, Users } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import LoadingSpinner from './LoadingSpinner';

const AktivitasPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulasi loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Data agenda kegiatan
  const agendaKegiatan = [
    {
      id: 1,
      title: "Sosialisasi Stunting",
      date: "2025-01-07",
      time: "10:00 WIB",
      location: "Posyandu Desa",
      peserta: "Kader Posyandu & Ibu Hamil",
      image: "/image/stunting/s1.jpg",
      description: "Sosialisasi pencegahan dan penanganan stunting untuk meningkatkan kesadaran masyarakat akan pentingnya gizi anak"
    },
    {
      id: 2,
      title: "Sosialisasi Pembuatan Abon Ikan",
      date: "2025-01-17",
      time: "12:00 WIB",
      location: "Rumah Warga Desa",
      peserta: "Ibu Hamil & Ibu Menyusui",
      image: "/image/abon/a1.jpg",
      description: "Pemanfaatan jumlah ikan yang melimpah di Desa Tanjung jaya"
    },
    {
      id: 3,
      title: "Kegiatan Musyawarah Rencana Pembangunan Desa Tanjung Jaya",
      date: "2025-01-21",
      time: "09:00 WIB",
      location: "Balai Desa",
      peserta: "Seluruh Warga",
      image: "/image/musrembang/m1.jpg",
      description: "Musyawarah pembahasan penyusunan rencana pembangunan Desa Tanjung jaya"
    },
    {
      id: 4,
      title: "Penanaman dan Pemanfaatan Apotek Hidup",
      date: "2025-01-17",
      time: "09:00 WIB",
      location: "SDN 01 Tanjung Jaya",
      peserta: "Siswa Siswi SDN 01 Tanjung Jaya",
      image: "/image/apotek/a1.jpg",
      description: "Kegiatan penanaman tanaman obat keluarga dan edukasi pemanfaatannya untuk kesehatan masyarakat"
    },
    {
      id: 5,
      title: "Senam Bersama Ibu-ibu PKK",
      date: "2025-01-11",
      time: "15:00 WIB",
      location: "Halaman Rumah Lurah",
      peserta: "Ibu-Ibu PKK",
      image: "/image/senam/s1.jpg",
      description: "Kegiatan rutin senam pagi untuk meningkatkan kesehatan dan kebugaran ibu-ibu PKK"
    },
    {
      id: 6,
      title: "Kegiatan Posyandu Balita, Remaja, dan Lansia",
      date: "2025-01-07",
      time: "08:00 WIB",
      location: "Posyandu Desa",
      peserta: "Balita, Remaja, dan Lansia",
      image: "/image/posyandu/p1.jpg",
      description: "Pemeriksaan kesehatan rutin dan pemberian layanan kesehatan untuk berbagai kelompok usia"
    }
  ];

  // Data dokumentasi kegiatan
  const dokumentasiKegiatan = [
    {
      id: 1,
      title: "Sosialisasi Stunting",
      image: '/image/Dokumentasi/d1.jpg'
    },
    {
      id: 2,
      title: "Sosialisasi Pembuatan Abon Ikan",
      image: "/image/Dokumentasi/d2.jpg"
    },
    {
      id: 3,
      title: "Musyawarah Rencana Pembangunan Desa",
      image: "/image/Dokumentasi/d3.jpg"
    },
    {
      id: 4,
      title: "Penanaman Tanaman Apotik Hidup",
      image: "/image/Dokumentasi/d4.jpg"
    },
    {
      id: 5,
      title: "Senam Bersama Ibu-Ibu PKK",
      image: "/image/Dokumentasi/d5.jpg"
    },
    {
      id: 6,
      title: "Kegiatan Posyandu Balita, Remaja dan Lansia",
      image: "/image/Dokumentasi/d6.jpg"
    },
    {
      id: 7,
      title: "Sosialisasi Pembuatan Mpon-Mpon",
      image: "/image/Dokumentasi/d7.jpg"
    },
    {
      id: 8,
      title: "Musdes Penetapan KPM BLT-DD",
      image: "/image/Dokumentasi/d8.jpg"
    },
    {
      id: 9,
      title: "Pencarian Kerang",
      image: "/image/Dokumentasi/D9.jpg"
    },
    {
      id: 10,
      title: "Rapat Musrenbang",
      image: "/image/Dokumentasi/d10.jpg"
    },
    {
      id: 11,
      title: "Pengajian",
      image: "/image/Dokumentasi/d11.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === agendaKegiatan.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? agendaKegiatan.length - 1 : prev - 1
    );
  };

  const handleAgendaClick = (id) => {
    navigate(`/berita/${id}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <LoadingSpinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-8 px-4">
        {/* Agenda Kegiatan Section */}
        <section className="mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Agenda Kegiatan
          </h2>
          
          <div className="relative">
            <div className="overflow-hidden rounded-xl bg-white shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {agendaKegiatan.map((agenda) => (
                  <div 
                    key={agenda.id} 
                    className="w-full flex-shrink-0 cursor-pointer hover:opacity-95 transition-opacity"
                    onClick={() => handleAgendaClick(agenda.id)}
                  >
                    <div className="grid md:grid-cols-2">
                      <div className="relative h-64 md:h-auto">
                        <img 
                          src={agenda.image} 
                          alt={agenda.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors"></div>
                      </div>
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 hover:text-blue-600 transition-colors">
                          {agenda.title}
                        </h3>
                        <p className="text-gray-600 mb-6">
                          {agenda.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4 text-gray-600">
                          <div className="flex items-center gap-2">
                            <Calendar className="w-5 h-5 text-blue-600" />
                            <span>{new Date(agenda.date).toLocaleDateString('id-ID', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Clock className="w-5 h-5 text-blue-600" />
                            <span>{agenda.time}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="w-5 h-5 text-blue-600" />
                            <span>{agenda.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-blue-600" />
                            <span>{agenda.peserta}</span>
                          </div>
                        </div>
                        
                        <button 
                          className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAgendaClick(agenda.id);
                          }}
                        >
                          Baca Selengkapnya
                          <ChevronRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <button 
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div className="flex justify-center mt-4 gap-2">
              {agendaKegiatan.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentSlide(index);
                  }}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Dokumentasi Kegiatan Section */}
        <section className="animate-slide-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Dokumentasi Kegiatan
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dokumentasiKegiatan.map((foto, index) => (
              <div 
                key={foto.id} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-video">
                  <img 
                    src={foto.image} 
                    alt={foto.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 hover:text-blue-600 transition-colors">
                    {foto.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
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

export default AktivitasPage;