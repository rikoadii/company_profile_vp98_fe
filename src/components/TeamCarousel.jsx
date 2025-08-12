import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import CardTeam from './CardTeam';
import { teamMembers } from '../data/teamData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import custom carousel styles
import './TeamCarousel.css';

export default function TeamCarousel() {
  return (
    <div className="container mx-auto px-2 sm:px-4 py-8 sm:py-12">
      {/* Desktop Layout - Grid seperti sebelumnya */}
      <div className="hidden lg:block">
        <div className="space-y-6 max-w-6xl mx-auto">
          {/* Card pertama - paling atas */}
          <div className="flex justify-center">
            <CardTeam key={teamMembers[0].id} member={teamMembers[0]} />
          </div>

          {/* 3 card di tengah */}
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-8 max-w-4xl">
              {teamMembers.slice(1, 4).map((member) => (
                <CardTeam key={member.id} member={member} />
              ))}
            </div>
          </div>

          {/* 2 card terakhir */}
          <div className="flex justify-center">
            <div className="grid grid-cols-2 gap-8 max-w-2xl">
              {teamMembers.slice(4, 6).map((member) => (
                <CardTeam key={member.id} member={member} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Layout - Carousel */}
      <div className="lg:hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          centeredSlides={true}
          navigation={true}
          pagination={{ 
            clickable: true,
            dynamicBullets: true 
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            380: {
              slidesPerView: 1.3,
              spaceBetween: 16,
            },
            480: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 24,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            }
          }}
          className="team-carousel"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <CardTeam member={member} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
