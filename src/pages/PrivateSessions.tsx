import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SCHEDULE_DAYS_MAY, SESSION_PLANS, WHATSAPP_PHONE } from '../data/content';
import { CheckCircle2, AlertCircle, ChevronLeft, ChevronRight, Calendar as CalendarIcon, MessageCircle } from 'lucide-react';

export const PrivateSessions: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  
  // Calendar & Booking State
  const [selectedDayNumber, setSelectedDayNumber] = useState<number>(14);
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30');
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [currentMonthIndex, setCurrentMonthIndex] = useState(0);

  const months = [
    { he: 'מאי 2024', en: 'May 2024' },
    { he: 'יוני 2024', en: 'June 2024' },
    { he: 'יולי 2024', en: 'July 2024' },
  ];

  const currentDayData = SCHEDULE_DAYS_MAY.find((d) => d.dayNumber === selectedDayNumber) || {
    dayName: { he: 'שלישי', en: 'Tue' },
    date: `${selectedDayNumber}.05`,
    dayNumber: selectedDayNumber,
    slots: ['08:00', '10:30', '18:00'],
    isAvailable: true,
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    setBookingStatus('idle');
  };

  const handleBookDirect = () => {
    if (!selectedSlot) return;
    setBookingStatus('success');
  };

  const handleSimulateConflict = () => {
    setBookingStatus('error');
  };

  const generateWhatsAppUrl = (slot: string, date: string) => {
    const message = language === 'he'
      ? `היי אוראל, אשמח לתאם שיעור פרטי בתאריך ${date} בשעה ${slot}.`
      : `Hello Orel, I would like to reserve a private yoga session on ${date} at ${slot}.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

  // 31 days representation with padding (May 2024 starts on Wednesday: 3 leading blanks)
  const totalDays = 31;
  const leadingBlanks = 3;
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HEADER SECTION */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pt-32 pb-14 lg:pt-40 lg:pb-20 flex flex-col items-center justify-center text-center animate-fade-in-up">
        <div className="relative mb-4">
          <span className="font-display text-display-lg text-primary tracking-tight">
            {t('bookingHeroTitle')}
          </span>
          <div className="absolute -top-6 -right-8 w-28 h-28 bg-surface-container-high/60 rounded-full blur-3xl -z-10"></div>
        </div>
        
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          {t('bookingHeroSubtitle')}
        </p>

        <div className="mt-10 w-px h-16 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
      </section>

      {/* 2. SCHEDULE & BOOKING ENGINE */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop pb-section-gap relative">
        <div className="absolute top-1/3 start-0 w-96 h-96 bg-primary-container/5 rounded-full blur-3xl -z-10"></div>

        {/* Success State Overlay View */}
        {bookingStatus === 'success' ? (
          <div className="bg-surface rounded-3xl p-8 md:p-16 border border-outline/10 shadow-soft text-center max-w-2xl mx-auto animate-fade-in my-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
              <CheckCircle2 size={48} />
            </div>
            
            <h2 className="font-display text-headline-lg text-primary tracking-tight mb-4">
              {t('bookingSuccessTitle')}
            </h2>
            
            <div className="bg-surface-container-low p-6 rounded-2xl mb-8 inline-block text-start border border-outline/10">
              <div className="flex items-center gap-3 text-on-surface font-semibold mb-2">
                <CalendarIcon size={20} className="text-primary" />
                <span>
                  {language === 'he' ? 'מועד השיעור שנקבע:' : 'Reserved Session:'}{' '}
                  <strong className="text-secondary">{currentDayData.date}</strong> בשעה{' '}
                  <strong className="text-secondary">{selectedSlot}</strong>
                </span>
              </div>
              <p className="text-sm text-on-surface-variant">
                {t('bookingSuccessDesc')}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={generateWhatsAppUrl(selectedSlot, currentDayData.date)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all flex items-center gap-2"
              >
                <MessageCircle size={18} />
                <span>{language === 'he' ? 'שלח הודעת אישור בוואטסאפ' : 'Send WhatsApp Confirmation'}</span>
              </a>

              <button
                onClick={() => setBookingStatus('idle')}
                className="px-6 py-3.5 rounded-full border border-outline/20 text-on-surface hover:bg-surface-container transition-all font-label-md text-label-md"
              >
                {language === 'he' ? 'תיאום שיעור נוסף' : 'Book Another Session'}
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-surface-container/40 rounded-3xl p-5 sm:p-8 md:p-10 border border-outline/10 shadow-soft">
            
            {/* Month & Legend Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-6">
              <div className="flex flex-col gap-1 text-start">
                <h2 className="font-display text-headline-md text-primary">
                  {t('monthlyCalendar')}
                </h2>
                <p className="text-body-md text-on-surface-variant font-medium">
                  {months[currentMonthIndex][language]}
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-container border border-secondary/40"></span>
                  <span className="font-label-md text-xs sm:text-sm text-on-surface-variant uppercase tracking-widest">
                    {t('availableSlots')}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setCurrentMonthIndex((prev) => (prev > 0 ? prev - 1 : prev))}
                    disabled={currentMonthIndex === 0}
                    className="p-2 rounded-full border border-outline/15 hover:bg-surface disabled:opacity-40 transition-colors"
                    aria-label="Previous month"
                  >
                    <ChevronRight size={20} className={isRtl ? '' : 'rotate-180'} />
                  </button>
                  <button
                    onClick={() => setCurrentMonthIndex((prev) => (prev < months.length - 1 ? prev + 1 : prev))}
                    disabled={currentMonthIndex === months.length - 1}
                    className="p-2 rounded-full border border-outline/15 hover:bg-surface disabled:opacity-40 transition-colors"
                    aria-label="Next month"
                  >
                    <ChevronLeft size={20} className={isRtl ? '' : 'rotate-180'} />
                  </button>
                </div>
              </div>
            </div>

            {/* Calendar Grid Container */}
            <div className="bg-surface rounded-2xl p-4 sm:p-6 border border-outline/10 shadow-sm overflow-hidden">
              
              {/* Day of week headers */}
              <div className="grid grid-cols-7 mb-4 border-b border-outline/10 pb-3 text-center">
                {(language === 'he' ? ['א׳', 'ב׳', 'ג׳', 'ד׳', 'ה׳', 'ו׳', 'ש׳'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']).map((day, idx) => (
                  <div key={idx} className="font-label-md text-xs sm:text-sm font-semibold text-on-surface-variant/70">
                    {day}
                  </div>
                ))}
              </div>

              {/* 7-Column Days Grid */}
              <div className="grid grid-cols-7 gap-1 sm:gap-2">
                {/* Leading blanks */}
                {Array.from({ length: leadingBlanks }).map((_, i) => (
                  <div key={`blank-${i}`} className="aspect-square p-2 opacity-15 bg-surface-container-low/40 rounded-xl" />
                ))}

                {daysArray.map((dayNum) => {
                  const scheduleInfo = SCHEDULE_DAYS_MAY.find((d) => d.dayNumber === dayNum);
                  const isAvailable = scheduleInfo ? scheduleInfo.isAvailable : dayNum % 2 === 0;
                  const isSelected = selectedDayNumber === dayNum;

                  return (
                    <button
                      key={dayNum}
                      onClick={() => {
                        setSelectedDayNumber(dayNum);
                        setBookingStatus('idle');
                      }}
                      className={`aspect-square p-2 sm:p-3 flex flex-col items-center justify-between rounded-xl transition-all relative ${
                        isSelected
                          ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm ring-2 ring-secondary/30 scale-[1.03]'
                          : isAvailable
                          ? 'bg-surface hover:bg-surface-container-low cursor-pointer border border-outline/5 hover:border-primary/20 text-on-surface'
                          : 'bg-surface/50 text-on-surface-variant/35 cursor-pointer hover:bg-surface-container-lowest'
                      }`}
                    >
                      <span className="text-xs sm:text-sm">{dayNum}</span>
                      
                      {isAvailable && (
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isSelected ? 'bg-secondary' : 'bg-secondary-container'
                          }`}
                        />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Time Slot Selection & Confirmation Drawer */}
            <div className="mt-8 p-6 sm:p-8 bg-surface rounded-2xl border border-outline/10 shadow-soft animate-fade-in text-start">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
                <div>
                  <h3 className="font-display text-xl text-primary font-semibold">
                    {t('availableSlotsFor')} <span className="text-secondary font-bold">{currentDayData.date}</span>
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-0.5">
                    {t('selectSlotToBook')}
                  </p>
                </div>

                {/* Conflict simulation toggle */}
                <button
                  onClick={handleSimulateConflict}
                  className="text-xs text-on-surface-variant/60 hover:text-error transition-colors underline self-start sm:self-auto"
                >
                  {language === 'he' ? 'בדוק מצב מועד תפוס' : 'Simulate conflict state'}
                </button>
              </div>

              {/* Error / Conflict State Alert */}
              {bookingStatus === 'error' ? (
                <div className="bg-error-container/20 border border-error/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4 animate-fade-in">
                  <div className="w-12 h-12 rounded-full bg-error/10 text-error flex items-center justify-center shrink-0">
                    <AlertCircle size={28} />
                  </div>
                  <div className="flex flex-col gap-1 text-center sm:text-start flex-1">
                    <h4 className="font-display text-lg font-semibold text-on-error-container">
                      {t('slotTakenErrorTitle')}
                    </h4>
                    <p className="text-sm text-on-surface-variant">
                      {t('slotTakenErrorDesc')}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-3">
                      <button
                        onClick={() => setBookingStatus('idle')}
                        className="px-5 py-2 rounded-full bg-primary text-on-primary text-xs font-semibold uppercase tracking-wider hover:bg-primary-container transition-all"
                      >
                        {t('tryAnotherSlot')}
                      </button>
                      <a
                        href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                          language === 'he'
                            ? `היי אוראל, ראיתי שהשעה ${selectedSlot} בתאריך ${currentDayData.date} תפוסה. האם יש שעה חלופית?`
                            : `Hi Orel, I saw that slot ${selectedSlot} on ${currentDayData.date} is booked. Is there an alternative?`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full border border-primary text-primary text-xs font-semibold uppercase tracking-wider hover:bg-surface-container transition-all"
                      >
                        {t('contactWhatsapp')}
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* Slots Buttons */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {currentDayData.slots.length > 0 ? (
                      currentDayData.slots.map((slot) => {
                        const isSlotSelected = selectedSlot === slot;
                        return (
                          <button
                            key={slot}
                            onClick={() => handleSlotSelect(slot)}
                            className={`px-7 py-3 rounded-full font-label-md text-sm transition-all duration-200 ${
                              isSlotSelected
                                ? 'bg-primary text-on-primary shadow-md scale-105 ring-2 ring-primary/20 font-semibold'
                                : 'bg-surface-container-low text-primary border border-outline/15 hover:bg-primary hover:text-on-primary'
                            }`}
                          >
                            {slot}
                          </button>
                        );
                      })
                    ) : (
                      <p className="text-on-surface-variant/60 italic py-2">
                        {t('noSlots')}
                      </p>
                    )}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 border-t border-outline/10 flex flex-col sm:flex-row items-center gap-4">
                    <a
                      href={generateWhatsAppUrl(selectedSlot, currentDayData.date)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex-1 bg-primary text-on-primary px-8 py-4 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-md flex items-center justify-center gap-2 text-center"
                    >
                      <MessageCircle size={18} />
                      <span>{t('confirmBooking')}</span>
                    </a>

                    <button
                      onClick={handleBookDirect}
                      className="w-full sm:w-auto px-8 py-4 rounded-full border border-primary/30 text-primary hover:bg-surface-container font-label-md text-label-md uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                    >
                      <CalendarIcon size={18} />
                      <span>{t('confirmDirect')}</span>
                    </button>
                  </div>
                </>
              )}
            </div>

          </div>
        )}
      </section>

      {/* 3. SESSION PLANS & PACKAGES */}
      <section className="w-full bg-surface-container-low py-section-gap border-t border-outline/10">
        <div className="max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop">
          <div className="text-center mb-16 flex flex-col items-center gap-3">
            <span className="text-label-md font-label-md text-secondary tracking-widest uppercase font-semibold">
              {language === 'he' ? 'מסלולי ליווי' : 'Practice Formats'}
            </span>
            <h2 className="font-display text-headline-md text-on-surface">
              {language === 'he' ? 'מבנה השיעורים והאפשרויות' : 'Session Formats & Packages'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SESSION_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="flex flex-col bg-surface rounded-2xl p-8 shadow-soft border border-outline/5 hover:border-primary/20 transition-all hover:shadow-md text-start"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined text-[24px]">{plan.icon}</span>
                </div>
                
                <h3 className="font-display text-xl font-semibold text-on-surface mb-1">
                  {plan.title[language]}
                </h3>
                <span className="text-xs font-semibold uppercase tracking-wider text-secondary mb-4">
                  {plan.subtitle[language]}
                </span>

                <p className="text-body-md text-on-surface-variant leading-relaxed mb-6 flex-1">
                  {plan.description[language]}
                </p>

                <div className="pt-4 border-t border-outline/10 flex items-center justify-between text-sm text-on-surface-variant">
                  <span className="font-medium">{plan.duration}</span>
                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                      language === 'he'
                        ? `היי אוראל, אשמח לפרטים על ${plan.title.he}`
                        : `Hi Orel, I'd like info regarding ${plan.title.en}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-semibold hover:underline"
                  >
                    {language === 'he' ? 'לפרטים' : 'Details'}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. IMAGE & INSPIRATIONAL QUOTE SECTION */}
      <section className="w-full max-w-container-max mx-auto px-margin-mobile lg:px-margin-desktop py-section-gap">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative w-full h-[450px] lg:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-outline/10">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1Sou36E-cia8d7HPDweXG_1-_zv1Ob1IvUnUuBln8gEDi5fg9rGPST0z438_0RSlP4K1gn3kTmVMdRuoM37WYcKQCYOeAliK-xm5zKV7dtJS4vW6_ZM1Nb7HfudFEow2IGDQ3mHOjLddSGc7T3IjHTzfWGJI4PCvlDBsG3IWFuFcpERB5NN-BZV2wi-D_MwAeAjKj8cfU0tU76ne9l8mzgBtHaTqQkLrVNtk-O4d5MsLRDaOG4pZLpg"
              alt="Serene sunlit studio with single mat"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-4 lg:px-8 text-start">
            <span className="material-symbols-outlined text-secondary text-[36px] mb-6">format_quote</span>
            <blockquote className="font-display text-headline-md text-on-surface leading-relaxed mb-6">
              {t('quoteText')}
            </blockquote>
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-primary"></span>
              <span className="font-display text-base font-semibold text-primary" dir="ltr">
                Orel Tako
              </span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
