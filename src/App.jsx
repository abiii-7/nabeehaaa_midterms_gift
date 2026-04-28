import React, { useEffect, useMemo, useState } from "react";

const NABEEHA_LAST_EXAM_DATE = "2026-05-05T23:59:59+08:00";

const letterPlaceholders = [
  `Ik this is probably too late and youre exams already almost halfway done😭. But you soooooo got this, I've seen how locke din you have been this past few months. How you started caring so much about youre future and studies its so attractive and such a good characteristic trait. I can see how much more mature your're becoming and i couldn't be more porud of you. You're gona do so much great things in life i can already tell. Just a few more days yeah lesbeean. Think about all the pan's you can be with after youre done😛. Mwahhh i love you pretty girl.`,
  `You're not peeking into the next letter are you???🤨🤨🤨 Anywyas, 1 day gone a few more to go!!! Im sure youve been killing eveyr single exam. And ik we haven't been talking much lately, right after our recent fight also but i hope you know, no matter how much we fight Ill never stop loving and adoring you. You'll always be the first person i go to when i have a bad day to cheer me up. You'll be the only person who can understand me and make me feel better effortlessly. You're such a lively and innocent soul, youre atmosphere just lights any day up no matter how bad it gets, and i cant help but going back for more. Please never change. You're everything thats right with the world.`,
  `WOOHOOOOOO 5 more days to go. Youve been crushingggg it lately. Lets go nabeeha thats my girl. Just a few more days and youll be free forever(not rlly but ykwim). But seriously though remember to take breaks often, dont push yourself to breaking point and burnout. But that doesn't mean you should give up when it feels hard. You have to learn to balance hardwork and discipline with a healthy environment. You got this bbg mwahhhh i love you`,
  `NICEEEEEEEEE JOB REVISING TODAYYYY. INCASE NO ONE TOLD YOU TODAY, YOU WORKED SOOOOOO HARD AND IM SOOOOOO PROUD OF YOU. Dont let anyone critiques and words get to you. People always have something to say. Let it be strangers, friends or even youre family. But what matters is you dotn give up on yourself and thta little girl with aspirations and dreams, whos still inside you and rooting for you😍😍(awhhhh baby bee rooting for u is so cute). Anyways, if the world ever feels heavy you can always take a break and come to me, the secret word is pansexual😛. But seriously though dont let anyone tell you what you can or can't do, cus its not up to them. Its up to you. And ill always be there to support you no matter what decisions u end up taking. MWAH`,
  `GNGGGGGG YOURE ALMSOT THERE LIKE YOU CAN TASTE THE END NEARING YAYAYAYAYAY LOCKKKKKK IN THES EFINAL FEW DAYS. CUT DOWN ON SCREEN TIME, AND PROCRATSINATING. YOU WANT TO GET INTO STEM RIGHT, SO PROVE IT TO YOURSELF NOT ANYONE ELSE, TAT U CAN ACTUALLY HANDLE IT AND DO IT. MAKE ME PROUD MWAHHHHHHHHHHH CUTIE I LOVE YOU`,
  `Youre so close and like its not even funny. Youve been absolutely demolishing these exams studying so hard for it. At this rate youre gona be the smartest in youre family ,get a shcolarhsip to wtv university you want, and live life freely and do wtv you want😍😍😍. But one thing though, no matter how many new people you meet, how many friends or enemies you make. Never forget who you are. Never change yourself just to fit in with others. Ik how hard it is but you shouldn't try to change a piece of yourself to fit in. Youre an incredibly amazing, kind funny and gentle soul. Anyone in their right minds would love you, if you ever think you dotn fit in, its just not meant to be. God is trying to protect you from people who dont actually deserve you or would ruin you. So stop forcing things, life works in mysterious wyas and in the end it will all work out okay cutie? I love you. Everythings gona be okay.`,
  `YAHOOOOOOOOOOOO JSUT 1 MORE DAY. YOUVE BEEN WORKING SOO HARD IM SO PROUD OF YOU HHSHSHEHEHHEE, GO ON AND STUDY IK YOURE TRYNA PEEK AT THIS LETTER OR TRYNA PROCRASTINATE AND JST REMEBERED ITS DAY 7. JUST ONE FINAL STRETCH AND AFTER THTA WE CAN TALK NORMALLY, PLAY PLATO, MAYBE CALL FOR AWHILE SO I CAN HEAR YOURE PRETTY VOICE SHHHEHEHS. flip you im getting shy wiritng this. YOU GOTTTT THIS CUTIE I BELIEVE IN YOU.`,
  `OMGGGGGGGGGGG YOU DID IT. YOU FINISHED THE EXAMS SHSHHEHEHESHSH LATS DAY TODAY OMDDDD YOURE SO GOOD LEH. YOURE AMAZING. YOURE GORGEOUS. YURE SO TALENTED AND PRETTY. YOURE SO SHORT. YOURE SO BEUATIFUL. I LOVE YPOU OMDDDD. IM SO PROUD OF YOU SHSHEHEHSHES. OKAY BUT SERIOSU TALK THO. No matter what grade u get(ik youre gona do amazing), THIS EXAM STILL ISNT THE END, IF U DID BAD OR DIDNT SCORE AS WELL AS U THOUGHT YOU WOULD DONT BE DISHEARTNENED, That just means you not what youre weak points are and now u can lock in on those toc rush the next exam. AND IF YOU DID WELL DONT GET COCKY AND NOT STUDY AS HARD THE NEXT EXAM. COMFORT KILLS DREAMS. IF ANYTH YOU NEED LOCK IN HARDER TO MAINTAIN YOURE GOOD GRADES. BUT ANYHOO YOU DIDDDD ITTTTTTTTTT WOOOOOOOOOOOHOOOOOOOOOOOOOOO, GO DO UR PILAETS AND EVEYRTHIGN SHOWER AND TELL EM ALL ABOUT IT. SHSHEHEHHEE MY PRETTY GIRL IM SOSOSOS PROUD OF YOU`
];

