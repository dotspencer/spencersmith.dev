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
          title="Diff Text"
          desc="Compare two blocks of text and see the differences."
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
        />
        <Project
          title="prepared.fyi"
          desc="Find deals on emergency preparedness related products."
          url="https://prepared.fyi/"
          date="Apr, 2023"
          category="Web App"
          tags={['Node', 'Express', 'MySQL', 'React']}
        />
        <Project
          dead
          title="Keen Preparedness"
          desc="Find deals on emergency preparedness related products."
          url="http://keenpreparedness.com"
          date="Apr, 2023"
          category="Etsy Store"
        />
        <Project
          title="Wake Up Time"
          desc="Calculate optimal times to wake up based on your body's sleep cycles."
          url="https://wakeupti.me/"
          date="Sep, 2020"
          category="Web App"
          tags={['HTML', 'CSS', 'JS']}
        />
        <Project
          title="Shutterstock"
          url="https://www.shutterstock.com/g/dotspencer"
          date="Jul, 2020"
          category="Photography"
        />
        <Project
          title="Copy Arrow"
          desc="Quick access to common arrow symbols for copy and pasting."
          url="https://copyarrow.com/"
          date="Jun, 2020"
          category="Web App"
          tags={['HTML', 'CSS', 'JS']}
        />
        <Project
          dead
          title="Emoji Launch"
          desc="A micro product launch website."
          url="https://emojilaunch.com/"
          date="Apr, 2020"
          category="Web App"
          tags={['Node', 'Express', 'PostgreSQL']}
        />
        <Project
          title="Music Mode for YouTube"
          desc="A distraction-free way to listen to music on YouTube."
          url="https://chrome.google.com/webstore/detail/music-mode-for-youtube/jeieekjcmkhfffleemgbiooooockfmha"
          date="Dec, 2019"
          emphasis={'3,000+ active users'}
          category="Chrome Extension"
          tags={['HTML', 'CSS', 'JS']}
        />
        <Project
          title="Effortless Reviews"
          desc="Review generation and customer feedback platform for local businesses."
          url="https://effortlessreviews.com/"
          date="Oct, 2019"
          emphasis={'my largest scale project'}
          category="Web App"
          tags={['Node', 'Express', 'React', 'NGINX', 'Docker', 'MySQL', 'Flyway', 'Stripe']}
        />
        <Project
          dead
          title="Email Taco"
          desc="Dynamic GIF countdown timers for expring offers."
          url="https://emailtaco.com/"
          date="Aug, 2019"
          category="Web App"
          tags={['Node', 'Express']}
        />
        <Project
          title="Words To Time"
          income="$50/mo"
          desc="Convert text to how many minutes it will take to read aloud."
          url="https://wordstotime.com/"
          date="Feb, 2019"
          emphasis={'1.1 million pageviews!'}
          category="Web App"
          tags={['HTML', 'CSS', 'JS']}
        />
        <Project
          dead
          title="Keen HTML"
          desc="Interactive lessons to learn HTML."
          url="https://keenhtml.com/"
          date="Aug, 2018"
          category="Web App"
          tags={['Node', 'Express', 'React']}
        />
        <Project
          dead
          title="Taken Taken"
          desc="Simple domain name availability checker."
          url="https://www.takentaken.com/"
          date="Feb, 2017"
          category="Web App"
          tags={['Node', 'Express']}
        />
        <Project
          dead
          title="Face Quiz"
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
