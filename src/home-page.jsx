import Maze from './components/maze.jsx';
import styles from './home-page.module.scss';

import Project from './components/project.jsx';

function HomePage() {
  return (
    <>
      <div className={styles['logo-wrap']}>
        <Maze/>
      </div>
      <div className={styles['social-links']}>
        <a href="https://www.linkedin.com/in/dotspencer" target='_blank' rel="noreferrer">LinkedIn</a>
        <a href="https://stackoverflow.com/users/3498950" target='_blank' rel="noreferrer">StackOverflow</a>
      </div>
      <div className={styles['projects-list']}>
        <Project
          title="Drop Solar"
          desc="Price history and alerts for solar equipment"
          url="https://drop.solar/"
          date="Nov, 2025"
          category="Web App"
          tags={['Next.js', 'React']}
        />
        <Project
          title="Solar Specs"
          desc="Solar equipment specs compared"
          url="https://solarspecs.co"
          date="Nov, 2025"
          category="Web App"
          tags={['Next.js', 'React']}
        />
        <Project
          title="Emoji Launch"
          desc="Launch your product with a single emoji"
          url="https://emojilaunch.com"
          date="Oct, 2025"
          category="Web App"
          tags={['Next.js', 'React']}
          v2
        />
        <Project
          title="pzzl_"
          desc=""
          url="https://pzzl.dev"
          date="Oct, 2025"
          category="Web App"
          tags={['Astro', 'React']}
        />
        <Project
          title="Made in USA Solar"
          desc="Directory of American made solar equipment"
          url="https://madeinusa.solar"
          date="Oct, 2025"
          category="Web App"
          tags={['Next.js', 'React']}
        />
        <Project
          title="Acrylic Match"
          desc="Find matching acrylic paints for any hex color"
          url="https://acrylicmatch.com/ff6347"
          date="Oct, 2025"
          category="Web App"
          tags={['Next.js', 'React']}
        />
        <Project
          title="Super Web Tools"
          desc="Free online tools for just about everything"
          url="https://superweb.tools"
          date="Sep, 2025"
          category="Web App"
          tags={['React', 'Astro']}
        />
        <Project
          title="Title Thumb"
          desc="Instant preview for YouTube thumbnails"
          url="https://titlethumb.com"
          date="Jun, 2025"
          category="Web App"
          tags={['React']}
        />
        <Project
          title="Diff Text"
          desc="Dead simple text comparison"
          url="https://difftext.com"
          date="Sep, 2024"
          category="Web App"
          tags={['Node', 'Express', 'React']}
        />
        <Project
          title="Layoff Score"
          desc="Find deals on emergency preparedness related products."
          url="https://layoffscore.com"
          date="Jul, 2023"
          category="Web App"
          tags={['Node', 'Express', 'React']}
          dead
        />
        <Project
          title="prepared.fyi"
          dead
          desc="Find deals on emergency preparedness related products."
          url="https://prepared.fyi/"
          date="Apr, 2023"
          category="Web App"
          tags={['Node', 'Express', 'MySQL', 'React']}
        />
        {/* <Project
          title="Keen Preparedness"
          dead
          desc="Find deals on emergency preparedness related products."
          url="http://keenpreparedness.com"
          date="Apr, 2023"
          category="Etsy Store"
        /> */}
        <Project
          title="Wake Up Time"
          desc="Easy wake up time calculator"
          url="https://wakeupti.me/"
          date="Sep, 2020"
          category="Web App"
          tags={['HTML', 'CSS', 'JS']}
        />
        {/* <Project
          title="Shutterstock"
          url="https://www.shutterstock.com/g/dotspencer"
          date="Jul, 2020"
          category="Photography"
        /> */}
        <Project
          title="Copy Arrow"
          desc="Quickly copy arrow symbols"
          url="https://copyarrow.com/"
          date="Jun, 2020"
          category="Web App"
          tags={['HTML', 'CSS', 'JS']}
        />
        <Project
          title="Emoji Launch"
          dead
          desc="A micro product launch website."
          url="https://emojilaunch.com/"
          date="Apr, 2020"
          category="Web App"
          tags={['Node', 'Express', 'PostgreSQL']}
        />
        <Project
          title="Music Mode for YouTube"
          desc="Listen to music distraction-free on YouTube"
          url="https://chrome.google.com/webstore/detail/music-mode-for-youtube/jeieekjcmkhfffleemgbiooooockfmha"
          date="Dec, 2019"
          emphasis={'3,000+ active users'}
          category="Chrome Extension"
          tags={['HTML', 'CSS', 'JS']}
        />
        <Project
          title="Effortless Reviews"
          dead
          desc="Review generation and customer feedback platform for local businesses."
          url="https://effortlessreviews.com/"
          date="Oct, 2019"
          emphasis={'my largest scale project'}
          category="Web App"
          tags={['Node', 'Express', 'React', 'NGINX', 'Docker', 'MySQL', 'Flyway', 'Stripe']}
        />
        <Project
          title="Email Taco"
          dead
          desc="Dynamic GIF countdown timers for expring offers."
          url="https://emailtaco.com/"
          date="Aug, 2019"
          category="Web App"
          tags={['Node', 'Express']}
        />
        <Project
          title="Words To Time"
          // income="$50/mo"
          desc="Convert word count to reading time"
          url="https://wordstotime.com/"
          date="Feb, 2019"
          emphasis={'1.1 million pageviews!'}
          category="Web App"
          tags={['HTML', 'CSS', 'JS']}
        />
        <Project
          title="Keen HTML"
          dead
          desc="Interactive lessons to learn HTML."
          url="https://keenhtml.com/"
          date="Aug, 2018"
          category="Web App"
          tags={['Node', 'Express', 'React']}
        />
        <Project
          title="Taken Taken"
          dead
          desc="Simple domain name availability checker."
          url="https://www.takentaken.com/"
          date="Feb, 2017"
          category="Web App"
          tags={['Node', 'Express']}
        />
        <Project
          title="Face Quiz"
          dead
          desc="Create your own quizzes to help learn names and faces."
          url="https://facequiz.org/"
          date="Nov, 2016"
          category="Web App"
          tags={['Node', 'Express', 'React']}
        />
      </div>
    </>
  );
}

export default HomePage;