function getCountdownParts(targetDate) {
  const distance = Math.max(0, targetDate.getTime() - Date.now());
  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.ceil(distance / 86400000);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return {
    distance,
    days,
    hours,
    minutes,
    seconds,
    isComplete: distance === 0
  };
}

function BabyBreathSprig({ path, blooms, colors, delay = 0 }) {
  return (
    <g className="bloom-pop" style={{ animationDelay: `${delay}ms` }}>
      <path className="sprig-stem" d={path} />
      {blooms.map(([cx, cy, radius, colorIndex], index) => (
        <g className="tiny-bloom" key={`${cx}-${cy}-${index}`}>
          <path className="sprig-branch" d={`M230 356 C${(230 + cx) / 2} ${(356 + cy) / 2 + 24} ${cx - 4} ${cy + 12} ${cx} ${cy}`} />
          <circle className="bloom-halo" cx={cx} cy={cy} r={radius + 3} fill="#fffaf5" fillOpacity="0.72" />
          <circle className="petal-one" cx={cx - radius * 0.55} cy={cy - 1} r={radius * 0.58} fill={colors[colorIndex % colors.length]} />
          <circle className="petal-two" cx={cx + radius * 0.45} cy={cy - 1} r={radius * 0.54} fill={colors[(colorIndex + 1) % colors.length]} />
          <circle className="petal-three" cx={cx} cy={cy + radius * 0.48} r={radius * 0.56} fill={colors[(colorIndex + 2) % colors.length]} />
          <circle className="bloom-center" cx={cx} cy={cy} r={radius * 0.34} fill="#f7d59a" />
          <circle className="bloom-outline" cx={cx} cy={cy} r={radius + 1.6} fill="none" stroke="#3f5b4f" strokeWidth="1.45" />
        </g>
      ))}
    </g>
  );
}

