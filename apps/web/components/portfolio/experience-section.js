import { experienceCards } from './data';

export default function ExperienceSection() {
  return (
    <div className="sec">
      <div className="sec-eyebrow">experience</div>

      <div className="exp-scroll">
        {experienceCards.map((card, index) => {
          if (card.type === 'open-role') {
            return (
              <div className="exp-card exp-card-open" key={`exp-open-${index}`}>
                <div className="exp-card-open-inner">
                  <div className="exp-card-open-title">{card.title}</div>
                  <div className="exp-card-open-subtitle">{card.subtitle}</div>
                  <div className="exp-card-open-contact">{card.contact}</div>
                </div>
              </div>
            );
          }

          return (
            <div className="exp-card" key={card.number}>
              <div className="exp-num">{card.number} —</div>
              <div className="exp-title">{card.title}</div>
              <div className="exp-co">{card.company}</div>
              <div className="exp-date">{card.date}</div>
              <div className="exp-tagrow">
                {card.tags.map((tag) => (
                  <span className="etag" key={`${card.number}-${tag}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
