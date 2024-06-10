import Styles from '../AboutPageContent/AboutPageContent.module.css';

export default function AboutPageContent() {
    return (
      <section className={Styles.contentContainer}>
        <div className={Styles.content}>
          <h1>about me</h1>
          <p>
            I’m Siiri, the one behind the wheel! I’m originally from Finland,
            but have lived in many countries the past 10 years. The ceramics
            story begins in Barcelona, where I decided to try  ceramics for the
            first time. I signed up for classes, where I practiced throwing
            pieces on the wheel, and building objects by hand.</p>
            <p>Soon I realized
            it was not enough to go to classes once a week, and I decided to
            rent a co-working space in the studio I took classes at. I had free
            access, and became a part of the ceramic artist community.</p> 
            <p>I experimented with glazes, practiced my techniques and slowly
            developed my skills as a ceramic artist.  We started organising
            pop-up shops where we sold ceramics made by artists in our studio,
            and it was a great motivator to keep learning and producing better
            pieces.  After a while, I started teaching ceramics to my friends
            that wanted to take classes, and slowly ended up teaching people I
            didn’t know as well. I ended up doing ceramics full time for a year,
            even teaching some classes at the studio, before moving to Denmark.
          </p>
        </div>
      </section>
    );
    }