function FlowerBloom() {
  const colors = ["#ffffff", "#ffd6e2", "#d9eaff", "#ead8c4", "#d9d0ff"];
  const sprigs = [
    {
      path: "M226 384 C206 302 172 215 102 112",
      blooms: [
        [105, 108, 8, 0],
        [86, 128, 6, 1],
        [126, 130, 7, 2],
        [65, 156, 6, 0],
        [142, 158, 6, 3],
        [108, 174, 7, 4],
        [76, 196, 5, 2],
        [150, 202, 6, 0],
        [112, 220, 6, 1]
      ]
    },
    {
      path: "M230 384 C220 286 220 196 222 82",
      blooms: [
        [222, 78, 7, 0],
        [196, 98, 6, 3],
        [246, 105, 6, 1],
        [216, 128, 7, 2],
        [188, 154, 6, 0],
        [252, 158, 6, 4],
        [224, 184, 7, 1],
        [196, 210, 5, 2],
        [250, 220, 6, 0]
      ]
    },
    {
      path: "M233 384 C250 292 282 210 352 114",
      blooms: [
        [352, 110, 7, 0],
        [326, 132, 6, 1],
        [376, 138, 6, 2],
        [306, 166, 7, 4],
        [360, 170, 6, 0],
        [330, 198, 6, 3],
        [388, 206, 5, 1],
        [306, 228, 6, 2],
        [358, 236, 7, 0]
      ]
    },
    {
      path: "M226 384 C188 330 132 280 54 240",
      blooms: [
        [54, 238, 6, 0],
        [82, 236, 6, 2],
        [104, 254, 7, 1],
        [124, 278, 6, 3],
        [150, 294, 7, 0],
        [176, 312, 5, 4]
      ]
    },
    {
      path: "M235 384 C276 326 336 280 414 242",
      blooms: [
        [414, 240, 6, 0],
        [386, 240, 6, 1],
        [364, 258, 7, 2],
        [338, 280, 6, 4],
        [314, 300, 7, 0],
        [288, 320, 5, 3]
      ]
    }
  ];

  return (
    <div className="flower-stage is-blooming">
      <svg className="baby-breath-bouquet" viewBox="0 0 460 460" role="img" aria-label="baby's breath bouquet with ribbon">
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          {sprigs.map((sprig, index) => (
            <BabyBreathSprig {...sprig} colors={colors} delay={index * 120} key={sprig.path} />
          ))}
        </g>
        <g className="bouquet-wrap">
          <path d="M194 342 C210 332 246 332 266 344 C250 354 214 354 194 342Z" fill="#f1dba4" stroke="#a66f7e" strokeWidth="2" />
          <path d="M228 344 C198 360 174 384 148 397 C142 398 139 392 144 388 C172 370 193 348 224 340Z" fill="#fff0b8" stroke="#d2a76f" strokeWidth="2" />
          <path d="M232 344 C256 365 278 386 306 398 C312 398 315 392 310 388 C282 368 260 350 236 340Z" fill="#fff0b8" stroke="#d2a76f" strokeWidth="2" />
          <path d="M213 342 C220 352 239 354 248 343" fill="none" stroke="#a66f7e" strokeWidth="3" />
        </g>
      </svg>
      <p className="absolute bottom-3 right-6 rotate-[-6deg] font-hand text-lg font-bold text-pine">
        Pretty flowers, for a pretty lady
      </p>
    </div>
  );
}

function CuteSticker({ className = "", label = "study buddy" }) {
  return (
    <div className={`cute-sticker ${className}`} aria-label={label} role="img">
      <span className="ear left" />
      <span className="ear right" />
      <span className="face">
        <span className="eye left" />
        <span className="eye right" />
        <span className="smile" />
        <span className="blush left" />
        <span className="blush right" />
      </span>
      <span className="bow" />
    </div>
  );
}

function AnimatedBackdrop() {
  return (
    <div className="motion-backdrop" aria-hidden="true">
      {Array.from({ length: 18 }, (_, index) => (
        <span
          key={index}
          className="floating-petal"
          style={{
            left: `${(index * 17) % 100}%`,
            animationDelay: `${index * 0.7}s`,
            animationDuration: `${8 + (index % 6)}s`
          }}
        />
      ))}
      <div className="drifting-ribbon one" />
      <div className="drifting-ribbon two" />
    </div>
  );
}

function Countdown({ parts }) {
  const countdownItems = [
    ["days", parts.days],
    ["hours", parts.hours],
    ["mins", parts.minutes],
    ["secs", parts.seconds]
  ];

  return (
    <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
      <div className="clean-panel">
        <p className="font-hand text-2xl font-black text-pine">countdown to freedom</p>
        <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
          {parts.isComplete ? "Midterms are over, Nabeeha." : "Keep going!"}
        </h2>
        <p className="mt-5 text-lg leading-8">
          {parts.isComplete
            ? "The timer hit zero, so the flowers get their full bloom moment."
            : "Every second here is one second closer to rest, snacks, and not thinking about exams for a while."}
        </p>
        <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {countdownItems.map(([label, value]) => (
            <div className="spring-tile" key={label}>
              <span>{String(value).padStart(2, "0")}</span>
              <small>{label}</small>
            </div>
          ))}
        </div>
      </div>
      <FlowerBloom />
    </div>
  );
}

function useCountdown(targetDate) {
  const [parts, setParts] = useState(() => getCountdownParts(targetDate));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setParts(getCountdownParts(targetDate));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [targetDate]);

  return parts;
}

