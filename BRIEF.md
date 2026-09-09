# Brief: HeresThe.News — First Three Screens

## Product
HeresThe.News is a calm daily news brief published every morning. What happened, every story checked
against multiple sources, no ads, no tracking, finished when you are. This mock-up adds the three
screens a **first-time visitor** sees so the site's overarching capability is signified before the
feed starts.

## Concept (lead with the value)
| | |
|---|---|
| **Value** | **Finished, and certain.** A clear end to the news, and confidence that every story was validated across multiple sources. |
| **Need** | Every morning, a phone reader who wants to know what happened has to scroll past ads, pop-ups, and slanted headlines with no sense of when they are done, so they either skim without trusting anything or give up. |
| **Persona** | Reads news once a day, in the morning, on a phone, in a five to ten minute window; has quit at least one news app because it never ended. |
| **Capability** | Get a daily brief sized to the topics and time you choose. |

## The affordance sentence
The dominant thing a first-time visitor must encounter on screen 1, before any story:

> **Today's news, sized to your morning. Every story checked against multiple sources. Then you're done.**

## The three screens
| # | Screen | Single job | Design question it answers |
|---|---|---|---|
| 1 | **Start** (landing) | Signify the overarching affordance and the one primary action ("Build my brief"). Returning readers get a demoted exit to today's news. | Does a first-time visitor understand what this site does and what to tap, before reading anything else? |
| 2 | **Pick your topics** | Let the reader choose what their brief covers. Continue is disabled until at least one topic is picked (signified constraint). Just-in-time reassurance: saved on this device, no account, change anytime. | Do readers recognise the topic list as *their* control over the brief, and does the disabled Continue read as a constraint rather than a bug? |
| 3 | **Your brief** | Let the reader pick how much time they have (each option shows its cost in minutes), then show the resulting brief with a visible end: progress toward done, source count on every story, and an explicit "You're done for today." | Does the sized brief with a visible end communicate *finished* and *certain*, and does the source count on each story signal multi-source validation without explanation? |

Every screen has an obvious way back to the Start screen.

## Preferences
- Look like the existing site: dark paper `#151815`, cards `#1C201C`, ink `#E6E9E4`, mint green accent `#43BFA0`, serif headlines, mono labels, small caps eyebrows.
- Mobile-first; it must read well on a phone.
- Tone: calm, plain, no exclamation marks, no marketing adjectives.
- Plain HTML/CSS/JS, no frameworks, no build step. Three files, one stylesheet.
- No login, no settings page, no fourth screen.
- Signifiers succinct. Avoid interference on screen 1: nothing above the fold except the masthead, the affordance sentence, the primary button, and the demoted returning-reader link.
