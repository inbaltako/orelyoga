import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SESSION_PLANS, WHATSAPP_PHONE } from '../data/content';
import { CheckCircle2, AlertCircle, ChevronLeft, ChevronRight, Calendar as CalendarIcon, MessageCircle, Clock } from 'lucide-react';

const HEBREW_MONTHS = [
  'ינואר', 'פברואר', 'מרץ', 'אפריל', 'מאי', 'יוני',
  'יולי', 'אוגוסט', 'ספטמבר', 'אוקטובר', 'נובמבר', 'דצמבר'
];

const ENGLISH_MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const HEBREW_WEEKDAYS = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שישי', 'שבת'];
const ENGLISH_WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export const PrivateSessions: React.FC = () => {
  const { t, language, isRtl } = useLanguage();
  
  // Real Date baseline
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  // Limit booking to 2 months in advance
  const maxBookingDate = useMemo(() => {
    const d = new Date(today);
    d.setMonth(d.getMonth() + 2);
    return d;
  }, [today]);

  // Active viewing month offset (0 = current month, 1 = next month, 2 = 2 months ahead)
  const [monthOffset, setMonthOffset] = useState<number>(0);

  // Selected date state (defaults to today)
  const [selectedDate, setSelectedDate] = useState<Date>(() => new Date(today));
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30');
  const [bookingStatus, setBookingStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Compute viewing year & month based on offset
  const viewingDate = useMemo(() => {
    const d = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
    return d;
  }, [today, monthOffset]);

  const viewYear = viewingDate.getFullYear();
  const viewMonth = viewingDate.getMonth();

  // Calendar metrics for the viewing month
  const daysInMonth = useMemo(() => new Date(viewYear, viewMonth + 1, 0).getDate(), [viewYear, viewMonth]);
  const firstDayOfWeek = useMemo(() => new Date(viewYear, viewMonth, 1).getDay(), [viewYear, viewMonth]); // 0=Sun, 6=Sat

  // Format month and year label
  const monthLabel = useMemo(() => {
    if (language === 'he') {
      return `${HEBREW_MONTHS[viewMonth]} ${viewYear}`;
    }
    return `${ENGLISH_MONTHS[viewMonth]} ${viewYear}`;
  }, [viewMonth, viewYear, language]);

  // Format selected date for display
  const selectedDateFormatted = useMemo(() => {
    const day = selectedDate.getDate();
    const month = selectedDate.getMonth();
    const year = selectedDate.getFullYear();
    const dayOfWeek = selectedDate.getDay();

    if (language === 'he') {
      return `יום ${HEBREW_WEEKDAYS[dayOfWeek]}, ${day} ב${HEBREW_MONTHS[month]} ${year}`;
    }
    return `${ENGLISH_WEEKDAYS[dayOfWeek]}, ${ENGLISH_MONTHS[month]} ${day}, ${year}`;
  }, [selectedDate, language]);

  const selectedShortDate = useMemo(() => {
    const day = String(selectedDate.getDate()).padStart(2, '0');
    const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
    return `${day}.${month}`;
  }, [selectedDate]);

  // Dynamic slots generator based on weekday
  const availableSlotsForSelectedDate = useMemo(() => {
    const dayOfWeek = selectedDate.getDay();
    if (dayOfWeek === 5) {
      // Friday
      return ['08:30', '10:00', '11:30'];
    }
    if (dayOfWeek === 6) {
      // Saturday
      return ['09:00', '16:30', '18:00'];
    }
    // Sunday - Thursday
    return ['08:00', '10:30', '17:00', '18:30'];
  }, [selectedDate]);

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

  const generateWhatsAppUrl = (slot: string, dateStr: string) => {
    const message = language === 'he'
      ? `היי אוראל, אשמח לתאם שיעור פרטי בתאריך ${dateStr} בשעה ${slot}.`
      : `Hello Orel, I would like to reserve a private yoga session on ${dateStr} at ${slot}.`;
    return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
  };

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
            
            <div className="bg-surface-container-low p-6 rounded-2xl mb-8 inline-block text-start border border-outline/10 w-full max-w-md">
              <div className="flex items-center gap-3 text-on-surface font-semibold mb-2">
                <CalendarIcon size={20} className="text-primary shrink-0" />
                <span>
                  {language === 'he' ? 'מועד השיעור שנקבע:' : 'Reserved Session:'}{' '}
                  <strong className="text-secondary">{selectedShortDate}</strong> בשעה{' '}
                  <strong className="text-secondary">{selectedSlot}</strong>
                </span>
              </div>
              <p className="text-xs text-on-surface-variant/80 mt-1 mb-2">
                {selectedDateFormatted}
              </p>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {t('bookingSuccessDesc')}
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={generateWhatsAppUrl(selectedSlot, selectedDateFormatted)}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all flex items-center gap-2 shadow-sm"
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
                <p className="text-body-md text-secondary font-semibold">
                  {monthLabel}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary-container border border-secondary/40"></span>
                  <span className="font-label-md text-xs sm:text-sm text-on-surface-variant uppercase tracking-widest">
                    {t('availableSlots')}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => setMonthOffset((prev) => Math.max(0, prev - 1))}
                    disabled={monthOffset === 0}
                    className="p-2.5 rounded-full border border-outline/15 bg-surface hover:bg-surface-container-high disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
                    aria-label="Previous month"
                  >
                    <ChevronRight size={20} className={isRtl ? '' : 'rotate-180'} />
                  </button>
                  <button
                    onClick={() => setMonthOffset((prev) => Math.min(2, prev + 1))}
                    disabled={monthOffset >= 2}
                    className="p-2.5 rounded-full border border-outline/15 bg-surface hover:bg-surface-container-high disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-sm"
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
                {/* Leading blanks for the first day of the week */}
                {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                  <div key={`blank-${i}`} className="aspect-square p-2 opacity-15 bg-surface-container-low/40 rounded-xl" />
                ))}

                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((dayNum) => {
                  const currentDayDate = new Date(viewYear, viewMonth, dayNum);
                  currentDayDate.setHours(0, 0, 0, 0);

                  const isPast = currentDayDate < today;
                  const isBeyondLimit = currentDayDate > maxBookingDate;
                  const isBookable = !isPast && !isBeyondLimit;
                  
                  const isSelected =
                    selectedDate.getFullYear() === viewYear &&
                    selectedDate.getMonth() === viewMonth &&
                    selectedDate.getDate() === dayNum;

                  const isCurrentDay = currentDayDate.getTime() === today.getTime();

                  return (
                    <button
                      key={dayNum}
                      disabled={!isBookable}
                      onClick={() => {
                        if (isBookable) {
                          setSelectedDate(new Date(viewYear, viewMonth, dayNum));
                          setBookingStatus('idle');
                        }
                      }}
                      className={`aspect-square p-2 sm:p-3 flex flex-col items-center justify-between rounded-xl transition-all relative ${
                        isSelected
                          ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm ring-2 ring-secondary/40 scale-[1.03]'
                          : isBookable
                          ? 'bg-surface hover:bg-surface-container-low cursor-pointer border border-outline/5 hover:border-primary/20 text-on-surface'
                          : 'bg-surface-container-lowest/50 text-on-surface-variant/25 cursor-not-allowed opacity-40'
                      }`}
                    >
                      <div className="flex items-center gap-1">
                        <span className="text-xs sm:text-sm">{dayNum}</span>
                        {isCurrentDay && (
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" title={language === 'he' ? 'היום' : 'Today'} />
                        )}
                      </div>
                      
                      {isBookable && (
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
                    {t('availableSlotsFor')} <span className="text-secondary font-bold">{selectedShortDate}</span>
                  </h3>
                  <p className="text-sm text-on-surface-variant mt-0.5">
                    {selectedDateFormatted}
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
                        href={generateWhatsAppUrl(selectedSlot, selectedDateFormatted)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2 rounded-full border border-primary/30 text-primary text-xs font-semibold hover:bg-surface-container transition-all"
                      >
                        {language === 'he' ? 'הצטרף לרשימת המתנה בוואטסאפ' : 'Join WhatsApp Waitlist'}
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  {/* Slots Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
                    {availableSlotsForSelectedDate.map((slot) => {
                      const isSlotSelected = selectedSlot === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => handleSlotSelect(slot)}
                          className={`py-3 px-4 rounded-xl border font-medium text-sm transition-all flex items-center justify-center gap-2 ${
                            isSlotSelected
                              ? 'bg-primary text-on-primary border-primary shadow-sm ring-2 ring-primary/20 scale-[1.02]'
                              : 'bg-surface border-outline/15 text-on-surface hover:border-primary/40 hover:bg-surface-container-low'
                          }`}
                        >
                          <Clock size={15} className={isSlotSelected ? 'text-on-primary' : 'text-secondary'} />
                          <span>{slot}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Actions & WhatsApp CTA */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-outline/10">
                    <button
                      onClick={handleBookDirect}
                      className="w-full sm:w-auto bg-primary text-on-primary px-8 py-3.5 rounded-full font-label-md text-label-md uppercase tracking-wider hover:bg-primary-container transition-all shadow-sm hover:shadow active:scale-95 text-center flex items-center justify-center gap-2"
                    >
                      <span>{t('confirmBookingBtn')}</span>
                      <span className="opacity-80">({selectedSlot})</span>
                    </button>

                    <a
                      href={generateWhatsAppUrl(selectedSlot, selectedDateFormatted)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto bg-surface border border-outline/20 text-on-surface hover:text-primary hover:border-primary/40 px-6 py-3.5 rounded-full font-label-md text-label-md transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <MessageCircle size={18} className="text-secondary" />
                      <span>{t('bookViaWhatsapp')}</span>
                    </a>
                  </div>
                </div>
              )}

            </div>
          </div>
        )}
      </section>

      {/* 3. SESSION PLANS & PACKAGES */}
      <section className="bg-surface-container-low py-section-gap px-margin-mobile lg:px-margin-desktop border-t border-outline/10">
        <div className="max-w-container-max mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-label-md text-secondary font-label-md tracking-widest uppercase font-semibold mb-2 block">
              {t('pricingTag')}
            </span>
            <h2 className="font-display text-display-lg text-on-surface mb-4">
              {t('pricingTitle')}
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              {t('pricingSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SESSION_PLANS.map((plan) => (
              <div
                key={plan.id}
                className="bg-surface rounded-3xl p-8 flex flex-col justify-between border border-outline/10 shadow-soft hover:shadow-md transition-all duration-300 relative text-start"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-symbols-outlined text-[26px]">{plan.icon}</span>
                  </div>

                  <h3 className="font-display text-2xl font-semibold text-on-surface mb-1">
                    {plan.title[language]}
                  </h3>
                  
                  {plan.subtitle && (
                    <p className="text-xs text-secondary font-semibold uppercase tracking-wider mb-4">
                      {plan.subtitle[language]}
                    </p>
                  )}

                  <p className="text-body-md text-on-surface-variant leading-relaxed mb-6">
                    {plan.description[language]}
                  </p>
                </div>

                <div className="pt-6 border-t border-outline/10 flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium">
                    <span className="material-symbols-outlined text-[18px] text-secondary">schedule</span>
                    <span>{plan.duration}</span>
                  </div>

                  <a
                    href={`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
                      language === 'he'
                        ? `היי אוראל, אשמח לפרטים נוספים על ${plan.title.he}.`
                        : `Hello Orel, I'd like more details on ${plan.title.en}.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-full bg-surface-container-high text-on-surface hover:bg-primary hover:text-on-primary font-label-md text-xs uppercase tracking-wider text-center transition-all shadow-sm"
                  >
                    {t('choosePlan')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