function EnvelopeLetter({ letter }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button
      className={`envelope-card ${isOpen ? "is-open" : ""}`}
      type="button"
      onClick={() => setIsOpen((value) => !value)}
      aria-expanded={isOpen}
    >
      <span className="letter-paper">
        <span className="font-hand text-lg font-black text-pine">letter {letter.day}</span>
        <span className="mt-3 block text-xl font-black leading-tight">{letter.text}</span>
        <span className="mt-4 block text-sm font-bold text-ink/45">tap to close</span>
      </span>
      <span className="envelope-body">
        <span className="envelope-flap" />
        <span className="envelope-pocket left" />
        <span className="envelope-pocket right" />
        <span className="envelope-ribbon horizontal" />
        <span className="envelope-ribbon vertical" />
        <span className="envelope-bow">
          <span />
          <span />
        </span>
        <span className="envelope-label font-hand">letter {letter.day}</span>
      </span>
    </button>
  );
}

function Letters({ daysLeft }) {
  const letterCount = Math.max(1, daysLeft);
  const letters = Array.from({ length: letterCount }, (_, index) => ({
    day: index + 1,
    text: letterPlaceholders[index % letterPlaceholders.length]
  }));

  return (
    <div className="mx-auto max-w-6xl">
      <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="font-hand text-2xl font-black text-pine">letters until the last paper</p>
          <h2 className="mt-2 text-4xl font-black sm:text-5xl">{letterCount} little notes</h2>
        </div>
        <p className="max-w-md text-lg leading-8 text-ink/70">
          Open each letter each day. Don&apos;t try to cheat and peek🤨🙄. I can tell.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {letters.map((letter) => (
          <EnvelopeLetter letter={letter} key={letter.day} />
        ))}
      </div>
    </div>
  );
}

function App() {
  const targetDate = useMemo(() => new Date(NABEEHA_LAST_EXAM_DATE), []);
  const countdown = useCountdown(targetDate);

  return (
    <main className="min-h-screen overflow-hidden bg-paper text-ink">
      <AnimatedBackdrop />
      <header className="sticky top-0 z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-5 backdrop-blur-sm sm:px-8">
        <a className="logo-mark font-hand text-3xl font-black text-pine" href="#home" aria-label="Bloom Through Midterms">
          BTM
          <span>for nabeeha</span>
        </a>
        <nav className="hidden rounded-full border border-pine/10 bg-sage/75 p-1 text-sm font-bold text-pine shadow-sm sm:flex">
          {[
            ["Home", "#home"],
            ["Countdown", "#countdown"],
            ["Letters", "#letters"]
          ].map(([label, href]) => (
            <a className="rounded-full px-5 py-2 transition hover:bg-paper/80" href={href} key={label}>
              {label}
            </a>
          ))}
        </nav>
      </header>

      <section
        id="home"
        className="relative z-10 mx-auto grid min-h-[calc(100vh-88px)] w-full max-w-7xl items-center gap-10 px-5 pb-10 pt-3 sm:px-8 lg:grid-cols-[0.96fr_1.04fr]"
      >
        <div className="space-y-7">
          <p className="hand-note rotate-[-2deg] text-xl font-bold text-pine">welcome home, nabeeha</p>
          <div>
            <h1 className="max-w-3xl font-poster text-[4.15rem] leading-[0.88] tracking-normal text-ink sm:text-[5.8rem] lg:text-[7rem]">
              You&apos;re almost
              <span className="outlined-word block text-paper"> there.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 sm:text-xl">
              You&apos;ve been working soooo hard and I&apos;ll always be so proud of you no matter what. Just a few more
              days and you&apos;ll be free to do anything you want! 😍
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <a className="sketch-button bg-pine text-paper" href="#countdown">
              see countdown
            </a>
            <a className="sketch-button border border-pine bg-paper text-pine" href="#letters">
              open letters
            </a>
            <div className="mini-status">
              <span>{countdown.days}</span>
              <p>days of notes waiting</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <FlowerBloom />
          <CuteSticker className="absolute left-2 top-4" />
          <CuteSticker className="absolute bottom-8 right-2 scale-90 rotate-6" label="flower buddy" />
          <div className="absolute right-0 top-3 hidden rotate-[-4deg] text-right font-hand text-xl font-black text-pine lg:block">
            <p>entrance</p>
            <p>garden</p>
            <span className="text-3xl">v</span>
          </div>
        </div>
      </section>

      <section className="relative z-10 border-y border-pine/10 bg-white/45 px-5 py-14 sm:px-8" id="countdown">
        <div className="mx-auto max-w-6xl">
          <Countdown parts={countdown} />
        </div>
      </section>

      <section className="relative z-10 px-5 py-14 sm:px-8" id="letters">
        <Letters daysLeft={countdown.days} />
      </section>
    </main>
  );
}

export default App;
